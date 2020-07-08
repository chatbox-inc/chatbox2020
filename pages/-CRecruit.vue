<template>
  <section class="pt-32 mt-32 pb-20 bg-ivory">
    <div class="container mx-auto text-center relative">
      <h2 class="c-recruit__title section-title absolute left-0 mb-8 text-left">
        <span class="text-primary text-7xl">R</span>ecruit
      </h2>
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
      <CButton :text="'採用情報へ'" :url="'#'" />
      <!--      <a-->
      <!--        class="c-recruit__btn inline-block relative text-base bg-primary p-6 rounded text-white text-center w-4/5 lg:w-2/5 lg:text-lg lg:p-8 transition ease-out duration-700 hover:opacity-75"-->
      <!--        href="#"-->
      <!--      >-->
      <!--        採用情報へ-->
      <!--        <img-->
      <!--          class="c-recruit__arrow w-8 inline absolute top-1/2 -translate-y-1/2"-->
      <!--          src="@/assets/image/contact/keyboard_arrow_right-24px.svg"-->
      <!--          alt="arrow"-->
      <!--        />-->
      <!--      </a>-->
    </div>
  </section>
</template>

<script>
import CButton from '@/components/common/CButton'
export default {
  components: {
    CButton,
  },
}
</script>

<style lang="scss" scoped>
.c-recruit {
  &__title {
    top: -190px;
  }
}
</style>
