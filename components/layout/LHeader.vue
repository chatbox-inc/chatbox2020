<template>
  <header class="l-header relative lg:py-10">
    <div class="flex justify-center">
      <h1>
        <nuxt-link to="/">
          <img
            src="@/assets/image/header/header__logo.svg"
            alt="株式会社 chatbox"
            class="h-12 lg:h-16"
          />
        </nuxt-link>
      </h1>
      <nuxt-link
        to="/"
        class="l-header__triangle inline-blok fixed hover:opacity-75"
      ></nuxt-link>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.l-header {
  padding: 40px 0 40px 0;

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
}
@media (max-width: 980px) {
  .l-header {
    padding: 6px 0 6px 0;

    &__triangle {
      border: 30px solid transparent;
      border-left: 30px solid #c2504f;
      border-top: 30px solid #c2504f;

      &:after {
        background-size: contain;
        width: 15px;
        height: 15px;
        top: -20px;
        left: -20px;
      }
    }
  }
}
</style>
