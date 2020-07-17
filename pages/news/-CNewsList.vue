<template>
  <div v-if="newsList" class="container px-4 mx-auto mt-10 lg:mt-20">
    <ol class="flex space-x-5 lg:space-x-10 relative">
      <li
        v-for="year in years"
        :key="year"
        href="#"
        @click.prevent="$emit('updateNewsList', year)"
      >
        <a
          class="text-sm lg:text-xl font-medium block cursor-pointer hover:opacity-75"
        >
          {{ year }}年
        </a>
      </li>
      <span
        class="c-bar hidden lg:block absolute bottom-0"
        :class="actionClass"
      ></span>
      <span
        class="c-barSp lg:hidden block absolute bottom-0"
        :class="actionClassSp"
      ></span>
    </ol>
    <ol class="lg:flex flex-col space-y-8 lg:space-y-10 mt-8 lg:mt-16">
      <li v-for="(news, index2) in newsList" :key="index2" class="bg-white">
        <nuxt-link
          class="lg:flex flex-row items-center hover:opacity-75"
          :to="`/news/${news.id}`"
        >
          <div
            class="flex flex-row space-x-3 lg:space-x-10 items-center lg:justify-around"
          >
            <p
              class="inline-block font-medium text-xs lg:text-xl lg:text-black"
            >
              {{ createdDate(news.createdAt) }}
            </p>
            <p
              class="bg-primary text-center py-1 text-xs lg:text-sm w-24 block text-white"
            >
              {{ news.category }}
            </p>
          </div>
          <div class="mt-4 lg:mt-0 lg:ml-8">
            <p class="text-left text-sm lg:text-xl font-medium" href="#">
              {{ news.title }}
            </p>
          </div>
        </nuxt-link>
      </li>
    </ol>
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

    actionClassSp() {
      return {
        'c-active__firstSp': this.targetYear === this.years[0],
        'c-active__secondSp': this.targetYear === this.years[1],
        'c-active__thirdSp': this.targetYear === this.years[2],
      }
    },
  },
  methods: {
    createdDate(createdAt) {
      return this.$dayjs(createdAt.toDate()).format('MM/DD')
    },
  },
}
</script>

<style lang="scss" scoped>
.c-bar {
  width: 64px;
  height: 3px;
  bottom: -5px;
  left: -40px;
  background-color: #c3504f;
  transition: 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.56);
}

.c-barSp {
  width: 45px;
  height: 2px;
  bottom: -5px;
  left: -8%;
  background-color: #c3504f;
  transition: 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.56);
}

.c-active {
  &__first {
    left: -40px;
  }
  &__second {
    left: 65px;
  }

  &__third {
    left: 168px;
  }

  &__firstSp {
    left: -20px;
  }
  &__secondSp {
    left: 45px;
  }

  &__thirdSp {
    left: 110px;
  }
}
</style>
