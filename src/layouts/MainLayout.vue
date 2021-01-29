<template>
<q-layout view="lHh Lpr lff" class="layout"> 
  
 <header-vue class="no-shadow" @drawerEvent ='drawer = $event'  :drawer='drawer'  id='header'  v-if ='this.$route.name != "region"'/>
 <regionHeader-vue class="no-shadow" @drawerEvent ='drawer = $event'  :drawer='drawer'  id='header' v-if="this.$route.name == 'region'"/>
    <q-drawer
        v-if="$q.platform.is.desktop"
        v-model="drawer"
        show-if-above
        :mini-width="100"
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        mini-to-overlay
        :width="200"
        class='descktop'
        :breakpoint="0"
        content-class="bg-blue-grey-10 text-white flex logo"
      >
    <router-link to='/' style="margin:2vh auto 00;">
      <div style="width:3vw; height:6vh; ">
        <q-img src='icons/logo-svg.svg' style="width:100%;"/>
    </div>
    </router-link>
        <q-scroll-area class="items">
        <template v-for="(menuItem, index) in menuList"  >
         
              <q-item :key="index" clickable :active="menuItem.label === 'Outbox'" v-ripple :to='menuItem.to' style="margin-top:2vh;">
                <q-item-section avatar >
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
            </template>
          
        </q-scroll-area>
        </div>
      </q-drawer>


<q-drawer
        v-model="landscape"
        v-if="$q.platform.is.mobile"
        :width="height"
        :mini="mobileState"
         mini-to-overlay
        :breakpoint="100"
        elevated
        @click='mobileState=true'
        class='landscape'
        content-class="bg-blue-grey-10 text-white landscape"
      >
        <q-scroll-area class="fit">
           <q-card-section style="font-size:200%; display:flex; justify-content:space-between;" v-if='mobileState ==false'>  Меню  <q-btn flat @click="drawer=false" round dense icon="close" v-if="$q.platform.is.mobile"/></q-card-section>
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
<q-drawer
        v-model="drawer"
        v-if="$q.platform.is.mobile"
        :breakpoint="100"
        elevated
        :width="width" 
        mini-to-overlay
        class='portrait'
        content-class="bg-blue-grey-10 text-white"
        
      >
        <q-scroll-area class="fit">
           
           <q-card-section style="font-size:200%; display:flex; justify-content:space-between;"> Меню  <q-btn flat @click="drawer=false" round dense icon="close" v-if="$q.platform.is.mobile"/></q-card-section>
     
       <template v-for="(menuItem, index) in menuList" >
              <q-item :key="index" clickable :active="menuItem.label === 'Outbox'" v-ripple :to='menuItem.to' @click="drawer=false">
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
  
 <router-view :visible ='visible'  @disableLoading ='visible = $event'  />

  </q-page-container>
   <q-inner-loading :showing="visible" dark >
    <q-spinner-dots color="light-blue-6" size='150px' />
      </q-inner-loading>
</q-layout>
</template>
<style scoped>

</style>


<script>
import { event } from 'quasar'
const menuList = [
  {
    icon: 'mdi-map-marker',
    label:'Регион',
    separator: false,
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
    separator: false,
    to:'/project'
  },
  {
    icon: 'mdi-newspaper-variant',
    label: 'Новости',
    separator: false,
    to: '/news'
  },
  // {
  //   icon: 'mdi-calendar-multiple-check',
  //   label: 'События',
  //   separator: false,
  //   to:'/event'
  // },
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
import regionHeaderVue from '../components/region_header.vue'
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
        formsVue,
        headerVue,
        regionHeaderVue
        
    },
    data(){
      return{
        visible:true,
        width:100,
        landscape:false,
        height:100,
        orientation:0,
        miniState: true,
        mobileState:true,
        content: null,
        drawer:false,
        question:'',
        menuList,
        answer: this.$store.state.loading.loading
      }
    },
    mounted(){
      this.width = window.innerWidth

      this.height = window.innerHeight
      if(window.innerWidth>window.innerHeight){
        this.height=this.width
        this.width=this.height
        this.landscape = true
        this.drawer=false
      }
      this.$store.dispatch('lastNews/getNews')
      
    },
    watch:{
      label(){
       
      }
        },
      updated(){
        window.addEventListener('orientationchange', this.getClientWidth)
      },
        beforeDestroy() {
          window.removeEventListener('orientationchange', this.width=window.innerHeight);
  },
      methods: {
        getClientWidth(){
          this.width = window.innerHeight
          if(window.screen.orientation.type == 'portrait-primary'){
            return this.landscape = false
          }
          else{
            return this.landscape = true
          }
        },
        disableLoading(value){
          this.visible= value
        },
        changeLabel(){
        menuList[0].label = this.$t('regionDrawer')
         menuList[1].label = this.$t('squareDrawer')
         menuList[2].label = this.$t('supportDrawer')
         menuList[3].label = this.$t('projectDrawer')
         menuList[4].label = this.$t('newsDrawer')
         menuList[5].label = this.$t('documentsDrawer')
         menuList[6].label = this.$t('contactsDrawer')
        },
        drawerEvent(value){
         this.drawer = value
        } ,
  },
    computed:{
      loadingState: {
        get (){
          this.visible = this.$store.state.loading.load
          return this.$store.state.loading.load
        }
      },
     label(){
       if(this.$i18n.locale == 'ru'){
      this.changeLabel()
         }
        else{
        this.changeLabel()
        }
     }
  },
    created(){
        
    }

}
</script>
<style scoped>
.items{
  align-self: center;
  display: flex;
  justify-content: center;
  height:50%;
  margin-bottom:10vh;
  width:100%;
}
.layout{
  background-attachment:fixed!important;
  background-size:cover!important;
  background-position:50% 50%!important;
}
.fit{
  display: flex;
  justify-content: center;
}
@media all and (orientation:portrait){
.landscape{
    display:none;
  }
  .q-page{
    padding-left:0!important;
  }
} 
 .portrait{
   width:100%;
 }
@media all and (orientation:landscape){
    .q-page{
      padding-left: auto;
    }
    .portrait{
      display:none!important;
    }
    .deckstop{
      display:none!important;
    }
}
@font-face {
  font-family: "relative";
  src: url("../css/fonts/Root/PT Root UI_Medium.woff") format("woff");
}

/* * @font-face {
  font-family: root;
  src: url(./fonts/css/customfont.woff);
}  */
* {
  font-family: "relative";
}
 @media screen and (max-width: 900px) {
   .deckstop{
      color:white!important;
       background: #515151!important;
   }
 }

.deckstop{
  background: white;
  color:black;
  display: flex!important;
  align-items: center;
  min-height:8vh;
  font-size: 1em;
}
.region{
  background:none;
  display:flex;
  justify-content: center;
  min-height: 7vh;
  color:white;
  border-bottom:1px solid white;
}

</style>