<template>
  <main class="main">
    <section class="content">
      <TitleArea id="title" />
    </section>
    <section class="about">
      <div class="background-text">About</div>
      <div class="about__wrap">
        <h3 class="about__title">About</h3>
        <p class="about__content">
          As an enthusiastic audio professional making strides in Vancouver's video game scene, Jeff Hilman is looking to use his skills and expertise to enhance any and all types of game projects including mobile, console, VR, or otherwise.
          <br />
          <br />Proficient in game audio implementation and of course sound design, Jeff previously shipped "Puzzle Fighter" with Capcom Game Studio Vancouver at the end of 2017 and also provided his skills to an unannounced project.
        </p>
        <div class="about-details">
          <div class="about-details__contact">
            <h3 class="about-details__title">Contact</h3>
            <ul class="about-details__list">
              <li class="about-details__item">
                <a href="mailto:jhilman@live.ca" target="_blank" rel="noopener noreferrer">
                  <MailIcon class="icon" />Email
                </a>
              </li>
              <li class="about-details__item">
                <a
                  href="https://www.youtube.com/user/guitardude77"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YoutubeIcon class="icon" />YouTube
                </a>
              </li>
              <li class="about-details__item">
                <a
                  href="https://soundcloud.com/jeffhilman"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SoundcloudIcon class="icon" />SoundCloud
                </a>
              </li>
              <li class="about-details__item">
                <a
                  href="https://www.linkedin.com/in/hilmanjeff/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon class="icon" />LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div class="about-details__image"></div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import TitleArea from "~/components/TitleArea.vue";
import { toHome, fromHome, beforeFromHome } from "~/animations/about";
import MailIcon from "~/icons/mail.vue";
import YoutubeIcon from "~/icons/youtube.vue";
import SoundcloudIcon from "~/icons/soundcloud.vue";
import LinkedinIcon from "~/icons/linkedin.vue";

export default {
  components: {
    TitleArea,
    MailIcon,
    YoutubeIcon,
    SoundcloudIcon,
    LinkedinIcon
  },
  transition: {
    mode: "out-in",
    css: false,
    enter(el, done) {
      fromHome(this.$store, done);
    },
    beforeLeave(el) {
      beforeFromHome(this.$store);
    },
    leave(el, done) {
      toHome(this.$store, done);
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
}

.content {
  padding-left: var(--side-nav-size);
  position: relative;
  z-index: 1;
  height: calc(100vh - (var(--lower-nav-size) / 2));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  flex: 1;
}

.about {
  overflow: hidden;
  position: relative;
  z-index: 3;
  height: 100vh;
  width: 44.4444vw;
  background: var(--color-grey-100);
  color: var(--color-grey-900);

  .background-text {
    writing-mode: vertical-lr;
    font-size: 40vh;
    position: absolute;
    opacity: 0.05;
  }

  &__wrap {
    padding: var(--spacing-xxxl);
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

  &__contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 var(--spacing-xxxl);
    width: 50%;
    height: 100%;
    background: var(--color-grey-200);
    color: var(--color-grey-900);
  }

  &__image {
    width: 50%;
    height: 100%;
    background-image: url(~assets/images/jeff.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
  }

  &__title {
    font-family: var(--font-serif);
    font-size: 32px;
    margin-bottom: var(--spacing-lg);
  }

  &__list {
    padding-left: 0;
    list-style-type: none;
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

