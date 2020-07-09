<template>
  <section class="pb-10">
    <div class="c-enjoy_head">
      <div class="container mx-auto">
        <UiTitle :title="'Enjoy'" />
      </div>
    </div>
    <div class="container mx-auto pt-3">
      <div class="flex space-x-12">
        <div class="w-1/2">
          <h3 class="text-primary text-2xl tracking-widest">
            IT系イベントの運営・支援を通じて、高い技術力を維持
          </h3>
          <p class="leading-9 mt-4 tracking-wider">
            chatboxでは、最新のWeb技術を学び、交流するイベントやセミナーの開催にも力を入れています。
          </p>
          <p class="leading-9 tracking-wider">
            <a href="https://kfug.connpass.com/" class="text-primary">
              関西フロントエンドUG
            </a>
            や
            <a href="https://laravel.connpass.com/" class="text-primary">
              Laravel.Osaka
            </a>
            などの各種コミュニティ運営や、有料のセミナー・イベント
            <a href="https://leccafe.connpass.com/" class="text-primary">
              Lec Cafe
            </a>
            など、関西最大級のIT系セミナー力で、定期的なイベントを開催を続けています。
          </p>
          <p class="leading-9 tracking-wider">
            イベントを通じ、より多くの人が新しいWebの技術を学び、語り合える文化を作りたい。「Webのこれからを」を語り合うchatbox
            にとって、なくてはならない制作活動の一つです。
          </p>
          <figure class="mt-12">
            <img
              src="@/assets/image/enjoy/enjoy_photo01.jpg"
              alt=""
              class="c-box__img w-full object-cover"
            />
          </figure>
        </div>
        <div class="w-1/2">
          <img
            src="@/assets/image/enjoy/enjoy_photo02.jpg"
            alt=""
            class="c-enjoy__img w-full object-cover"
          />
          <ul class="flex text-primary">
            <li class="c-list__item m-3">
              スクール
            </li>
            <li class="c-list__item m-3">
              イベント
            </li>
          </ul>
        </div>
      </div>
      <div class="text-center mt-12 c-enjoy__bg">
        <UiLargeButton
          :url="''"
          :image="'/image/enjoy/enjoy_btn.jpg'"
          :text="'イベント・スクールについて'"
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
.c-enjoy {
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
