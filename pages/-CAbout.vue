<template>
  <section v-if="about" class="lg:py-20 pt-14 pb-20 bg-ivory">
    <div class="container mx-auto text-center px-5 sm:px-0">
      <UiTitle :title="about.title" us />
      <p
        class="mx-auto text-black mb-10 leading-loose text-left w-full lg:w-3/5"
      >
        {{ about.text }}
      </p>
      <UiButton text="会社概要へ" url="#" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    about: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.c-about {
}
</style>
