<template>
  <section class="pt-16 pb-10">
    <div class="container mx-auto text-center">
      <h2 class="section-title mb-8">
        <span class="text-primary text-7xl">C</span>ontact
      </h2>
      <p class="mx-auto text-black text-left mb-10 w-4/5 lg:w-3/5">
        Web制作のご相談、技術顧問に関するご相談、イベント・スクールに関するお問い合わせなど、
        chatboxに関する相談・ご質問はお気軽に下記「お問い合わせフォーム」からお願いいたします。
      </p>
      <CButton :text="'お問い合わせフォームへ'" :url="'#'" />
    </div>
  </section>
</template>

<script>
import CButton from '@/components/common/CButton'
export default {
  components: {
    CButton,
  },
}
</script>

<style lang="scss" scoped>
.c-contact {
}
</style>
