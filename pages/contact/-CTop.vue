<template>
  <section class="text-secondly">
    <div class="container mx-auto">
      <div class="text-center">
        <UiTitle :title="'Contact'" class="lg:pt-3" />
        <p class="mt-12 tracking-widest">
          Web制作にまつわるお悩み、ご相談はお気軽にchatboxまで。
        </p>
      </div>
    </div>
    <div class="bg-ivory mt-12 text-center pt-16 pb-20">
      <div class="container mx-auto">
        <h3 class="text-xl font-bold tracking-widest">
          各種お問い合わせ
        </h3>
        <p class="mt-8">
          各種お問い合わせをご利用しております。お気軽にご利用ください。
        </p>
      </div>
      <div
        class="border bg-white border-primary container mx-auto mt-8 px-5 py-10"
      >
        <div class="flex text-center justify-center">
          <div class="w-3/5 relative c-top__divider">
            <p class="mb-5 text-xsm tracking-wider">
              SNS、チャットツールからお問い合わせ
            </p>
            <div class="flex space-x-4 justify-center">
              <UiSmallButton :image="'/image/contact/icon_facebook.svg'" />
              <UiSmallButton :image="'/image/contact/icon_chatwork.svg'" />
            </div>
          </div>
          <div class="w-2/5">
            <p class="mb-5 text-xsm tracking-wider">
              お電話でのお問い合わせ
            </p>
            <a href="#" class="text-3.5xl text-primary">050-3555-1212</a>
            <p class="mt-5">
              24時間対応:メッセージ預かり
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.c-top {
  &__divider {
    &:after {
      position: absolute;
      right: -10px;
      top: 0;
      content: '';
      height: 100%;
      width: 1px;
      background-color: #c35050;
      display: block;
    }
  }
}
</style>
