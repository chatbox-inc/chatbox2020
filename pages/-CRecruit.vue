<template>
  <section class="pb-20 pt-10 mt-20 bg-ivory">
    <div class="container mx-auto text-center mt-8 relative px-5 sm:px-0">
      <div class="c-recruit__head absolute">
        <UiTitle title="Recruit" />
      </div>
      <img
        class="mb-12"
        src="~assets/image/recruit/recruit_img@2x.png"
        alt="chatbox"
      />
      <p class="mx-auto text-black mb-10 text-left w-full lg:w-3/5">
        1.chatboxでは一緒に働く仲間を募集しています。「組織」ではなく「個人」を尊重し、
        技術だけではない「現場で生き抜くコミュニケーション力」がきっと身につきます。
        是非、共に成長して行きましょう。<br />
        2.chatboxでは一緒に働く仲間を募集しています。未経験からのJOINを歓迎しているからこそ、教育制度には非常に重きをおいています。
        毎月定期的に開催されるスクールイベントだけでなく現場業務の体験サポートやコミュニティ参加支援など、技術だけではない「現場で生き抜くコミュニケーション力」がきっと身につきます。是非、一緒に成長していきましょう。
        <br />
        <br />※wantedlyへ飛びます
      </p>
      <UiButton text="採用情報へ" :url="''" />
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.c-recruit {
  &__head {
    top: -130px;
  }
}
</style>
