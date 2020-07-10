<template>
  <footer>
    <div class="flex mt-32 py-6 justify-center items-center">
      <img class="mx-2" src="@/assets/image/footer/icon_mail.svg" />
      <p class="text-primary">
        お問い合わせはこちら
      </p>
    </div>
    <div class="bg-primary h-500px text-center text-white">
      <div class="L-footer__triangle w-10 mx-auto"></div>
      <p class="pt-24 pb-16 lg:text-3xl tracking-widest">
        Webにまつわるお悩み、<br />
        ご相談はお気軽にchatboxまで。
      </p>
      <div class="lg:flex justify-center items-center">
        <a
          class="L-footer__btn inline-block relative cursor-pointer text-base bg-white p-6 rounded text-primary text-center w-64 lg:w-2/6 lg:text-lg lg:p-8 transition ease-out duration-700 hover:opacity-75"
          href=""
        >
          お問い合わせフォームへ
          <img
            class="L-footer__arrow w-8 inline absolute"
            src="@/assets/image/footer/keyboard_arrow_right-24px.svg"
            alt="arrow"
          />
        </a>
        <div class="py-16 lg:py-0 lg:px-16 lg:text-left">
          <p class="lg:text-xl tracking-widest">
            電話でのお問い合わせ
          </p>
          <p class="text-2xl lg:text-3xl tracking-widest">
            050-3555-1212
          </p>
        </div>
      </div>
    </div>
    <div class="h-56 w-full bg-ivory">
      <div class="w-11/12 mx-auto text-primary text-xs lg:text-15px">
        <nav class="pt-8 pb-5 border-b">
          <ul class="flex flex-wrap text-center">
            <li class="mb-4 lg:mb-0 w-4/12 lg:w-auto lg:border-r">
              <nuxt-link to="/" class="w-full lg:pr-4 hover:opacity-75">
                事業紹介
              </nuxt-link>
            </li>
            <li
              class="mb-4 lg:mb-0 w-4/12 lg:w-auto border-l border-r lg:border-l-0"
            >
              <nuxt-link to="/" class="lg:px-4 hover:opacity-75">
                実績紹介
              </nuxt-link>
            </li>
            <li class="mb-4 lg:mb-0 w-4/12 lg:w-auto lg:border-r">
              <a class="lg:px-4 hover:opacity-75" href="">会社情報</a>
            </li>
            <li class="w-4/12 lg:w-auto lg:border-r">
              <a class="lg:pr-4 lg:px-4 hover:opacity-75" href="">
                メンバー紹介
              </a>
            </li>
            <li class="w-4/12 lg:w-auto border-l border-r lg:border-l-0">
              <a class="lg:px-4 hover:opacity-75" href="">採用情報</a>
            </li>
            <li class="w-4/12 lg:w-auto">
              <a class="lg:pl-4 hover:opacity-75" href="">お問い合わせ</a>
            </li>
          </ul>
        </nav>
        <div class="flex pt-12 lg:py-3">
          <div class="flex items-center w-2/3">
            <img class="mr-4" src="@/assets/image/footer/img_logo@2x.png" />
            <div class="text-xs lg:text-sm">
              Copyright © chatbox.inc All Rights Reserved.
            </div>
          </div>
          <div class="flex justify-end w-1/3">
            <a class="mr-2 hover:opacity-75" href="">
              <img
                class="hover:opacity-75"
                src="@/assets/image/footer/facebook-square-brands.svg"
              />
            </a>
            <a class="hover:opacity-75" href="">
              <img src="@/assets/image/footer/twitter-square-brands.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
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
