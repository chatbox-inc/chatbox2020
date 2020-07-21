<template>
  <h2 v-if="title" class="c-title text-28px lg:text-5xl text-black font-normal">
    <span class="text-primary text-42px lg:text-7xl">{{ firstLetter }}</span>
    <span class="c-title__text relative">{{ restLetter }}</span>
  </h2>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    firstLetter() {
      return this.title.charAt(0)
    },
    restLetter() {
      return this.title.slice(1)
    },
  },
}
</script>

<style lang="scss" scoped>
.c-title {
  font-family: Yu Mincho Medium, YuMincho, serif;
  line-height: 110px;

  &__text {
    left: -5px;
  }
}
</style>
