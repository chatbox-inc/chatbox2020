<template>
  <section class="pb-10">
    <div class="c-creation__head">
      <div class="container mx-auto">
        <UiTitle :title="'Creation'" />
      </div>
    </div>
    <div class="container mx-auto pt-3">
      <div class="flex space-x-12">
        <div class="w-1/2">
          <h3 class="text-primary text-2xl tracking-widest">
            高い技術力を生かしたWeb制作
          </h3>
          <p class="leading-9 mt-4 tracking-wider">
            chatbox の強みは高い技術力。
            様々なWeb制作、システム構築の制作・導入経験はもちろんのこと、
            日々、新しい技術を取り入れるために、定期的な技術交流イベント開催やセミナー登壇などを行っております。
          </p>
          <p class="leading-9 tracking-wider">
            複数の現場で技術顧問として通用する chatbox
            の技術力だからこそ、お客様それぞれの課題に、適切な提案とサポートを提供できます。
          </p>
          <p class="leading-9 tracking-wider">
            未来のビジネスを支える「Webのこれから」をお客様とともに見つけ出せる力が、chatboxの技術力です。
          </p>
          <figure class="mt-12">
            <img
              src="@/assets/image/creation/creation__photo01.jpg"
              alt="制作イメージ"
              class="c-box__img w-full object-cover"
            />
          </figure>
        </div>
        <div class="w-1/2">
          <img
            class="c-creation__img w-full object-cover"
            src="@/assets/image/creation/creation__photo02.jpg"
            alt=""
          />
          <ul class="flex text-primary">
            <li class="c-list__item m-3">
              Webページ制作
            </li>
            <li class="c-list__item m-3">
              Webシステム制作
            </li>
          </ul>
        </div>
      </div>
      <div class="text-center mt-12 c-creation__bg">
        <UiLargeButton
          :url="''"
          :image="'/image/creation/creation_btn.jpg'"
          :text="'Web制作について'"
        />
      </div>
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

  &__img {
    height: 500px;
  }
}

.c-list {
  &__item {
    font-size: 17px;
    writing-mode: vertical-lr;
    text-orientation: upright;
  }
}

.c-box {
  &__img {
    height: 320px;
  }
}
</style>
