<template>
  <section v-if="talking" class="pb-12 pt-12 lg:mb-20">
    <div class="container mx-auto text-black px-5">
      <UiTitle class="lg:mb-5 mb-4" :title="talking.title" />
      <div class="lg:flex lg:space-x-12 lg:px-5">
        <div class="w-full lg:w-1/2">
          <h3 class="text-primary text-1xl lg:text-2xl tracking-widest">
            {{ talking.subtitle }}
          </h3>
          <p
            class="leading-7 lg:leading-8 mt-4 lg:mt-8 tracking-wider text-sm lg:text-base"
          >
            {{ talking.text }}
          </p>
          <figure>
            <img
              class="mt-12 object-cover object-top w-full h-200px lg:h-full"
              src="@/assets/image/talking/talking_photo01.jpg"
              alt="社員研修イメージ"
            />
          </figure>
        </div>
        <div class="flex lg:block lg:w-1/2 mt-2 lg:mt-0">
          <img
            class="h-200px w-2/3 lg:h-500px lg:w-full object-cover mb-3 lg:mb-10 mb-20"
            src="@/assets/image/talking/talking_photo02.jpg"
            alt="技術顧問イメージ"
          />
          <ul
            class="text-primary text-xs ml-2 mt-3 lg:ml-3 lg:m-0 text-2xl hidden lg:block"
          >
            <li
              v-for="(item, index) in talking.keywords"
              :key="index"
              class="mb-10"
            >
              {{ item.extra }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="text-black text-center lg:mt-12">
      <UiLargeButton
        url="https://works.chatbox-inc.com/"
        image="/image/talking/talking_btn.jpg"
        text="技術顧問について"
      />
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  props: {
    talking: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.c-talking {
  &__img {
    height: 500px;
  }
}
</style>
