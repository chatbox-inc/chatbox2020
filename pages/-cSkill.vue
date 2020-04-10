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
              制作現場における円滑なコミュニケーションは、良い仕事を生み出すだけでなく、
              携わるスタッフ全員の働きやすさにも良い効果をもたらします。
              chatboxでは、プロジェクトごとに異なる組織体制を組む柔軟なチーム制作を行っており、
              タスクの依頼方法や報告の仕方などにも日々工夫を重ねています。
              学生スタッフも含めたそれぞれのスタッフが、互いに円滑な相談・報告を行い、
              より良い環境づくりに社内全体で取り組んでいます。
            </p>
          </div>
        </div>
        <div class="c-skill__boxItem">
          <img src="@/assets/image/skill/img_skill@2x.png" alt="社内風景画像" />
          <div class="c-skill__boxDescription">
            <h3 class="c-skill__boxTitle">
              自己管理能力の向上
            </h3>
            <p class="c-skill__boxText">
              chatboxでは各々が無理せず、適切な休暇を取れるよう、
              Backlogなどのプロジェクト管理ツールを使ったタスク管理が実施されています。
              毎週の全体ミーティングでタスクを可視化し、全体報告を行うといった習慣を徹底することで、
              繁忙時に応援を依頼したり、体調に合わせて休暇を取得する、といった事が可能になっています。
              柔軟な出勤時間やリモートワークの利用などで、個々が最大限のパフォーマンスを発揮できる環境で、
              それぞれがライフスタイルのニーズに合わせて仕事を設計することが出来るようになっています。
            </p>
          </div>
        </div>
        <div class="c-skill__boxItem">
          <img src="@/assets/image/skill/img_skill@2x.png" alt="社内風景画像" />
          <div class="c-skill__boxDescription">
            <h3 class="c-skill__boxTitle">
              スクール勉強会の開催
            </h3>
            <p class="c-skill__boxText">
              chatbox 主催の Lec Café
              では「現場で使える最新技術」をテーマに毎月様々なセミナーを開催しています。
              プロ向けの高品質なセミナー講座に、アルバイトを含めた各スタッフは無償で参加する事ができます。
              また各種技術系コミュニティイベントの主催・参加も積極的に行われており、社外の様々なクリエイターとの交流の機会が用意されています。
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
  padding-bottom: 244px;

  &__head {
    text-align: center;
  }

  &__text {
    line-height: 30px;
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
