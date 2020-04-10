<template>
  <section class="c-intro">
    <div class="c-container">
      <div class="c-intro__head">
        <h2 class="c-intro__headTitle">
          <span class="c-intro__headColor">働</span>く、学ぶ、成長する
        </h2>
      </div>
      <div class="c-intro__box">
        <div class="c-intro__boxItem">
          <img
            src="@/assets/image/intro/img_01@2x.png"
            alt="ミーティング風景"
            class="c-intro__boxImg"
          />
          <div class="c-intro__boxDescription">
            <p class="c-intro__boxText">
              chatbox は職場環境を「スキルアップのプラットフォーム」と捉え、
              「働きながら学ぶ」の考え方を大切にしています。
              日々の仕事をこなすだけでなく、常に自分の数年後を見据えた仕事設計を。
              個人が組織に合わせるのではなく、
              それぞれのスタッフのキャリアプランに合わせて組織を変化させていくのが、chatbox
              の考え方です。
            </p>
            <p class="c-intro__boxText">
              継続的な成長を続けるためには、精神的余裕の確保が必要不可欠です。
              リモートワークや自由な休暇制度、リクエストに応じて開講される技術セミナー等、
              それぞれが高いモチベーションを維持するための工夫を継続的に実施しています。
            </p>
            <p class="c-intro__boxText">
              日々の「働く」を、楽しく余裕あるものに。自分の未来設計に合わせた意欲ある成長を。
              chatbox は個の成長を軸に、常に新しい形へと変化していきます。
            </p>
          </div>
        </div>
        <div class="c-intro__boxItem2">
          <ul class="c-intro__list">
            <li class="c-intro__listItem">
              <p class="c-intro__listText">
                学びながら働ける環境
              </p>
            </li>
            <li class="c-intro__listItem">
              <p class="c-intro__listText">
                個性を重視した環境
              </p>
            </li>
            <li class="c-intro__listItem">
              <p class="c-intro__listText">
                多様なコミニケーション
              </p>
            </li>
          </ul>
          <img
            src="@/assets/image/intro/img_02@2x.png"
            alt="社内イメージ画像"
            class="c-intro__boxImg2"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.c-intro {
  padding-top: 105px;
  padding-bottom: 100px;

  &__head {
    text-align: center;
  }

  &__headTitle {
    font-family: Yu Mincho Medium, YuMincho, serif;
    font-size: 50px;
    color: #393739;
    letter-spacing: 5px;
  }

  &__headColor {
    @include text-accent;
  }

  &__img {
    width: 70%;
  }

  &__boxDescription {
    position: relative;
    left: -32px;
  }

  &__box {
    margin-top: 50px;
  }

  &__boxItem {
    display: flex;
    align-items: center;
  }

  &__boxItem2 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 64px;
  }

  &__boxImg2 {
    position: relative;
    top: -10px;
  }

  &__boxText {
    font-size: 15px;
    line-height: 30px;

    &:nth-child(2) {
      margin-top: 70px;
    }

    &:nth-child(3) {
      margin-top: 40px;
    }
  }

  &__list {
    margin-right: 107px;
  }

  &__listItem {
    &:nth-child(n + 2) {
      margin-top: 35px;
    }
  }

  &__listText {
    @include text-accent;

    font-size: 20px;
    font-weight: bold;
  }
}
</style>
