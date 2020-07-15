<template>
  <section class="container mx-auto text-center mt-20 pb-20">
    <h3 class="text-xl">
      フォームでのお問い合わせ
    </h3>
    <p class="mt-6 leading-8">
      Wevからお問い合わせ出来ます。<br />
      以下の中からお問い合わせ内容を選択し、フォームを入力してください。
    </p>
    <form action="#" class="mt-8">
      <div>
        <div class="flex flex-wrap justify-center w-4/5 mx-auto mb-4">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="w-1/2 c-form__check m-2 relative text-left border border-primary text-primary rounded-md hover:bg-primary hover:text-white cursor-pointer"
            :class="{
              'c-form__checkActive':
                $v.form.subject.$model === `${item.title}について`,
            }"
            @click.prevent="
              setSubject(item.title)
              setDescription(item.description)
            "
          >
            <input
              v-model="form.subject"
              class="hidden"
              type="radio"
              :value="item.name"
            />
            <label :for="item.name" class="ml-12">
              {{ item.title }}
            </label>
          </div>
        </div>
        <p class="text-primary block">
          {{ description }}
        </p>
      </div>
      <div class="mt-8 text-center space-y-8 mr-16">
        <div>
          <div class="flex justify-center space-x-8 text-left">
            <label class="w-24 text-right">名前</label>
            <div class="c-form__input w-full">
              <input
                v-model="$v.form.name.$model"
                class="border bg-ivory w-3/5 px-3 border-gray h-8 outline-none w-full"
                type="text"
                @input="$emit('input', form)"
              />
              <p
                v-if="$v.form.name.$error"
                class="block text-primary text-xs mt-2"
              >
                入力してください。
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="flex justify-center space-x-8 text-left">
            <label class="w-24 text-right">E-mail</label>
            <div class="c-form__input w-full">
              <input
                v-model="$v.form.email.$model"
                class="border bg-ivory w-3/5 px-3 border-gray h-8 outline-none w-full"
                type="email"
                @input="$emit('input', form)"
              />
              <p
                v-if="$v.form.email.$error"
                class="block text-primary text-xs mt-2"
              >
                正しいメールアドレス形式で入力してください。
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="flex justify-center space-x-8 text-left">
            <label class="w-24 text-right">件名</label>
            <div class="c-form__input w-full">
              <input
                v-model="$v.form.subject.$model"
                class="border bg-ivory w-3/5 px-3 border-gray h-8 outline-none w-full"
                type="text"
                @input="$emit('input', form)"
              />
              <p
                v-if="$v.form.subject.$error"
                class="block text-primary text-xs mt-2"
              >
                入力してください。
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="flex justify-center space-x-8 text-left">
            <label class="w-24 text-right">内容</label>
            <div class="c-form__input w-full">
              <textarea
                v-model="$v.form.message.$model"
                class="border bg-ivory w-3/5 px-3 py-4 border-gray h-48 resize-none outline-none w-full"
                @input="$emit('input', form)"
              />
              <p
                v-if="$v.form.message.$error"
                class="block text-primary text-xs mt-2"
              >
                入力してください。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-8">
        <UiFormButton @submitForm="submitContact" />
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
  data() {
    return {
      items: [
        {
          name: 'web',
          title: 'Web制作',
          description:
            '見積もり相談や制作可能かの相談からお気軽にお寄せください。',
        },
        {
          name: 'advice',
          title: '技術顧問',
          description:
            '制作現場でのお困りごと、相談内容などお気軽にお寄せください。',
        },
        {
          title: 'イベント',
          name: 'イベント',
          description:
            'イベント・セミナーに関するお問い合わせ、ご相談などお気軽にお寄せください。',
        },
        {
          title: 'その他',
          name: 'その他',
          description:
            'その他 chatbox に関するご依頼・ご相談などお気軽にお寄せください。',
        },
      ],
      description: '',
    }
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
    setDescription(description) {
      this.description = description
    },
    setSubject(subject) {
      this.$emit('setSubject', subject)
    },
  },
}
</script>

<style lang="scss" scoped>
.c-form {
  &__input {
    max-width: 550px;
  }
  &__check {
    max-width: 270px;
    height: 60px;
    line-height: 60px;

    &:before {
      display: inline-block;
      content: '';
      width: 20px;
      height: 20px;
      border: 1px solid rgba(195, 80, 79, 0.5);
      background: #faf7f7;
      position: absolute;
      top: 50%;
      left: 15px;
      -webkit-transform: translateY(-10px);
      transform: translateY(-10px);
    }

    &:after {
      display: inline-block;
      content: '';
      width: 18px;
      height: 18px;
      background: url(~assets/image/contact/icon_check-mute.svg) no-repeat;
      background-size: contain;
      background-position: 50%;
      position: absolute;
      top: 50%;
      left: 17px;
      -webkit-transform: translateY(-9px);
      transform: translateY(-9px);
    }
  }

  &__checkActive {
    background: #c3504f;
    color: #fff;
    &:after {
      background-image: url('~assets/image/contact/icon_check.svg');
    }
  }
}
</style>
