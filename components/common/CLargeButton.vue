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

<style lang="scss" scoped>
.c-largeButton {
  width: 800px;
  border: 1px solid #c3504f;

  &__img {
    width: 30%;
    height: 140px;
  }

  &__shadow {
    box-shadow: 7px 7px 0 0 #c3504f;
    transition: all 0.3s ease-in;

    &:hover {
      transform: translate(4px, 4px);
      -webkit-box-shadow: 3px 3px 0 0 #c3504f;
      box-shadow: 3px 3px 0 0 #c3504f;
      -webkit-transition: all 0.3s;
      transition: all 0.3s ease-in-out;
    }
  }
}
</style>
