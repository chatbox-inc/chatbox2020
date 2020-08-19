<template>
  <div>
    <CHero />
    <CIntro v-if="intro" :intro="intro" />
    <CCreation v-if="creation" :creation="creation" />
    <CTalking v-if="talking" :talking="talking" />
    <CEnjoy v-if="enjoy" :enjoy="enjoy" />
    <CMember v-if="member" :member="member" />
    <CRecruit v-if="recruit" :recruit="recruit" />
    <CNews :news-list="newsList" />
    <CAbout v-if="about" :about="about" />
    <CContact v-if="contact" :contact="contact" />
    <UiBanner v-if="newsData.createdAt" :news="newsData" />
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
import {
  intro,
  creation,
  talking,
  enjoy,
  member,
  recruit,
  about,
  contact,
} from '@/static/api/top.json'
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
  async asyncData() {
    const newsList = await fetchNews()
    const newsData = newsList[0]
    console.log(newsData)
    return {
      newsList,
      newsData,
      intro,
      creation,
      talking,
      enjoy,
      member,
      recruit,
      about,
      contact,
    }
  },
  data() {
    return {
      intro: null,
      creation: null,
      talking: null,
      enjoy: null,
      member: null,
      recruit: null,
      about: null,
      contact: null,
      newsData: null,
      newsList: null,
    }
  },
}
</script>
