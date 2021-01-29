<template>
<q-header elevated class="region">
<div class="wrap_header" >

        <q-toolbar class='deckstop' v-if="this.$q.platform.is.mobile" >
               
        <q-tabs
        indicator-color="blue-7"
        class='q-tabs my-tabs'
        active-color='blue'
        :content-style="{ border: '1px solid red;' }"
        >
            <!-- <q-route-tab
  flat class="btn-fixed-width" color="white"   no-wrap  no-caps icon= 'img:statics/icons/logo.png' 
    label="Главная страница"
    no-caps
    to="/example/head"
    exact
  /> -->
  <!-- <q-btn align="between" flat class="btn-fixed-width" color="white" style="width:15%;"
    no-caps icon= 'img:statics/icons/logo.png'  to="/example/head">
  <span> Инвестиционный портал Липецкой области </span>
  </q-btn> -->
  <div style="display:flex; width:100%;justify-content:space-between;align-items:center;">
  <router-link to = '/' style="align-self:center;">

       <div style="width:100%; display:flex;">
       <img src='icons/logo_button.png' style='width:100%;'>
       </div>



  </router-link>
      <!-- <q-space/> -->
         <span> <span style="font-weight:600">Инвестиционный портал</span> <br>Липецкой области</span>  
        <q-btn flat @click="disableDrawer" round dense icon="menu" v-if="$q.platform.is.mobile" /> 
</div>

</q-tabs>
        </q-toolbar>
    <q-toolbar class='deckstop' v-if="this.$q.platform.is.desktop" > 
     <span> <span style="font-weight:600">{{$t('header.invest')}}</span> <br>{{$t('header.gateway')}}</span>
      <q-space/>
                                <q-select
    v-model="lang"
    :options="langOptions"
    :label="$t('language')"
    dense
    borderless
    emit-value
    map-options
    dark
    label-color='white'
    color="white"
    options-dense
    style="min-width: 120px; color:white; margin-right:5%;"
  />
      <div style='display:flex; flex-direction:column; text-align:center; margin-right:2vw;'>
        +7 4742 (51-53-68)
        <span>
          {{$t('phone')}}
        </span>
        </div>
      <formVue/>
      </q-toolbar> 

</div>
  </q-header>
</template>
<script>
import formVue from 'components/forms.vue'

export default {
  props:['drawer'],
  components:{
      formVue
  },
    data(){
      return{
        draw:false,
        lang: this.$i18n.locale,
         langOptions: [
        { value: 'ru', label: 'Russian' },
        { value: 'en', label: 'English' }
      ],
      }
    },
              watch: {
    lang(lang) {
      this.$i18n.locale = lang
    }
  },
    methods:{
    disableDrawer(){
      this.draw = this.drawer
      this.draw = !this.draw
      this.$emit('drawerEvent', this.draw)
      }
    },
    beforeMount(){
     
    }
}
</script>
<style scoped>

  @media screen and (max-width: 900px) {
    .wrap_header{
      width:95%!important;
    }
  .img{
    width:13%!important;
  }
.header{
  display: none!important;
}
/* .deckstop{
  display:none;
} */
.mobile{
  height: 100%;
  width: 100%;
}

.wrap_header{
  /* position: fixed; */
  width: 100%;
  z-index: 100;
 
}
.button{
  display:flex;
  height: 100%;
  align-items:center;
}
.mobile{
  
  /* display: flex!important; */
  display:none!important;
}
.moble_header{
  display: flex!important;
 
  justify-content: space-between;
  z-index: 10;
}
.menu{
  display: flex;
  justify-content: space-between;
}
   }

.img{
  padding-right: 0.2vw;
  margin-right: 0.2vw;
  width:2.7vw;
  height:100%;
  /* position: absolute; */
}

.img img{
  width: 100%;
  height:100%;
}
.moble_header{
  display: none;
}

.mobile{
  display: none;
}
.invest{
  margin-left: 3%;
  font-size: 0.8vw;
}
.space{
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}
.space a{
  height: 100%;
  display: flex;
  letter-spacing:0.05vw;
  align-items: center;
}
.header_button{
  font-size: 0.8vw;
  padding-bottom: 1%;
  height: 100%;
  display: flex;
  align-items: center;
}
.q-tabs{
  width: 100%;
  display: flex!important;
  align-items: center;
  justify-content: space-between!important;
}
.investition{
  text-transform: uppercase;
  font-size: 0.8rem;
  line-height: 100%;
  letter-spacing: 0.03vw;
  font-weight: 600;
}
.lipetsk{
  font-weight: 100;
}
.btn{
  display: flex;
  align-self: flex-end;
  background:none;
  text-align: left;
  outline: none;
  border:none;
  cursor: pointer;
  color:white;
  align-items: center;
}
body a{

 text-decoration: none;
}
.route{
  margin:0;
  }
 /* .deckstop{ 

  margin:auto;
}  */
@font-face {
  font-family: "Montserrat";
  src: url("../css/fonts/Montserrat/Montserrat-Regular.woff") format("woff");
}
*{
  font-family: 'Montserrat'!important;
}
.wrap_header{
  width:100%;
  margin: auto;
}

.q-router-link--active{
  color: #52A4DF;
  font-weight: 600;
  border-bottom: 3px solid #52A4DF;
}
</style>