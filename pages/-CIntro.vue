<template>
  <section class="pt-16 pb-10">
    <div class="container mx-auto text-black px-6 sm:p-0">
      <UiTitle
        class="c-intro__title lg:mb-6"
        :title="'We are thinking about Web'"
      />
      <div class="c-intro__bg bg-no-repeat bg-contain pt-24 lg:pt-64">
        <div
          class="c-intro__box mx-auto z-10 tracking-wider bg-white w-11/12 p-6 lg:w-full lg:pr-24 lg:p-12"
        >
          <h3 class="text-primary tracking-widest mb-4 text-1xl lg:text-2xl">
            作るだけなく、伝え語り合う会社でありたい
          </h3>
          <p class="leading-7 lg:leading-8 text-sm lg:text-base">
            株式会社 chatbox は大阪の小さなWeb制作会社です。
            様々なWeb制作の現場で、「Webのこれからを語り合う」をテーマにWebの可能性を追求し続けています。
            Web制作という「作る」業務だけでなく、Webの技術を「伝える」「語り合う」会社として、
            制作現場での技術指導や、イベント・セミナーなどの交流活動にも積極的に取り組んでいます。
            身の回りにありふれたWebだからこそ、そこにしか無い、そこだけのWebの形を。
            現場と、お客様と、ユーザーと、一緒に考えていくのがchatboxのWeb制作のあり方です。
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.c-intro {
  &__bg {
    background-image: url(~assets/image/intro/intro__bg.jpg);
  }
  &__box {
    background: -webkit-gradient(
      linear,
      right top,
      left top,
      from(hsla(0, 0%, 99%, 0)),
      color-stop(10%, hsla(0, 0%, 99%, 0.5)),
      color-stop(20%, hsla(0, 0%, 100%, 0.8)),
      color-stop(25%, hsla(0, 0%, 100%, 0.85)),
      color-stop(61%, hsla(0, 0%, 100%, 0.9)),
      color-stop(80%, #fff)
    );
  }
}
@media (max-width: 980px) {
  .c-intro {
    &__box {
      background: white;
    }
    &__title {
      font-size: 20px;
    }
  }
}
</style>

/* .section-title { @apply font-normal text-black text-5xl; font-family: Yu
Mincho Medium,YuMincho,serif; line-height:110px; } */
