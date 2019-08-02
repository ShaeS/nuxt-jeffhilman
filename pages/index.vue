<template>
  <main class="main">
    <section class="content">
      <TitleArea id="title" :topTitle="topTitle" :bottomTitle="bottomTitle" :subtitle="subtitle" />
    </section>
    <section class="image" :style="{ backgroundImage: `url('${image}')`}"></section>
  </main>
</template>

<script>
import TitleArea from "~/components/TitleArea.vue";
import {
  beforeToAbout,
  fromAbout,
  enterHome,
  leaveHome,
  fadeOutTitle,
  fadeInTitle
} from "~/animations/home";

export default {
  async asyncData({ app, env }) {
    const { data } = await app.$axios.post(
      env.homeUrl,
      JSON.stringify({
        populate: 1
      }),
      {
        headers: { "Content-Type": "application/json" }
      }
    );
    return {
      topTitle: data.toptitle,
      bottomTitle: data.bottomtitle,
      subtitle: data.subtitle,
      image: env.baseUrl + data.image.path
    };
  },
  components: {
    TitleArea
  },
  mounted() {
    TweenLite.set(".main", { visibility: "visible" }, 1);
  },
  transition: {
    mode: "out-in",
    css: false,
    appear: true,
    enter(el, done) {
      enterHome(this.$store, done);
      if (
        this.$store.state.previousPage !== "about" ||
        this.$store.state.isMobile
      ) {
        fadeInTitle(this.$store, done);
      } else {
        fromAbout(this.$store, done);
      }
    },
    beforeLeave(el, done) {
      if (this.$store.state.page === "about") {
        beforeToAbout(this.$store);
      }
    },
    leave(el, done) {
      leaveHome(this.$store, done);
      if (this.$store.state.page !== "about" || this.$store.state.isMobile) {
        fadeOutTitle(this.$store, done);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  visibility: hidden;
  display: flex;
}

.content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  flex: 2;

  @media screen and (max-width: 800px) {
    padding: var(--spacing-md);
  }
}

.image {
  position: relative;
  z-index: 1;
  height: 100vh;
  flex: 1;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left bottom;

  @media screen and (max-width: 800px) {
    display: none;
  }
}
</style>

