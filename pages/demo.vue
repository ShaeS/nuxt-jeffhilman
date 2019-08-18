<template>
  <main class="main">
    <iframe
      :src="`https://player.vimeo.com/video/${id}?autoplay=1`"
      class="video-player"
      allow="autoplay; fullscreen"
      allowfullscreen
    />
  </main>
</template>

<script>
import {fromHome, toHome} from '~/animations/demo';

export default {
  async asyncData({app, env}) {
    const {data} = await app.$axios.post(
        env.demoUrl,
        JSON.stringify({
          populate: 1,
        }),
        {
          headers: {'Content-Type': 'application/json'},
        }
    );
    return {id: data.Vimeo};
  },
  mounted() {
    TweenLite.set('.main', {visibility: 'visible'}, 1);
  },
  transition: {
    mode: 'out-in',
    css: false,
    appear: true,
    enter(el, done) {
      fromHome(this.$store, done);
    },
    leave(el, done) {
      toHome(this.$store, done);
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  visibility: hidden;
  position: relative;
  z-index: 1;
  padding-left: var(--side-nav-size);

  @media screen and (max-width: 990px) {
    padding-left: 0;
  }
}

.video-player {
  width: 100%;
  border: 0;
  height: calc(var(--vh, 1vh) * 100);
}
</style>

