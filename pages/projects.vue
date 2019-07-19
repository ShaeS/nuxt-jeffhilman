<template>
  <main class="main">
    <section class="projects-sidebar">
      <h2 class="projects-sidebar__title">Projects</h2>
      <p
        class="projects-sidebar__content"
      >Here you will find my most important projects. As well as a list of other projects I have worked on.</p>
      <div class="background-text">Projects</div>
    </section>
    <section class="content">
      <vuescroll @handle-scroll="scrollHandler" :ops="scroller">
        <div class="scroll-wrap">
          <ProjectCard title="Parabola" image="/parabola.jpg" :offsetTop="offsetTop"></ProjectCard>
          <ProjectCard title="Akashi" image="/akashi.jpg" :offsetTop="offsetTop"></ProjectCard>
          <ProjectCard title="Smash Forward" image="/smash-forward.jpg" :offsetTop="offsetTop"></ProjectCard>
        </div>
      </vuescroll>
    </section>
  </main>
</template>

<script>
import vuescroll from "vuescroll/dist/vuescroll-native";
import ProjectCard from "~/components/ProjectCard.vue";

export default {
  components: {
    vuescroll,
    ProjectCard
  },
  data() {
    return {
      offsetTop: 0,
      scroller: {
        vuescroll: {
          detectResize: false
        },
        bar: {
          background: "hsl(39, 50%, 45%)"
        }
      }
    };
  },
  methods: {
    scrollHandler(vertical) {
      this.offsetTop = vertical.scrollTop;
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  padding-left: var(--side-nav-size);
  display: flex;
}

.content {
  height: 100vh;
  position: relative;
  z-index: 1;
  flex: 1;
}

.scroll-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: var(--spacing-xxl);
}

.projects-sidebar {
  position: relative;
  z-index: 3;
  height: 100vh;
  width: 33.3334vw;
  padding: var(--spacing-xxxl) var(--spacing-xl);
  background: var(--color-primary-700);
  color: var(--color-grey-100);

  &__title {
    font-family: var(--font-serif);
    font-size: 48px;
    margin-bottom: var(--spacing-xl);
    position: relative;
    z-index: 1;
  }

  &__content {
    position: relative;
    z-index: 1;
    line-height: 1.6;
  }

  .background-text {
    writing-mode: vertical-lr;
    font-size: 40vh;
    position: absolute;
    opacity: 0.1;
  }
}
</style>

