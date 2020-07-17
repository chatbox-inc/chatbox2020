<template>
  <section class="pb-20 pt-6 lg:mb-24">
    <div class="container mx-auto text-black px-5">
      <UiTitle class="lg:mb-5" title="Talking" />
      <div class="lg:flex lg:space-x-12">
        <div class="w-full lg:w-1/2">
          <h3 class="text-primary text-1xl lg:text-2xl tracking-widest">
            技術豊富なスタッフがお客様の開発現場に直接訪問
          </h3>
          <p
            class="leading-7 lg:leading-8 mt-4 lg:mt-8 tracking-wider text-sm lg:text-base"
          >
            chatbox
            の技術顧問サービスは、制作現場の業務効率化を強力に支援します。
          </p>
          <p class="leading-7 lg:leading-8 tracking-wider text-sm lg:text-base">
            最新技術のレクチャーやコードレビューなどといった日々の業務改善から、
            制作フローの見直しやプロジェクトの進行管理、教育プロセスの改善といった長期的な改善まで、
            技術に関する様々な課題解決のサポートを、複数のWeb制作現場で実施しています。
          </p>
          <p class="leading-7 lg:leading-8 tracking-wider text-sm lg:text-base">
            日々複雑化するWeb制作の技術の中で、常に「Webのこれから」を求め続けることの出来る
            未来志向の制作現場づくりを chatbox がサポートします。
          </p>
          <figure>
            <img
              class="mt-12 object-cover object-top w-full h-200px lg:h-full"
              src="@/assets/image/talking/talking_photo01.jpg"
              alt=""
            />
          </figure>
        </div>
        <div class="flex lg:block lg:w-1/2 mt-2 lg:mt-0">
          <img
            class="h-200px w-2/3 lg:h-500px lg:w-full object-cover mb-3"
            src="@/assets/image/talking/talking_photo02.jpg"
            alt=""
          />
          <ul class="text-primary text-xs ml-2 mt-3 lg:ml-3 lg:m-0 lg:text-sm">
            <li class="mb-6">
              社員研修
            </li>
            <li>
              技術顧問
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="text-black text-center lg:mt-12">
      <UiLargeButton
        url=""
        image="/image/talking/talking_btn.jpg"
        text="技術顧問について"
      />
    </div>
  </section>
</template>

<script>
export default {
  components: {},
}
</script>

<style lang="scss" scoped>
.c-talking {
  &__img {
    height: 500px;
  }
}
</style>
