<template>
  <div
    class="fixed w-full h-full top-0 left-0 flex items-center justify-center"
  >
    <a class="absolute w-full h-full bg-black opacity-75"></a>

    <div
      class="bg-white rounded mx-auto rounded-md shadow-lg z-50 overflow-y-auto"
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
    min-width: 600px;
    max-width: 600px;
  }
}
</style>
