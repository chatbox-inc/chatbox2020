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
import LHeader from "@/components/layout/Header"
import LFooter from "@/components/layout/Footer"
export default {
  components: {
    LHeader,
    LFooter,
  },
}
</script>
