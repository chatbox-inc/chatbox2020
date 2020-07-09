<template>
  <section v-if="title" class="c-hero">
    <div class="c-hero__bg">
      <div class="c-head">
        <h2 class="c-head__title">
          {{ title }}
        </h2>
        <p class="c-head__text">
          {{ text }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.c-hero {
  width: 100%;
  &__bg {
    min-height: 32.5rem;
    padding: 0 1.5rem;
    background-position: center;
  }
}
.c-head {
  width: 100%;
  max-width: 94rem;
  padding: 7rem 0 6rem;
  margin: 0 auto;

  &__title {
    left: 0;
    font-size: 3.5rem;
    font-weight: bold;
    line-height: 4.8rem;
    color: white;
    letter-spacing: 0.105rem;
  }
  &__text {
    padding-top: 5rem;
    font-size: 1.8rem;
    line-height: 3.6rem;
    color: white;
  }
}
</style>
