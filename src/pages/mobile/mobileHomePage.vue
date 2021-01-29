<template>
  <q-page>
     <q-no-ssr>
 <full-page  ref="fullpage" :options="opts" id="fullpage" >
   <div class='section'>
     <VideoVue />
     </div>
     <div class='section'> 
       <ArtamonovVue/>
       </div>
       <div class='section'>
         <logoVue/>
         </div>
         <div class='section'>
        <historyVue/>
    </div>
    <!-- <div class="section">
      <news-vue class="news"/>
    </div> -->
   </full-page>
   </q-no-ssr>
  </q-page>
</template>

<script>
import VideoVue from 'components/mobilehome_page/mobilevideo.vue'
import ArtamonovVue from 'components/mobilehome_page/artamonov.vue'
import logoVue from 'components/home_page/logo.vue'
import newsVue from 'components/mobilehome_page/mobileNews.vue'
import historyVue from 'components/mobilehome_page/history.vue'
export default {
    components:{
      VideoVue,
      ArtamonovVue,
      logoVue,
      newsVue,
      historyVue
      },
  data(){
    return{
      opts:{
        start: 0,
        beforeChange: function(prev, next) {},
        afterChange: function(prev, next) {},
        lazyLoading: true,
        responsiveWidth: 0,
        fitToSection:true,
        // scrollOverflow: true,
        normalScrollElements: '.xz',
        dots:true,
        // anchors: ['video', 'about-us', 'contact', 'novosti'],
        lockAnchors:true,
        navigation:true,
        // loopBottom:true,
        dragAndMove:true,
        navigationTooltips:['Инвестируй в Липецкую область', 'Обратиться к губернатору', 'Географическое положение', 'Истории успеха', 'Новости'],
        slidesNavPosition:'color:white',
        
        // afterLoad:this.afterLoad,
        dir: 'v',
         duration: 500,
        der: 0.1,
            }
    }
  },
  mounted(){
    
    this.$emit('disableLoading', false)
  },
  methods:{
    touchDown(){
      this.$refs.fullpage.api.moveSectionDown()
    }
  }
}
</script>
<style scoped>
.news{
  position: relative;
  width: 50%;
  min-height:120vh;
  border:1px solid red;
  overflow:scroll;
}
</style>