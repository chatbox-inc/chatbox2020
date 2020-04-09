<template>
  <section class="c-other">
    <div class="c-container">
      <div class="c-other__head">
        <h2 class="c-other__title">
          他のメンバー
        </h2>
        <div class="c-other__box">
          <div
            v-for="(user, index) in memberList"
            :key="index"
            class="c-other__item"
          >
            <nuxt-link :to="`/member/${user.id}`">
              <img :src="user.img" alt="人物画像" class="c-other__img" />
              <p class="c-other__name">
                {{ user.name_jp }}
              </p>
              <p class="c-other__job">
                {{ user.job }}
              </p>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    memberList: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.c-other {
  padding-top: 86px;
  padding-bottom: 117px;
  text-align: center;
  background-color: #f7dfdf;

  @include mobile {
    padding-top: 40px;
    padding-bottom: 165px;
  }

  &__title {
    font-size: 25px;

    @include mobile {
      font-size: 20px;
    }
  }

  &__box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 45px;
  }

  &__img {
    @include mobile {
      width: 120px;
    }
  }

  &__item {
    margin-right: 110px;

    &:nth-child(4) {
      margin-right: 0;
    }

    @include mobile {
      margin-right: 20px;

      &:nth-child(even) {
        margin-right: 0;
      }

      &:nth-child(n + 3) {
        margin-top: 40px;
      }
    }
  }

  &__name {
    @include text-primary;

    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;

    @include mobile {
      margin-top: 6px;
      font-size: 16px;
    }
  }

  &__job {
    @include text-primary;

    margin-top: 4px;
    font-size: 14px;

    @include mobile {
      font-size: 12px;
    }
  }
}
</style>
