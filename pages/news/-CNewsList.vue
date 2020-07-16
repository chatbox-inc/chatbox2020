<template>
  <div v-if="newsList" class="container mx-auto mt-20">
    <ol class="flex space-x-10 relative">
      <li
        v-for="year in years"
        :key="year"
        href="#"
        @click.prevent="$emit('updateNewsList', year)"
      >
        <a class="text-xl font-medium block cursor-pointer hover:opacity-75">
          {{ year }}
        </a>
      </li>
      <span class="c-bar absolute bottom-0" :class="actionClass"></span>
    </ol>
    <div
      v-for="(news, index2) in newsList"
      :key="index2"
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
  </div>
</template>

<script>
export default {
  props: {
    newsList: {
      type: Array,
      required: true,
    },
    years: {
      type: Array,
      required: true,
    },
    targetYear: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      index: 0,
    }
  },
  computed: {
    actionClass() {
      return {
        'c-active__first': this.targetYear === this.years[0],
        'c-active__second': this.targetYear === this.years[1],
        'c-active__third': this.targetYear === this.years[2],
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.c-bar {
  width: 64px;
  height: 3px;
  bottom: -5px;
  left: -50px;
  background-color: #c3504f;
  transition: 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.56);
}

.c-active {
  &__first {
    left: -50px;
  }
  &__second {
    left: 35px;
  }

  &__third {
    left: 120px;
  }
}
</style>
