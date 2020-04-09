<template>
  <section class="c-profile">
    <div class="c-container">
      <div class="c-profile__box">
        <div class="c-profile__item">
          <img :src="profile.img" alt="メンバーの写真" class="c-profile__img" />
        </div>
        <div class="c-profile__item">
          <div class="c-profile__info">
            <h2 class="c-profile__name">
              {{ profile.name_jp }}
              <span class="c-profile__name--small">
                / {{ profile.name_en }}
              </span>
            </h2>
          </div>
          <div class="c-profile__info">
            <p class="c-profile__job">
              {{ profile.job }}
            </p>
          </div>
          <div class="c-profile__info">
            <p class="c-profile__text">
              {{ profile.body }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    profile: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.c-profile {
  width: 100%;
  padding-top: 75px;
  padding-bottom: 85px;

  &__box {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__item {
    width: 50%;
  }

  &__name {
    @include text-primary;

    position: relative;
    font-size: 30px;
    font-weight: bold;

    &::before {
      position: relative;
      top: 4px;
      display: inline-block;
      width: 13px;
      height: 30px;
      content: "";
      background-color: #c3504f;
    }
  }

  &__name--small {
    font-size: 16px;
  }

  &__job {
    margin-top: 14px;
  }

  &__text {
    margin-top: 10px;
  }
}
</style>
