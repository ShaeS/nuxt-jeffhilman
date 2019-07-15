<template>
  <nav class="lower-nav">
    <transition-group class="nav-list" name="list" tag="ul">
      <li key="demo" class="nav-list__item nav-list__item--demo">
        <nuxt-link class="nav-list__link nav-list__link--demo" to="/demo">Demo Reel</nuxt-link>
      </li>
      <li key="projects" class="nav-list__item nav-list__item--projects">
        <nuxt-link class="nav-list__link nav-list__link--projects" to="/projects">Projects</nuxt-link>
      </li>
      <li key="about" class="nav-list__item nav-list__item--about">
        <nuxt-link class="nav-list__link nav-list__link--about" to="/about">About</nuxt-link>
      </li>
    </transition-group>
  </nav>
</template>

<script>
import { mapState } from "vuex";
import { navFromAbout } from "~/animations/home";
import { navFromHome } from "~/animations/about";

export default {
  computed: mapState(["page", "previousPage", "animationSpeed"]),
  mounted() {
    if (this.page === "about") {
      navFromHome(this.$store, 0, 0);
    }
  },
  watch: {
    page(newVal) {
      if (newVal === "about") {
        navFromHome(this.$store, 0, this.animationSpeed);
      }
      if (newVal === "index") {
        navFromAbout(this.$store, this.animationSpeed, this.animationSpeed);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.lower-nav {
  z-index: 1;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

.nav-list {
  padding: 0;
  list-style: none;
  display: flex;

  &__item {
    display: flex;
    transform-origin: 0 0;
    width: 33.3334%;
    height: 15vh;
  }

  &__link {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 var(--spacing-xxl);
    text-decoration: none;
    color: white;

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
