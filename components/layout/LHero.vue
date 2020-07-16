<template>
  <section v-if="title">
    <div class="c-hero__bg px-4 bg-cover bg-center">
      <div class="container mx-auto">
        <div class="pt-20 lg:pt-12 text-white">
          <h2 class="text-3.5xl font-bold">
            {{ title }}
          </h2>
          <p class="mt-12">
            {{ text }}
          </p>
        </div>
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
  &__bg {
    background-image: url(~assets/image/news/img@2x.png);
    min-height: 325px;
  }
}
</style>
