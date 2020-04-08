<template>
  <Header class="l-header">
    <div class="l-header__container">
      <nuxt-link to="/" class="l-header__triangle"></nuxt-link>
      <h1>
        <img
          src="@/assets/image/header/img_logo_chatbox@2x.png"
          alt="株式会社chatboxロゴ"
          class="l-header__logoImg"
        />
      </h1>
    </div>
  </Header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.l-header {
  &__container {
    max-height: 140px;
    padding: 37px 0;
    text-align: center;

    @include mobile {
      max-height: 60px;
      padding: 10px 0;
    }
  }

  &__link {
    display: inline-block;
    width: 110px;
    height: 110px;
  }

  &__triangle {
    position: fixed;
    top: 0;
    left: 0;
    display: inline-block;
    width: 110px;
    height: 110px;
    border: 55px solid transparent;
    border-top: 55px solid #c2504f;
    border-left: 55px solid #c2504f;

    @include mobile {
      width: 60px;
      height: 60px;
      border: 30px solid transparent;
      border-top: 30px solid #c2504f;
      border-left: 30px solid #c2504f;
    }

    &::after {
      position: absolute;
      top: -40px;
      left: -40px;
      display: inline-block;
      width: 28px;
      height: 28px;
      content: "";
      background-image: url("~assets/image/header/icon_chatbox-white@2x.png");
      background-repeat: no-repeat;
      background-size: contain;

      @include mobile {
        top: -20px;
        left: -20px;
        width: 15px;
        height: 15px;
      }
    }
  }

  &__logoImg {
    width: 90px;
    height: 60px;

    @include mobile {
      width: 64px;
      height: auto;
    }
  }
}
</style>
