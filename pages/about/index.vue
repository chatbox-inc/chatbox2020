<template>
  <div>
    <CHero />
    <CAbout />
    <CAccess />
    <UiBanner v-if="newsData" :news="newsData" />
  </div>
</template>

<script>
import CHero from './-C Hero.vue'
import CAbout from './-CAbout.vue'
import CAccess from './-CAccess.vue'
import {} from '@/static/api/top.json'
import { fetchNews } from '@/service/firebase'
export default {
  components: {
    CHero,
    CAbout,
    CAccess,
  },
  data() {
    return {
      newsData: null,
    }
  },
  async mounted() {
    const newsList = await fetchNews()
    this.newsData = newsList[0]
  },
}
</script>

<style lang="scss" scoped></style>
