<template>
  <section class="c-hero relative lg:h-800px">
    <div
      class="bg-primary c-hero__catch rounded absolute w-9/12 lg:h-40 mt-3 sm:w-1/2 sm:mt-0 lg:w-2/5 lg:h-auto lg:mt-0"
    >
      <div
        class="c-hero__title pt-6 sm:pt-10 pr-2 pb-6 pl-6 lg:pt-10 lg:pb-10 lg:pr- lg:pl-12vw text-white lg:font-bold text-15px lg:text-3xl"
      >
        <p
          class="fadein text1 mb-3 w-full text-xsm sm:w-auto lg:mb-10 lg:text-3xl lg:ml-4 lg:ml-10 lg:leading-84"
        >
          Webのこれからを語り合う
        </p>
        <p
          class="mb-3 w-full text-xsm sm:w-auto lg:mb-10 lg:w-auto lg:text-3xl lg:ml-4 lg:ml-10 lg:leading-84"
        >
          <span class="fadein text2 inline-block">｢作る｣</span>
          <span class="fadein text3 inline-block">｢伝える｣</span>
          <span class="fadein text4 inline-block">｢語り合う｣</span>
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
  font-family: YuGothic, serif;
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
    top: 39%;
    left: -10px;
    max-width: 60vw;
    background-color: rgba(195, 80, 79, 0.9);
  }
  @media (max-width: 980px) {
    .c-hero {
      &__catch {
        top: 48%;
      }
      @keyframes animation {
        70% {
          top: initial;
          bottom: 0;
          left: 75px;
        }
        100% {
          top: initial;
          bottom: 75px;
          left: -5px;
        }
      }
    }
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
