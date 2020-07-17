<template>
  <section class="pt-16 pb-10" v-if="intro">
    <div class="container mx-auto text-black px-5 sm:p-0">
      <UiTitle class="c-intro__title lg:mb-6" :title="intro.title" />
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
      right top,
      left top,
      from(hsla(0, 0%, 99%, 0)),
      color-stop(10%, hsla(0, 0%, 99%, 0.5)),
      color-stop(20%, hsla(0, 0%, 100%, 0.8)),
      color-stop(25%, hsla(0, 0%, 100%, 0.85)),
      color-stop(61%, hsla(0, 0%, 100%, 0.9)),
      color-stop(80%, #fff)
    );
  }
}
@media (max-width: 980px) {
  .c-intro {
    &__box {
      background: white;
    }
    &__title {
      font-size: 20px;
    }
  }
}
</style>

/* .section-title { @apply font-normal text-black text-5xl; font-family: Yu
Mincho Medium,YuMincho,serif; line-height:110px; } */
