<template>
            <q-page class="background">
        <div class="container">
                <div class="text-h4" style="margin-top:1vh; color:white;"> О регионе </div>
            <q-tabs
          v-model="tab"
          dense
          
          class="q-tab"
          style="margin-top:1vh"
          active-color="primary"
          indicator-color="primary"
          align="left"
          
        >
          <q-tab name="Наши достижения"   no-caps >  <span class='tab'>Наши достижения </span> </q-tab>
          <!-- <q-tab name="производство"    no-caps > <span class="tab"> Промышленность </span> </q-tab> -->
           <q-tab name="Образование"    no-caps > <span class="tab"> Образование </span> </q-tab> 
            <q-tab name="Сельское хозяйство"    no-caps > <span class="tab"> Сельское хозяйство </span> </q-tab> ,
          <!-- <q-tab name="Туризм"    no-caps > <span class="tab"> Туризм</span> </q-tab>  -->
        </q-tabs>
        
            <q-tab-panels v-model="tab"  animated >
          <q-tab-panel name="Сельское хозяйство" class="panel">
              <!-- <div class="image">
               <video  style='width:100%;' src="video/lipetsk.mp4" type="video/mp4" media="(min-width:800)"  controls> </video>
              </div> -->
              <div class="wrap">
              <div class="item" >
                  <div class="numbers">
                      <div class="border">
                      <span class="number"> 180 </span>
                      <span class="text"> 
                       Действующих сельскохозяйственных организаций 
                      </span>
                      </div>
                      
                   </div>
              </div>

                                    <div class="item" style='margin-left:8%;'>
             
                  <div class="numbers">
                      <div class="border">
                      <span class="number"> 27 236 </span>
                      <span class="text"> Человек заняты Растениеводством, <br>животноводством, охотой и предоставлением<br> услуг в этих областях </span>
                      </div>
                   </div>
              </div>
              </div>
                           <div class="wrap">
                    <div class="item">
                  <div class="numbers">
                      <div class="border">
                      <span class="number"> 321 </span>
               <span class="text" style="font-size:1vw; "> 
                         Крупные, средние и малые предприятия за январь-декабрь 2019г. 
                      </span>
                      </div>
                    
                   </div>
              </div>
                                           <div class="item" >
          
                  <div class="numbers">
                      <div class="border">
                      <span class="number">16 730 </span>
                      <span class="text" > Человек работают в сфере <br>производства пищевых продуктов </span>
                    </div>
                 
                   </div>
              </div>
              
              </div>
                                    <div class="wrap">
                                    <div class="item" >
                  <div class="numbers">
                      <div class="border">
                      <span class="number"> 1 418 </span>
                  <span class="text" style="width:50%;"> 
                      Индивидуальных предпринемателей в сфере «Растениеводство и животноводство, охота и предоставление соответствующих услуг в этих областях»
                      </span>
                      </div>
                   
                   </div>
              </div>
          <div class="item" style='margin-right:27%;'>
                  <div class="numbers">
                      <div class="border">
                      <span class="number"> 127 </span>
                   <span class="text" > Крестьянских (фермерских)хозяйств на территории Липецкой области.</span>
                      </div>
                   </div>
              </div>
                                    </div>
          </q-tab-panel>
            <q-tab-panel name="Образование" class="panel">
                             <div class="wrap">
              <div class="item" >
                  <div class="numbers">
                      <div class="border">
                      <span class="number"> 11 </span>
                      <span class="text"> 
                      образовательных организаций высшего образования
                      </span>
                      </div>
                      
                   </div>
              </div>

                                    <div class="item" style='margin-left:8%;'>
             
                  <div class="numbers">
                      <div class="border">
                      <span class="number"> 5 687 </span>
                      <span class="text"> специалистов, обучавшихся по программам среднего профессионального образования за 2019г.</span>
                      </div>
                   </div>
              </div>
              </div>
                           <div class="wrap">
                    <div class="item">
                  <div class="numbers">
                      <div class="border">
                      <span class="number"> 30 </span>
               <span class="text" style="font-size:1vw; "> 
                         профессиональных образовательных организаций
                      </span>
                      </div>
                    
                   </div>
              </div>
                                           <div class="item" >
          
                  <div class="numbers">
                      <div class="border">
                      <span class="number">4 692 </span>
                      <span class="text" > студентов обучавшихся по программам высшего образования за 2019г. </span>
                    </div>
                 
                   </div>
              </div>
              
              </div>
                                    <div class="wrap">
                                    <div class="item" >
                  <div class="numbers">
                      <div class="border">
                      <span class="number"> 42 </span>
                  <span class="text" style="width:100%;"> 
                     Профессиям региональная система среднего профессионального образования обеспечивает подготовку кадров
                      </span>
                      </div>
                   
                   </div>
              </div>
          <div class="item" style='margin-left:9%;'>
                  <div class="numbers">
                      <div class="border">
                      <span class="number"> 1</span>
                   <span class="text" > Место  Липецкая область занимает в Российской Федерации по количеству созданных в системе профессионального
                        образования базовых профессиональных образовательных организаций в части поддержки инклюзивного среднего профессионального образования.</span>
                      </div>
                   </div>
              </div>
                                    </div>
               </q-tab-panel>
        <q-tab-panel name="Наши достижения" class="panel" style="display:flex; flex-direction:row;">
       
         <div class='items'>
             <div class = 'row'>
             <div class="image" style="margin:0;">
            <img src="image/image 97.png" >
            </div>
                <div class="image">
            <img src="image/image 94.png" >
            </div>
            <div class="column" style="margin-left:1vw;">
                <div class="image_column" >
                    <img src='image/image 93.png'>
                    </div>
                      <div class="image_column" style='margin-top:0.7vh;'>
                    <img src='image/image 101.png'>
                    </div>
                </div>
            </div>
            <div class="row" style="margin-top:3vh;">
                <div class="title"> 
                    <img src="image/image 95.png">
                </div>
                </div>
         </div>
            <div class="video ">
                <p>Смотрите видео о преимуществах Липецкой области: </p>
                <video  style='width:75%; outline:none; border-radius:25px;' :src="$t('video')" type="video/mp4" media="(min-width:800)"  controls poster="image/preview.png"> </video>
                </div>
               </q-tab-panel>  
            </q-tab-panels>
            </div>
            
            </q-page>
            
</template>
<script>
export default {

    data(){
        return{
            tab:'Наши достижения',
                  thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75
      },
        }
        
    },

 mounted(){
    return this.$emit('disableLoading', false)
  },
  beforeMount(){
      document.getElementsByClassName('layout')[0].style.background = 'url("/image/region_background.png") no-repeat'
  },
  destroyed(){
    document.getElementsByClassName('layout')[0].style.background = 'none'
    return this.$emit('disableLoading', true)
  }
}
</script>
<style scoped>
.video{
    width:50%;
    margin-top:5vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align:center;
}
.video p{
    font-weight: 400;
    font-size:1vw;
}
.wrapper_column{
    display: flex;
    flex-direction: column;
}
.wrapper_text{
    width: 80%;
}
.q-tab-panels{
    background:none;
    color:white;
}
.q-tab{
    padding:0;
    margin-right: 1%;
}
.scroll{
    margin-top: 2vh;
    width:55%;
    height:75vh;
}
.row{
    flex-wrap: nowrap;
}
.wrap{
    display: flex;
    margin-top: 7.5vh;
    flex-wrap: nowrap;
    flex-direction: row;
}
.row{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.container{
    width:87%;
    margin:auto;
    display: flex;
    flex-direction: column;
}
.column{
    width:50%;
    align-items:self-end;
    margin-right: 5%;
}
.image{
    width: 15vw;
    height:15vh;
    margin-left: 1vw;
}
.image_column{
    width:10vw;
    height: 7vh;
}
.image_column img{
    height:100%;
    width:100%;
}
.image img{
    height: 100%;
    width:100%;
}
.panel{
    padding:0;
    display: flex;
    flex-direction: column;
}
.pen{

    width:10vw;
    opacity: .8;
}
.wrapper_student{
    margin-top: 3vh;
    display: flex;

}
.pen img{
    
    width: 100%;
}
.item{
    display:flex;

    padding-bottom: 3vh;
    
}
.tab{
    font-size: 1vw;
    opacity: .8;
   color:white;
}
.numbers{
    display:flex;
    flex-direction: column;
    margin-left: 1vw;
}
.from{
    color: #28A5FF;
}
.text{
    margin-left: 4%;
    margin-top: 1vh;
    font-size: 1vw;
    font-weight: 200;
    opacity:.8;
    line-height: 150%;
    width: 45%;
}
.number{
    padding:0;
    font-weight: 600;
    line-height: 95%;
    color: white;
    letter-spacing: 0.002vw;
    font-size: 5.5vw;
}
.sub{
    font-size: 1.6vw;
    font-weight: 600;
    opacity: .7;
    letter-spacing: 0.002vw;
    line-height: 100%;
}
.border{
    display: flex;
    flex-direction: row;
}
.text-h4{
    margin-top: 5vh!important;
    letter-spacing: 0.001vw;
    font-weight: 600;
}
</style>
<style>
.layout{
    background-attachment:fixed;
    background-position: 50% 50%;
    background-size: cover;
}
</style>