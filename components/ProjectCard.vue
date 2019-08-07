<template>
  <article class="project-card">
    <h3 class="project-card__title">{{ project.Title }}</h3>
    <img class="project-card__image" :src="image" />
  </article>
</template>

<script>
export default {
  props: {
    project: Object
  },
  computed: {
    image() {
      return process.env.baseUrl + this.project.Image.path;
    }
  }
};
</script>

<style lang="scss" scoped>
.project-card {
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: var(--spacing-xxxxl) 0;
  text-align: right;
  width: 60%;
  max-width: 600px;
  position: relative;
  align-self: flex-start;

  @media screen and (max-width: 900px) {
    width: 75%;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    display: block;
    text-align: left;
    margin: var(--spacing-xl) 0;
  }

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

    @media screen and (max-width: 700px) {
      position: static;
      margin-bottom: var(--spacing-xxs);
    }
  }

  &__image {
    opacity: 0.55;
    filter: saturate(0);
    width: 75%;
    max-width: 100%;
    transition: opacity 0.3s, filter 0.3s, transform 0.3s;

    @media screen and (max-width: 700px) {
      opacity: 1;
      filter: saturate(1);
      width: 100%;
    }
  }

  &:hover & {
    &__title {
      transform: translateX(-25%);

      @media screen and (max-width: 700px) {
        transform: translateY(-12px);
      }
    }

    &__image {
      opacity: 1;
      filter: saturate(1);
      transform: scale(1.05);
    }
  }
}
</style>
