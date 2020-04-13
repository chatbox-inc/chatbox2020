<template>
  <section class="c-members">
    <div class="c-container">
      <div class="c-members__head">
        <h2 class="c-members__headTitle">
          <span class="c-members__headColor">M</span>ember
        </h2>
      </div>
      <div class="c-members__box">
        <div v-for="n in 8" :key="n" class="c-members__item">
          <img
            src="@/assets/image/members/img_profile@2x.png"
            class="c-members__itemImg"
            alt="社員写真"
          />
          <div class="c-members__info">
            <p class="c-members__job">
              株式会社chatbox/ 代表取締役
            </p>
            <p class="c-members__name--jp">
              後藤 知宏
            </p>
            <p class="c-members__name--en">
              Goto Tomohiro
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
.c-members {
  position: relative;
  padding-bottom: 146px;
  background-color: #faf7f7;

  &__head {
    position: relative;
    top: -65px;
    text-align: center;
  }

  &__headTitle {
    font-family: Yu Mincho Medium, YuMincho, serif;
    font-size: 60px;
    color: #393739;
    letter-spacing: 5px;
  }

  &__headColor {
    @include text-accent;

    font-size: 82px;
  }

  &__box {
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    width: 25%;
    padding: 25px;
  }

  &__info {
    text-align: center;
  }

  &__job {
    margin-top: 10px;
    font-size: 12px;
  }

  &__name--jp {
    margin-top: 5px;
    font-size: 20px;
  }

  &__name--en {
    padding-bottom: 20px;
    margin-top: 5px;
    font-size: 12px;
    color: #ccc4cb;
    border-bottom: 2px solid #c3504f;
  }
}
</style>
