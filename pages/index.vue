<template>
  <main class="main">
    <section class="content">
      <TitleArea id="title" />
    </section>
    <section class="image"></section>
  </main>
</template>

<script>
import TitleArea from "~/components/TitleArea.vue";
import { beforeToAbout, fromAbout, leaveHome, fadeOutTitle, fadeInTitle } from "~/animations/home";

export default {
  components: {
    TitleArea
  },
  transition: {
    mode: "out-in",
    css: false,
    enter(el, done) {
      fromAbout(this.$store, done);
      if ( this.$store.state.previousPage !== 'about' ) {
        fadeInTitle(this.$store, done);
      }
    },
    beforeLeave(el, done) {
      if ( this.$store.state.page === 'about' ) {
        beforeToAbout(this.$store);
      }
    },
    leave(el, done) {
      leaveHome(this.$store, done);
      if ( this.$store.state.page !== 'about' ) {
        fadeOutTitle(this.$store, done);
      }
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
</style>

