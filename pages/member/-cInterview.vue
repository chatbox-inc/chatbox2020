<template>
  <section class="c-interview">
    <div class="c-container">
      <div class="c-interview__head">
        <h2 class="c-interview__title">
          ミニインタビュー
        </h2>
      </div>
      <div class="c-interview__questions">
        <ul class="c-interview__list">
          <li class="c-interview__listItem">
            <div class="c-interview__numberBox">
              <p class="c-interview__number">
                01
              </p>
            </div>
            <div class="c-interview__question">
              <p class="c-interview__q">
                --(仮)質問項目が入ります。
              </p>
              <p class="c-interview__a">
                回答が入ります。
              </p>
            </div>
          </li>
          <li class="c-interview__listItem">
            <div class="c-interview__numberBox">
              <p class="c-interview__number">
                02
              </p>
            </div>
            <div class="c-interview__question">
              <p class="c-interview__q">
                --学校生活で楽しかったことは？
              </p>
              <p class="c-interview__a">
                回答が入ります。回答が入ります。回答が入ります。回答が入ります。
              </p>
            </div>
          </li>
          <li class="c-interview__listItem">
            <div class="c-interview__numberBox">
              <p class="c-interview__number">
                03
              </p>
            </div>
            <div class="c-interview__question">
              <p class="c-interview__q">
                --学校生活で何を学んでいますか？
              </p>
              <p class="c-interview__a">
                回答が入ります。回答が入ります。回答が入ります。回答が入ります。
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.c-interview {
  padding-top: 90px;
  padding-bottom: 167px;

  @include mobile {
    padding-top: 40px;
    padding-bottom: 70px;
  }

  &__head {
    @include text-h2;

    text-align: center;

    @include mobile {
      font-size: 20px;
    }
  }

  &__listItem {
    display: flex;
    margin-top: 68px;

    @include mobile {
      margin-top: 40px;
    }
  }

  &__numberBox {
    @include text-white;

    width: 54px;
    max-height: 54px;
    padding: 15px 0;
    margin-right: 45px;
    text-align: center;
    background-color: $clr-primary;

    @include mobile {
      min-width: 50px;
      min-height: 50px;
      margin-right: 9px;
    }
  }

  &__q {
    font-size: 20px;
    font-weight: bold;

    @include mobile {
      font-size: 16px;
    }
  }

  &__a {
    margin-top: 16px;

    @include mobile {
      margin-top: 10px;
      font-size: 14px;
    }
  }
}
</style>
