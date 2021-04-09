<template>
  <q-layout view="lHh Lpr lff"> 
  <desktopHeader-vue  v-if="this.$q.platform.is.desktop"/>
  <mobileHeaderVue v-if="this.$q.platform.is.mobile" />
    <desktopDrawer-vue v-if="this.$q.platform.is.desktop" />
    <mobileDrawer-vue v-if="this.$q.platform.is.mobile" />
    <q-page-container>
      <router-view  />
    <q-inner-loading :showing="visible" dark >
    <q-spinner-dots color="light-blue-6" size='150px' />
      </q-inner-loading>
    </q-page-container>
  </q-layout>
</template>
<script>
import desktopHeaderVue from "../../components/desktop/header.vue";
import mobileHeaderVue from "../../components/mobile/mobileHeader.vue";
import mobileDrawerVue from "../../components/mobile/mobileDrawer.vue";
import desktopDrawerVue from '../../components/desktop/drawer.vue'
export default {
        preFetch ({store}) {
      let news = store.dispatch('lastNews/getNews')
      let count = store.dispatch('support/CheckConnect')
      return news, count
  },
  name: 'AppLayout',
  components:{
    desktopHeaderVue,
    mobileHeaderVue,
    mobileDrawerVue,
    desktopDrawerVue
  },
  data () {
    return {
    }
  },
  computed:{
    visible(){
      return this.$store.state.loading.loading
    }
  }
}

</script>
<style scoped>
</style>