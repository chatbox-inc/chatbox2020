<template>
  <header class="l-header relative py-5 lg:py-10">
    <div class="flex justify-center">
      <h1>
        <nuxt-link to="/">
          <img
            src="@/assets/image/header/header__logo.svg"
            alt="株式会社 chatbox"
            class="h-10 lg:h-16 mb-2"
          />
        </nuxt-link>
      </h1>
      <nuxt-link
        to="/"
        class="l-header__triangle hidden lg:inline-block fixed hover:opacity-75"
      ></nuxt-link>
      <nuxt-link
        to="/"
        class="l-header__triangleSp lg:hidden inline-blok fixed"
      ></nuxt-link>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.l-header {
  &:after {
    content: '';
    display: block;
  }

  &__triangle {
    top: 0;
    left: 0;
    border: 50px solid transparent;
    border-left: 50px solid #c2504f;
    border-top: 50px solid #c2504f;
    z-index: 100000;

    &:after {
      position: absolute;
      content: '';
      background-image: url(~assets/image/header/header__icon-white.png);
      background-repeat: no-repeat;
      width: 30px;
      height: 30px;
      top: -33px;
      left: -38px;
    }
  }

  &__triangleSp {
    top: 0;
    left: 0;
    z-index: 100000;
    border: 30px solid transparent;
    border-left: 30px solid #c2504f;
    border-top: 30px solid #c2504f;

    &:after {
      position: absolute;
      content: '';
      background-image: url(~assets/image/header/header__icon-white.png);
      background-repeat: no-repeat;
      background-size: contain;
      width: 20px;
      height: 20px;
      top: -23px;
      left: -23px;
    }
  }
}
</style>
