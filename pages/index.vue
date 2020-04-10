<template>
  <section class="p-members">
    <c-hero />
    <c-intro />
  </section>
</template>

<script>
import CHero from "@/pages/-cHero.vue"
import CIntro from "@/pages/-cIntro.vue"
export default {
  components: {
    CHero,
    CIntro,
  },
}
</script>

<style lang="scss" scoped>
.p-members {
  width: 100%;
}
</style>
