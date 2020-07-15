<template>
  <section class="pb-10">
    <div class="container mx-auto text-black px-5 sm:p-0">
      <UiTitle class="lg:mb-6" :title="'Member'" />
      <div class="c-member__bg bg-no-repeat bg-contain pt-24 lg:pt-64">
        <div
          class="c-member__box mx-auto z-10 tracking-wider bg-white w-11/12 p-6 lg:w-full lg:pr-24 lg:p-12"
        >
          <h3 class="text-primary tracking-widest mb-4 text-1xl lg:text-2xl">
            chatboxで働く個性的なメンバー
          </h3>
          <p class="leading-7 lg:leading-8 text-sm lg:text-base">
            chatbox は職場環境を「スキルアップのプラットフォーム」と捉え、
            「働きながら学ぶ」の考え方を大切にしています。
            個人が組織に合わせた成長を続けるのではなく、
            スタッフそれぞれのキャリア設計に応じた成長プランで意欲ある成長を継続して実現できる環境づくりを行っています。
            スタッフそれぞれの成長が、日々新しいchatboxを更新し続けています。
          </p>
        </div>
      </div>
    </div>
    <div class="container mx-auto text-center lg:mt-12">
      <UiLargeButton
        :url="''"
        :image="'/image/member/member_btn.jpg'"
        :text="'メンバーについて'"
      />
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.c-member {
  &__bg {
    background-image: url('~assets/image/member/member_photo01.jpg');
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
  .c-member__box {
    background: white;
  }
}
</style>
