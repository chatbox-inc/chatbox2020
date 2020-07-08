.section-title { @apply font-normal text-black text-5xl; font-family: Yu Mincho
Medium,YuMincho,serif; line-height:110px; }
<template>
  <section class="pt-32 mt-32 pb-20 bg-ivory">
    <div class="container mx-auto text-center relative">
      <!-- <h2 class="c-recruit__title section-title absolute left-0 mb-8 text-left">
        <span class="text-primary text-7xl">R</span>ecruit
      </h2> -->
      <ui-title :title="'Recruit'" />
      <img
        class="mb-12"
        src="~assets/image/recruit/recruit_img@2x.png"
        alt="chatbox"
      />
      <p class="mx-auto text-black mb-10 text-left w-4/5 lg:w-3/5">
        (仮)chatboxでは一緒に働く仲間を募集しています。文字の大きさ、量、字間、行間等を確認するために入れています。
        この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。
        <br />
        <br />※wantedlyへ飛びます
      </p>
      <UIButton :text="'採用情報へ'" :url="'#'" />
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.c-recruit {
  &__title {
    top: -190px;
  }
}
</style>
