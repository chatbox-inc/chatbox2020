<template>
  <section class="p-members">
    <c-hero />
    <c-intro />
    <c-vision />
    <c-skill />
  </section>
</template>

<script>
import CHero from "@/pages/-cHero.vue"
import CIntro from "@/pages/-cIntro.vue"
import CVision from "@/pages/-cVision.vue"
import CSkill from "@/pages/-cSkill.vue"
export default {
  components: {
    CHero,
    CIntro,
    CVision,
    CSkill,
  },
}
</script>

<style lang="scss" scoped>
.p-members {
  width: 100%;
}
</style>
