<template>
  <q-page class="background">
    <q-carousel
      animated
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      ref="carousel"
      style="padding:0; height:100vh;"
      infinite
    >
          <q-carousel-slide name="world" class="container column" >

                <h5>ГЕОГРАФИЧЕСКОЕ ПОЛОЖЕНИЕ: БЛИЗОСТЬ К РЫНКАМ </h5>
      <div class='row' style='height:100%;'>
      <div class="image" style="width:100%; height:100%;">
      <q-img src="image/lipetskworld.png"/>
      </div>

      </div>

      </q-carousel-slide>
            <q-carousel-slide name="jd" class="container column">
        <h5>ГЕОГРАФИЧЕСКОЕ ПОЛОЖЕНИЕ: БЛИЗОСТЬ К РЫНКАМ </h5>
      <div class='row'>
      <div class="image">
      <q-img src="image/jd.png"/>
      </div>
      <div class="column" style="flex-wrap:nowrap; height:100%; width:25%; padding-top:10%;">
    <div class="text">  
   <p>
Крупные железнодорожные узлы в г. Елец и г. Грязи. Эксплуатационная длина железнодорожных путей в Липецкой области составляет 751,1 км, из них 363 км электрифицированы. Грузооборот железнодорожного транспорта в среднем за год составляет 8 600 млн тонн.



     </p>
     </div>
        </div>
      </div>

      </q-carousel-slide>
      <q-carousel-slide name="auto" class="container column">

        <h5>ГЕОГРАФИЧЕСКОЕ ПОЛОЖЕНИЕ: БЛИЗОСТЬ К РЫНКАМ </h5>
      <div class='row'>
      <div class="image">
      <q-img src="image/auto-road.png"/>
      </div>
      <div class="column" style="flex-wrap:nowrap; height:100%; width:25%; justify-content:center;">
      <div class="row" style="flex-wrap:nowrap;" >
        <div class="square">
          </div>
          <p style="font-weight:600; margin-left:0.5vw;"> P119 </p>
                  <div class="blue" style='margin-left:2vw;'>
          </div>
          <p style="font-weight:600; margin-left:0.5vw;"> М4 </p>
        </div>
    <div class="text">  
   <p>
    Липецкая область расположена на пересечении важнейших транспортных магистралей страны, 
    на расстоянии 450 км к югу от Москвы. <br>Липецкая область граничит с Воронежской, Курской, Орловской, Тульской, Рязанской, Тамбовской областями. 
    Территория области 24 тыс. кв.м. <br>Общая протяженность границ – 900 км. Для портов Санкт-Петербурга, Черного моря и до границ Евросоюза - 1000 км. 
    По автомобильным дорогам до Москвы можно добраться за 5 часов, что является одним из несомненных преимуществ области.



     </p>
     </div>
        </div>
      </div>
      </q-carousel-slide>


      <q-carousel-slide name="fly" class="container column">
                        <h5>ГЕОГРАФИЧЕСКОЕ ПОЛОЖЕНИЕ: БЛИЗОСТЬ К РЫНКАМ </h5>
      <div class='row' style='height:100%;'>
      <div class="image" style="width:100%; ">
      <q-img src="image/lipetskavia.png"/>
      </div>

      </div>

        </q-carousel-slide>
      <template v-slot:control>
        <q-carousel-control position="top-left" :offset="[18, 18]" class="control">

          <q-btn-toggle
            v-model="slide"
            push
            no-wrap
            unelevated
            class="column"
            no-caps
            square
            color="secondary"
            toggle-color="primary"
            :options="[
          {value: 'world', slot: 'world'},
          {value: 'jd', slot: 'jd'},
          {value: 'auto', slot: 'auto'},
          {value:'fly', slot:'fly'}
        ]"
          >
            <template v-slot:jd>
              <div class="button">
                <q-icon left name="directions_railway" />
                <div class="text-left">ЖД сообщение</div>
              </div>
            </template>

            <template v-slot:auto>
              <div class="button">
                <q-icon left name="directions_car" />
                <div class="text-left">Авто</div>
              </div>
            </template>
            <template v-slot:world>
              <div class="button">
                <q-icon left name="public" />
                <div class="text-left">В мире</div>
              </div>
            </template>
            <template v-slot:fly>
              <div class="button">
                <q-icon left name="flight" />
                <div class="text-left">Авиа</div>
              </div>
            </template>
          </q-btn-toggle>
        </q-carousel-control>
      </template>
    </q-carousel>

  </q-page>
</template>

<script>
export default {
  // name: 'ComponentName',
  data() {
    return {
      slide: "world",
    };
  },
};
</script>
<style scoped>
.image{
  margin:auto;
  width:70%;

}
.container p{
  color:#727272;

}
.square{
  width:1vw;
  height:1vw;
  background:#50D78D;
}
.text{
  width:100%;
}
.blue{
    width:1vw;
  height:1vw;
  background:#5CB0FD;
}
.button {
  display: flex;
  padding-top: 3%;
  padding-bottom: 3%;
  width: 100%;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-start;
}
.q-btn-group {
  border-radius: 0;
  align-items: flex-end;
  flex-direction: column;
  justify-content: space-between;
}
.column {
  min-height: 45%;
  flex-wrap: nowrap;
}
.container {
 width:70%;
 display:flex;
 margin:auto;
} 
.container h5{
  width: 100%;
  font-weight:600;
  letter-spacing: 0.01rem;
  font-size: 2rem;
  color:#5D5E62;
  margin-top:3vh;
 text-align:center;
}
.background{
  background:white;
}
.control {
  min-width: 11%;
  margin-top: 16vh!important;
  margin-left:13%!important;
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: space-between;
}
</style>