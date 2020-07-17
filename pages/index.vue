<template>
  <div class="p-index">
    <CHero class="p-index__item" />
    <CIntro v-if="intro" class="p-index__item" :intro="intro" />
    <CCreation v-if="creation" class="p-index__item" :creation="creation" />
    <CTalking v-if="talking" class="p-index__item" :talking="talking" />
    <CEnjoy v-if="enjoy" class="p-index__item" :enjoy="enjoy" />
    <CMember v-if="member" class="p-index__item" :member="member" />
    <CRecruit v-if="recruit" class="p-index__item" :recruit="recruit" />
    <CNews class="p-index__item" />
    <CAbout v-if="about" class="p-index__item" :about="about" />
    <CContact v-if="contact" class="p-index__item" :contact="contact" />
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
    }
  },
  mounted() {
    this.intro = intro
    this.creation = creation
    this.talking = talking
    this.enjoy = enjoy
    this.member = member
    this.recruit = recruit
    this.about = about
    this.contact = contact
  },
}
</script>

<style lang="scss" scoped>
.p-index {
  &__item {
    &:nth-child(2n + 3) {
      background-color: #faf7f7;
    }
  }
}
</style>
