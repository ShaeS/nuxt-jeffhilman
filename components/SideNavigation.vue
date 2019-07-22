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
    <nuxt-link class="menu" to="/">
      <div class="menu__link">
        <div class="menu__icon"></div>
      </div>
    </nuxt-link>
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
  position: relative;
  width: calc(var(--side-nav-size) / 2);
  padding: var(--spacing-md);
  transform: translateX(-100%);

  &:hover::after {
    transform: translateX(4px);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background: var(--color-grey-900);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    background: var(--color-grey-900);
    transition: transform 0.3s;
  }

  &__link {
    display: block;
    height: 30px;
  }

  &__icon {
    color: var(--color-grey-100);
    position: relative;
    z-index: 2;
    display: inline-block;
    width: 100%;
    height: 3px;
    background: currentColor;
    border-radius: 1px;
    transform-origin: right center;
    transition: transform 0.3s;

    &::before,
    &::after {
      content: "";
      background: currentColor;
      height: inherit;
      position: absolute;
      left: 0;
      border-radius: 1px;
      transform-origin: right center;
      transition: transform 0.3s;
    }

    &::before {
      width: 72%;
      top: -8px;
    }

    &::after {
      width: 84%;
      top: 8px;
    }
  }

  &:hover & {

    &__icon {
      transform: scaleX(0.6);

      &:before {
        transform: scaleX(1.6);
      }

      &:after {
        transform: scaleX(1.3);
      }
    }
  }
}
</style>
