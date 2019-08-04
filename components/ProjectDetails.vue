<template>
  <section v-if="currentProject" class="project-details">
    <div class="project-details__left">
      <div class="project-details__image-wrap">
        <img class="project-details__image" :src="currentImage" />
      </div>
      <div class="project-navigation">
        <div @click="$emit( 'prev' )" class="project-navigation__link">
          <img class="project-navigation__image" :src="previousImage" alt />
          <h4 class="project-navigation__title">{{ previousProject.Title }}</h4>
        </div>
        <div
          @click="$emit( 'next' )"
          class="project-navigation__link project-navigation__link--reverse"
        >
          <img class="project-navigation__image" :src="nextImage" alt />
          <h4 class="project-navigation__title">{{ nextProject.Title }}</h4>
        </div>
      </div>
    </div>
    <div class="project-details__right">
      <h3 class="project-details__title">{{ currentProject.Title }}</h3>
      <h4
        v-if="currentProject.subtitle"
        class="project-details__subtitle"
      >{{ currentProject.subtitle }}</h4>
      <div class="project-details__content" v-html="description"></div>
      <a
        v-if="currentProject.linkurl && currentProject.linktext"
        :href="currentProject.linkurl"
        target="_blank"
        class="project-details__cta"
      >{{ currentProject.linktext }}</a>
    </div>
    <button @click="$emit( 'close' )" class="project-details__close" :class="{ leaving }">
      <span class="project-details__close-icon"></span>
    </button>
  </section>
</template>

<script>
import { enter, leave, enterNew, leaveOld } from "~/animations/project-details";

export default {
  props: {
    projects: Array,
    projectIndex: Number
  },
  data() {
    return {
      currentProject: null,
      previousProject: null,
      nextProject: null,
      leaving: false
    };
  },
  watch: {
    projectIndex(newVal, oldVal) {
      this.leaving = false;
      if (oldVal === null) {
        this.enterTransition();
      } else if (newVal === null) {
        this.leaveTransition();
      } else {
        this.leaveOldProject();
      }
    }
  },
  computed: {
    description() {
      let newDescription = this.currentProject.Description.replace(
        /<img src="/g,
        '<img src="' + process.env.baseUrl
      );
      return newDescription;
    },
    activeProject() {
      return this.projects[this.projectIndex];
    },
    prevPro() {
      return this.projects[
        (this.projectIndex + this.projects.length - 1) % this.projects.length
      ];
    },
    nextPro() {
      return this.projects[(this.projectIndex + 1) % this.projects.length];
    },
    currentImage() {
      return process.env.baseUrl + this.currentProject.Image.path;
    },
    nextImage() {
      return process.env.baseUrl + this.nextProject.Image.path;
    },
    previousImage() {
      return process.env.baseUrl + this.previousProject.Image.path;
    }
  },
  methods: {
    enterTransition() {
      this.currentProject = this.activeProject;
      this.previousProject = this.prevPro;
      this.nextProject = this.nextPro;
      this.$nextTick(() => {
        enter(this.$store, this.$el);
      });
    },
    leaveTransition() {
      this.leaving = true;
      leave(this.$store, this.$el, () => {
        this.currentProject = null;
        this.previousProject = null;
        this.nextProject = null;
      });
    },
    enterNewProject() {
      this.currentProject = this.activeProject;
      this.previousProject = this.prevPro;
      this.nextProject = this.nextPro;
      this.$nextTick(() => {
        enterNew(this.$store);
      });
    },
    leaveOldProject() {
      leaveOld(this.$store, () => this.enterNewProject());
    }
  }
};
</script>

<style lang="scss" scoped>
.project-details {
  position: fixed;
  z-index: 9;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  width: 75vw;
  background: var(--color-grey-100);
  color: var(--color-grey-900);

  @media screen and (max-width: 1200px) {
    width: calc(100vw - var(--side-nav-size) - 100px);
  }

  @media screen and (max-width: 700px) {
    width: 100vw;
  }

  &__left {
    display: flex;
    flex-direction: column;
    background: var(--color-grey-1000);
    width: 500px;

    @media screen and (max-width: 1300px) {
      width: 400px;
    }

    @media screen and (max-width: 1200px) {
      width: 320px;
    }

    @media screen and (max-width: 900px) {
      position: fixed;
      z-index: 99;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  }

  &__right {
    overflow-y: auto;
    flex: 1;
    padding: var(--spacing-xxxl) var(--spacing-xxl);

    @media screen and (max-width: 1200px) {
      padding: var(--spacing-xxxl) var(--spacing-xl);
    }

    @media screen and (max-width: 900px) {
      padding: var(--spacing-xxxxl) var(--spacing-xl)
        calc(var(--spacing-md) + 100px);
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
    }

    @media screen and (max-width: 700px) {
      padding-left: var(--spacing-md);
      padding-right: var(--spacing-md);
    }
  }

  &__image-wrap {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 900px) {
      display: none;
    }
  }

  &__image {
    max-width: 100%;
    max-height: 85vh;
  }

  &__title {
    font-family: var(--font-serif);
    font-size: 48px;
    line-height: 1.2;

    @media screen and (max-width: 700px) {
      font-size: 40px;
    }
  }

  &__subtitle {
    font-family: var(--font-serif);
    font-size: 18px;
    color: var(--color-grey-500);
    margin-top: var(--spacing-xxxs);
  }

  &__content {
    margin-top: var(--spacing-xl);
    line-height: 1.6;
  }

  &__cta {
    display: inline-block;
    background: var(--color-primary);
    color: white;
    text-decoration: none;
    margin-top: var(--spacing-xl);
    padding: var(--spacing-md) var(--spacing-xl);
    transition: background 0.2s;

    &:hover {
      background: var(--color-primary-dark);
    }
  }

  &__close {
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    width: 80px;
    height: 80px;
    border: 2px solid white;
    color: white;
    position: absolute;
    z-index: -1;
    right: 100%;
    top: 0;

    @media screen and (max-width: 700px) {
      height: 62px;
      width: 72px;
      right: auto;
      left: 0;
      background: var(--color-grey-900);
      border: 0;
      z-index: 1;
    }

    &:hover,
    &.leaving {
      .project-details__close-icon::before,
      .project-details__close-icon::after {
        transform: rotate(0);
      }
    }
  }

  &__close-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    position: relative;

    &::before,
    &::after {
      content: "";
      position: absolute;
      background: white;
      width: inherit;
      height: 2px;
      transition: transform 0.1s;
    }

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  }
}

.project-navigation {
  background: var(--color-grey-900);
  display: flex;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }

  @media screen and (max-width: 900px) {
    flex-direction: row;
  }

  &__link {
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;
    padding: var(--spacing-lg) var(--spacing-md);
    color: var(--color-grey-200);

    @media screen and (max-width: 700px) {
      padding: var(--spacing-md) var(--spacing-sm);
    }

    &:first-child {
      border-right: 1px solid var(--color-grey-1000);

      @media screen and (max-width: 1200px) {
        border-right: 0;
        border-bottom: 1px solid var(--color-grey-1000);
      }

      @media screen and (max-width: 900px) {
        border-right: 1px solid var(--color-grey-1000);
        border-bottom: 0;
      }
    }

    &:hover {
      .project-navigation {
        &__image {
          opacity: 1;
          filter: saturate(1);
          transform: scale(1.05);
        }

        &__title {
          transform: translateX(0);
        }
      }
    }

    &--reverse {
      flex-direction: row-reverse;

      .project-navigation__title {
        padding-right: var(--spacing-sm);
        transform: translateX(var(--spacing-xl));
      }

      &:hover {
        .project-navigation {
          &__title {
            transform: translateX(0);
          }
        }
      }
    }
  }

  &__image {
    object-fit: cover;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    opacity: 0.55;
    filter: saturate(0);
    transition: opacity 0.3s, filter 0.3s, transform 0.3s;

    @media screen and (max-width: 900px) {
      width: 60px;
      height: 60px;
    }
  }

  &__title {
    position: relative;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    padding-left: var(--spacing-sm);
    transform: translateX(calc(-1 * var(--spacing-xl)));
    transition: transform 0.3s;
  }
}
</style>
