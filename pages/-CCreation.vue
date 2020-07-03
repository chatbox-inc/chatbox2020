<template>
  <section class="pb-10">
    <div class="container mx-auto">
      <h2 class="section-title">
        <span class="text-primary text-7xl">C</span>reation
      </h2>
      <div class="flex space-x-12">
        <div class="w-1/2">
          <h3 class="text-primary text-2xl">
            高い技術力を生かしたWeb制作
          </h3>
          <p class="leading-9 mt-4">
            chatbox の強みは高い技術力。
            様々なWeb制作、システム構築の制作・導入経験はもちろんのこと、
            日々、新しい技術を取り入れるために、定期的な技術交流イベント開催やセミナー登壇などを行っております。
          </p>
          <p class="leading-9">
            複数の現場で技術顧問として通用する chatbox
            の技術力だからこそ、お客様それぞれの課題に、適切な提案とサポートを提供できます。
          </p>
          <p class="leading-9">
            未来のビジネスを支える「Webのこれから」をお客様とともに見つけ出せる力が、chatboxの技術力です。
          </p>
          <figure>
            <img
              src="@/assets/image/creation/creation__photo01.jpg"
              alt="制作イメージ"
            />
          </figure>
        </div>
        <div class="w-1/2">
          <img
            class="c-intro__img"
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
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.c-intro {
  &__bg {
    padding-top: 250px;
    background-image: url(~assets/image/intro/intro__bg.jpg);
    background-size: contain;
    background-repeat: no-repeat;
  }

  &__box {
    padding-right: 10%;
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

  &__img {
    width: auto;
    height: 500px;
  }
}

.c-list {
  &__item {
    writing-mode: vertical-lr;
    text-orientation: upright;
  }
}
</style>
