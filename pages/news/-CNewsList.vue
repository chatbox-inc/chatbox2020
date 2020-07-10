<template>
  <div v-if="newsList" class="container mx-auto">
    <ul class="flex">
      <a
        v-for="year in years"
        :key="year"
        href="#"
        @click.prevent="updateNewsList(year)"
      >
        <li>{{ year }}</li>
      </a>
    </ul>
    <div
      v-for="(news, index) in newsList"
      :key="index"
      class="lg:flex flex-row bg-gray-1024 pt-5 pb-5"
    >
      <nuxt-link
        class="lg:flex flex-row bg-gray-1024 pt-5 pb-5 hover:opacity-75"
        :to="`/news/${news.id}`"
      >
        <div class="flex flex-row bg-gray-280 pt-3">
          <p
            class="inline-block leading-9 pr-5 text-xl text-primary lg:pr-8 lg:text-black"
          >
            {{ news.createdAt.toDate() }}
          </p>
          <a class="bg-primary mt-1 h-6 lg:h-8">
            <p
              class="h-6 lg:h-8 w-24 lg:w-32 text-xs text-white text-center py-1 px-2g lg:py-2 lg:m-2g lg:text-sm"
            >
              {{ news.category }}
            </p>
          </a>
        </div>
        <button
          class="inline-grid grid-cols-1 col-gap-4 lg:pl-8 leading-9 text-sm lg:text-xl text-left pb-3 lg:pb-0"
          href="#"
        >
          {{ news.title }}
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { fetchNewsByYear } from '@/service/firebase'
export default {
  data() {
    return {
      newsList: [],
      targetYear: null,
      years: ['2020', '2021', '2022'],
    }
  },
  mounted() {
    const date = new Date()
    this.targetYear = date.getFullYear()
    this.updateNewsList(this.targetYear)
  },

  methods: {
    async updateNewsList(targetYear) {
      this.newsList = await fetchNewsByYear(targetYear)
    },
  },
}
</script>

<style lang="scss" scoped></style>
