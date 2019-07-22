<template>
  <main class="main">
    <section @click="closeProject" class="projects-sidebar" :class="{ hidden: activeProject }">
      <h2 class="projects-sidebar__title">Projects</h2>
      <p
        class="projects-sidebar__content"
      >Here you will find my most important projects. As well as a list of other projects I have worked on.</p>
      <div class="background-text">Projects</div>
      <div class="projects-sidebar__overlay"></div>
    </section>
    <section ref="scroller" class="content">
        <div class="scroll-wrap">
          <ProjectCard v-for="project in projects" :key="project.title" @click.native="viewProject(project)" :project="project" />
        </div>
    </section>

    <ProjectDetails :project="activeProject" />
  </main>
</template>

<script>
import { TimelineLite } from 'gsap';
import { toHome, fromHome } from "~/animations/projects";
import ProjectCard from "~/components/ProjectCard.vue";
import ProjectDetails from "~/components/ProjectDetails.vue";

export default {
  components: {
    ProjectCard,
    ProjectDetails
  },
  data() {
    return {
      projects: [
        {
          title: "Parabola",
          image: "/parabola.jpg"
        },
        {
          title: "Akashi",
          image: "/akashi.jpg"
        },
        {
          title: "Smash Forward",
          image: "/smash-forward.jpg"
        },
      ],
      activeProject: null,
      tl: null
    }
  },
  mounted () {
    this.tl = new TimelineLite({ paused: true });
    this.tl.to( ['.projects-sidebar__title', '.projects-sidebar__content'], this.$store.state.animationSpeed * 1.5, {
      opacity: 0,
      ease: Expo.easeInOut
    }, 0).to('.projects-sidebar__overlay', this.$store.state.animationSpeed * 1.5, {
      opacity: 0.6,
      ease: Expo.easeInOut
    }, 0)
  },
  methods: {
    viewProject(project) {
      this.activeProject = project;
      this.tl.play();
    },
    closeProject() {
      this.activeProject = null;
      this.tl.reverse();
    }
  },
  transition: {
    mode: "out-in",
    css: false,
    enter(el, done) {
      fromHome(this.$store, done);
    },
    leave(el, done) {
      toHome(this.$store, done);
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
}

.content {
  overflow-y: auto;
  height: 100vh;
  position: relative;
  z-index: 1;
  flex: 1;
  scrollbar-color: var(--color-primary-700) var(--color-grey-1000);
  scrollbar-width: thin;

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
  width: calc( var(--side-nav-size) + 33.3334vw );
  padding: var(--spacing-xxxl) var(--spacing-xl);
  padding-left: calc( var(--spacing-xl) + var(--side-nav-size) );
  background: var(--color-primary-700);
  color: var(--color-grey-100);

  &__overlay {
    content: "";
    background: var(--color-grey-1000);
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

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
    left: calc( -5vw + var(--side-nav-size) );
  }
}
</style>

