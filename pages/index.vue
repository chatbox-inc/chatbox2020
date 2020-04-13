<template>
  <section class="p-members">
    <c-hero />
    <c-intro />
    <c-vision />
    <c-skill />
    <c-members />
  </section>
</template>

<script>
import CHero from "@/pages/-cHero.vue"
import CIntro from "@/pages/-cIntro.vue"
import CVision from "@/pages/-cVision.vue"
import CSkill from "@/pages/-cSkill.vue"
import CMembers from "@/pages/-cMembers.vue"
export default {
  components: {
    CHero,
    CIntro,
    CVision,
    CSkill,
    CMembers,
  },
}
</script>

<style lang="scss" scoped>
.p-members {
  width: 100%;
}
</style>
