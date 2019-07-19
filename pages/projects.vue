<template>
  <main class="main">
    <section class="projects-sidebar">
      <h2 class="projects-sidebar__title">Projects</h2>
      <p
        class="projects-sidebar__content"
      >Here you will find my most important projects. As well as a list of other projects I have worked on.</p>
      <div class="background-text">Projects</div>
    </section>
    <section ref="scroller" class="content">
        <div class="scroll-wrap">
          <ProjectCard title="Parabola" image="/parabola.jpg" :scroll="scroll"></ProjectCard>
          <ProjectCard title="Akashi" image="/akashi.jpg" :scroll="scroll"></ProjectCard>
          <ProjectCard title="Smash Forward" image="/smash-forward.jpg" :scroll="scroll"></ProjectCard>
        </div>
    </section>
  </main>
</template>

<script>
import ProjectCard from "~/components/ProjectCard.vue";

export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      scroll: 0
    }
  },
  mounted() {
    this.$refs.scroller.addEventListener( 'scroll', this.scrollHandler );
  },
  methods: {
    scrollHandler( e ) {
      this.scroll = e.target.scrollTop;
    }
  },
  destroyed() {
    this.$refs.scroller.removeEventListener( 'scroll', this.scrollHandler );
  }
};
</script>

<style lang="scss" scoped>
.main {
  padding-left: var(--side-nav-size);
  display: flex;
}

.content {
  overflow-y: auto;
  height: 100vh;
  position: relative;
  z-index: 1;
  flex: 1;

  &::-webkit-scrollbar {
      background-color: var(--color-grey-1000);
      width: 24px;
  }

  /* background of the scrollbar except button or resizer */
  &::-webkit-scrollbar-track {
      background-color: var(--color-grey-1000);
  }

  /* scrollbar itself */
  &::-webkit-scrollbar-thumb {
      background-color: var(--color-primary-700);
      border-radius: 16px;
      border: 8px solid var(--color-grey-1000);
  }

  /* set button(top and bottom of the scrollbar) */
  &::-webkit-scrollbar-button {display:none}
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

