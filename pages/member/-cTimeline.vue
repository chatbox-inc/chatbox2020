<template>
  <section class="c-timeline">
    <div class="c-container">
      <div class="c-timeline__head">
        <h2 class="c-timeline__title">
          実績タイムライン
        </h2>
      </div>
      <div class="c-timeline__box">
        <div class="c-timeline__item">
          <time class="c-timeline__date">2020.03</time>
          <div class="c-timeline__start"></div>
          <div class="c-timeline__event">
            <h3 class="c-timeline__subTitle">
              chatbox入社
            </h3>
          </div>
        </div>
        <div class="c-timeline__item">
          <time class="c-timeline__date">2020.04</time>
          <div class="c-timeline__img">
            <img
              src="@/assets/image/timeline/img_timeline01@2x.png"
              alt="実績画像"
              class="c-timeline__img"
            />
          </div>
          <div class="c-timeline__event">
            <h3 class="c-timeline__subTitle">
              Vueを使用したコーディング案件
            </h3>
            <div class="c-timeline__info">
              <p class="c-timeline__work">
                <span class="c-timeline__infoTitle">案件内容</span>
                マッチングアプリサービス
              </p>
              <p class="c-timeline__part">
                <span class="c-timeline__infoTitle">担当範囲</span>
                TOPページコーディング
              </p>
            </div>
            <p class="c-timeline__text">
              主にコーディングを担当。この案件でVue.jsを使ったコーディング方法を学びました。主にコーディングを担当。この案件でVue.jsを使ったコーディング方法を学びました。ああああああああああああ
            </p>
          </div>
        </div>
        <div class="c-timeline__item">
          <time class="c-timeline__date">2020.04</time>
          <div class="c-timeline__img">
            <img
              src="@/assets/image/timeline/img_timeline01@2x.png"
              alt="実績画像"
            />
          </div>
          <div class="c-timeline__event">
            <h3 class="c-timeline__subTitle">
              Laravelを使用したサイト構築
            </h3>
            <div class="c-timeline__info">
              <p class="c-timeline__work">
                <span class="c-timeline__infoTitle">案件内容</span>
                マッチングアプリサービス
              </p>
              <p class="c-timeline__part">
                <span class="c-timeline__infoTitle">担当範囲</span>
                TOPページコーディング
              </p>
            </div>
            <p class="c-timeline__text">
              主にコーディングを担当。この案件でVue.jsを使ったコーディング方法を学びました。主にコーディングを担当。この案件でVue.jsを使ったコーディング方法を学びました。ああああああああああああ
            </p>
          </div>
        </div>
        <div class="c-timeline__item">
          <time class="c-timeline__date">2020.04</time>
          <div class="c-timeline__img">
            <img
              src="@/assets/image/timeline/img_timeline01@2x.png"
              alt="実績画像"
            />
          </div>
          <div class="c-timeline__event">
            <h3 class="c-timeline__subTitle">
              Laravelを使用したサイト構築
            </h3>
            <div class="c-timeline__info">
              <p class="c-timeline__work">
                <span class="c-timeline__infoTitle">案件内容</span>
                マッチングアプリサービス
              </p>
              <p class="c-timeline__part">
                <span class="c-timeline__infoTitle">担当範囲</span>
                TOPページコーディング
              </p>
            </div>
            <p class="c-timeline__text">
              主にコーディングを担当。この案件でVue.jsを使ったコーディング方法を学びました。主にコーディングを担当。この案件でVue.jsを使ったコーディング方法を学びました。ああああああああああああ
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.c-timeline {
  padding-top: 82px;
  padding-bottom: 95px;
  background-color: #faf7f7;

  @include mobile {
    padding-top: 40px;
    padding-bottom: 103px;
  }

  &__head {
    text-align: center;
  }

  &__date {
    font-size: 22px;
    font-weight: bold;

    @include mobile {
      margin: 0 auto 0 0;
      font-size: 18px;
    }
  }

  &__title {
    @include text-h2;

    @include mobile {
      font-size: 20px;
    }
  }

  &__box {
    margin-top: 70px;

    @include mobile {
      margin-top: 40px;
    }
  }

  &__img {
    position: relative;
    z-index: 2;

    &::before {
      position: absolute;
      top: -175px;
      left: 65px;
      z-index: -3;
      display: inline-block;
      width: 11px;
      height: 200px;
      content: "";
      background-color: #f7dfdf;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 74px;

    @include mobile {
      flex-direction: column;
      margin-top: 100px;

      &:nth-child(1) {
        margin-top: 0;
      }
    }
  }

  &__start {
    z-index: 1;
    display: inline-block;
    width: 38px;
    height: 38px;
    background-color: #f7dfdf;
    border-radius: 83px;

    @include mobile {
      display: none;
    }
  }

  &__event {
    z-index: 3;
    width: 564px;
    padding: 15px 40px;
    background-color: #fff;
    border: 4px solid #f7dfdf;
    border-radius: 5px;

    @include mobile {
      width: 100%;
      padding: 25px 10px;
    }
  }

  &__subTitle {
    font-size: 22px;
    font-weight: bold;

    @include mobile {
      font-size: 16px;
      text-align: center;
    }
  }

  &__info {
    margin-top: 11px;

    @include mobile {
      margin-top: 16px;
    }
  }

  &__infoTitle {
    margin-right: 10px;
    font-weight: bold;

    @include mobile {
      font-size: 14px;
    }
  }

  &__part {
    margin-top: 5px;

    @include mobile {
      font-size: 14px;
    }
  }

  &__text {
    margin-top: 11px;

    @include mobile {
      margin-top: 25px;
      font-size: 14px;
    }
  }
}
</style>
