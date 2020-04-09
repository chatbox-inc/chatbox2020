<template>
  <section class="p-member">
    <c-hero />
    <c-profile :profile="profile" />
  </section>
</template>

<script>
import cHero from "@/pages/member/-cHero"
import cProfile from "@/pages/member/-cProfile"
export default {
  components: {
    cHero,
    cProfile,
  },
  data() {
    return {
      profile: {
        name_jp: "為本 雄亮",
        name_en: "Tamemoto Yusuke",
        job: "フロントエンドエンジニア",
        body:
          "自己紹介文が入ります。以下、仮テキストです。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス。自己紹介文が入ります。以下、仮テキストです。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス。ああああああああああ",
      },
    }
  },
}
</script>

<style scoped lang="scss">
.p-member {
  width: 100%;
}
</style>
