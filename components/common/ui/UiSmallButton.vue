<template>
  <a
    :href="'#'"
    class="bg-primary c-button relative inline-block rounded px-4 py-5 hover:opacity-75"
  >
    <img
      :src="image"
      alt="遷移先アイコン"
      class="absolute c-button__icon h-6"
    />
    <p class="text-white text-center">FaceBookから<br />メッセージを送る</p>
    <img
      src="@/static/image/contact/icon_arrow-white.svg"
      alt="ここをクリック"
      class="absolute c-button__icon h-5"
    />
  </a>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.c-button {
  width: 45%;
  font-size: 15px;
  transition: 0.5s;

  &:hover {
    .c-button__icon {
      &:nth-child(3) {
        transition: 0.5s;
        right: 8px;
      }
    }
  }
  &__icon {
    top: 50%;
    transform: translateY(-50%);
    &:nth-child(3) {
      transition: 0.5s;
      right: 15px;
    }
  }
}
</style>
