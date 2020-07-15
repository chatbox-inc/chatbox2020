<template>
  <a
    class="c-btn__btn inline-block relative cursor-pointer text-base bg-primary px-6 rounded text-white text-center w-full lg:w-2/5 lg:text-lg lg:px-8 lg:py-4 transition ease-out duration-700 hover:opacity-75"
    href="#"
    @click.prevent="$emit('submitForm')"
  >
    送信する
    <img
      class="c-btn__arrow w-8 inline absolute"
      src="@/assets/image/contact/keyboard_arrow_right-24px.svg"
      alt="arrow"
    />
  </a>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.c-btn {
  &__btn {
    &:hover {
      .c-btn__arrow {
        right: 0;
        transition: all 0.5s;
      }
    }
  }
  &__arrow {
    top: 50%;
    transform: translateY(-50%);
    right: 3%;
    transition: all 0.5s;
  }
}
</style>
