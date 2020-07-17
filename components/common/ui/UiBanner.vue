<template>
  <nuxt-link
    :to="`/news/${news.id}`"
    class="h-15 w-full block bg-primary fixed bottom-0"
  >
    <div
      class="container mx-auto text-white text-xs lg:text-base flex-wrap flex lg:flex-row justify-center py-2 lg:py-4 space-x-4 items-center"
    >
      <p>お知らせ</p>
      <img
        src="@/assets/image/news/campaign-24px.svg"
        class="w-5"
        alt="お知らせ"
      />
      <date>{{ createdDate(news.createdAt) }}</date>
      <p>
        {{ news.category }}:
        {{ news.title }}
      </p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      required: true,
    },
  },
  methods: {
    createdDate(createdAt) {
      return this.$dayjs(createdAt.toDate()).format('YYYY/MM/DD')
    },
  },
}
</script>

<style lang="scss" scoped></style>
