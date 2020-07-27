<template>
  <section v-if="member" class="pb-10">
    <div class="container mx-auto px-5 lg:px-0 text-black">
      <div class="lg:px-5">
        <UiTitle class="lg:mb-6" :title="member.title" />
      </div>
      <div class="c-member__bg bg-no-repeat bg-contain pt-24 lg:pt-64">
        <div
          class="c-member__box mx-auto z-10 tracking-wider bg-white w-11/12 p-6 lg:w-full lg:pr-24 lg:p-12"
        >
          <h3 class="text-primary tracking-widest mb-4 text-1xl lg:text-2xl">
            {{ member.subtitle }}
          </h3>
          <p class="leading-7 lg:leading-8 text-sm lg:text-base">
            {{ member.text }}
          </p>
        </div>
      </div>
    </div>
    <div class="text-center lg:mt-12">
      <UiLargeButton
        url="https://members.chatbox-inc.com/"
        image="/image/member/member_btn.jpg"
        text="メンバーについて"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    member: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.c-member {
  &__bg {
    background-image: url('~assets/image/member/member_photo01.jpg');
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
