<template>
  <div>
    <LHero
      :title="'お知らせ'"
      :text="'株式会社chatboxの新着情報をお届けします'"
    />
    <CNewsList />
  </div>
</template>

<script>
import LHero from '@/components/layout/LHero'
import CNewsList from '@/pages/news/-CNewsList'
export default {
  components: {
    LHero,
    CNewsList,
  },
  data() {
    return {
      newsList: null,
    }
  },
  mounted() {},
}
</script>

<style lang="scss" scoped></style>
