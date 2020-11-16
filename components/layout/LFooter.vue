<template>
  <footer class="w-full pb-12 lg:pb-8 bg-ivory" :class="borderClass">
    <div
      v-show="!isContact"
      class="flex mt-32 py-6 bg-white justify-center items-center"
    >
      <img class="mx-2" src="@/assets/image/footer/icon_mail.svg" alt="Mail" />
      <p class="text-primary">
        お問い合わせはこちら
      </p>
    </div>
    <div v-show="!isContact" class="bg-primary h-500px text-center text-white">
      <div class="container px-5 lg:px-0 mx-auto">
        <div class="L-footer__triangle w-10 mx-auto"></div>
        <p class="pt-24 pb-16 lg:text-3xl tracking-widest">
          Webにまつわるお悩み、<br />
          ご相談はお気軽にchatboxまで。
        </p>
        <div class="lg:flex justify-center items-center px-5">
          <nuxt-link
            class="L-footer__btn inline-block relative cursor-pointer text-base bg-white p-6 rounded text-primary text-center w-full lg:w-1/2 lg:text-lg lg:p-8 transition ease-out duration-700 hover:opacity-75"
            to="/contact"
          >
            お問い合わせフォームへ
            <img
              class="L-footer__arrow w-8 inline absolute"
              src="@/assets/image/footer/keyboard_arrow_right-24px.svg"
              alt="arrow"
            />
          </nuxt-link>
          <div class="w-full lg:w-1/2 py-16 lg:py-0 lg:px-16 lg:text-left">
            <p class="lg:text-xl tracking-widest">
              電話でのお問い合わせ
            </p>
            <a
              class="text-2xl lg:text-3xl tracking-widest"
              href="tel:05035551212"
            >
              050-3555-1212
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="h-56 w-full bg-ivory">
      <div class="container px-5 mx-auto text-primary text-xs lg:text-15px">
        <nav class="pt-8 pb-5 border-b">
          <ul class="flex flex-wrap text-center">
            <li class="mb-4 lg:mb-0 w-1/2 lg:w-auto lg:border-r">
              <a
                href="https://works.chatbox-inc.com/"
                class="w-full lg:pr-4 hover:opacity-75"
              >
                事業紹介
              </a>
            </li>
            <li
              class="mb-4 lg:mb-0 w-1/2 lg:w-auto border-l lg:border-l-0 lg:border-r"
            >
              <nuxt-link class="lg:px-4 hover:opacity-75" to="/about">
                会社情報
              </nuxt-link>
            </li>
            <li class="mb-4 lg:mb-0 w-1/2 lg:w-auto">
              <a
                class="lg:px-4 hover:opacity-75"
                target="_blank"
                rel="noopener"
                href="https://www.wantedly.com/companies/chatbox-inc/"
              >
                採用情報
              </a>
            </li>
            <li class="mb-4 lg:mb-0 w-1/2 lg:w-auto border-l">
              <nuxt-link class="lg:pl-4 hover:opacity-75" to="/contact">
                お問い合わせ
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <div class="flex pt-12 lg:py-3">
          <div class="flex items-center w-2/3">
            <img
              class="mr-4"
              src="@/assets/image/footer/img_logo@2x.png"
              alt="chatboxロゴ"
            />
            <div class="text-xs lg:text-sm">
              Copyright © chatbox.inc All Rights Reserved.
            </div>
          </div>
          <div class="flex justify-end w-1/3">
            <a
              target="_blank"
              rel="noopener"
              class="mr-2 hover:opacity-75"
              aria-label="facebookへ"
              href="https://www.facebook.com/chatbox.inc/"
            >
              <img
                class="hover:opacity-75"
                src="@/assets/image/footer/facebook-square-brands.svg"
                alt="facebook"
              />
            </a>
            <a
              class="hover:opacity-75"
              href="https://twitter.com/chatbox_inc/"
              target="_blank"
              rel="noopener"
              aria-label="Twitterへ"
            >
              <img
                src="@/assets/image/footer/twitter-square-brands.svg"
                alt="Twitter"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    isContact() {
      return this.$route.path === '/contact'
    },
    borderClass() {
      return {
        'border-t-2 border-primary': this.isContact,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.L-footer {
  &__btn {
    &:hover {
      .L-footer__arrow {
        right: 0;
        transition: all 0.5s;
      }
    }
  }
  &__arrow {
    top: 50%;
    transform: translateY(-50%);
    right: 3%;
    transition: all 0.5s;
  }
  &__triangle {
    border-top: 30px solid white;
    border-right: 30px solid transparent;
    border-left: 30px solid transparent;
  }
}
</style>
