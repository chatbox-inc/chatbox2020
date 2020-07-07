<template>
  <section class="pt-32 mt-32 pb-20 bg-ivory">
    <div class="container mx-auto text-center relative">
      <h2
        class="c-recruit__title section-title absolute top-0 left-0 mb-8 text-left"
      >
        <span class="text-primary text-7xl">R</span>ecruit
      </h2>
      <img
        class="c-recruit__imag mb-12"
        src="~assets/image/recruit/recruit_img@2x.png"
        alt="chatbox"
      />
      <p class="text-black mb-10 ml-56 mr-56 text-left">
        (仮)chatboxでは一緒に働く仲間を募集しています。文字の大きさ、量、字間、行間等を確認するために入れています。
        この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。
        <br />
        <br />※wantedlyへ飛びます
      </p>
      <a class="btn" href="#">
        採用情報へ
      </a>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.c-recruit {
  &__title {
    position: absolute;
    top: -190px;
    left: 0;
  }
}
</style>
