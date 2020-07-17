<template>
  <UiModal>
    <div class="py-10 px-8 rounded text-black text-center">
      <h2 class="text-xl font-bold leading-loose">
        送信確認
      </h2>
      <p class="mt-6 text-sm lg:text-base">
        フォームの内容を送信します。<br />
        よろしければ、送信ボタンを押してください。
      </p>
      <div class="flex justify-center space-x-5 mt-6">
        <UiModalButton
          :text="'送信'"
          :type="'confirm'"
          @confirm="$emit('confirm')"
        />
        <UiModalButton
          :text="'戻る'"
          :type="'cancel'"
          @cancel="$emit('cancel')"
        />
      </div>
    </div>
  </UiModal>
</template>

<script>
export default {
  methods: {},
}
</script>

<style lang="scss" scoped></style>
