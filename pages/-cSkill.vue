<template>
  <section class="c-skill">
    <div class="c-container">
      <div class="c-skill__head">
        <h2 class="c-skill__headTitle">
          <span class="c-skill__headColor">ス</span>キルアップ施策
        </h2>
      </div>
      <div class="c-skill__description">
        <p class="c-skill__text">
          chatboxでは自分で決めた目標に対して、積極的にスキルアップを目指していく人を応援しています。「自ら学び、教え合う」ことがごく自然に受け入れられている社内なので、得意分野をどんどん伸ばし、苦手分野は得意な人に教えてもらいながら補強していくことが可能です。
        </p>
      </div>
      <div class="c-skill__box">
        <div class="c-skill__boxItem">
          <img src="@/assets/image/skill/img_skill@2x.png" alt="社内風景画像" />
          <div class="c-skill__boxDescription">
            <h3 class="c-skill__boxTitle">
              多様なコミニケーション
            </h3>
            <p class="c-skill__boxText">
              slackやGitHubなどのITツールに・・・この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
              この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
              この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
            </p>
          </div>
        </div>
        <div class="c-skill__boxItem">
          <img src="@/assets/image/skill/img_skill@2x.png" alt="社内風景画像" />
          <div class="c-skill__boxDescription">
            <h3 class="c-skill__boxTitle">
              多様なコミニケーション
            </h3>
            <p class="c-skill__boxText">
              slackやGitHubなどのITツールに・・・この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
              この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
              この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
            </p>
          </div>
        </div>
        <div class="c-skill__boxItem">
          <img src="@/assets/image/skill/img_skill@2x.png" alt="社内風景画像" />
          <div class="c-skill__boxDescription">
            <h3 class="c-skill__boxTitle">
              多様なコミニケーション
            </h3>
            <p class="c-skill__boxText">
              slackやGitHubなどのITツールに・・・この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
              この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
              この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
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
.c-skill {
  padding-bottom: 103px;

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

  &__description {
    margin-top: 65px;
  }

  &__box {
    margin-top: 44px;
  }

  &__boxDescription {
    padding: 30px 40px;
    background-color: #faf7f7;
    border-right: 2px solid #c3504f;

    &:nth-child(2) {
      border-right: none;
      border-left: 2px solid #c3504f;
    }
  }

  &__boxItem {
    display: flex;

    &:nth-child(even) {
      flex-direction: row-reverse;
    }

    &:nth-child(n + 2) {
      margin-top: 30px;
    }
  }

  &__boxTitle {
    font-size: 20px;
    font-weight: bold;
  }

  &__boxText {
    margin-top: 20px;
    line-height: 30px;
  }
}
</style>
