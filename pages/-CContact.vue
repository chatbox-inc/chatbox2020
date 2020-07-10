<template>
  <section class="pt-6 pb-20 lg:pt-16 lg:pb-40">
    <div class="container mx-auto px-8 text-center sm:p-0">
      <UiTitle :title="'Contact'" />
      <p
        class="mx-auto text-black text-left mb-10 leading-loose w-full lg:w-3/5"
      >
        Web制作のご相談、技術顧問に関するご相談、イベント・スクールに関するお問い合わせなど、
        chatboxに関する相談・ご質問はお気軽に下記「お問い合わせフォーム」からお願いいたします。
      </p>
      <UiButton :text="'お問い合わせフォームへ'" :url="'#'" />
    </div>
  </section>
</template>

<script>
export default {}
</script>
