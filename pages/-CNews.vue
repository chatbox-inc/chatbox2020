<template>
  <section class="pt-16 pb-10">
    <div class="container mx-auto">
      <UiTitle :title="'News'" />
      <dev class="flex flex-row bg-gray-1024">
        <p class="inline-block leading-9 pr-8 text-xl">
          2020/55/55
        </p>
        <a class="bg-primary mt-1 h-8">
          <p class="h-8 w-32 text-sm text-white text-center py-2 m-2g">
            プレリリース
          </p>
        </a>
        <button
          class="inline-grid grid-cols-1 col-gap-4 pl-8 leading-9 text-xl text-left"
          href="#"
        >
          お知らせ/お知らせ/お知らせ/お知らせ/お知らせ/お知らせ/お知らせ/お知らせ/お知らせ/お知らせ/お知らせ/お知らせ/お知らせ/お知らせ/お知らせ/お知らせ/お知
        </button>
      </dev>
      <div class="flex flex-row bg-gray-1024 pt-5 pb-5">
        <p class="inline-block leading-9 pr-8 text-xl">
          2020/55/54
        </p>
        <a class="bg-primary mt-1 h-8">
          <p class="h-8 w-32 text-sm text-white text-center py-2 m-2g">
            プレリリース
          </p>
        </a>
        <space class="inline-grid grid-cols-1 col-gap-4 pl-8 leading-9 text-xl">
          お知らせ/お知らせ/お知らせ/お知らせ/お知らせ/お知らせ/お知らせ/お知ら
        </space>
      </div>
      <div class="flex flex-row bg-gray-1024 pt-5 pb-5">
        <p class="inline-block leading-9 pr-8 text-xl">
          2020/55/53
        </p>
        <a class="bg-primary mt-1 h-8">
          <p class="h-8 w-32 text-sm text-white text-center py-2 m-2g">
            イベント
          </p>
        </a>
        <space class="inline-grid grid-cols-1 col-gap-4 pl-8 leading-9 text-xl">
          お知らせ/お知らせ/お知らせ/お知らせ/お知らせ/お知らせ/お知らせ/お知ら
        </space>
      </div>
      <div class="flex flex-row bg-gray-1024 pt-5 pb-5">
        <p class="inline-block leading-9 pr-8 text-xl">
          2020/55/52
        </p>
        <a class="bg-primary mt-1 h-8">
          <p class="h-8 w-32 text-sm text-white text-center py-2 m-2g">
            イベント
          </p>
        </a>
        <space class="inline-grid grid-cols-1 col-gap-4 pl-8 leading-9 text-xl">
          お知らせ/お知らせ/お知らせ/お知らせ/お知らせ/お知らせ/お知らせ
        </space>
      </div>
      <div class="flex flex-row bg-gray-1024 pt-5 pb-5">
        <p class="inline-block leading-9 pr-8 text-xl">
          2020/55/51
        </p>
        <a class="bg-primary mt-1 h-8">
          <p class="h-8 w-32 text-sm text-white text-center py-2 m-2g">
            イベント
          </p>
        </a>
        <space class="inline-grid grid-cols-1 col-gap-4 pl-8 leading-9 text-xl">
          お知らせ/お知らせ/お知らせ/お知らせ/お知らせ/お知らせ/お知らせ
        </space>
      </div>
      <div class="bg-gray-1024 text-center">
        <!-- <button
          class="bg-primary bg-center font-bold text-white text-center py-6 px-40 rounded mt-12 mx-64"
        >
          <span>お知らせ一覧へ</span>
          <svg
            class="h-4 w-4 fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
            />
          </svg>
        </button> -->
        <UiButton :text="'お知らせ一覧へ'" :url="'#'" />
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.c-news {
  &__tag {
    font-size: 12px;
    background-color: rgb(195, 80, 79);
    position: absolute;
    width: 114px;
    height: 26px;
    text-align: center;
    line-height: 26px;
  }
}
</style>
