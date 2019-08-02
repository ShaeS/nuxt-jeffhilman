<template>
  <div>
    <side-navigation />
    <nuxt />
    <app-navigation />
    <div class="background-text">JH</div>
  </div>
</template>

<script>
import AppNavigation from "~/components/AppNavigation.vue";
import SideNavigation from "~/components/SideNavigation.vue";

export default {
  components: {
    AppNavigation,
    SideNavigation
  }
};
</script>

<style lang="scss">
:root {
  /* COLORS -- PRIMARY */
  --color-primary-100: hsl(39, 50%, 95%);
  --color-primary-200: hsl(39, 50%, 88%);
  --color-primary-300: hsl(39, 50%, 80%);
  --color-primary-400: hsl(39, 50%, 75%);
  --color-primary-500: hsl(39, 50%, 70%);
  --color-primary-600: hsl(39, 50%, 60%);
  --color-primary-700: hsl(39, 50%, 45%);
  --color-primary-800: hsl(39, 50%, 30%);
  --color-primary-900: hsl(39, 50%, 20%);

  /* COLORS -- GREY */
  --color-grey-100: hsl(0, 0%, 97%);
  --color-grey-200: hsl(0, 0%, 88%);
  --color-grey-300: hsl(0, 0%, 81%);
  --color-grey-400: hsl(0, 0%, 69%);
  --color-grey-500: hsl(0, 0%, 62%);
  --color-grey-600: hsl(0, 0%, 49%);
  --color-grey-700: hsl(0, 0%, 38%);
  --color-grey-800: hsl(0, 0%, 32%);
  --color-grey-900: hsl(0, 0%, 23%);
  --color-grey-1000: hsl(0, 0%, 13%);

  /* SPACING */
  --spacing-xxxs: 2px;
  --spacing-xxs: 4px;
  --spacing-xs: 8px;
  --spacing-sm: 12px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-xxl: 48px;
  --spacing-xxxl: 64px;
  --spacing-xxxxl: 96px;

  /* FONTS */
  --font-sans: "Lato", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-serif: "Prata", Baskerville, ‘Times New Roman’, Times, serif;

  /* NAV SIZES */
  --lower-nav-size: 14vh;
  --side-nav-size: 144px;

  @media screen and (max-width: 990px) {
    --side-nav-size: 72px;
  }
}
html,
body {
  font-family: var(--font-sans);
  font-size: 16px;
  word-spacing: 1px;
  text-rendering: optimizeLegibility;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
  background: var(--color-grey-1000);
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

img {
  max-width: 100%;
}

.background-text {
  pointer-events: none;
  color: var(--color-grey-900);
  opacity: 0.3;
  position: fixed;
  z-index: 0;
  top: -5vw;
  left: -5vw;
  font-size: 125vh;
  font-weight: 900;
  line-height: 0.8;

  @media screen and (max-width: 990px) {
    line-height: 0.7;
  }
}
</style>

