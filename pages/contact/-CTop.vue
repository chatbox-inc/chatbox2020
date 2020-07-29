<template>
  <section class="text-secondly">
    <div class="container mx-auto px-5 lg:px-0">
      <div class="text-center">
        <UiTitle title="Contact" class="lg:pt-3" />
        <p
          class="lg:mt-12 text-xsm lg:text-base leading-loose tracking-widest tracking-4px"
        >
          Web制作にまつわるお悩み、ご相談はお気軽にchatboxまで。
        </p>
      </div>
    </div>
    <div class="bg-ivory mt-12 text-center pt-8 pb-10 lg:pt-16 lg:pb-20">
      <div class="container mx-auto px-5">
        <h3 class="lg:text-xl font-bold tracking-widest">
          各種お問い合わせ
        </h3>
        <p class="mt-8 text-sm lg:text-base">
          各種お問い合わせをご利用しております。お気軽にご利用ください。
        </p>
      </div>
      <div class="px-5 lg:px-0">
        <div
          class="border bg-white border-primary container mx-auto mt-8 px-5 py-10"
        >
          <div
            class="flex flex-col lg:px-0 lg:flex lg:flex-row text-center justify-center"
          >
            <div
              class="w-full lg:w-3/5 relative border-b lg:border-r lg:border-b-0 border-primary"
            >
              <p class="mb-5 text-sm tracking-wider">
                SNS、チャットツールからお問い合わせ
              </p>
              <div
                class="flex flex-col pb-10 px-5 lg:flex lg:flex-row lg:space-x-4 justify-center space-y-5 lg:px-4 lg:pb-0 lg:space-y-0"
              >
                <UiSmallButton
                  link="https://www.facebook.com/chatbox.inc/"
                  :image="'/image/contact/icon_facebook.svg'"
                  title="Facebookから"
                />
                <UiSmallButton
                  link="https://www.chatwork.com/g/chatbox-inc"
                  :image="'/image/contact/icon_chatwork.svg'"
                  title="Chatworkから"
                />
              </div>
            </div>
            <div class="w-full mt-10 lg:mt-0 lg:w-2/5">
              <p class="mb-5 text-sm lg:text-xsm tracking-wider">
                お電話でのお問い合わせ
              </p>
              <a href="tel:05035551212" class="text-3.5xl text-primary">
                050-3555-1212
              </a>
              <p class="text-sm lg:text-base mt-5">
                24時間対応:メッセージ預かり
              </p>
            </div>
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
