<template>
  <footer class="l-footer">
    <div class="l-footer__bg">
      <div class="l-footer__head">
        <img
          class="l-footer__icon"
          src="@/assets/image/footer/icon_mail.svg"
          alt="手紙のアイコン"
        />
        <h2 class="l-footer__title">
          お問い合わせはこちら
        </h2>
      </div>
      <div class="c-container">
        <div class="l-footer__box">
          <p class="l-footer__text">
            Webにまつわるお悩み、<br />
            ご相談はお気軽にchatboxまで。
          </p>
          <div class="l-footer__buttons">
            <nuxt-link to="/" class="c-footerButton">
              お問い合わせフォームへ
              <img
                class="l-footer__buttonIcon"
                src="@/assets/image/footer/keyboard_arrow_right-24px.svg"
                alt="右シェブロン"
              />
            </nuxt-link>
            <div class="l-footer__callInfo">
              <p class="l-footer__callText">
                電話でのお問い合わせ<br />
                <span class="l-footer__callNumber">050-3555-1212</span>
              </p>
            </div>
          </div>
          <hr class="l-footer__divider--white" />
          <div class="l-footer__logos">
            <img
              src="@/assets/image/footer/img_chatbox_logo@2x.png"
              alt="chatbox.inc webの「これから」を語り合う"
            />
            <p class="l-footer__logoText">
              東京・大阪・名古屋のWeb制作会社・ZIZOは、Webコンテンツの企画、ディレクション、デザイン、開発を中心に活動するクリエイティブ・プロダクションです。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="l-footer__container">
      <ul class="l-footer__list">
        <li class="l-footer__listItem">
          <nuxt-link to="/" class="l-footer__listLink">
            chatboxについて
          </nuxt-link>
        </li>
        <li class="l-footer__listItem">
          <nuxt-link to="/" class="l-footer__listLink">
            サービス
          </nuxt-link>
        </li>
        <li class="l-footer__listItem">
          <nuxt-link to="/" class="l-footer__listLink">
            メンバー
          </nuxt-link>
        </li>
        <li class="l-footer__listItem">
          <nuxt-link to="/" class="l-footer__listLink">
            お問い合わせ
          </nuxt-link>
        </li>
      </ul>
      <hr class="l-footer__divider" />
      <div class="l-footer__infos">
        <div class="l-footer__info">
          <img
            src="@/assets/image/footer/img_logo@2x.png"
            alt="株式会社chatboxロゴ"
            class="l-footer__infoLogo"
          />
          <small class="l-footer__copyright">
            Copyright © chatbox.inc All Rights Reserved.
          </small>
        </div>
        <div class="l-footer__info">
          <a href="#" class="l-footer__snsLink">
            <img
              src="@/assets/image/footer/facebook-square-brands.svg"
              alt="facebookロゴ"
              class="l-footer__sns"
            />
          </a>
          <a href="#" class="l-footer__snsLink">
            <img
              src="@/assets/image/footer/twitter-square-brands.svg"
              alt="facebookロゴ"
              class="l-footer__sns"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.l-footer {
  background-color: #fffcfc;

  &__bg {
    background-color: #c3504f;
  }

  &__head {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 22px 0;
    text-align: center;
    background-color: #fff;

    @include mobile {
      padding: 17px 0;
    }
  }

  &__text {
    @include text-white;

    font-size: 30px;
    font-weight: bold;

    @include mobile {
      font-size: 17px;
    }
  }

  &__icon {
    margin-right: 10px;
  }

  &__box {
    text-align: center;
    background-color: #c3504f;
  }

  &__buttonIcon {
    position: relative;
    top: 12px;

    @include mobile {
      top: 8px;
      width: 28px;
    }
  }

  &__buttons {
    display: flex;
    align-items: center;
    margin-top: 66px;

    @include mobile {
      flex-direction: column;
      margin-top: 60px;
    }
  }

  &__callInfo {
    margin-left: 90px;
    text-align: left;

    @include mobile {
      margin-top: 50px;
      margin-left: 0;
    }
  }

  &__callText {
    @include text-white;

    font-size: 20px;
    font-weight: bold;
    letter-spacing: 3.75px;

    @include mobile {
      font-size: 16px;
      text-align: center;
    }
  }

  &__callNumber {
    margin-top: 20px;
    font-size: 32px;
    font-weight: bold;

    @include mobile {
      font-size: 25px;
    }
  }

  &__container {
    max-width: 1590px;
    padding: 47px 22px 111px 22px;
    margin: 0 auto;

    @include mobile {
      padding-bottom: 15px;
    }
  }

  &__list {
    display: flex;

    @include mobile {
      justify-content: center;
    }
  }

  &__listItem {
    margin-right: 42px;

    @include mobile {
      margin-right: 10px;
      font-size: 10px;
    }
  }

  &__listLink {
    @include text-accent;
  }

  &__divider {
    margin: 26px 0 0 0;
    border-color: #c3504f80;
  }

  &__divider--white {
    margin-top: 127px;
    border-color: white;

    @include mobile {
      margin-top: 50px;
    }
  }

  &__infos {
    display: flex;
    justify-content: space-between;
    margin-top: 18px;

    @include mobile {
      margin-top: 43px;
    }
  }

  &__info {
    display: flex;
    align-items: center;

    &:nth-child(1) {
      margin-right: 15px;
    }
  }

  &__logos {
    margin-top: 55px;
  }

  &__infoLogo {
    margin-right: 20px;

    @include mobile {
      margin-right: 10px;
    }
  }

  &__copyright {
    @include text-accent;

    @include mobile {
      font-size: 10px;
    }
  }

  &__logoText {
    @include text-white;

    margin-top: 60px;

    @include mobile {
      margin-top: 50px;
      font-size: 12px;
    }
  }

  &__snsLink {
    &:nth-child(1) {
      margin-right: 15px;
    }
  }
}

.c-container {
  position: relative;
  padding-top: 90px;
  padding-bottom: 70px;

  @include mobile {
    padding-top: 79px;
    padding-bottom: 99px;
  }

  &::after {
    position: absolute;
    top: -1px;
    left: 50%;
    width: 0;
    height: 0;
    content: "";
    border-color: #fff transparent transparent transparent;
    border-style: solid;
    border-width: 40px 35px 0 35px;
    transform: translate(-50%);
  }
}
</style>
