<template>
  <div>
    <app-navigation />
    <nuxt />
  </div>
</template>

<script>
import AppNavigation from "~/components/AppNavigation.vue";

export default {
  components: {
    AppNavigation
  }
};
</script>

<style style="scss">
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

  /* FONTS */
  --font-sans: "Lato", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-serif: "Prata", Baskerville, ‘Times New Roman’, Times, serif;

  /* ANIMATION TIMING */
  --timing-100: 1s;
  --timing-75: 0.75s;
  --timing-50: 0.5s;
  --timing-25: 0.25s;
}
html {
  font-family: var(--font-sans);
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: var(--color-grey-1000);
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

/* .page-enter-active,
.page-leave-active {
  transition: opacity var(--timing-100), transform var(--timing-100);
}
.page-enter,
.page-leave-active {
  opacity: 0;
  transform: translateZ(0);
  backface-visibility: hidden;
} */
</style>

