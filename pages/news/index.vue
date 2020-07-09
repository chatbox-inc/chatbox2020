<template>
  <div>
    <LHero
      :title="'お知らせ'"
      :text="'株式会社chatboxの新着情報をお届けします'"
    />
  </div>
</template>

<script>
import LHero from '@/components/layout/LHero'
export default {
  components: {
    LHero,
  },
}
</script>

<style lang="scss" scoped></style>
