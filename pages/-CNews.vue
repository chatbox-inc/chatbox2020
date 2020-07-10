<template>
  <section class="pt-16 pb-10">
    <div class="container mx-auto">
      <div class="pr-5 pl-5 lg:p-0">
        <UiTitle :title="'News'" />
        <div
          v-for="(news, index) in newsList"
          :key="index"
          class="lg:flex flex-row bg-gray-1024 pt-5 pb-5"
        >
          <nuxt-link
            class="lg:flex flex-row bg-gray-1024 pt-5 pb-5 hover:opacity-75"
            :to="`/news/${news.id}`"
          >
            <div class="flex flex-row bg-gray-280 pt-3">
              <p
                class="inline-block leading-9 pr-5 text-xl text-primary lg:pr-8 lg:text-black"
              >
                {{ news.createdAt.toDate() }}
              </p>
              <a class="bg-primary mt-1 h-6 lg:h-8">
                <p
                  class="h-6 lg:h-8 w-24 lg:w-32 text-xs text-white text-center py-1 px-2g lg:py-2 lg:m-2g lg:text-sm"
                >
                  {{ news.category }}
                </p>
              </a>
            </div>
            <button
              class="inline-grid grid-cols-1 col-gap-4 lg:pl-8 leading-9 text-sm lg:text-xl text-left pb-3 lg:pb-0"
              href="#"
            >
              {{ news.title }}
            </button>
          </nuxt-link>
        </div>
        <UiButton :text="'お知らせ一覧へ'" :url="'#'" />
      </div>
    </div>
  </section>
</template>

<script>
import { fetchNews } from '@/service/firebase'
export default {
  data() {
    return {
      newsList: [],
    }
  },
  async mounted() {
    this.newsList = await fetchNews()
  },
}
</script>

<style lang="scss" scoped>
.c-news {
  &__tag {
    font-size: 12px;
    background-color: rgb(195, 80, 79);
    position: absolute;
    width: 114px;
    height: 26px;
    text-align: center;
    line-height: 26px;
  }
}
</style>
