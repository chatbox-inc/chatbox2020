<template>
  <a
    href="#"
    class="btn-large-sp lg:btn-large-pc lg:hover:btn-large-pressed inline-block"
  >
    <div class="flex items-center bg-white">
      <img
        :src="image"
        class="btn-large-spImg lg:btn-large-pcImg object-cover"
        alt="イメージ画像"
      />
      <p class="text-primary mx-auto text-sm lg:text-2xl font-bold">
        {{ text }}
      </p>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    image: {
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
