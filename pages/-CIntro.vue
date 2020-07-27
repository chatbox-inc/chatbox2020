<template>
  <section v-if="intro" class="pt-16 pb-10">
    <div class="container mx-auto text-black px-5 lg:px-0">
      <div class="lg:px-5">
        <UiTitle class="c-intro__title lg:mb-6" :title="intro.title" />
      </div>
      <div class="c-intro__bg bg-no-repeat bg-contain pt-24 lg:pt-64">
        <div
          class="c-intro__box mx-auto z-10 tracking-wider bg-white w-11/12 p-6 lg:w-full lg:pr-24 lg:p-12"
        >
          <h3 class="text-primary tracking-widest mb-4 text-1xl lg:text-2xl">
            {{ intro.subtitle }}
          </h3>
          <p class="leading-7 lg:leading-8 text-sm lg:text-base">
            {{ intro.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    intro: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.c-intro {
  &__bg {
    background-image: url(~assets/image/intro/intro__bg.jpg);
  }

  &__box {
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(hsla(99%, 0, 0, 0)),
      color-stop(6%, hsla(0, 0%, 99%, 0.45)),
      color-stop(12%, hsla(0, 0%, 99%, 0.7)),
      color-stop(20%, hsla(0, 0%, 100%, 0.85)),
      color-stop(25%, hsla(0, 0%, 100%, 0.9)),
      color-stop(61%, hsla(0, 0%, 100%, 0.95)),
      color-stop(80%, #fff)
    );
  }
}
</style>
