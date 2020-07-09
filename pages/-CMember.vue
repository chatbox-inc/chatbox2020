<template>
  <section>
    <div class="container mx-auto text-black px-6 sm:p-0">
      <UiTitle :title="'Member'" />
      <div class="c-member__detail bg-no-repeat bg-contain">
        <div
          class="z-10 bg-white leading-7 lg:leading-8 mt-64 tracking-wider text-sm lg:text-base p-6 lg:p-12"
        >
          <h3 class="text-primary text-1xl lg:text-2xl tracking-widest">
            chatboxで働く個性的なメンバー
          </h3>
          <p>
            chatbox は職場環境を「スキルアップのプラットフォーム」と捉え、
            「働きながら学ぶ」の考え方を大切にしています。
            個人が組織に合わせた成長を続けるのではなく、
            スタッフそれぞれのキャリア設計に応じた成長プランで意欲ある成長を継続して実現できる環境づくりを行っています。
            スタッフそれぞれの成長が、日々新しいchatboxを更新し続けています。
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.c-member {
  &__detail {
    background-image: url('~assets/image/member/member_photo01.jpg');
  }
}
</style>
