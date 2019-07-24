<template>
  <section v-if="currentProject" class="project-details">
    <div class="project-details__left">
      <img class="project-details__image" :src="currentProject.image" />
    </div>
    <div class="project-details__right">
      <h3 class="project-details__title">{{ currentProject.title }}</h3>
      <p class="project-details__content">
        As an enthusiastic audio professional making strides in Vancouver's video game scene, Jeff Hilman is looking to use his skills and expertise to enhance any and all types of game projects including mobile, console, VR, or otherwise.
        <br />
        <br />Proficient in game audio implementation and of course sound design, Jeff previously shipped "Puzzle Fighter" with Capcom Game Studio Vancouver at the end of 2017 and also provided his skills to an unannounced project.
      </p>
    </div>
    <button @click="$emit( 'close' )" class="project-details__close"><span class="project-details__close-icon"></span></button>
  </section>
</template>

<script>
import { TimelineLite } from 'gsap';
export default {
  props: {
    project: Object
  },
  data() {
    return {
      currentProject: null
    }
  },
  watch: {
    project(newVal) {
      if ( newVal ) {
        this.enterTransition();
      } else {
        this.leaveTransition();
      }
    }
  },
  methods: {
    enterTransition() {
      this.currentProject = this.project;
      let tl = new TimelineLite();
      this.$nextTick( () => {
        tl.from( this.$el, this.$store.state.animationSpeed * 1.5, {
          xPercent: 110,
          ease: Expo.easeInOut
        }).from( '.project-details__close', this.$store.state.animationSpeed / 2, {
          opacity: 0,
          xPercent: 100,
          ease: Expo.easeOut
        }, `-=${ this.$store.state.animationSpeed / 2 }`);
      });
    },
    leaveTransition() {
      let tl = new TimelineLite({onComplete: () => {
        this.currentProject = null
      }});
      tl.to( '.project-details__close', this.$store.state.animationSpeed, {
        opacity: 0,
        xPercent: 100,
        ease: Expo.easeIn
      }, 0)
      .to( this.$el, this.$store.state.animationSpeed * 1.5, {
        xPercent: 110,
        ease: Expo.easeInOut
      }, 0);
    }
  },
};
</script>

<style lang="scss" scoped>
.project-details {
    position: fixed;
    z-index: 9;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    width: 75vw;
    background: var(--color-grey-100);
    color: var(--color-grey-900);

    &__left {
      width: 100%;
      max-width: 400px
    }

    &__right {
      flex: 1;
      padding: var(--spacing-xxxl) var(--spacing-xxl);
    }

    &__image {
      max-width: 100%;
    }

    &__title {
      font-family: var(--font-serif);
      font-size: 48px;
      margin-bottom: var(--spacing-xl);
    }

    &__content {
      line-height: 1.6;
    }

    &__close {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      width: 80px;
      height: 80px;
      border: 2px solid white;
      color: white;
      position: absolute;
      z-index: -1;
      right: 100%;
      top: 0;

      &:hover {
        .project-details__close-icon::before,
        .project-details__close-icon::after {
          transform: rotate(0);
        }
      }
    }

    &__close-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      position: relative;

      &::before,
      &::after {
        content: "";
        position: absolute;
        background: white;
        width: inherit;
        height: 2px;
        transition: transform 0.1s;
      }

      &::before {
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }
    }
}
</style>
