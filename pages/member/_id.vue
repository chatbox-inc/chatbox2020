<template>
  <section class="p-member">
    <c-hero />
    <c-profile :profile="profile" />
    <c-other :member-list="memberList" />
  </section>
</template>

<script>
import cHero from "@/pages/member/-cHero"
import cProfile from "@/pages/member/-cProfile"
import cOther from "@/pages/member/-cOther"
export default {
  components: {
    cHero,
    cProfile,
    cOther,
  },
  data() {
    return {
      profile: {
        id: 1,
        name_jp: "為本 雄亮",
        name_en: "Tamemoto Yusuke",
        job: "フロントエンドエンジニア",
        body:
          "自己紹介文が入ります。以下、仮テキストです。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス。自己紹介文が入ります。以下、仮テキストです。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス。ああああああああああ",
        img: "/image/profile/img_profile_detail01@2x.png",
      },

      memberList: [
        {
          id: 1,
          name_jp: "為本 雄亮",
          name_en: "Tamemoto Yusuke",
          job: "エンジニア",
          body:
            "自己紹介文が入ります。以下、仮テキストです。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス。自己紹介文が入ります。以下、仮テキストです。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス。ああああああああああ",
          img: "/image/other/img_otherMember01@2x.png",
        },
        {
          id: 2,
          name_jp: "為本 雄亮",
          name_en: "Tamemoto Yusuke",
          job: "エンジニア",
          body:
            "自己紹介文が入ります。以下、仮テキストです。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス。自己紹介文が入ります。以下、仮テキストです。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス。ああああああああああ",
          img: "/image/other/img_otherMember01@2x.png",
        },
        {
          id: 3,
          name_jp: "為本 雄亮",
          name_en: "Tamemoto Yusuke",
          job: "エンジニア",
          body:
            "自己紹介文が入ります。以下、仮テキストです。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス。自己紹介文が入ります。以下、仮テキストです。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス。ああああああああああ",
          img: "/image/other/img_otherMember01@2x.png",
        },
        {
          id: 4,
          name_jp: "為本 雄亮",
          name_en: "Tamemoto Yusuke",
          job: "エンジニア",
          body:
            "自己紹介文が入ります。以下、仮テキストです。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス。自己紹介文が入ります。以下、仮テキストです。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス。ああああああああああ",
          img: "/image/other/img_otherMember01@2x.png",
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.p-member {
  width: 100%;
}
</style>
