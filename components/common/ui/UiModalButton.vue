<template>
  <a href="#" :class="actionClass" @click.prevent="handleButtonClick()">
    {{ text }}
  </a>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    actionClass() {
      return {
        'bg-primary text-white py-4 rounded w-1/4': this.type === 'confirm',
        'border text-primary py-4 rounded w-1/4': this.type === 'cancel',
      }
    },
  },
  methods: {
    handleButtonClick() {
      this.$emit(this.type)
    },
  },
}
</script>

<style lang="scss" scoped></style>
