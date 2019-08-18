<template>
  <a
    :href="project.linkurl"
    class="mini-project"
    target="_blank">
    <img
      :src="image"
      class="mini-project__image" >
    <h3 class="mini-project__title">{{ project.Title }}</h3>
  </a>
</template>

<script>
export default {
  props: {
    project: Object,
  },
  computed: {
    image() {
      return process.env.baseUrl + this.project.Image.path;
    },
  },
};
</script>

<style lang="scss" scoped>
.mini-project {
  text-decoration: none;
  display: flex;
  align-items: center;
  color: var(--color-grey-900);

  &__title {
    position: relative;
    padding-left: var(--spacing-sm);
    transform: translateX(calc(-1 * var(--spacing-xl)));
    transition: transform 0.3s;
  }

  &__image {
    object-fit: cover;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    opacity: 0.25;
    filter: saturate(0);
    transition: opacity 0.3s, filter 0.3s, transform 0.3s;

    @media screen and (max-width: 900px) {
      width: 60px;
      height: 60px;
    }
  }

  &:hover {
    .mini-project {
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
}
</style>
