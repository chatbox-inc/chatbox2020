<template>
  <no-ssr>
    <time
      class="inline-block font-medium text-xl text-primary lg:text-black lg:text-xl lg:text-black"
    >
      {{ createdDate }}
    </time>
  </no-ssr>
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
        return ''
      }
      if (!(this.createdAt instanceof Date)) {
        return ''
      }
      return this.$dayjs(this.createdAt).format('YYYY/MM/DD')
    },
  },
}
</script>

<style lang="scss" scoped></style>
