<template>
  <section class="lg:mb-32">
    <div class="c-enjoy__head">
      <div class="container mx-auto px-5 sm:p-0">
        <UiTitle title="Enjoy" />
      </div>
    </div>
    <div class="container mx-auto text-black px-4 sm:p-0">
      <div class="lg:flex lg:space-x-12">
        <div class="w-full lg:w-1/2">
          <h3 class="text-primary text-1xl lg:text-2xl tracking-widest">
            IT系イベントの運営・支援を通じて、高い技術力を維持
          </h3>
          <p
            class="leading-7 lg:leading-8 mt-4 lg:mt-8 tracking-wider text-sm lg:text-base"
          >
            chatboxでは、最新のWeb技術を学び、交流するイベントやセミナーの開催にも力を入れています。
          </p>
          <p class="leading-7 lg:leading-8 tracking-wider text-sm lg:text-base">
            <a href="https://kfug.connpass.com/" class="text-primary underline">
              関西フロントエンドUG
            </a>
            や
            <a
              href="https://laravel.connpass.com/"
              class="text-primary underline"
            >
              Laravel.Osaka
            </a>
            などの各種コミュニティ運営や、有料のセミナー・イベント
            <a
              href="https://leccafe.connpass.com/"
              class="text-primary underline"
            >
              Lec Cafe
            </a>
            など、関西最大級のIT系セミナー力で、定期的なイベントを開催を続けています。
          </p>
          <p class="leading-7 lg:leading-8 tracking-wider text-sm lg:text-base">
            イベントを通じ、より多くの人が新しいWebの技術を学び、語り合える文化を作りたい。「Webのこれからを」を語り合うchatbox
            にとって、なくてはならない制作活動の一つです。
          </p>
          <figure>
            <img
              src="@/assets/image/enjoy/enjoy_photo01.jpg"
              alt=""
              class="mt-6 lg:mt-12 object-cover object-top w-full h-200px lg:h-full"
            />
          </figure>
        </div>
        <div class="flex lg:block lg:w-1/2 mt-2 lg:mt-0">
          <img
            src="@/assets/image/enjoy/enjoy_photo02.jpg"
            alt=""
            class="h-200px w-3/5 lg:h-500px lg:w-full object-cover mb-3"
          />
          <ul class="text-primary text-xs ml-2 mt-3 lg:ml-3 lg:m-0 lg:text-sm">
            <li class="mb-6">
              スクール
            </li>
            <li>
              イベント
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="c-enjoy__btn text-center lg:mt-12">
      <UiLargeButton
        url=""
        image="/image/enjoy/enjoy_btn.jpg"
        text="イベント・スクールについて"
        class="text-left"
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
.c-enjoy {
  &__head {
    background: linear-gradient(#fff 50%, #faf7f7 0);
  }
  &__btn {
    background: linear-gradient(#faf7f7 50%, #fff 0);
  }
}
</style>
