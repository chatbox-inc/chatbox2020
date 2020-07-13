<template>
  <section class="c-hero relative lg:h-800px">
    <div
      class="bg-primary c-hero__catch rounded absolute w-9/12 sm:w-1/2 lg:w-2/5"
    >
      <div
        class="c-hero__title pt-8 pr-2 pb-6 pl-6 sm:pl-12 lg:pt-16 lg:pr-8 lg:pb-20 lg:pl-24 text-white font-bold text-15px lg:text-3xl"
      >
        <p class="mb-3 lg:mb-12">
          Webのこれからを語り合う
        </p>
        <p class="mb-3 lg:mb-12">
          ｢作る｣｢伝える｣｢語り合う｣
        </p>
      </div>
    </div>
    <div
      class="c-hero__bg bg-cover w-auto h-340px lg:w-11/12 lg:h-full lg:ml-auto"
    ></div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.c-hero {
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
    top: 40%;
    left: -5px;
  }

  &__bg {
    background-image: url(~assets/image/hero/hero__bg.jpg);
    background-position: 50%;
  }
}
@media (max-width: 980px) {
  .c-hero {
    &:after {
      height: 70px;
      bottom: -35px;
    }
  }
}
</style>
