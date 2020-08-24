<template>
      <q-page>
    <div data-anchor="investinlipetsk">
    <video-vue/>
    </div>
    
      <full-page @after-load="afterLoad" ref="fullpage" :options="opts" id="fullpage" >  

        <div class="section" >
        <gubernator-vue/>
        </div>
        <div class="section" >
            <map-vue/>
        </div>
   
        <div class="section">
            <history-vue/>
        </div>
        <div class="section">
            <news-vue :visible='visible'   @disableLoading='disableLoading' />
        </div>
            <div class ="section">
                </div>
                    
      </full-page>
  
  </q-page>
</template>
<script>
import gubernatorVue from 'components/home_page/gubernator.vue'
import videoVue from 'components/home_page/video.vue'
import mapVue from 'components/home_page/map.vue'
import historyVue from 'components/home_page/history.vue'
import newsVue from 'components/home_page/news.vue'
import axios from 'axios'

export default {
    props:['visible'],
    components:{
        // videoVue: ()=> import ('components/home_page/video.vue'),
        videoVue,
        gubernatorVue,
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
        responsiveWidth: 900,
        fitToSection:true,
        dots:true,
        // anchors: ['video', 'about-us', 'contact', 'novosti'],
        lockAnchors:true,
        navigation:true,
        loopBottom:true,
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
@font-face {
  font-family: "Montserrat";
  src: url("../css/fonts/Montserrat/Montserrat-Regular.woff") format("woff");
}
*{
  font-family: 'Montserrat'!important;
}
</style>