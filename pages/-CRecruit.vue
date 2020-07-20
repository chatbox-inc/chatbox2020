<template>
  <section class="pb-20 pt-10 mt-20 bg-ivory" v-if="recruit">
    <div class="container mx-auto text-center mt-8 relative px-5 sm:px-0">
      <div class="c-recruit__head absolute">
        <UiTitle :title="recruit.title" />
      </div>
    </div>
    <div class="container mx-auto text-center mt-8 relative px-5 sm:px-0">
      <img
        class="mb-12"
        src="~assets/image/recruit/recruit_img@2x.png"
        alt="chatbox"
      />
      <p class="mx-auto text-black mb-10 text-left w-full lg:w-3/5">
        {{ recruit.text }}
        <br />※wantedlyへ飛びます
      </p>
      <div class="c-recruit__btn">
        <UiButton text="採用情報へ" :url="''" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    recruit: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.c-recruit {
  &__head {
    background: linear-gradient(#fff 50%, #faf7f7 0);
  }
}
</style>
