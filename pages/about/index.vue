<template>
  <div>
    <CHero />
    <CAbout />
    <CAccess />
    <UiBanner v-if="newsData" :news="newsData" />
  </div>
</template>

<script>
import CHero from './-C Hero.vue'
import CAbout from './-CAbout.vue'
import CAccess from './-CAccess.vue'
export default {
  components: {
    CHero,
    CAbout,
    CAccess,
  },
  data() {
    return {
      newsData: null,
    }
  },
}
</script>

<style lang="scss" scoped></style>
