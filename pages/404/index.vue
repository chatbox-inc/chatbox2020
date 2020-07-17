<template>
  <section class="text-center container mx-auto pr-2 pl-2">
    <div>
      <p
        class="errorMessage text-primary font-sans mt-24 text-center mb-12 text-4xl lg:text-6xl lg:block"
      >
        404 Not Found
      </p>
    </div>
    <div class="text-center font-medium">
      <p class="mb-4 text-sm lg:text-lg">
        お探しのページは見つかりませんでした
      </p>
      <p class="mb-24 text-sm lg:text-lg">
        URLが間違っているか、ページが存在しません
      </p>
    </div>
    <div class="flex justify-center">
      <nuxt-link
        to="/"
        class="btn hover:opacity-75 inline-block cursor-pointer bg-primary p-5 rounded text-white text-center lg:w-12 lg:w-2/6 lg:text-lg lg:p-8 lg:duration-600"
      >
        トップページへ戻る
      </nuxt-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@media (980px) {
  .errorMessage {
    font-size: 44px;
  }
}
</style>
