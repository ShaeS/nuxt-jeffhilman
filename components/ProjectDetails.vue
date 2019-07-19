<template>
  <section class="project-details">
    <h3 class="project-details__title">{{ project.title }}</h3>
    <img class="project-details__image" :src="project.image" />
  </section>
</template>

<script>
import { TweenLite } from 'gsap';
export default {
  props: {
    project: Object
  },
  mounted () {
    TweenLite.from( this.$el, this.$store.state.animationSpeed * 2, {
        xPercent: 100,
        ease: Expo.easeInOut
    });
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
