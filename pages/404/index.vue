<template>
  <section class="p-members">
    <div class="p-members__container">
      <h2 class="p-members__title">
        404 Not Found
      </h2>
      <div class="p-members__textItems">
        <p class="p-members__text">
          お探しのページは見つかりませんでした
        </p>
        <p>URLが間違っているか、ページが存在しません</p>
      </div>
      <nuxt-link to="/" class="p-members__topLink c-linkButton">
        トップページへ戻る
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.p-members {
  width: 100%;
  margin: auto 0 auto 0;

  &__container {
    text-align: center;
  }

  &__title {
    font-size: 30px;
    color: #c3504f;
  }

  &__textItems {
    margin-top: 30px;
  }

  &__text {
    color: #47494e;
  }

  &__topLink {
    margin-top: 100px;
  }
}
</style>
