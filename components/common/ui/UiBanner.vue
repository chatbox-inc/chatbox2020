<!--<template>-->
<!--  <nuxt-link-->
<!--    :to="`/news/${news.id}`"-->
<!--    class="h-15 w-full block bg-primary fixed bottom-0 border-t border-white z-50"-->
<!--  >-->
<!--    <div-->
<!--      class="container mx-auto text-white text-xs lg:text-base flex-wrap flex lg:flex-row justify-center py-2 lg:py-4 space-x-4 items-center"-->
<!--    >-->
<!--      <p>お知らせ</p>-->
<!--      <time>{{ createdDate }}</time>-->
<!--      <p>-->
<!--        {{ news.category }}:-->
<!--        {{ news.title }}-->
<!--      </p>-->
<!--    </div>-->
<!--  </nuxt-link>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  props: {-->
<!--    news: {-->
<!--      type: Object,-->
<!--      required: true,-->
<!--    },-->
<!--  },-->
<!--  computed: {-->
<!--    createdDate() {-->
<!--      if (!this.news) {-->
<!--        return null-->
<!--      }-->
<!--      if (!(this.news.createdAt instanceof Date)) {-->
<!--        return null-->
<!--      }-->
<!--      return this.$dayjs(this.news.createdAt).format('YYYY/MM/DD')-->
<!--    },-->
<!--  },-->
<!--}-->
<!--</script>-->

<!--<style lang="scss" scoped></style>-->
