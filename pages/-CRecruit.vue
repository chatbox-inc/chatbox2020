<template>
  <section class="pb-20 pt-10 mt-20 bg-ivory">
    <div class="container mx-auto text-center mt-8 relative px-6 sm:px-0">
      <div class="c-recruit__head absolute">
        <UiTitle :title="'Recruit'" />
      </div>
      <img
        class="mb-12"
        src="~assets/image/recruit/recruit_img@2x.png"
        alt="chatbox"
      />
      <p class="mx-auto text-black mb-10 text-left w-full lg:w-3/5">
        (仮)chatboxでは一緒に働く仲間を募集しています。文字の大きさ、量、字間、行間等を確認するために入れています。
        この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。
        <br />
        <br />※wantedlyへ飛びます
      </p>
      <UiButton :text="'採用情報へ'" :url="'#'" />
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.c-recruit {
  &__head {
    top: -130px;
  }
}
</style>
