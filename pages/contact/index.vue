<template>
  <section class="p-contact">
    <div class="p-contact__container">
      <div class="p-contact__head">
        <h2 class="p-contact__headTitle">
          <span class="p-contact__headColor">C</span>ontact
        </h2>
        <p>Web制作にまつわるお悩み、ご相談はお気軽にchatboxまで。</p>
      </div>
      <div class="p-contact__subItem">
        <h3 class="p-contact__subTitle">
          各種お問い合わせ
        </h3>
        <p>各種お問い合わせをご用意しております。お気軽にご利用ください。</p>
        <p>Webからのお問い合わせは以下のフォームをご利用ください。</p>
        <div class="p-contact__form1">
          <div class="p-contact__form1Container">
            <p>SNS、チャットツールからお問い合わせ</p>
            <div class="p-contact__form1Item">
              <nuxt-link to="/" class="c-linkButton p-contact__form1Button">
                <img
                  class="l-contact__buttonIcon"
                  src="@/assets/image/header/icon_chatbox-white@2x.png"
                  alt=""
                />
                <div class="p-contact__form1Text">
                  <p>Facebookから</p>
                  <p>メッセージを送る</p>
                </div>
                <img
                  class="l-contact__buttonIcon"
                  src="@/assets/image/header/icon_chatbox-white@2x.png"
                  alt=""
                />
              </nuxt-link>
              <nuxt-link to="/" class="c-linkButton p-contact__form1Button">
                <img
                  class="l-contact__buttonIcon"
                  src="@/assets/image/header/icon_chatbox-white@2x.png"
                  alt=""
                />
                <div class="p-contact__form1Text">
                  <p>Chatworkから</p>
                  <p>コンタクトを送る</p>
                </div>
                <img
                  class="l-contact__buttonIcon"
                  src="@/assets/image/header/icon_chatbox-white@2x.png"
                  alt=""
                />
              </nuxt-link>
            </div>
          </div>
          <div class="p-contact__form1Container p-contact__form1Border">
            <p>電話でのお問い合わせ</p>
            <h2>050-3555-1212</h2>
            <p>24時間対応：メッセージ預かり</p>
          </div>
        </div>
      </div>
      <div class="p-contact__subItem">
        <h3 class="p-contact__subTitle">
          フォームでのお問い合わせ
        </h3>
        <p>Webからお問い合わせできます</p>
        <p>
          以下の中からお問い合わせ内容を選択し、フォームを入力してください。
        </p>
        <div class="p-contact__form2">
          <div class="p-contact__form2Checkbox1">
            <input type="checkbox" value="1" />Web制作
            <input type="checkbox" value="2" />技術顧問
          </div>
          <div class="p-contact__form2Checkbox2">
            <input type="checkbox" value="3" />イベント
            <input type="checkbox" value="4" />その他
          </div>
          <p>
            Web制作に関するお問い合わせでは、見積もり相談にも対応しておりますので内容にその旨を記述いただきご連絡ください。
          </p>
          <form>
            <p>
              名前
              <input type="text" name="name" />
            </p>
            <p>
              E-mail
              <input type="text" name="mail" />
            </p>
            <p>
              件名
              <input type="text" name="title" />
            </p>
            <p>
              内容
              <textarea name="details" rows="4"> </textarea>
            </p>
            <input type="submit" value="送信" />
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.p-contact {
  width: 100%;

  &__container {
    margin: auto 0 auto 0;
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

  &__subItem {
    margin-top: 70px;
  }

  &__subTitle {
    margin-bottom: 10px;
  }

  &__form1 {
    display: flex;
    width: 90%;
    margin: 10px auto 0 auto;
    text-align: center;
    border: 1px solid #c3504f;

    @include mobile {
      display: block;
    }
  }

  &__form1Item {
    display: flex;
    text-align: center;

    @include mobile {
      display: block;
    }
  }

  &__form1Text {
    text-align: center;
  }

  &__form1Button {
    display: flex;
    padding: 20px;
    margin: 5px;

    @include mobile {
      margin: 5px auto;
    }
  }

  &__form1Container {
    padding: 20px;
    margin: 10px;

    p {
      margin-bottom: 10px;
    }

    h2 {
      @include text-accent;
    }
  }

  &__form1Border {
    padding-left: 20px;
    border-left: 1px solid #c3504f;

    @include mobile {
      border-top: 1px solid #c3504f;
      border-left: 1px solid #f5f5f5;
    }
  }
}
</style>
