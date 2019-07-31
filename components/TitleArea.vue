<template>
  <div class="title">
    <h1 class="title__main">
      {{ topTitle }}
      <br />
      {{ bottomTitle }}
    </h1>
    <h2 class="title__sub">{{ subtitle }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    topTitle: String,
    bottomTitle: String,
    subtitle: String
  }
};
</script>


<style lang="scss" scoped>
.title {
  &__main {
    font-family: var(--font-serif);
    font-size: 68px;
    text-transform: uppercase;
    line-height: 1.1;

    @media screen and (max-width: 1300px) {
      font-size: 56px;
    }
  }

  &__sub {
    margin-top: var(--spacing-xs);
    font-weight: 40;

    @media screen and (max-width: 1300px) {
      font-size: 20px;
    }
  }
}
</style>

