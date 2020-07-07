<template>
  <section class="pt-16 pb-10">
    <div class="container mx-auto text-center">
      <h2 class="section-title mb-8">
        <span class="text-primary text-7xl">C</span>ontact
      </h2>
      <p class="text-black mb-10 ml-56 mr-56 text-left">
        Web制作のご相談、技術顧問に関するご相談、イベント・スクールに関するお問い合わせなど、
        chatboxに関する相談・ご質問はお気軽に下記「お問い合わせフォーム」からお願いいたします。
      </p>
      <a
        class="c-contact__btn bg-primary p-8 rounded text-white transition duration-700 hover:opacity-75"
        href="#"
      >
        お問い合わせフォームへ
      </a>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.c-contact {
  &__btn {
    position: relative;
    width: 450px;
    display: inline-block;
    font-size: 20px;

    &:before {
      position: absolute;
      z-index: 100;
      content: '';
      width: 30px;
      height: 30px;
      background-image: url(~assets/image/contact/keyboard_arrow_right-24px.svg);
      background-repeat: no-repeat;
      background-size: contain;
      top: 50%;
      right: 3%;
      transform: translateY(-50%);
      transition: all 0.5s;
    }

    &:hover:before {
      position: absolute;
      right: 1%;
      transition: all 0.5s;
    }
  }
}
</style>
