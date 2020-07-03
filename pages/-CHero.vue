<template>
  <section class="c-hero relative">
    <div class="bg-primary c-hero__catch">
      <h2 class="c-hero__title text-white font-bold text-3xl">
        <p>
          「Webのこれからを語り合う
        </p>
        <p>
          「作る」「伝える」「語り合う」
        </p>
      </h2>
    </div>
    <div class="c-hero__bg h-full ml-auto"></div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.c-hero {
  height: 800px;

  &:after {
    position: absolute;
    display: inline-block;
    left: 50%;
    bottom: -70px;
    content: '';
    width: 2px;
    height: 140px;
    background-color: #c3504f;
  }

  &__catch {
    background-color: rgba(195, 80, 79, 0.9);
    position: absolute;
    width: 768px;
    top: 40%;
  }

  &__title {
    padding: 60px 30px 80px 12vw;
    line-height: 84px;
  }

  &__bg {
    width: 90vw;
    background-image: url(~assets/image/hero/hero__bg.jpg);
    background-size: cover;
    background-position: 50%;
  }
}
</style>
