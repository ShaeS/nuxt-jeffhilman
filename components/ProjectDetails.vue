<template>
  <section v-if="currentProject" class="project-details">
    <h3 class="project-details__title">{{ currentProject.title }}</h3>
    <img class="project-details__image" :src="currentProject.image" />
  </section>
</template>

<script>
import { TweenLite } from 'gsap';
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
      this.$nextTick( () => {
        TweenLite.from( this.$el, this.$store.state.animationSpeed * 1.5, {
          xPercent: 100,
          ease: Expo.easeInOut
        });
      });
    },
    leaveTransition() {
      TweenLite.to( this.$el, this.$store.state.animationSpeed * 1.5, {
        xPercent: 100,
        ease: Expo.easeInOut,
        onComplete: () => {
          this.currentProject = null
        }
      });
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
    width: 70vw;
    background: var(--color-grey-100);
    color: var(--color-grey-900);
}
</style>
