<template>
  <section class="c-404 text-center container mx-auto pr-2 pl-2">
    <div>
      <p
        class="errorMessage text-primary font-bold mt-24 text-center mb-10 lg:mb-12 text-3xl lg:text-5xl lg:block"
      >
        404 Not Found
      </p>
    </div>
    <div class="text-center font-medium">
      <p class="c-404__text text-xs leading-9 mb-4 font-bold lg:text-xl">
        お探しのページは見つかりませんでした<br />
        URLが間違っているか、ページが存在しません
      </p>
    </div>
    <div class="flex justify-center mt-24 lg:mt-32">
      <nuxt-link
        to="/"
        class="btn hover:opacity-75 inline-block text-sm cursor-pointer bg-primary py-5 px-8 rounded-md text-white text-center lg:w-12 lg:w-2/6 lg:text-lg lg:p-8 lg:duration-600"
      >
        トップページへ戻る
      </nuxt-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.c-404 {
  font-family: 'Hiragino Kaku Gothic Pro', serif;
  &__text {
    color: #333333;
  }
}
</style>
