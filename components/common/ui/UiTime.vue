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
      console.log(typeof this.createdAt)
      console.log('working')
      if (!this.createdAt) {
        return ''
      }
      if (this.createdAt instanceof Object) {
        console.log('should works')
        return this.$dayjs(this.createdAt.toDate()).format('YYYY/MM/DD')
      }
      if (!(this.createdAt instanceof Date)) {
        return ''
      }
      return ''
    },
  },
}
</script>

<style lang="scss" scoped></style>
