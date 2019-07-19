<template>
  <div class="side-nav">
    <div class="social">
      <ul class="social__list">
        <li>
          <a
            class="social__link"
            href="mailto:jhilman@live.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MailIcon class="social__icon" />
          </a>
        </li>
        <li>
          <a
            class="social__link"
            href="https://www.youtube.com/user/guitardude77"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YoutubeIcon class="social__icon" />
          </a>
        </li>
        <li>
          <a
            class="social__link"
            href="https://soundcloud.com/jeffhilman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SoundcloudIcon class="social__icon" />
          </a>
        </li>
        <li>
          <a
            class="social__link"
            href="https://www.linkedin.com/in/hilmanjeff/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon class="social__icon" />
          </a>
        </li>
      </ul>
    </div>
    <div class="menu">
      <nuxt-link class="menu__link" to="/">
        <div class="menu__icon"></div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { TimelineLite, Expo } from "gsap";
import { mapState } from "vuex";
import { navFromAbout } from "~/animations/home";
import { navFromHome } from "~/animations/about";
import MailIcon from "~/icons/mail.vue";
import YoutubeIcon from "~/icons/youtube.vue";
import SoundcloudIcon from "~/icons/soundcloud.vue";
import LinkedinIcon from "~/icons/linkedin.vue";

export default {
  components: {
    MailIcon,
    YoutubeIcon,
    SoundcloudIcon,
    LinkedinIcon
  },
  data() {
    return {
      tl: null
    };
  },
  computed: mapState(["page", "previousPage", "animationSpeed"]),
  mounted() {
    this.tl = new TimelineLite({ paused: true });
    this.navAnimation();
    if (this.page !== "index") {
      this.tl.play();
    }
  },
  watch: {
    page(newVal) {
      if (newVal === "index") {
        this.tl.reverse();
      } else {
        this.tl.play();
      }
    }
  },
  methods: {
    navAnimation() {
      this.tl
        .to(this.$el, this.$store.state.animationSpeed, {
          x: 0,
          ease: Expo.easeInOut
        })
        .to(
          ".menu",
          this.$store.state.animationSpeed,
          {
            x: 0,
            ease: Expo.easeInOut
          },
          `-=${this.$store.state.animationSpeed / 2}`
        );
    }
  }
};
</script>

<style lang="scss" scoped>
.side-nav {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 9;
  transform: translateX(-100%);
}

.social {
  position: relative;
  z-index: 1;
  background: var(--color-grey-800);
  width: calc(var(--side-nav-size) / 2);
  display: flex;
  flex-direction: column;

  &__list {
    margin-top: auto;
    list-style: none;
    padding-left: 0;
    margin-bottom: var(--spacing-md);
  }

  &__link {
    text-align: center;
    display: block;
    width: 100%;
    padding: var(--spacing-sm) 0;
  }

  &__icon {
    fill: var(--color-grey-100);
    width: 24px;
  }
}

.menu {
  width: calc(var(--side-nav-size) / 2);
  padding: var(--spacing-md);
  background: var(--color-grey-900);
  transform: translateX(-100%);

  &__link {
    display: block;
    height: 30px;
  }

  &__icon {
    color: var(--color-grey-100);
    position: relative;
    display: inline-block;
    width: 100%;
    height: 3px;
    background: currentColor;
    border-radius: 1px;

    &::before {
      content: "";
      background: currentColor;
      width: 72%;
      height: inherit;
      position: absolute;
      top: -8px;
      left: 0;
      border-radius: 1px;
    }

    &::after {
      content: "";
      background: currentColor;
      width: 84%;
      height: inherit;
      position: absolute;
      top: 8px;
      left: 0;
      border-radius: 1px;
    }
  }
}
</style>
