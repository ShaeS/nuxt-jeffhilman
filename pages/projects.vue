<template>
  <main class="main">
    <section @click="closeProject" class="projects-sidebar">
      <h2 class="projects-sidebar__title">{{ title }}</h2>
      <div class="projects-sidebar__content" v-html="description"></div>
      <div class="background-text background-text--sub">Projects</div>
      <div class="projects-sidebar__overlay"></div>
    </section>
    <section ref="scroller" class="content">
      <div class="scroll-wrap">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.Title"
          @click.native="viewProject(index)"
          :project="project"
        />
      </div>
    </section>

    <ProjectDetails
      :projects="projects"
      :projectIndex="projectIndex"
      @close="closeProject"
      @prev="viewProject(( projectIndex + projects.length - 1 ) % projects.length)"
      @next="viewProject(( projectIndex + 1 ) % projects.length)"
    />
  </main>
</template>

<script>
import { TimelineLite, TweenLite, Expo } from "gsap";
import { toHome, fromHome } from "~/animations/projects";
import ProjectCard from "~/components/ProjectCard.vue";
import ProjectDetails from "~/components/ProjectDetails.vue";

export default {
  async asyncData({ app, env }) {
    const { data: pageData } = await app.$axios.post(
      env.projectPageUrl,
      JSON.stringify({
        populate: 1
      }),
      {
        headers: { "Content-Type": "application/json" }
      }
    );
    const { data } = await app.$axios.post(
      env.projectsUrl,
      JSON.stringify({
        populate: 1
      }),
      {
        headers: { "Content-Type": "application/json" }
      }
    );
    return {
      title: pageData.Title,
      description: pageData.Description,
      projects: data.entries
    };
  },
  components: {
    ProjectCard,
    ProjectDetails
  },
  data() {
    return {
      projectIndex: null,
      tl: null
    };
  },
  mounted() {
    TweenLite.set(".main", { visibility: "visible" }, 1);
    this.tl = new TimelineLite({ paused: true });
    this.tl
      .to(
        [".projects-sidebar__title", ".projects-sidebar__content"],
        this.$store.state.animationSpeed * 1.5,
        {
          opacity: 0,
          ease: Expo.easeInOut
        },
        0
      )
      .to(
        ".projects-sidebar__overlay",
        this.$store.state.animationSpeed * 1.5,
        {
          opacity: 0.7,
          ease: Expo.easeInOut
        },
        0
      )
      .to(
        ["html", "body"],
        0,
        {
          overflow: "hidden"
        },
        0
      );
  },
  methods: {
    viewProject(index) {
      this.projectIndex = index;
      this.tl.play();
    },
    closeProject() {
      this.projectIndex = null;
      this.tl.reverse();
    }
  },
  transition: {
    mode: "out-in",
    css: false,
    appear: true,
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
  visibility: hidden;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 700px) {
    display: block;
  }
}

.content {
  position: relative;
  z-index: 1;
  width: calc(66.6667vw - var(--side-nav-size));

  @media screen and (max-width: 1100px) {
    width: calc(85vw - var(--side-nav-size));
  }

  @media screen and (max-width: 700px) {
    width: 100vw;
  }
}

.scroll-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: var(--spacing-xxl);

  @media screen and (max-width: 700px) {
    padding: var(--spacing-xl);
  }
}

.projects-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 3;
  width: calc(var(--side-nav-size) + 33.3334vw);
  padding: var(--spacing-xxxl) var(--spacing-xl);
  padding-left: calc(var(--spacing-xl) + var(--side-nav-size));
  background: var(--color-primary-700);
  color: var(--color-grey-100);
  overflow: hidden;

  @media screen and (max-width: 1100px) {
    display: flex;
    justify-content: center;
    width: calc(var(--side-nav-size) + 15vw);
  }

  @media screen and (max-width: 700px) {
    position: relative;
    justify-content: flex-start;
    padding: var(--spacing-xxxxl) var(--spacing-xl) var(--spacing-xxl);
    width: 100%;
    bottom: auto;
    height: auto;
  }

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

    @media screen and (max-width: 1100px) {
      writing-mode: vertical-rl;
    }

    @media screen and (max-width: 700px) {
      writing-mode: horizontal-tb;
      margin-bottom: 0;
    }
  }

  &__content {
    position: relative;
    z-index: 1;
    line-height: 1.6;

    @media screen and (max-width: 1100px) {
      display: none;
    }
  }

  .background-text--sub {
    writing-mode: vertical-lr;
    font-size: 40vh;
    position: absolute;
    opacity: 0.1;
    left: calc(-2vw + var(--side-nav-size));

    @media screen and (max-width: 700px) {
      left: -2vw;
    }
  }
}
</style>

