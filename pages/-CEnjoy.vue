<template>
  <section v-if="enjoy" class="lg:mb-32 bg-ivory">
    <div class="c-enjoy__head">
      <div class="container mx-auto px-5">
        <UiTitle :title="enjoy.title" />
      </div>
    </div>
    <div class="container mx-auto text-black px-5">
      <div class="lg:flex lg:space-x-12">
        <div class="w-full lg:w-1/2">
          <h3 class="text-primary text-1xl lg:text-2xl tracking-widest">
            {{ enjoy.subtitle }}
          </h3>
          <div
            class="marked leading-7 lg:leading-8 mt-4 lg:mt-8 tracking-wider text-sm lg:text-base"
            v-html="compiledMarkdown"
          ></div>
          <figure>
            <img
              src="@/assets/image/enjoy/enjoy_photo01.jpg"
              alt=""
              class="mt-6 lg:mt-12 object-cover object-top w-full h-200px lg:h-full"
            />
          </figure>
        </div>
        <div class="flex lg:block lg:w-1/2 mt-2 lg:mt-0">
          <img
            src="@/assets/image/enjoy/enjoy_photo02.jpg"
            alt=""
            class="h-200px w-3/5 lg:h-500px lg:w-full object-cover mb-3 lg:mb-10 mb-20"
          />
          <ul
            class="text-primary text-xs ml-2 mt-3 lg:ml-3 lg:m-0 text-2xl hidden lg:block"
          >
            <li
              v-for="(item, index) in enjoy.keywords"
              :key="index"
              class="mb-10"
            >
              {{ item.extra }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="c-enjoy__btn text-center lg:mt-12">
      <UiLargeButton
        url="https://works.chatbox-inc.com/"
        image="/image/enjoy/enjoy_btn.jpg"
        text="イベント・スクールについて"
        class="text-left"
      />
    </div>
  </section>
</template>

<script>
import marked from 'marked'

export default {
  components: {},
  props: {
    enjoy: {
      type: Object,
      required: true,
    },
  },
  computed: {
    compiledMarkdown() {
      return marked(this.enjoy.text)
    },
  },
}
</script>

<style lang="scss">
.c-enjoy {
  &__head {
    background: linear-gradient(#fff 50%, #faf7f7 0);
  }
  &__btn {
    background: linear-gradient(#faf7f7 50%, #fff 0);
  }
}
.marked > p > a {
  color: #c3504f;
  text-decoration: underline;
}
</style>
