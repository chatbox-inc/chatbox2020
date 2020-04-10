<template>
  <div>
    <l-header />
    <main class="l-content">
      <nuxt />
    </main>
    <l-footer />
  </div>
</template>

<script>
import LHeader from "@/components/layout/LHeader"
import LFooter from "@/components/layout/LFooter"
export default {
  components: {
    LHeader,
    LFooter,
  },
}
</script>
