<template>
  <section class="c-hero relative lg:h-800px">
    <div
      class="bg-primary c-hero__catch rounded absolute w-7/12 h-40 mt-3 sm:w-1/2 sm:mt-0 lg:w-2/5 lg:h-auto lg:mt-0"
    >
      <div
        class="c-hero__title pt-6 sm:pt-10 pr-2 pb-6 pl-6 lg:pt-20 lg:pb-20 lg:pl-32 text-white lg:font-bold text-15px lg:text-3xl"
      >
        <p
          class="fadein text1 mb-3 w-9/12 text-base sm:w-auto lg:mb-10 lg:text-3xl ml-4 lg:ml-10"
        >
          Webのこれからを語り合う
        </p>
        <p
          class="mb-3 w-32 text-base sm:w-auto lg:mb-10 lg:w-auto lg:text-3xl ml-4 lg:ml-10"
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
  &:after {
    position: absolute;
    display: inline-block;
    left: 50%;
    bottom: -70px;
    content: '';
    width: 2px;
    height: 140px;
    background-color: #c3504f;
    animation: line 0.5s ease forwards;
    animation-delay: 6.7s;
    transform: rotateX(90deg);
    transform-origin: top;
  }
  @keyframes line {
    100% {
      transform: rotateX(0);
    }
  }

  &__catch {
    top: 39%;
    left: -1000px;
    background-color: rgba(195, 80, 79, 0.9);
    animation: animation 3s ease-out forwards;
    animation-iteration-count: inherit;
  }
  @keyframes animation {
    70% {
      top: 39%;
      left: -1050px;
    }
    100% {
      top: 39%;
      left: -5px;
    }
  }
  &__title {
    .fadein {
      opacity: 0;
      transform-origin: 50% 50% -10px;
      transform: rotateX(90deg);
      animation: fadein 0.2s ease-out forwards;
    }
    @keyframes fadein {
      100% {
        opacity: 1;
        transform: rotateX(0);
      }
    }
    .text1 {
      animation-delay: 3.5s;
    }
    .text2 {
      animation-delay: 4.3s;
    }
    .text3 {
      animation-delay: 5.1s;
    }
    .text4 {
      animation-delay: 5.9s;
    }
  }
  @media (max-width: 980px) {
    .c-hero {
      &__catch {
        top: 49%;
      }
      @keyframes animation {
        70% {
          top: 49%;
          left: -500px;
        }
        100% {
          top: 49%;
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
