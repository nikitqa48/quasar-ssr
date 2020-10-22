<template>
<q-layout view="hHh Lpr lff" > 
  <q-header elevated class="deckstop" >
 <header-vue class="no-shadow" @drawerEvent ='drawer = $event' :getDrawer='drawer'/>
 
  </q-header>
  
        <q-drawer
        v-if="$q.platform.is.desktop"
        v-model="drawer"
        show-if-above
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        mini-to-overlay
        :width="200"
        :breakpoint="800"
        content-class="bg-blue-grey-10 text-white"
      >
        <q-scroll-area class="fit">
        <template v-for="(menuItem, index) in menuList">
              <q-item :key="index" clickable :active="menuItem.label === 'Outbox'" v-ripple :to='menuItem.to'>
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
            </template>
          
        </q-scroll-area>
      </q-drawer>
<q-drawer
        v-model="drawer"
         v-if="$q.platform.is.mobile"
        :width="200"
        overlay
        :breakpoint="100"
        elevated
        content-class="bg-blue-grey-10 text-white"
      >
        <q-scroll-area class="fit">
        <template v-for="(menuItem, index) in menuList" >
              <q-item :key="index" clickable :active="menuItem.label === 'Outbox'" v-ripple :to='menuItem.to'>
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
            </template>
          
        </q-scroll-area>
      </q-drawer>



  <q-page-container class="q-page">
  
 <router-view :visible ='visible'  @disableLoading ='visible = $event'/>

  </q-page-container>
<!-- <forms-vue/> -->
   <q-inner-loading :showing="visible" dark >
    <q-spinner-dots color="light-blue-6" size='150px' />
      </q-inner-loading>
</q-layout>
</template>
<style scoped>

</style>

<script>
const menuList = [
  {
    icon: 'mdi-map-marker',
    label: 'Регион',
    separator: true,
    to:'/region',
  },
  {
    icon: 'mdi-map',
    label: 'Площадки',
    separator: false,
    to:'/square'
  },
  {
    icon: 'mdi-bank',
    label: 'Господдержка',
    separator: false,
    to:'/support'
  },
  {
    icon: 'mdi-folder-open',
    label: 'Проекты',
    separator: true,
    to:'/project'
  },
  {
    icon: 'mdi-newspaper-variant',
    label: 'Новости',
    separator: false,
    to: '/news'
  },
  {
    icon: 'mdi-calendar-multiple-check',
    label: 'События',
    separator: false,
    to:'/event'
  },
  {
    icon: 'mdi-file',
    iconColor: 'primary',
    label: 'Документы',
    to:'/documents',
    separator: false
  },
    {
    icon: 'mdi-tooltip-account',
    iconColor: 'primary',
    label: 'Контакты',
    separator: false,
    to:'/contacts'
  }
]
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
        miniState: true,
        drawer:false,
        question:'',
        menuList,
        answer: this.$store.state.loading.loading
      }
    },
    computed:{
   
    },
    watch:{

    },
      methods: {
        disableLoading(value){
          this.visible= value
        },
        drawerEvent(value){
         this.drawer = value
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
@font-face {
  font-family: "xz";
  src: url("../css/fonts/Root/PT Root UI_Medium.woff") format("woff");
}
/* @font-face {
  font-family: root;
  src: url(./fonts/css/customfont.woff);
} */
* {
  font-family: "xz";
}
 @media screen and (max-width: 900px) {
   /* .deckstop{
     display:none!important;
   } */
 }

.deckstop{
  color:white;
  background: #515151;
  display: flex;
  align-items: center;
  min-height:7vh;
  font-size: 1em;
}

</style>