<template>
  <div class="c-vision">
    <div class="c-container">
      <div class="c-vision__head">
        <h2 class="c-vision__headTitle">
          <span class="c-vision__headColor">C</span>hatboxの理念
        </h2>
      </div>
      <div class="c-vision__description">
        <p class="c-vision__text">
          chatboxの理念は「それぞれがスキルアップするためのプラットフォームをつくる」こと。この理念に沿って、困った事を気軽に相談しあえる環境づくりや新しい技術を身につけるためのイベントの運営など、個々の成長を積極的にサポートしています。
        </p>
      </div>
      <div class="c-vision__box">
        <div class="c-vision__point">
          <img
            src="@/assets/image/vision/img_point01@2x.png"
            alt="社内風景画像"
          />
          <div class="c-vision__pointDescription">
            <p class="c-vision__pointTitle">
              コミニケーション
            </p>
            <ul class="c-vision__list">
              <li class="c-vision__listItem">
                <p>リモートOK</p>
              </li>
              <li class="c-vision__listItem">
                <p>slackやgithubの導入</p>
              </li>
              <li class="c-vision__listItem">
                <p>遊び心も忘れない会話</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="c-vision__point">
          <img
            src="@/assets/image/vision/img_point02@2x.png"
            alt="社内風景画像"
          />
          <div class="c-vision__pointDescription">
            <p class="c-vision__pointTitle">
              個性重視
            </p>
            <ul class="c-vision__list">
              <li class="c-vision__listItem">
                <p>自由な出勤体制</p>
              </li>
              <li class="c-vision__listItem">
                <p>学生アルバイトも多数在籍</p>
              </li>
              <li class="c-vision__listItem">
                <p>柔軟な組織体制</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="c-vision__point">
          <img
            src="@/assets/image/vision/img_point03@2x.png"
            alt="社内風景画像"
          />
          <div class="c-vision__pointDescription">
            <p class="c-vision__pointTitle">
              学び&働く
            </p>
            <ul class="c-vision__list">
              <li class="c-vision__listItem">
                <p>スクールの定期開催</p>
              </li>
              <li class="c-vision__listItem">
                <p>勉強会やコミュニティ運営</p>
              </li>
              <li class="c-vision__listItem">
                <p>いつでも相談可能</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.c-vision {
  padding-top: 90px;
  padding-bottom: 190px;

  &__head {
    text-align: center;
  }

  &__headTitle {
    font-family: Yu Mincho Medium, YuMincho, serif;
    font-size: 50px;
    color: #393739;
    letter-spacing: 5px;
  }

  &__text {
    line-height: 30px;
  }

  &__headColor {
    @include text-accent;
  }

  &__description {
    margin-top: 65px;
  }

  &__box {
    display: flex;
    justify-content: center;
    margin-top: 110px;
  }

  &__pointDescription {
    padding: 10px 0 20px 0;
    background-color: #f5f1f1;
  }

  &__point {
    position: relative;
    width: 30%;
    margin-right: 10px;
    text-align: center;
    background-color: #f5f1f1;
    border-top: 2px solid #c3504f;

    &:nth-last-child(1) {
      margin-right: 0;
    }

    &::before {
      position: absolute;
      top: -50px;
      left: 50%;
      z-index: -2;
      width: 100px;
      height: 100px;
      padding-top: 18px;
      font-size: 18px;
      color: #fff;
      content: "Point 1";
      background-color: #c3504f;
      border-radius: 100px;
      transform: translate(-50%);
    }

    &:nth-child(2) {
      &::before {
        content: "Point 2";
      }
    }

    &:nth-child(3) {
      &::before {
        content: "Point 3";
      }
    }
  }

  &__pointTitle {
    font-size: 20px;
    font-weight: bold;
  }

  &__listItem {
    margin-top: 10px;

    &:nth-child(n + 2) {
      margin-top: 16px;
    }
  }
}
</style>
