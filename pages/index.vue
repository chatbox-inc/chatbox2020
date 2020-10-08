<template>
  <div>
    <CHero />
    <CIntro v-if="intro" :intro="intro" />
    <CCreation v-if="creation" :creation="creation" />
    <CTalking v-if="talking" :talking="talking" />
    <CEnjoy v-if="enjoy" :enjoy="enjoy" />
    <CRecruit v-if="recruit" :recruit="recruit" />
    <CAbout v-if="about" :about="about" />
  </div>
</template>

<script>
import CHero from '@/pages/-CHero'
import CIntro from '@/pages/-CIntro'
import CCreation from '@/pages/-CCreation'
import CTalking from '@/pages/-CTalking'
import CEnjoy from '@/pages/-CEnjoy'
import CRecruit from '@/pages/-CRecruit'
import CAbout from '@/pages/-CAbout'
import {
  intro,
  creation,
  talking,
  enjoy,
  recruit,
  about,
} from '@/static/api/top.json'
export default {
  components: {
    CHero,
    CIntro,
    CCreation,
    CTalking,
    CEnjoy,
    CRecruit,
    CAbout,
  },
  async asyncData() {
    return {
      intro,
      creation,
      talking,
      enjoy,
      recruit,
      about,
    }
  },
  data() {
    return {
      intro: null,
      creation: null,
      talking: null,
      enjoy: null,
      recruit: null,
      about: null,
    }
  },
}
</script>
