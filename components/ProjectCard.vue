<template>
  <article class="project-card">
    <h3 class="project-card__title">{{ project.title }}</h3>
    <img class="project-card__image" :src="project.image" />
  </article>
</template>

<script>
export default {
  props: {
    project: Object
  }
};
</script>

<style lang="scss" scoped>
.project-card {
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: var(--spacing-xxxxl);
  text-align: right;
  width: 60%;
  position: relative;
  align-self: flex-start;

  &:nth-child(odd) {
    align-self: flex-end;
  }

  &__title {
    position: absolute;
    z-index: 1;
    left: 0;
    right: 60%;
    font-size: 32px;
    line-height: 1.2;
    text-shadow: 0 2px 12px rgba(0, 0, 0, 0.6);
    transition: transform 0.3s;
  }

  &__image {
    opacity: 0.55;
    filter: saturate(0);
    width: 75%;
    max-width: 100%;
    transition: opacity 0.3s, filter 0.3s, transform 0.3s;
  }

  &:hover & {
    &__title {
      transform: translateX(-25%);
    }

    &__image {
      opacity: 1;
      filter: saturate(1);
      transform: scale(1.05);
    }
  }
}
</style>
