<template>
  <main class="main">
    <section class="content">
      <TitleArea id="title" :topTitle="topTitle" :bottomTitle="bottomTitle" :subtitle="subtitle" />
    </section>
    <section class="about">
      <div class="background-text background-text--sub">About</div>
      <div class="about__wrap">
        <h3 class="about__title">{{ title }}</h3>
        <div class="about__content" v-html="description"></div>
        <div class="about-details">
          <div class="about-details__contact">
            <h3 class="about-details__title">Contact</h3>
            <ul class="about-details__list">
              <li v-for="social in socials" :key="social._id" class="about-details__item">
                <a :href="social.URL" target="_blank" rel="noopener noreferrer">
                  <component :is="social.icon" class="icon" />
                  {{ social.Name }}
                </a>
              </li>
            </ul>
          </div>
          <div class="about-details__image" :style="{ backgroundImage: `url('${image}')`}"></div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import TitleArea from "~/components/TitleArea.vue";
import {
  toHome,
  fromHome,
  beforeFromHome,
  mobileFromHome,
  mobileToHome
} from "~/animations/about";
import MailIcon from "~/icons/mail.vue";
import YoutubeIcon from "~/icons/youtube.vue";
import SoundcloudIcon from "~/icons/soundcloud.vue";
import LinkedinIcon from "~/icons/linkedin.vue";

export default {
  async asyncData({ app, env }) {
    const { data: titleData } = await app.$axios.post(
      env.homeUrl,
      JSON.stringify({
        populate: 1
      }),
      {
        headers: { "Content-Type": "application/json" }
      }
    );
    const { data } = await app.$axios.post(
      env.aboutUrl,
      JSON.stringify({
        populate: 1
      }),
      {
        headers: { "Content-Type": "application/json" }
      }
    );
    return {
      topTitle: titleData.toptitle,
      bottomTitle: titleData.bottomtitle,
      subtitle: titleData.subtitle,
      title: data.Title,
      description: data.Description,
      image: env.baseUrl + data.Image.path
    };
  },
  components: {
    TitleArea,
    MailIcon,
    YoutubeIcon,
    SoundcloudIcon,
    LinkedinIcon
  },
  mounted() {
    TweenLite.set(".main", { visibility: "visible" }, 1);
  },
  computed: {
    socials() {
      return this.$store.state.social;
    }
  },
  transition: {
    mode: "out-in",
    css: false,
    appear: true,
    enter(el, done) {
      if (this.$store.state.isMobile) {
        mobileFromHome(this.$store, done);
      } else {
        fromHome(this.$store, done);
      }
    },
    beforeLeave(el) {
      beforeFromHome(this.$store);
    },
    leave(el, done) {
      if (this.$store.state.isMobile) {
        mobileToHome(this.$store, done);
      } else {
        toHome(this.$store, done);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  visibility: hidden;
  display: flex;
}

.content {
  padding-left: calc(var(--side-nav-size) + var(--spacing-md));
  padding-right: var(--spacing-md);
  position: relative;
  z-index: 1;
  height: calc((var(--vh, 1vh) * 100) - (var(--lower-nav-size) / 2 ));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  flex: 1;

  @media screen and (max-width: 990px) {
    display: none;
  }
}

.about {
  overflow: hidden;
  position: relative;
  z-index: 3;
  height: 100vh;
  width: 44.4444vw;
  background: var(--color-grey-100);
  color: var(--color-grey-900);

  @media screen and (max-width: 1300px) {
    width: 50vw;
  }

  @media screen and (max-width: 990px) {
    width: 100vw;
    overflow: visible;
    height: auto;
    padding: var(--spacing-xxxxl) var(--spacing-xl) var(--spacing-xxl);
  }

  @media screen and (max-width: 700px) {
    padding-left: var(--spacing-md);
    padding-right: var(--spacing-md);
  }

  .background-text--sub {
    writing-mode: vertical-lr;
    font-size: 40vh;
    position: absolute;
    opacity: 0.05;
    left: -2vw;
  }

  &__wrap {
    padding: var(--spacing-xxxl);

    @media screen and (max-width: 1200px) {
      padding: var(--spacing-xxxl) var(--spacing-xxl);
    }

    @media screen and (max-width: 990px) {
      padding: 0;
    }
  }

  &__title {
    font-family: var(--font-serif);
    font-size: 48px;
    margin-bottom: var(--spacing-xl);
  }

  &__content {
    line-height: 1.6;
  }
}

.about-details {
  display: flex;
  height: 40vh;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  @media screen and (max-width: 990px) {
    display: block;
    position: static;
    height: auto;
  }

  &__contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 var(--spacing-xxxl);
    width: 50%;
    height: 100%;
    background: var(--color-grey-200);
    color: var(--color-grey-900);

    @media screen and (max-width: 1200px) {
      padding: 0 var(--spacing-xxl);
    }

    @media screen and (max-width: 990px) {
      width: 100%;
      background: none;
      padding: 0;
      margin: var(--spacing-xl) 0;
    }
  }

  &__image {
    width: 50%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;

    @media screen and (max-width: 990px) {
      height: 80vw;
      width: 100%;
      max-width: 320px;
      max-height: 320px;
    }
  }

  &__title {
    font-family: var(--font-serif);
    font-size: 32px;
    margin-bottom: var(--spacing-lg);

    @media screen and (max-width: 990px) {
      display: none;
    }
  }

  &__list {
    padding-left: 0;
    list-style-type: none;

    @media screen and (max-width: 990px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  &__item {
    margin-bottom: var(--spacing-md);

    a {
      display: flex;
      align-items: center;
      color: var(--color-grey-700);
      text-decoration: none;
    }

    .icon {
      fill: var(--color-grey-900);
      width: 24px;
      margin-right: var(--spacing-md);
    }
  }
}
</style>

