<template>
  <section v-if="about" class="lg:py-20 pt-14 pb-20">
    <div class="container mx-auto text-center px-5">
      <UiTitle class="pt-6" :title="about.title" />
      <p
        class="mx-auto text-black text-sm mb-10 leading-loose text-left w-full lg:text-base lg:w-3/5"
      >
        {{ about.text }}
      </p>
      <UiButton text="会社概要へ" url="/about" />
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
