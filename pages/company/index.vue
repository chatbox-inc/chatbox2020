<template>
  <div>
    <CHero />
    <CAbout />
    <CAccess />
  </div>
</template>

<script>
import CHero from '~/pages/company/-C Hero.vue'
import CAbout from '@/pages/company/-CAbout.vue'
import CAccess from '@/pages/company/-CAccess.vue'

export default {
  components: {
    CHero,
    CAbout,
    CAccess,
  },
}
</script>

<style lang="scss" scoped></style>
