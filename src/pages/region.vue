<template>
            <div class="container">
                <div class="text-h4" style="margin-top:1vh;"> О регионе </div>
            <q-tabs
          v-model="tab"
          dense
          class="q-tab"
          style="margin-top:3vh"
          active-color="primary"
          indicator-color="primary"
          align="left"
          
        >
          <q-tab name="производство"   no-caps >  <span class='tab'>Производство </span> </q-tab>
          <q-tab name="образование"    no-caps > <span class="tab"> Образование </span> </q-tab>
 
        </q-tabs>
            <q-tab-panels v-model="tab" >
          <q-tab-panel name="производство" class="panel">
              <div class="image">
                  <img src="image/zakat.png" >
              </div>
              <div class="wrap">
              <div class="item" >
                  <div class="pen" style="width:35%; margin-top:8%;">
                      <img src="image/pen.png">
                  </div>
                  <div class="numbers">
                      <div class="border">
                      <span class="number"> 180 </span>
                      <span class="sub"> единиц </span>
                      </div>
                      <span class="text"> 
                         <b> Количество действующих крупных, средних и малых сельскохозяйственных</b> организаций по виду деятельности «Растениеводство и животноводство, охота и предоставление соответствующих услуг в этих областях» на 01.01.2020 г
                      </span>
                   </div>
              </div>

                                    <div class="item">
             
                  <div class="numbers">
                      <div class="border">
                      <span class="number"> 27 236 </span>
                      <span class="sub"> человек </span>
                      </div>
                      <span class="text"> 
                        <b> Среднесписочная численность работников по </b> виду экономической деятельности «Растениеводство и животноводство, охота и предоставление соответствующих услуг в этих областях» за январь-декабрь 2019г.
                      </span>
                   </div>
              </div>
              </div>
                           <div class="wrap">

                                    <div class="item" style="width:35%;">
                <div class="pen" style="width:30%; margin-top:10%;">
                      <img src="image/bottle.png">
                  </div>
                  <div class="numbers">
                      <div class="border">
                      <span class="number"> 321 </span>
                      <span class="sub"> единиц</span>
                      </div>
                      <span class="text" style="font-size:1vw; "> 
                         Крупные, средние и малые предприятия за январь-декабрь 2019г. 
                        <br> <span class ='from'>Из них: </span>
                      </span>
                   </div>
              </div>
                                           <div class="item" style="width:25%;">
          
                  <div class="numbers">
                      
                      <span class="number">258 </span>
                      <span class="sub" style="font-size:1vw; line-height:150%;"> Производство пищевых продуктов </span>
                    
                 
                   </div>
              </div>
                                                    <div class="item" style="width:20%;">
          
                  <div class="numbers">
                
                      <span class="number">57 </span>
                      <span class="sub" style="font-size:1vw; line-height:150%; width:30%;"> Производство напитков </span>
                      
                 
                   </div>
              </div>
                                                         <div class="item" style="width:25%;">
          
                  <div class="numbers">
                  
                      <span class="number">6 </span>
                      <span class="sub" style="font-size:1vw; width:25%; line-height:150%;"> Производство табака </span>
                     
                 
                   </div>
              </div>
              
              </div>
                                    <div class="wrap">


                                    <div class="item" style="width:50%;">
                <div class="pen" style="width:30%; margin-top:8%;">
                      <img src="image/plant.png" >
                  </div>
                  <div class="numbers">
                      <div class="border">
                      <span class="number"> 1418 </span>
                      <span class="sub"> единиц</span>
                      </div>
                      <span class="text" > 
                       Индивидуальные предприниматели, включая глав КФХ, по виду деятельности «Растениеводство и животноводство, охота и предоставление соответствующих услуг в этих областях» на 01.01.2020 г.
                      </span>
                   </div>
              </div>
                                      <div class="item">
           
                  <div class="numbers">
                      <div class="border">
                      <span class="number"> 127 </span>
                      <span class="sub"> единиц</span>
                      </div>
                      <span class="text"> Крестьянские (фермерские) хозяйства на 01.01.2020 г.</span>
                   </div>
              </div>
                                    </div>
          </q-tab-panel>
            <q-tab-panel name="образование" class="panel">
               <div class="image">
                  <img src="image/book.png" >
              </div>
                                       <div class="item" style="width:50%; margin-top:3vh;">
                <div class="pen" style="width:20%; margin-top:1%; ">
                      <img src="image/book_svg.png">
                  </div>
                  <div class="numbers">
                      <div class="border">
                     
                     <span class="text" style="margin-left:0;"> 
                      В настоящее время система профессионального образования региона состоит из:
                      </span>
                      </div>
                    <div class="wrapper_student">
                        <div class="column">
                        <span class="number"> 11</span>
                        <span class="sub" style="font-size:1.1vw; line-height:150%;"> образовательных организаций высшего образования </span>
                        </div>
                              <div class="column">
                        <span class="number"> 30</span>
                        <span class="sub" style="font-size:1.1vw; line-height:150%;"> профессиональных образовательных организаций </span>
                        </div>
                    </div>
            
                   </div>
              </div>
                                   <div class="item" style="width:80%; margin-top:3vh;">
                <div class="pen" style="width:11%; ">
                      <img src="image/teach.png">
                  </div>
                  <div class="numbers">
                      <div class="border">
                     
                     <span class="text" style="width:20%; margin-left:0;"> 
                      В <b>2019</b> году было выпущено:
                      </span>
                      </div>
                    <div class="wrapper_student">
                        <div class="column" >
                        <span class="number"> 5 687</span>
                        <span class="sub" style="font-size:1vw; width:70%; line-height:150%; "> специалистов, обучавшихся по программам среднего профессионального образования </span>
                        </div>
                              <div class="column">
                        <span class="number"> 4 692</span>
                        <span class="sub" style="font-size:1.1vw; width:60%; line-height:150%;">человека, обучавшихся по программам высшего образования </span>
                        </div>
                    </div>
            
                   </div>
              </div>
              <p class="wrapper_text" > 
                  Отличительной особенностью региона в функционировании и развитии системы среднего профессионального образования является то, что работодатели участвуют в решении задач обеспечения квалифицированными специалистами своих организаций за счёт участия в сформированных 8 производственно-образовательных кластерах в строительной, агропромышленной, металлургической, машиностроительной, железнодорожной, жилищно-коммунальной, газовой отраслях, а также в сфере питания. В данном направлении реализуются скоординированные действия, направленные на повышение конкурентоспособности и интеграцию образования с организациями реального сектора экономики региона.
              </p>
                         <div class="item" style="width:100%; margin-top:3vh;">
                <div class="pen" style="width:3vw; ">
                      <img src="image/blank.png">
                  </div>
                  <div class="numbers">
                      <div class="border">
                     
                     <span class="text" style="width:50%; margin-left:0;"> 
                       Региональная система среднего профессионального образования обеспечивает подготовку кадров по <b>42</b> профессиям
                      </span>
                      </div>
                    <div class="wrapper_student" style="width:50%;">
                        <div class="column" >
                        <span class="number"> 75 </span>
                        <span class="sub" style="font-size:1.1vw; width:60%; line-height:150%;"> специальностям среднего профессионального образования </span>
                        </div>
                              <div class="column">
                        <span class="number">117</span>
                        <span class="sub" style="font-size:1.1vw; width:70%; line-height:150%;">профессиям в рамках программ профессионального обучения</span>
                        </div>
                    </div>
            
                   </div>
              </div>
              <p class="wrapper_text">
                  Липецкая область занимает первое место в Российской Федерации по количеству созданных в системе профессионального образования базовых профессиональных образовательных организаций в части поддержки инклюзивного среднего профессионального образования. </p>
                                     <div class="item" style="width:100%; margin-top:3vh;">
                <div class="pen" style="width:3.5vw; margin-top:1%;">
                      <img src="image/machine.png">
                  </div>
                  <div class="numbers" >
                      <div class="border">
                     
                     <span class="text" style="width:50%; margin-left:0;"> 
                      В рамках работы по повышению квалификации, подготовке и переподготовке кадров в <b>2019</b> году было обеспечено функционирование
                      </span>
                      </div>
                    <div class="wrapper_column" style="margin-top:1%;">
                        <div class="row" >
                        <span class="number"> 2 </span>
                        <span class="sub" style="font-size:1.1vw; width:60%; margin-left:1vw;"> ресурсных центра </span>
                        </div>
                              <div class="row">
                        <span class="number">2</span>
                        <span class="sub" style="font-size:1vw; width:50%; margin-left:1vw; line-height:150%;">региональных инновационно-образовательного центров подготовки кадров в агропромышленной сфере и станочников</span>
                        </div>
                                 <div class="row">
                        <span class="number">9</span>
                        <span class="sub" style="font-size:1.1vw; width:20%; margin-left:1vw; line-height:150%;">многофункциональных центров прикладных квалификаций</span>
                        </div>
                    </div>
            
                   </div>
              </div>
              <p class="wrapper_text">
                  В 2019 году два колледжа Липецкой области стали победителями в рамках реализации федерального проекта «Молодые профессионалы (Повышение конкурентоспособности профессионального образования)» национального проекта «Образование». На основании результатов конкурсного отбора, проведённого Минпросвещения России, получателями грантов от Липецкой области стали Липецкий колледж транспорта и дорожного хозяйства по направлению «Обслуживание транспорта и логистика» в размере 26,6 млн. руб. и Липецкий медицинский колледж по направлению «Социальная сфера» в размере 5,0 млн. руб. Создано 10 современных мастерских.
              </p>
            </q-tab-panel>
            </q-tab-panels>
            
            </div>
            
</template>
<script>
export default {

    data(){
        return{
            tab:'производство'
        }
        
    },
 mounted(){
    return this.$emit('disableLoading', false)
  },
  destroyed(){
    return this.$emit('disableLoading', true)
  }
}
</script>
<style scoped>
.wrapper_column{
    display: flex;
    flex-direction: column;
}
.wrapper_text{
    width: 80%;
}
.q-tab{
    padding:0;
    margin-right: 1%;
}
.wrap{
    display: flex;
    margin-top: 4vh;
    flex-wrap: nowrap;
    border-bottom: 1px solid rgba(128, 128, 128, 0.5);
    flex-direction: row;
}
.row{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.container{
    width:71%;

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
    width: 100%;
}
.image img{
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
    line-height: 150%;
    width: 80%;
}
.number{
    padding:0;
    font-weight: 600;
    line-height: 95%;
    color: #28A5FF;
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
    flex-direction: column;
    border-left: 1.5px solid rgba(128, 128, 128, 0.5);
    padding-left: 1vw;
}
.text-h4{
    margin-top: 5vh!important;
    letter-spacing: 0.001vw;
    font-weight: 600;
}
</style>