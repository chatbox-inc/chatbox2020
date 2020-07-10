<template>
  <section class="container mx-auto text-center mt-20">
    <h3 class="text-xl">
      フォームでのお問い合わせ
    </h3>
    <p class="mt-6">
      Wevからお問い合わせ出来ます。<br />
      以下の中からお問い合わせ内容を選択し、フォームを入力してください。
    </p>
    <div class="flex"></div>
    <form action="#" class="mt-8">
      <div class="text-center space-y-4">
        <div class="flex justify-center space-x-10">
          <label class="w-24 text-right">名前</label>
          <input
            v-model="form.name"
            class="border bg-ivory w-3/5 px-3 border-gray-300"
            type="text"
          />
        </div>
        <div class="flex justify-center space-x-10">
          <label class="w-24 text-right">E-mail</label>
          <input
            v-model="form.email"
            class="border bg-ivory w-3/5 px-3 border-gray-300"
            type="email"
          />
        </div>
        <div class="flex justify-center space-x-10">
          <label class="w-24 text-right">件名</label>
          <input
            v-model="form.subject"
            class="border bg-ivory w-3/5 px-3 border-gray-300"
            type="text"
          />
        </div>
        <div class="flex justify-center space-x-10">
          <label class="w-24 text-right">内容</label>
          <textarea
            v-model="form.message"
            class="border bg-ivory w-3/5 px-3 border-gray-300"
          />
        </div>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
