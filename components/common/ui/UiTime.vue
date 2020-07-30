<template>
  <time
    class="inline-block font-medium text-xl text-primary lg:text-black lg:text-xl lg:text-black"
  >
    {{ createdDate }}
  </time>
</template>

<script>
export default {
  props: {
    createdAt: {
      type: Date,
      required: true,
    },
  },
  computed: {
    createdDate() {
      if (!this.createdAt) {
        return null
      }
      if (!(this.createdAt instanceof Date)) {
        return null
      }
      return this.$dayjs(this.createdAt).format('YYYY/MM/DD')
    },
  },
}
</script>

<style lang="scss" scoped></style>
