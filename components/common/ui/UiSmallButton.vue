<template>
  <a
    :href="link"
    class="bg-primary relative inline-block rounded px-4 py-8"
    style="width: 300px;"
  >
    <img
      :src="image"
      alt="遷移先アイコン"
      class="absolute c-button__icon h-8"
    />
    <p class="text-white text-center">FaceBookから<br />メッセージを送る</p>
    <img
      src="@/static/image/contact/icon_arrow-white.svg"
      alt="ここをクリック"
      class="absolute c-button__icon"
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
  &__icon {
    top: 50%;
    transform: translateY(-50%);
    &:nth-child(3) {
      right: 15px;
    }
  }
}
</style>
