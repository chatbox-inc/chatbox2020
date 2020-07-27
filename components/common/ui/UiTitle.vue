<template>
  <h2
    v-if="title"
    class="text-28px c-title__font lg:text-5xl text-black font-normal"
  >
    <span
      class="text-primary lg:hidden -mr-2 c-title__titleSp text-42px lg:text-7xl"
    >
      {{ firstLetter }}
    </span>

    <span
      class="text-primary hidden lg:inline c-title__title text-42px lg:text-7xl"
    >
      {{ firstLetter }}
    </span>
    <span class="lg:hidden c-title__textSp c-title__titleSp relative">
      {{ restLetter }}
    </span>
    <span class="c-title__text hidden lg:inline c-title__title relative">{{
      restLetter
    }}</span>
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
  &__title {
    line-height: 110px;
  }

  &__titleSp {
    line-height: 56px;
  }

  &__font {
    font-family: Yu Mincho Medium, YuMincho, serif;
  }

  &__text {
    left: -23px;
  }

  &__textSp {
    left: -5px;
  }
}
</style>
