<template>
  <div style="padding-bottom: 200px;">
    <c-hero />
    <c-intro />
    <c-creation />
  </div>
</template>

<script>
import CHero from '@/pages/-cHero'
import CIntro from '@/pages/-CIntro'
import CCreation from '@/pages/-CCreation'
export default {
  components: {
    CHero,
    CIntro,
    CCreation,
  },
}
</script>

<style></style>
