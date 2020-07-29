<template>
  <div class="mx-auto overflow-hidden">
    <h2>test</h2>
    <!--  <CTop /> -->
    <!--     <CForm
      :form="form"
      @input="inputForm"
      @setSubject="setSubject"
      @openModal="openConfirmModal"
    />
    <UiConfirmModal
      v-if="showConfirmModal"
      @confirm="submitContact"
      @cancel="closeConfirmModal"
    />
    <UiSentModal v-if="showSentModal" @cancel="closeSentModal" />
    <UiBanner v-if="newsData" :news="newsData" /> -->
  </div>
</template>

<script>
/* import CTop from '@/pages/contact/-CTop' */
/* import CForm from '@/pages/contact/-CForm' */
import { submitContact } from '@/service/firebase'
import { fetchNews } from '@/service/firebase'

export default {
  components: {
    /*  CTop, */
    /* CForm, */
  },
  data() {
    return {
      showConfirmModal: false,
      showSentModal: false,
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      newsData: null,
    }
  },
  async mounted() {
    const newsList = await fetchNews()
    this.newsData = newsList[0]
  },
  methods: {
    openConfirmModal() {
      this.showConfirmModal = true
    },
    closeConfirmModal() {
      this.showConfirmModal = false
    },
    openSentModal() {
      this.showSentModal = true
    },

    closeSentModal() {
      this.showSentModal = false
    },

    submitContact() {
      submitContact(this.form)
      this.closeConfirmModal()
      this.openSentModal()
    },
    inputForm(form) {
      this.form = { ...form }
    },
    setSubject(subject) {
      this.form.subject = `${subject}について`
    },
  },
}
</script>
