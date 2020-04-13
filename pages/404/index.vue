<template>
  <section class="p-members">
    <div class="p-members__container">
      <h2 class="p-members__title">
        404 Not Found
      </h2>
      <p class="p-members__text">
        お探しのページは見つかりませんでした
      </p>
      <p>URLが間違っているか、ページが存在しません</p>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.p-members {
  width: 100%;

  &__container {
    text-align: center;
  }

  &__title {
    font-size: 30px;
    color: #c3504f;
  }

  &__text {
    color: #47494e;
  }
}
</style>
