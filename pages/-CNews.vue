<template>
  <section class="pt-5 lg:pt-10 pb-10">
    <div class="container mx-auto">
      <div class="pr-5 pl-5 lg:p-0">
        <UiTitle :title="'News'" />
        <ol class="lg:flex flex-col space-y-8 lg:space-y-10 mt-8 lg:mt-16">
          <li v-for="(news, index) in newsList" :key="index" class="bg-white">
            <nuxt-link
              class="lg:flex flex-row items-center hover:opacity-75"
              :to="`/news/${news.id}`"
            >
              <div
                class="flex flex-row space-x-3 lg:space-x-10 items-center lg:justify-around"
              >
                <p
                  class="inline-block font-medium text-xs lg:text-xl lg:text-black"
                >
                  {{ createdDate(news.createdAt) }}
                </p>
                <p
                  class="bg-primary text-center py-1 text-xs lg:text-sm w-24 block text-white"
                >
                  {{ news.category }}
                </p>
              </div>
              <div class="mt-4 lg:mt-0 lg:ml-8">
                <p class="text-left text-sm lg:text-xl font-medium" href="#">
                  {{ news.title }}
                </p>
              </div>
            </nuxt-link>
          </li>
        </ol>
        <div class="mt-10 lg:mt-20 text-center">
          <UiButton :text="'お知らせ一覧へ'" :url="'#'" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { fetchNews } from '@/service/firebase'
export default {
  data() {
    return {
      newsList: [],
    }
  },
  async mounted() {
    this.newsList = await fetchNews()
  },
  methods: {
    createdDate(createdAt) {
      return this.$dayjs(createdAt.toDate()).format('MM/DD')
    },
  },
}
</script>

<style lang="scss" scoped>
.c-news {
  &__title {
    top: 16px;
  }
}
</style>
