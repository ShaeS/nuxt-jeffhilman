<template>
  <nav class="lower-nav">
    <ul class="nav-list">
      <li key="demo" class="nav-list__item nav-list__item--demo">
        <nuxt-link class="nav-list__link nav-list__link--demo" to="/demo">Demo Reel</nuxt-link>
      </li>
      <li key="projects" class="nav-list__item nav-list__item--projects">
        <nuxt-link class="nav-list__link nav-list__link--projects" to="/projects">Projects</nuxt-link>
      </li>
      <li key="about" class="nav-list__item nav-list__item--about">
        <nuxt-link class="nav-list__link nav-list__link--about" to="/about">About</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { TimelineLite, Expo } from "gsap";
import { mapState } from "vuex";

export default {
  computed: mapState(["page", "previousPage", "animationSpeed"]),
  mounted() {
    if (this.page === "index") {
      this.navShowAnimation();
    }
  },
  watch: {
    page(newVal) {
      if (newVal === "index") {
        this.navShowAnimation();
      } else {
        this.navHideAnimation();
      }
    }
  },
  methods: {
    navHideAnimation() {
      let tl = new TimelineLite();
      tl.staggerTo(
        ".nav-list__item",
        this.$store.state.animationSpeed,
        {
          yPercent: 0,
          pointerEvents: "none",
          ease: Expo.easeInOut
        },
        this.$store.state.animationSpeed / 4
      );
    },
    navShowAnimation() {
      let tl = new TimelineLite();
      tl.staggerTo(
        ".nav-list__item",
        this.$store.state.animationSpeed / 1.3333,
        {
          yPercent: -100,
          pointerEvents: "auto",
          ease: Expo.easeInOut,
          delay: this.$store.state.animationSpeed
        },
        this.$store.state.animationSpeed / 4
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.lower-nav {
  z-index: 2;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  overflow: hidden;
}

.nav-list {
  padding: 0;
  list-style: none;
  display: flex;
  transform: translateY(100%);

  &__item {
    pointer-events: auto;
    display: flex;
    width: 33.3334%;
    height: var(--lower-nav-size);
  }

  &__link {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 var(--spacing-xxl);
    text-decoration: none;
    color: white;

    @media screen and (max-width: 800px) {
      padding: 0 var(--spacing-xl);
    }

    @media screen and (max-width: 990px) {
      justify-content: center;
      padding: 0 var(--spacing-md);
    }

    &--demo {
      background: var(--color-primary-600);
    }

    &--projects {
      background: var(--color-primary-700);
    }

    &--about {
      background: var(--color-grey-200);
      color: var(--color-grey-900);
    }

    &::before,
    &::after {
      content: "";
      display: block;

      @media screen and (max-width: 990px) {
        content: none;
      }
    }

    &::before {
      margin-left: var(--spacing-lg);
      order: 1;
      height: 1px;
      width: 48px;
      background: currentColor;
    }

    &::after {
      order: 2;
      width: 0;
      height: 0;
      border-top: 4px solid transparent;
      border-bottom: 4px solid transparent;
      border-left: 4px solid currentColor;
    }
  }
}
</style>
