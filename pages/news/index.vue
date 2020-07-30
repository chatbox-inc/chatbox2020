<template>
  <div v-if="updateNewsList">
    <LHero title="お知らせ" text="株式会社chatboxの新着情報をお届けします" />
    <CNewsList
      :news-list="newsList"
      :years="years"
      :target-year="targetYear"
      @updateNewsList="updateNewsList"
    />
    <UiBanner v-if="newsData" :news="newsData" />
  </div>
</template>

<script>
import LHero from '@/components/layout/LHero'
import CNewsList from '@/pages/news/-CNewsList'
import { fetchNewsByYear } from '../../service/firebase'
import { fetchNews } from '@/service/firebase'
export default {
  components: {
    LHero,
    CNewsList,
  },
  async asyncData() {
    const date = new Date()
    const targetYear = date.getFullYear().toString()
    const newsList = await fetchNews()
    const newsData = newsList[0]
    return {
      targetYear,
      newsList,
      newsData,
    }
  },
  data() {
    return {
      newsList: null,
      targetYear: null,
      years: ['2020', '2021', '2022'],
      newsData: null,
    }
  },
  methods: {
    async updateNewsList(targetYear) {
      this.targetYear = targetYear
      this.newsList = await fetchNewsByYear(targetYear)
    },
  },
}
</script>

<style lang="scss" scoped></style>
