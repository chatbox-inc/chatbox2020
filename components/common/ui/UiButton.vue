<template>
  <a
    class="btn inline-block relative cursor-pointer text-base bg-primary p-6 rounded text-white text-center w-full lg:w-2/5 lg:text-lg lg:p-8 transition ease-out duration-700 hover:opacity-75"
    :href="url"
  >
    {{ text }}
    <img
      class="btn__arrow w-8 inline absolute"
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
.btn {
  &:hover {
    .btn__arrow {
      right: 0;
      transition: all 0.5s;
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
