<template>
<q-layout view="lhh LpR lff"> 
  <q-header elevated>
 <header-vue/>
  </q-header>
  <q-page-container>
  
 <router-view :visible ='visible'  @disableLoading ='visible = $event'/>

  </q-page-container>
<forms-vue/>
   <q-inner-loading :showing="visible" dark >
    <q-spinner-dots color="light-blue-6" size='150px' />
      </q-inner-loading>
</q-layout>
</template>
<style scoped>

</style>

<script>
import headerVue from "../components/header.vue";
import store from 'vuex'
import formsVue from "components/forms";
let data = false
export default {
    preFetch ({store}) {
      let news = store.dispatch('lastNews/getNews')
      let loading = store.state.loading.loading
    return news
    // return new Promise(resolve => {
    //   store.dispatch('lastNews/getNews')
    //   resolve()
    // }).then(() => {
    //   Loading.hide()
    // })
  },
    components:{
        headerVue,
        formsVue
    },
    data(){
      return{
        visible:true,
        question:'',
        answer: this.$store.state.loading.loading
      }
    },
    computed:{
   
    },
    watch:{
      visible(){
          // alert('ты че там меняешь собака')
      }
    },
      methods: {
        disableLoading(value){
          this.visible= value
        }
  },
    computed:{
      loadingState: {
        get (){
          this.visible = this.$store.state.loading.load
          return this.$store.state.loading.load
        }
      },
    // action(){
    //       return this.visible = store.state.loading.loading
    //     }

  },

}
</script>
<style scoped>
* {
  font-family: "Montserrat";
}
</style>