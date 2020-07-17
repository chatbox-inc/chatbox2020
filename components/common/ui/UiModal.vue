<template>
  <div
    class="fixed px-2 w-full h-full top-0 left-0 flex items-center justify-center"
  >
    <a class="absolute w-full h-full bg-black opacity-75"></a>

    <div
      class="bg-white rounded mx-auto c-modal__content lg:w-1/2 rounded-md shadow-lg z-50 overflow-y-auto"
    >
      <div class="c-modal__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.c-modal {
  &__content {
    max-width: 600px;
  }
}
</style>
