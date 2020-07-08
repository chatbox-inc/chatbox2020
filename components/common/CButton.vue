<template>
  <a
    class="c-recruit__btn inline-block relative cursor-pointer text-base bg-primary p-6 rounded text-white text-center w-4/5 lg:w-2/5 lg:text-lg lg:p-8 transition ease-out duration-700 hover:opacity-75"
    :href="url"
  >
    {{ text }}
    <img
      class="c-recruit__arrow w-8 inline absolute top-1/2 -translate-y-1/2"
      src="@/assets/image/contact/keyboard_arrow_right-24px.svg"
      alt="arrow"
    />
  </a>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.c-recruit {
  &__btn {
    &:hover {
      .c-recruit__arrow {
        right: 0;
        transition: all 0.5s;
      }
    }
  }
  &__arrow {
    right: 3%;
    transition: all 0.5s;
  }
}
</style>
