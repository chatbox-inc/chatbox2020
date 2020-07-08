<template>
  <div class="p-index">
    <CHero class="p-index__item" />
    <CIntro class="p-index__item" />
    <CCreation class="p-index__item" />
    <CTalking class="p-index__item" />
    <CEnjoy class="p-index__item" />
    <CMember class="p-index__item" />
    <CRecruit class="p-index__item" />
    <CNews class="p-index__item" />
    <CAbout class="p-index__item" />
    <CContact class="p-index__item" />
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
