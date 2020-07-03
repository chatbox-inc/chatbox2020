<template>
  <header class="py-10">
    <div class="flex justify-center">
      <h1>
        <nuxt-link to="/">
          <img
            src="@/assets/image/header/header__logo.svg"
            alt="株式会社 chatbox"
            class="l-header__logo"
          />
        </nuxt-link>
      </h1>
      <nuxt-link to="/" class="l-header__triangle hover:opacity-75"></nuxt-link>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.l-header {
  position: relative;

  &:after {
    content: '';
    display: block;
  }

  &__logo {
    height: 60px;
  }

  &__triangle {
    display: inline-block;
    position: fixed;
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
</style>
