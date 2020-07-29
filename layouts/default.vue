<template>
  <div class="overflow-hidden">
    <l-header />
    <Nuxt />
    <l-footer />
  </div>
</template>

<script>
import LHeader from '@/components/layout/LHeader'
import LFooter from '@/components/layout/LFooter'
export default {
  components: {
    LHeader,
    LFooter,
  },
}
</script>

<style>
body {
  font-family: Yu Gothic Medium, YuGothic Medium, YuGothic, Yu Gothic,
    sans-serif;
}
</style>
