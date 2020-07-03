<template>
  <div>
    <c-hero />
    <c-intro />
    <c-creation />
    <c-talking />
    <c-enjoy />
    <c-member />
    <c-recruit />
    <c-news />
    <c-about />
    <c-contact />
  </div>
</template>

<script>
import CHero from '@/pages/-cHero'
import CIntro from '@/pages/-CIntro'
import CCreation from '@/pages/-CCreation'
import CTalking from '@/pages/-CTalking'
import CEnjoy from '@/pages/-CEnjoy'
import CMember from '@/pages/-CMember'
import CRecruit from '@/pages/-CRectruit'
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

<style></style>
