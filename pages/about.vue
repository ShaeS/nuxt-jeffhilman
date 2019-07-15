<template>
  <main class="main">
    <section class="content">
      <TitleArea id="title" />
    </section>
    <section class="about">
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
              <li class="about-details__item">jhilman@live.ca</li>
              <li class="about-details__item">youtube.com/jeff</li>
              <li class="about-details__item">soundcloud.com/jeff</li>
              <li class="about-details__item">linkedin.ca/jeff</li>
            </ul>
          </div>
          <div class="about-details__image"></div>
        </div>
      </div>
    </section>
    <div class="background-text">JH</div>
  </main>
</template>

<script>
import TitleArea from "~/components/TitleArea.vue";
import { toHome, fromHome, beforeFromHome } from "~/animations/about";

export default {
  components: {
    TitleArea
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
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  flex: 5;
}

.about {
  position: relative;
  height: 100vh;
  flex: 4;
  background: var(--color-grey-100);
  color: var(--color-grey-900);

  &__wrap {
    padding: var(--spacing-xxxl);
  }

  &__title {
    font-family: var(--font-serif);
    font-size: 40px;
    margin-bottom: var(--spacing-xl);
  }

  &__content {
    line-height: 1.6;
  }
}

.background-text {
  color: var(--color-grey-900);
  opacity: 0.3;
  position: fixed;
  z-index: -1;
  top: -5vw;
  left: -5vw;
  font-size: 1200px;
  font-weight: 900;
  line-height: 0.8;
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
    font-size: 40px;
    margin-bottom: var(--spacing-lg);
  }

  &__list {
    padding-left: 0;
    list-style-type: none;
  }

  &__item {
    color: var(--color-grey-700);
    margin-bottom: var(--spacing-md);
  }
}
</style>

