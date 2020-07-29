<template>
  <div>
    <CHero />
    <CIntro v-if="intro" :intro="intro" />
    <CCreation v-if="creation" :creation="creation" />
    <CTalking v-if="talking" :talking="talking" />
    <CEnjoy v-if="enjoy" :enjoy="enjoy" />
    <CMember v-if="member" :member="member" />
    <CRecruit v-if="recruit" :recruit="recruit" />
    <CNews />
    <CAbout v-if="about" :about="about" />
    <CContact v-if="contact" :contact="contact" />
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
    }
  },
  async mounted() {
    this.intro = intro
    this.creation = creation
    this.talking = talking
    this.enjoy = enjoy
    this.member = member
    this.recruit = recruit
    this.about = about
    this.contact = contact
    const newsList = await fetchNews()
    this.newsData = newsList[0]
  },
}
</script>
