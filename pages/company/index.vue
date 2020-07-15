<template>
  <div>
    <CTitle />
    <CAbout />
    <CAccess />
  </div>
</template>

<script>
import CTitle from '@/pages/company/-CTitle.vue'
import CAbout from '@/pages/company/-CAbout.vue'
import CAccess from '@/pages/company/-CAccess.vue'

export default {
  components: {
    CTitle,
    CAbout,
    CAccess,
  },
}
</script>

<style lang="scss" scoped></style>
