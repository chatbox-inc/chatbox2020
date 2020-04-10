<template>
  <section class="c-hero">
    <div class="c-container">
      <div class="c-hero__head">
        <h2 class="c-hero__title">
          chatboxでの働き方
        </h2>
        <p class="c-hero__text">
          個人の力でチームが活きる
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.c-hero {
  position: relative;
  width: 100%;
  height: 585px;
  background-image: url("~assets/image/hero/img_top@2x.png");
  background-position: center;
  background-size: cover;

  &__head {
    position: absolute;
    bottom: 70px;
  }

  &__title {
    @include text-white;

    font-size: 45px;
    font-weight: bold;
  }

  &__text {
    @include text-white;

    margin-top: 40px;
    font-size: 18px;
  }
}
</style>
