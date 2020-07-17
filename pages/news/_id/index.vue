<template>
  <section v-if="newsData" class="pt-12">
    <LHero title="お知らせ" text="株式会社chatboxの新着情報をお届けします" />
    <div class="container mx-auto px-5 pt-12 lg:pt-32">
      <div class="flex flex-row space-x-3 lg:space-x-4 items-center">
        <p class="inline-block font-medium text-xs lg:text-base">
          {{ createdDate(newsData.createdAt) }}
        </p>
        <p
          class="bg-primary text-center py-1 text-xs lg:text-sm w-24 block text-white"
        >
          {{ newsData.category }}
        </p>
      </div>
      <h2 class="text-left font-bold text-xl mt-5 lg:text-3xl">
        {{ newsData.title }}
      </h2>
      <img
        v-if="newsData.thumbnail"
        :src="newsData.thumbnail"
        class="mx-auto h-32 w-full lg:hidden object-cover mt-8"
        style="height: 130px;"
        alt=""
      />
      <img
        v-if="newsData.thumbnail"
        :src="newsData.thumbnail"
        class="hidden mx-auto object-cover mt-8 hidden lg:block"
      />
      <p class="mt-8">
        {{ newsData.text }}
      </p>
      <div
        class="border border-primary relative mt-12 text-primary font-bold rounded-md w-full lg:w-2/5 lg:mx-auto text-center"
      >
        <nuxt-link to="/news" class="c-button block py-5 hover:opacity-75">
          お知らせ一覧
          <img
            src="@/assets/image/news/keyboard_arrow_right-24px.svg"
            alt="お知らせ一覧へ"
            class="c-button__arrow"
          />
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import { fetchNewsById } from '@/service/firebase'
export default {
  data() {
    return {
      newsData: null,
    }
  },
  computed: {
    getId() {
      return this.$route.params.id
    },
  },
  async mounted() {
    this.newsData = await fetchNewsById(this.getId)
  },
  methods: {
    createdDate(createdAt) {
      return this.$dayjs(createdAt.toDate()).format('YYYY.MM.DD')
    },
  },
}
</script>

<style lang="scss" scoped>
.c-button {
  &:hover {
    .c-button__arrow {
      right: 0px;
      transition: all 0.5s;
    }
  }
  &__arrow {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.5s;
  }
}
</style>
