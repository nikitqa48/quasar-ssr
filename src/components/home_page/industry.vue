<template>
  <div>
    <q-carousel

      animated
      v-model="slide"
    transition-prev="slide-right"
      transition-next="slide-left"
      ref="carousel"
      style="height:100vh;  padding:0;"
      infinite
    >
                   <q-carousel-slide name="промышленность" class="column no-wrap flex-center"  img-src="image/prom-min.png">
                   <div class="container">
                <div class="text-h3 text-white text-center text-uppercase" style="font-weight:600;"> Промышленность </div>
                <div class="row" style="width:100%; display:flex;">
                  <div class="settings" style="align-self:center;">
                  <q-img src="icons/settings.svg" style="width:5vw; opacity:0.5;"/>
                  </div>
                  <div class="column text-white" style="margin-left:1%;">
                    <span class="text"> Около </span>
                    <span class='number'> 200 </span>
                    <span class="text"> предприятий </span>
                  </div>
                             <div class="column text-white" style="margin-top:4%; margin-left:5%;">
                    <span class="text" style="font-weight:600;"> 794 млрд. рублей </span>
                    <span> Объем отгруженных товаров, рост 18% </span>
                    <span class="text" style="font-weight:600; margin-top:10%;" >2 место </span>
                    <span> в ЦФО </span>
                  </div>
                                      <div class="column text-white" style="margin-top:4%; margin-left:5%;">
                    <span class="text" style="font-weight:600;"> 3 место</span>
                    <span> в РФ</span>
                  </div>
                </div>
                </div>
        </q-carousel-slide>
                           <q-carousel-slide name="туризм" class="column no-wrap flex-center"  img-src="image/tourism.png">
                   <div class="container">
                <div class="text-h3 text-white text-center text-uppercase" style="font-weight:600;"> Туризм </div>
                <div class="row" style="width:100%; display:flex;">
                  <div class="settings" style="align-self:center;">
                  <q-img src="icons/settings.svg" style="width:5vw; opacity:0.5;"/>
                  </div>
                  <div class="column text-white" style="margin-left:1%;">
                    <span class="text"> Около </span>
                    <span class='number'> 900 </span>
                    <span class="text"> <b> тысяч</b> туристов <br> ежегодно </span>
                  </div>
                             <div class="column text-white" style="margin-top:4%; margin-left:5%;">
                    <span class="text" style="font-weight:600;"> более 200  </span>
                    <span> рек в Липецкой <br> области</span>
                    <span class="text" style="font-weight:600; margin-top:10%;" >более 60 </span>
                    <span> видов <br> млекопитающих <br> в лесах</span>
                  </div>
                                      <div class="column text-white" style="margin-top:4%; margin-left:5%;">
                    <span class="text" style="font-weight:600;"> более 500</span>
                    <span> озер в Липецкой <br> области</span>
                     <span class="text" style="font-weight:600; margin-top:10%;" >около 60 </span>
                    <span> видов рыб <br> водятся <br> в водоемах</span>
                  </div>
                </div>
                </div>
        </q-carousel-slide>
                           <q-carousel-slide name="обрабатывающая отрасль" class="column no-wrap flex-center"  img-src="image/obrab.png">
                   <div class="container">
                <div class="text-h3 text-white text-center text-uppercase" style="font-weight:600;"> Обрабатывающая отрасль </div>
                <div class="row" style="width:100%; display:flex;">
                  <div class="settings" style="align-self:center;">
                  <q-img src="icons/settings.svg" style="width:5vw; opacity:0.5;"/>
                  </div>
                  <div class="column text-white" style="margin-left:1%;">
                    <span class='number'> 107% </span>
                    <span class="text"> индекс производства <br>сельского хозяйства <br> 99% по РФ </span>
                  </div>
                             <div class="column text-white" style="margin-top:1%;margin-left:5%;">
                    <span class="text" style="font-weight:600;"> 119 млрд. рублей </span>
                    <span> Объем валовой <br>продукции </span>
                    <span class="text" style="font-weight:600; margin-top:10%;" >105 га </span>
                    <span> общая площадь <br>теплиц </span>
                    <span class="text" style="font-weight:600; margin-top:10%;" >106% </span>
                    <span> Рост в <br>растениеводстве  </span>
                  </div>
                                      <div class="column text-white" style="margin-top:1%; margin-left:5%;">
                    <span class="text" style="font-weight:600;"> 2 место</span>
                    <span> по производству сахара</span>
                      <span class="text" style="font-weight:600; margin-top:10%;" >3 место </span>
                         <span> по выращиванию <br>овощей <br> в закрытом грунте  </span>
                  </div>
                </div>
                </div>
        </q-carousel-slide>
                                   <q-carousel-slide name="достижения" class="column no-wrap flex-center"  img-src="image/dostig.png">
                   <div class="container">
                <div class="text-h3 text-white text-center text-uppercase" style="font-weight:600;">Достижения в цифрах </div>
                <div class="row" style="width:100%; display:flex;">
            
                  <div class="column text-white" style="margin-left:1%;">
                    <span class='number'> 107% </span>
                    <span class="text"> индекс производства <br>сельского хозяйства  </span>
                  </div>
                 <div class="column text-white" style="margin-left:1%;">
                    <span class='number'> 900 </span>
                    <span class="text"> тысяч туристов <br>ежегодно  </span>
                  </div>
               <div class="column text-white" style="margin-left:1%;">
                    <span class='number'> 200 </span>
                    <span class="text">  предприятий   </span>
                  </div>
                </div>
                </div>
        </q-carousel-slide>
          <template v-slot:control>
        <q-carousel-control
          position="center"
          :offset="[18, 18]"
          style="width:85%; display:flex; justify-content:space-between; margin:auto;"
        >
          <q-btn
            push square   text-color="white" icon="arrow_back"
            class="left no-shadow"
            position='left'
            size="2vh"
            @click="$refs.carousel.previous()"
          />
          <q-btn
            push square   text-color="white" 
            icon="arrow_forward"
            size="2vh"
            class="left"
            @click="$refs.carousel.next()"
          />
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      slide:'промышленность'
    }
  }
}
</script>
<style scoped>
  .left{
    opacity: .5;
    background:rgba(199, 196, 196, 0.7);
  }
  .container{
    min-height: 90%;
    width:70%;
    display:flex;
    flex-direction: column;
  }
  .text{
    font-size: 2em;
  }
  .number{
    font-size: 9em;
    line-height: 100%;
    font-weight: 600;
  }
  .row{
    margin-top: 5%;
    display: flex;
    justify-content: space-around;
  }
</style>
