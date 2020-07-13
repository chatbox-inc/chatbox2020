<template>
  <section class="mb-32">
    <div class="c-creation__head">
      <div class="container mx-auto px-5 sm:p-0">
        <UiTitle class="lg:mb-5" :title="'Creation'" />
      </div>
    </div>
    <div class="container mx-auto text-black px-5 sm:p-0">
      <div class="lg:flex lg:space-x-12">
        <div class="w-full lg:w-1/2">
          <h3 class="text-primary text-1xl lg:text-2xl tracking-widest">
            高い技術力を生かしたWeb制作
          </h3>
          <p
            class="leading-7 lg:leading-8 mt-4 lg:mt-8 tracking-wider text-sm lg:text-base"
          >
            chatbox の強みは高い技術力。
            様々なWeb制作、システム構築の制作・導入経験はもちろんのこと、
            日々、新しい技術を取り入れるために、定期的な技術交流イベント開催やセミナー登壇などを行っております。
          </p>
          <p class="leading-7 lg:leading-8 tracking-wider text-sm lg:text-base">
            複数の現場で技術顧問として通用する chatbox
            の技術力だからこそ、お客様それぞれの課題に、適切な提案とサポートを提供できます。
          </p>
          <p class="leading-7 lg:leading-8 tracking-wider text-sm lg:text-base">
            未来のビジネスを支える「Webのこれから」をお客様とともに見つけ出せる力が、chatboxの技術力です。
          </p>
          <figure>
            <img
              src="@/assets/image/creation/creation__photo01.jpg"
              alt="制作イメージ"
              class="mt-6 lg:mt-12 object-cover object-top w-full h-200px lg:h-full"
            />
          </figure>
        </div>
        <div class="flex lg:block lg:w-1/2 mt-2 lg:mt-0">
          <img
            class="h-200px w-3/5 lg:h-500px lg:w-full object-cover mb-3"
            src="@/assets/image/creation/creation__photo02.jpg"
            alt=""
          />
          <ul class="text-primary text-xs ml-2 mt-3 lg:ml-3 lg:m-0 lg:text-sm">
            <li class="mb-6">
              Webシステム制作
            </li>
            <li>
              Webページ制作
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="text-center lg:mt-12 c-creation__btn">
      <UiLargeButton
        :url="''"
        :image="'/image/creation/creation_btn.jpg'"
        :text="'Web制作について'"
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
.c-creation {
  &__head {
    background: linear-gradient(#fff 50%, #faf7f7 0);
  }
  &__btn {
    background: linear-gradient(#faf7f7 50%, #fff 0);
  }
}
</style>
