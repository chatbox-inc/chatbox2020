<template>
  <div>
    <CHero />
    <CIntro />
    <CCreation />
    <CTalking />
    <CEnjoy />
    <CMember />
    <CRecruit />
    <CNews />
    <CAbout />
    <CContact />
    <UiBanner v-if="newsData" :news="newsData" />
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
import { fetchNews } from '@/service/firebase'
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
  data() {
    return {
      newsData: null,
    }
  },
  async mounted() {
    const newsList = await fetchNews()
    this.newsData = newsList[0]
  },
}
</script>
