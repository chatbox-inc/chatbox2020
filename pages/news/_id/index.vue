<template>
  <section v-if="newsData" class="pt-12">
    <div class="container mx-auto">
      <div class="flex items-center">
        <div>
          {{ newsData.createdAt.toDate() }}
        </div>
        <div class="bg-primary text-white p-2 ml-5">
          {{ newsData.category }}
        </div>
      </div>
      <h2 class="font-bold">
        {{ newsData.title }}
      </h2>
      <img
        :src="newsData.thumbnail"
        class="mx-auto"
        style="height: 320px;"
        alt=""
      />
      <p>
        {{ newsData.text }}
      </p>
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
}
</script>

<style lang="scss" scoped></style>
