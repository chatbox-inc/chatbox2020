<template>
  <section class="pt-6 pb-20 lg:pt-16 lg:pb-40" v-if="contact">
    <div class="container mx-auto px-5 text-center sm:p-0">
      <UiTitle :title="contact.title" />
      <p
        class="mx-auto text-black text-left mb-10 leading-loose w-full lg:w-3/5"
      >
        {{ contact.text }}
      </p>
      <UiButton text="お問い合わせフォームへ" url="#" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
}
</script>
