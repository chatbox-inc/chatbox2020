<template>
  <section class="pb-20">
    <div class="container mx-auto text-center px-8 sm:px-0">
      <UiTitle :title="'About Us'" />
      <p class="mx-auto text-black mb-10 text-left w-full lg:w-3/5">
        (仮)chatboxについてこの文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
        この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。
      </p>
      <UiButton :text="'会社概要へ'" :url="'#'" />
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.c-about {
}
</style>
