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

  @include mobile {
    padding-top: 45px;
    padding-bottom: 134px;
  }

  &__box {
    display: flex;
    align-items: center;
    justify-content: center;

    @include mobile {
      flex-direction: column;
    }
  }

  &__item {
    width: 50%;

    @include mobile {
      width: 100%;
    }
  }

  &__name {
    @include text-primary;

    position: relative;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 2.5px;

    &::before {
      position: relative;
      top: 4px;
      display: inline-block;
      width: 13px;
      height: 30px;
      content: "";
      background-color: #c3504f;
    }

    @include mobile {
      font-size: 25px;

      &::before {
        width: 7px;
        height: 23px;
      }
    }
  }

  &__name--small {
    font-size: 16px;

    @include mobile {
      font-size: 14px;
    }
  }

  &__job {
    margin-top: 14px;
    font-weight: bold;
  }

  &__text {
    margin-top: 10px;

    @include mobile {
      font-size: 14px;
    }
  }
}
</style>
