<template>
  <div class="overflow-hidden">
    <l-header />
    <Nuxt />
  </div>
</template>

<script>
import LHeader from '@/components/layout/LHeader'
export default {
  components: {
    LHeader,
  },
}
</script>

<style>
body {
  font-family: YuGothic, serif;
}
</style>
