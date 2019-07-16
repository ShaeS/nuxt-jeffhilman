<template>
  <main class="main">
    <section class="content">
      <TitleArea id="title" />
    </section>
    <section class="image"></section>
    <div class="background-text">JH</div>
  </main>
</template>

<script>
import TitleArea from "~/components/TitleArea.vue";
import { beforeFromAbout, fromAbout, toAbout } from "~/animations/home";

export default {
  components: {
    TitleArea
  },
  transition: {
    mode: "out-in",
    css: false,
    enter(el, done) {
      fromAbout(this.$store, done);
    },
    beforeLeave(el, done) {
      beforeFromAbout(this.$store);
    },
    leave(el, done) {
      toAbout(this.$store, done);
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
}

.content {
  position: relative;
  z-index: 1;
  height: calc( 100vh - var(--lower-nav-size));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  flex: 2;
}

.image {
  position: relative;
  z-index: 1;
  height: 100vh;
  flex: 1;
  background-image: url(~assets/images/tape-player.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left bottom;
}

.background-text {
  pointer-events: none;
  color: var(--color-grey-900);
  opacity: 0.3;
  position: fixed;
  z-index: 0;
  top: -5vw;
  left: -5vw;
  font-size: 1200px;
  font-weight: 900;
  line-height: 0.8;
}
</style>

