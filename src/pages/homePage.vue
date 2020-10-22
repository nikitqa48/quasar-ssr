<template>
     <div>

    <q-no-ssr>
      <full-page @after-load="afterLoad" ref="fullpage" :options="opts" id="fullpage" >  
    <div class='section'>
         <video-vue/>
        </div>
        <div class="section" >
        <gubernator-vue/>
        </div>
        <div class="section" >
            <!-- <map-vue/> -->
            <newmap-vue/>
        </div>
       <div class='section'>
            <logo-vue/>
            </div>
        <div class="section">
            <history-vue/>
        </div>
    
        <div class="section">
            <LazyHydrate  ssr-only >
            <industry-vue/>
            </LazyHydrate>
        </div>
        <div class="section">
            <LazyHydrate when-visible>
            <news-vue :visible='visible'   @disableLoading='disableLoading' />
            </LazyHydrate>
        </div>
                    
      </full-page>
    </q-no-ssr>
  </div>
</template>
<script>
import LazyHydrate from 'vue-lazy-hydration';
import gubernatorVue from 'components/home_page/gubernator.vue'
import videoVue from 'components/home_page/video.vue'
import mapVue from 'components/home_page/map.vue'
import historyVue from 'components/home_page/history.vue'
import logoVue from 'components/home_page/logo.vue'
import industryVue from 'components/home_page/industry.vue'
import newsVue from 'components/home_page/news.vue'
import axios from 'axios'
import newmapVue from 'components/home_page/newmap.vue'

export default {
    props:['visible'],
    components:{
         gubernatorVue,
         LazyHydrate,
        // videoVue: ()=> import ('components/home_page/video.vue'),
        videoVue,
        industryVue,
        logoVue,
        newmapVue,
        mapVue,
        historyVue,
        newsVue
    },
    data(){
        return{
opts:{
start: 0,
        beforeChange: function(prev, next) {},
        afterChange: function(prev, next) {},
        lazyLoading: true,
        responsiveWidth: 768,
        fitToSection:true,
        dots:true,
        // anchors: ['video', 'about-us', 'contact', 'novosti'],
        lockAnchors:true,
        navigation:true,
        loopBottom:true,
        dragAndMove:true,
        navigationTooltips:['Инвестируй в Липецкую область', 'Обратиться к губернатору', 'Географическое положение', 'Истории успеха', 'Новости'],
        slidesNavPosition:'color:white',
        afterLoad:this.afterLoad,
        dir: 'v',
         duration: 500,
        der: 0.1,
            }
        }
    },
    methods:{
        afterLoad(){
            // return this.$emit('disableLoading', false)
        },
        disableLoading(){
            this.$emit('disableLoading', false)
        }
    },
        beforeDestroy(){
       return this.$emit('disableLoading', true)
    },

}
</script>
<style scoped>
@media screen and (max-width: 728px) {
.section:nth-child(3), .section:nth-child(6){
    display:none!important;
}
 
    /* .section:nth-child(5), .section:nth-child(4), .section:nth-child(3), .section:nth-child(2), .section:nth-child(1), .section:nth-child(6), .section:nth-child(7){
        display:none!important;
    } */
}
/* @font-face {
  font-family: "Montserrat";
  src: url("../css/fonts/Montserrat/Montserrat-Regular.woff") format("woff");
}
*{
  font-family: 'Montserrat'!important;
} */
</style>