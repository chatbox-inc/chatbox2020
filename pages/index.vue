<template>
  <div class="p-index">
    <c-hero class="p-index__item" />
    <c-intro class="p-index__item" />
    <c-creation class="p-index__item" />
    <c-talking class="p-index__item" />
    <c-enjoy class="p-index__item" />
    <c-member class="p-index__item" />
    <c-recruit class="p-index__item" />
    <c-news class="p-index__item" />
    <c-about class="p-index__item" />
    <c-contact class="p-index__item" />
  </div>
</template>

<script>
import CHero from '@/pages/-CHero'
import CIntro from '@/pages/-CIntro'
import CCreation from '@/pages/-CCreation'
import CTalking from '@/pages/-CTalking'
import CEnjoy from '@/pages/-CEnjoy'
import CMember from '@/pages/-CMember'
import CRecruit from '@/pages/-CRecruit'
import CNews from '@/pages/-CNews'
import CAbout from '@/pages/-CAbout'
import CContact from '@/pages/-CContact'

export default {
  components: {
    CHero,
    CIntro,
    CCreation,
    CTalking,
    CEnjoy,
    CMember,
    CRecruit,
    CNews,
    CAbout,
    CContact,
  },
}
</script>

<style lang="scss" scoped>
.p-index {
  &__item {
    &:nth-child(odd) {
      background-color: #faf7f7;
    }
  }
}
</style>
