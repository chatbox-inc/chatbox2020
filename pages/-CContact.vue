<template>
  <section v-if="contact" class="pt-6 pb-20 lg:pt-16 lg:pb-40">
    <div class="container mx-auto px-5 text-center">
      <UiTitle :title="contact.title" />
      <p
        class="mx-auto text-black text-sm text-left mb-10 leading-loose w-full lg:text-base lg:w-3/5"
      >
        {{ contact.text }}
      </p>
      <UiButton text="お問い合わせフォームへ" url="/contact" />
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
