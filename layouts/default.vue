<template>
  <div>
    <l-header />
    <main class="l-content">
      <nuxt />
    </main>
  </div>
</template>

<script>
import LHeader from "@/components/layout/Header"
export default {
  components: {
    LHeader,
  },
}
</script>
