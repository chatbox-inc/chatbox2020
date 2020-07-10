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
        <div>
          <div class="flex justify-center space-x-3">
            <label class="w-24 text-right">名前</label>
            <input
              v-model="$v.form.name.$model"
              class="border bg-ivory w-3/5 px-3 border-gray-300"
              type="text"
              @input="$emit('input', form)"
            />
          </div>
          <!--   <p v-if="$v.form.name.$error" class="block text-primary">
            名前が入力されていません。
          </p> -->
        </div>
        <div>
          <div class="flex justify-center space-x-3">
            <label class="w-24 text-right">E-mail</label>
            <input
              v-model="$v.form.email.$model"
              class="border bg-ivory w-3/5 px-3 border-gray-300"
              type="email"
              @input="$emit('input', form)"
            />
          </div>
          <!--   <p v-if="$v.form.email.$error" class="block text-primary">
            正しいメールアドレスを入力してください。
          </p> -->
        </div>
        <div>
          <div class="flex justify-center space-x-3">
            <label class="w-24 text-right">件名</label>
            <input
              v-model="$v.form.subject.$model"
              class="border bg-ivory w-3/5 px-3 border-gray-300"
              type="text"
              @input="$emit('input', form)"
            />
          </div>
          <!--        <p v-if="$v.form.subject.$error" class="block text-primary">
            件名が入力されていません。
          </p> -->
        </div>
        <div>
          <div class="flex justify-center space-x-3">
            <label class="w-24 text-right">内容</label>
            <textarea
              v-model="$v.form.message.$model"
              class="border bg-ivory w-3/5 px-3 border-gray-300"
              @input="$emit('input', form)"
            />
          </div>
          <!--       <p v-if="form.message.$error" class="block text-primary">
            内容が入力されていません
          </p> -->
        </div>
      </div>
      <div class="mt-8">
        <a
          href="#"
          class="border bg-ivory px-12 py-3 inline-block"
          @click.prevent="submitContact"
        >
          送信する
        </a>
      </div>
    </form>
    <slot :$v="$v" name="actions" />
  </section>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  validations: {
    form: {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
      subject: {
        required,
      },
      message: {
        required,
      },
    },
  },
  props: {
    form: {
      type: Object,
      required: true,
    },
  },

  methods: {
    submitContact() {
      if (this.$v.form.$invalid) {
        alert('入力が完了していないフォームがあります')
      } else {
        this.$emit('openModal')
      }
    },
    inputCheck() {
      this.$emit('input', this.$v.form)
    },
  },
}
</script>

<style lang="scss" scoped></style>
