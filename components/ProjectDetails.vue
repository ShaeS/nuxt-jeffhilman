<template>
  <section v-if="currentProject" class="project-details">
    <div class="project-details__left">
      <div class="project-details__image-wrap">
        <img class="project-details__image" :src="currentProject.image" />
      </div>
      <div class="project-navigation">
        <div @click="$emit( 'prev' )" class="project-navigation__link">
          <img class="project-navigation__image" :src="previousProject.image" alt="" />
          <h4 class="project-navigation__title">{{ previousProject.title }}</h4>
        </div>
        <div @click="$emit( 'next' )" class="project-navigation__link project-navigation__link--reverse">
          <img class="project-navigation__image" :src="nextProject.image" alt="" />
          <h4 class="project-navigation__title">{{ nextProject.title }}</h4>
        </div>
      </div>
    </div>
    <div class="project-details__right">
      <h3 class="project-details__title">{{ currentProject.title }}</h3>
      <p class="project-details__content">
        As an enthusiastic audio professional making strides in Vancouver's video game scene, Jeff Hilman is looking to use his skills and expertise to enhance any and all types of game projects including mobile, console, VR, or otherwise.
        <br />
        <br />Proficient in game audio implementation and of course sound design, Jeff previously shipped "Puzzle Fighter" with Capcom Game Studio Vancouver at the end of 2017 and also provided his skills to an unannounced project.
      </p>
    </div>
    <button @click="$emit( 'close' )" class="project-details__close" :class="{ leaving }"><span class="project-details__close-icon"></span></button>
  </section>
</template>

<script>
import { enter, leave, enterNew, leaveOld } from '~/animations/project-details';

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
    }
  },
  watch: {
    projectIndex(newVal, oldVal) {
      this.leaving = false;
      if ( oldVal === null ) {
        this.enterTransition();
      } else if ( newVal === null ) {
        this.leaveTransition();
      } else {
        this.leaveOldProject();
      }
    }
  },
  computed: {
    activeProject() {
      return this.projects[this.projectIndex];
    },
    prevPro() {
      return this.projects[( this.projectIndex + this.projects.length - 1 ) % this.projects.length];
    },
    nextPro() {
      return this.projects[( this.projectIndex + 1 ) % this.projects.length];
    }
  },
  methods: {
    enterTransition() {
      this.currentProject = this.activeProject;
      this.previousProject = this.prevPro;
      this.nextProject = this.nextPro;
      this.$nextTick( () => {
        enter( this.$store, this.$el );
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
      this.$nextTick( () => {
        enterNew(this.$store);
      });
    },
    leaveOldProject() {
      leaveOld(this.$store, () => this.enterNewProject());
    },
  },
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

  &__left {
    display: flex;
    flex-direction: column;
    background: var(--color-grey-1000);
    width: 500px;
  }

  &__right {
    flex: 1;
    padding: var(--spacing-xxxl) var(--spacing-xxl);
  }

  &__image-wrap {
    flex: 1;
    display: flex;
    align-items: center;
  }

  &__image {
    max-width: 100%;
  }

  &__title {
    font-family: var(--font-serif);
    font-size: 48px;
    margin-bottom: var(--spacing-xl);
  }

  &__content {
    line-height: 1.6;
  }

  &__close {
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

  &__link {
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;
    padding: var(--spacing-lg) var(--spacing-md);
    color: var(--color-grey-200);

    &:first-child {
      border-right: 1px solid var(--color-grey-1000);
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
  }

  &__title {
    position: relative;
    text-shadow: 0 2px 8px rgba(0,0,0,0.5);
    padding-left: var(--spacing-sm);
    transform: translateX(calc( -1 * var(--spacing-xl) ));
    transition: transform 0.3s;
  }
}
</style>
