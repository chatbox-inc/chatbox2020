<template>
  <UiModal>
    <div class="py-10 px-8 rounded text-black text-center">
      <h2 class="text-xl font-bold leading-loose">
        送信完了
      </h2>
      <p class="mt-6">
        自動で確認メールを送信しております、ご確認ください。<br />
        3営業日以内にご連絡をさせていただきます。
      </p>
      <div class="flex justify-center space-x-5 mt-6">
        <UiModalButton
          :text="'閉じる'"
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
