<template>
  <div class="background">
    <q-carousel
      height="100vh"
      infinite
      v-model="map"
      ref="map"
      transition-prev="slide-right"
      transition-next="slide-left"
      control-color="primary"
      class="rounded-borders"
    >
      <template v-slot:control>
        <q-carousel-control position="right" :offset="[18, 18]">
          <div @click="arrow_right" class="industry_next">
            <div class="arrow">
              <!-- <img src="/statics/image/arrowright_map.png"  style="width:100%; height:100%;"/> -->
            </div>
          </div>
        </q-carousel-control>
        <!-- <q-carousel-control position="center" :offset="[18, 18]">
          <div @click="arrow_left" class="industry_prev">
 
            <div class="arrow">
              <img src="/statics/image/arrowleft_map.svg" />
            </div>
          </div>
        </q-carousel-control>-->
        <q-carousel-control position="top-left" class="dots_industry">
          <div class="dots_wrap">
            <h3>
              <b>
                Географическое положение:
                <br />близость к рынкам
              </b>
            </h3>
            <ul class="buttons">
              <button @click="active" id="1" class="isactive">
                <!-- <div @click="active" class="svg"> -->
                <svg class="svg" id="1" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.4111 0.208008C7.76104 0.208008 5.21949 1.26075 3.34559 3.13465C1.47169 5.00855 0.418945 7.5501 0.418945 10.2002C0.418945 12.8503 1.47169 15.3918 3.34559 17.2657C5.21949 19.1396 7.76104 20.1924 10.4111 20.1924C13.0612 20.1924 15.6028 19.1396 17.4767 17.2657C19.3506 15.3918 20.4033 12.8503 20.4033 10.2002C20.4033 7.5501 19.3506 5.00855 17.4767 3.13465C15.6028 1.26075 13.0612 0.208008 10.4111 0.208008V0.208008ZM10.4111 18.9434C9.22172 18.9451 8.04459 18.7028 6.95259 18.2314L11.5028 13.1129C11.6039 12.9984 11.6599 12.851 11.6602 12.6982V10.8247C11.6602 10.6591 11.5944 10.5002 11.4772 10.3831C11.3601 10.266 11.2013 10.2002 11.0356 10.2002C8.83112 10.2002 6.50419 7.90824 6.48171 7.88451C6.4236 7.82655 6.35465 7.78061 6.27878 7.74932C6.20291 7.71803 6.12162 7.702 6.03955 7.70215H3.5415C3.37587 7.70215 3.21703 7.76794 3.09991 7.88506C2.98279 8.00218 2.91699 8.16103 2.91699 8.32666V12.0737C2.917 12.1896 2.94924 12.3032 3.01012 12.4018C3.07101 12.5004 3.15812 12.5801 3.26172 12.632L5.41504 13.7087V17.3758C4.2577 16.571 3.3124 15.498 2.65988 14.2484C2.00737 12.9988 1.66704 11.6099 1.66797 10.2002C1.66615 8.90408 1.95376 7.62391 2.50981 6.45312H4.79053C4.95665 6.45312 5.11527 6.38693 5.23268 6.27077L7.73073 3.77272C7.78869 3.71462 7.83462 3.64566 7.86591 3.56979C7.8972 3.49392 7.91323 3.41263 7.91309 3.33057V1.81925C8.72382 1.57812 9.5653 1.45611 10.4111 1.45703C11.7851 1.45703 13.0853 1.77428 14.2419 2.33884C13.8233 2.68928 13.4869 3.12751 13.2566 3.62245C13.0263 4.1174 12.9077 4.65695 12.9092 5.20285C12.9092 6.20332 13.2989 7.14508 14.0071 7.85203C14.3766 8.22216 14.8196 8.51067 15.3076 8.69892C15.7955 8.88717 16.3175 8.97098 16.8399 8.94493C17.1096 9.95539 17.5955 12.5883 16.6762 16.2117C16.6678 16.2453 16.6624 16.2796 16.66 16.3142C15.8469 17.1472 14.8751 17.8089 13.8021 18.2602C12.729 18.7116 11.5765 18.9434 10.4124 18.9421L10.4111 18.9434Z"
                  />
                </svg>
                <!-- </div> -->
                В мире
              </button>
              <button @click="active" id="2">
                <!-- <div   @click="active" id="2" class="svg"> -->
                <svg class="svg_jd" viewBox="0 0 17 21" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.607422 14.6964C0.607422 16.6249 2.17617 18.1937 4.10463 18.1937L2.60583 19.6925V20.1921H14.5963V19.6925L13.0975 18.1937C15.0259 18.1937 16.5947 16.6249 16.5947 14.6964V4.20482C16.5947 0.707609 13.0175 0.208008 8.60104 0.208008C4.18457 0.208008 0.607422 0.707609 0.607422 4.20482V14.6964ZM8.60104 16.1952C7.50192 16.1952 6.60264 15.296 6.60264 14.1968C6.60264 13.0977 7.50192 12.1984 8.60104 12.1984C9.70016 12.1984 10.5994 13.0977 10.5994 14.1968C10.5994 15.296 9.70016 16.1952 8.60104 16.1952ZM14.5963 9.20083H2.60583V4.20482H14.5963V9.20083Z"
                  />
                </svg>
                <!-- </div> -->
                Ж/Д
              </button>
              <button @click="active" id="3">
                <!-- <div @click="active" id="3" class="svg"> -->
                <svg class="svg" viewBox="0 0 23 18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.82168 10.9002C5.82168 10.4327 5.65522 10.0325 5.3223 9.69957C4.98939 9.36665 4.58918 9.2002 4.12168 9.2002C3.65418 9.2002 3.25397 9.36665 2.92105 9.69957C2.58814 10.0325 2.42168 10.4327 2.42168 10.9002C2.42168 11.3677 2.58814 11.7679 2.92105 12.1008C3.25397 12.4337 3.65418 12.6002 4.12168 12.6002C4.58918 12.6002 4.98939 12.4337 5.3223 12.1008C5.65522 11.7679 5.82168 11.3677 5.82168 10.9002ZM6.20418 7.5002H16.9992L16.0536 3.70707C16.0394 3.6504 15.9898 3.58842 15.9048 3.52113C15.8198 3.45384 15.7454 3.4202 15.6817 3.4202H7.52168C7.45793 3.4202 7.38355 3.45384 7.29855 3.52113C7.21355 3.58842 7.16397 3.6504 7.1498 3.70707L6.20418 7.5002ZM20.7817 10.9002C20.7817 10.4327 20.6152 10.0325 20.2823 9.69957C19.9494 9.36665 19.5492 9.2002 19.0817 9.2002C18.6142 9.2002 18.214 9.36665 17.8811 9.69957C17.5481 10.0325 17.3817 10.4327 17.3817 10.9002C17.3817 11.3677 17.5481 11.7679 17.8811 12.1008C18.214 12.4337 18.6142 12.6002 19.0817 12.6002C19.5492 12.6002 19.9494 12.4337 20.2823 12.1008C20.6152 11.7679 20.7817 11.3677 20.7817 10.9002ZM22.4817 9.8802V13.9602C22.4817 14.0594 22.4498 14.1408 22.3861 14.2046C22.3223 14.2683 22.2408 14.3002 22.1417 14.3002H21.1217V15.6602C21.1217 16.2269 20.9233 16.7085 20.5267 17.1052C20.13 17.5019 19.6483 17.7002 19.0817 17.7002C18.515 17.7002 18.0333 17.5019 17.6367 17.1052C17.24 16.7085 17.0417 16.2269 17.0417 15.6602V14.3002H6.16168V15.6602C6.16168 16.2269 5.96335 16.7085 5.56668 17.1052C5.17001 17.5019 4.68835 17.7002 4.12168 17.7002C3.55501 17.7002 3.07335 17.5019 2.67668 17.1052C2.28001 16.7085 2.08168 16.2269 2.08168 15.6602V14.3002H1.06168C0.962513 14.3002 0.881055 14.2683 0.817305 14.2046C0.753555 14.1408 0.72168 14.0594 0.72168 13.9602V9.8802C0.72168 9.22145 0.953659 8.66009 1.41762 8.19613C1.88158 7.73217 2.44293 7.5002 3.10168 7.5002H3.39918L4.5148 3.04832C4.67772 2.38249 5.04605 1.82467 5.6198 1.37488C6.19355 0.925091 6.82751 0.700195 7.52168 0.700195H15.6817C16.3758 0.700195 17.0098 0.925091 17.5836 1.37488C18.1573 1.82467 18.5256 2.38249 18.6886 3.04832L19.8042 7.5002H20.1017C20.7604 7.5002 21.3218 7.73217 21.7857 8.19613C22.2497 8.66009 22.4817 9.22145 22.4817 9.8802Z"
                  />
                </svg>
                <!-- </div> -->
                Авто
              </button>
              <button @click="active" id="4">
                <!-- <div @click="active"  id="4" class="svg"> -->
                <svg class="svg" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.8623 11.3254L9.82674 8.28986L17.1123 2.82542L14.9873 0.700419L5.88062 4.34373L3.01399 1.47604C2.18737 0.649419 1.03349 0.451794 0.449117 1.03617C-0.135258 1.62054 0.0623672 2.77442 0.888992 3.60104L3.75562 6.46767L0.112305 15.5754L2.2373 17.7004L7.7028 10.4149L10.7384 13.4504V17.7004H12.8634L13.9259 14.5129L17.1134 13.4504V11.3254H12.8634H12.8623Z"
                  />
                </svg>
                <!-- </div> -->
                Авиа
              </button>
            </ul>
          </div>
        </q-carousel-control>
      </template>
      <q-carousel-slide name="1" class="q">
        <div class="slide_container">
          <transition
            appear
            enter-active-class="animated bounceInLeft"
            leave-active-class="animated bounceOutLeft slow"
          >
            <!-- <img src="statics/image/newmap.png"> -->
            <picture>
              <source media="(max-width: 799px)" srcset="/image/newmap.png" />
              <source media="(min-width: 800px)" srcset="/image/newmap.png" />
              <img src="elva-800w.jpg" alt="lipetsk map" />
            </picture>
          </transition>
        </div>
      </q-carousel-slide>
      <q-carousel-slide class="q_carousel__slide" name="2">
        <div class="slide_container2">
          <div
          class="container_text"
           
          >
            <div class="round">
              <p class="text" style="font-weight:600;">ГЕОГРАФИЧЕСКОЕ ПОЛОЖЕНИЕ: БЛИЗОСТЬ К РЫНКАМ</p>
            </div>
            <p
              class="text"
            >Крупные железнодорожные узлы в г. Елец и г. Грязи. Эксплуатационная длина железнодорожных путей в Липецкой области составляет 751,1 км, из них 363 км электрифицированы. Грузооборот железнодорожного транспорта в среднем за год составляет 8 600 млн тонн.</p>
          </div>
          <transition
            appear
            enter-active-class="animated bounceInLeft"
            leave-active-class="animated bounceOutLeft slow"
          >
            <img src="/image/road.png" />
            <!-- <picture>
  <source media="(max-width: 799px)" srcset="statics/image/mobile_jd.png">
  <source media="(min-width: 800px)" srcset="statics/image/road.png.png">
  <img src="elva-800w.jpg" alt="lipetsk map">
            </picture>-->
          </transition>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="3" class="q">
        <div class="slide_container2" v-if="map == '3'">
          <div class="container_text">
            <div class="row">
            <div class="round">
              <div class="green_round"></div>
              <p class = 'font_round' >P119</p>
            </div>
               <div class="round" style="margin-left:1vw;">
              <div class="blue_round"></div>
              <p class = 'font_round' >М4</p>
            </div>
            </div>
            <p class="text"
           
            >Липецкая область расположена на пересечении важнейших транспортных магистралей  страны, на расстоянии 450 км к югу от Москвы. Липецкая область граничит с Воронежской, Курской, Орловской, Тульской, Рязанской, Тамбовской областями.
Территория области 24 тыс. кв.м. Общая протяженность границ – 900 км.
Для портов Санкт-Петербурга, Черного моря и до границ Евросоюза - 1000 км. 
По автомобильным дорогам до Москвы можно добраться за 5 часов, что является одним из несомненных преимуществ области.</p>
         
           
          </div>
          <transition
            appear
            enter-active-class="animated bounceInLeft"
            leave-active-class="animated bounceOutLeft slow"
          >
            <img src="/image/auto.png" />
          </transition>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="4" class="q">
        <div class="slide_container">
          <transition
            appear
            enter-active-class="animated bounceInLeft"
            leave-active-class="animated bounceOutLeft slow"
          >
           <picture>
              <source media="(max-width: 799px)" srcset="/image/mobile_avia.png" />
              <source media="(min-width: 800px)" srcset="/image/avia.png" />
              <img src="elva-800w.jpg" alt="lipetsk map" />
            </picture>
            <!-- <img src="statics/image/avia.png.png" /> -->
          </transition>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
<style scoped>
@media screen and (max-width: 800px) {
  .slide_container {
    width: 100% !important;
  }
  .blue_round{
     width: 4vw!important;
  }
  .green_round{
      width: 4vw!important;
  }
  .rounded-borders{
    height: 110vh!important;
  }
.background{
  height: 110vh!important;
}
  .green_round p{

    font-size: 3.5vw!important;
  }
  .slide_container2 {
    width: 100% !important;
  }

  .dots_wrap h3 {
    line-height: 150% !important;
    font-size: 3.5vw !important;
    letter-spacing: 0.1vw;
  }
  .buttons button {
    height: 3.5vh !important;
    width: 23vw !important;
    font-size: 3vw !important;
  }
  .container_text {
    width: 90% !important;
    top:70%!important;
    right:5%!important;
  }
  .dots_wrap {
    padding: 0 !important;
  }
  .slide_container2 img {
    margin-top: 50% !important;
    height: auto !important;
  }
  .q {
    padding: 0;
  }
  .slide_container img {
    margin: 0 !important;
    height: 99% !important;
  }
  .font_round{
  font-size: 3.5vw!important;
}
.text{
  font-size: 3vw!important;
}
}
.font_round{
  font-size: 0.8vw;
}
@font-face {
  font-family: "Montserrat bold";
  src: url("/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");
  font-style: bold;
}
.rounded-borders {
  background: none;
}
.text{
  font-size:0.8vw
}
.round {
  display: flex;
}
.slide_container {
  width: 80%;
  height: 100%;
  margin: auto;
}
.container_text {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 30%;
  right: 0;
  top: 30%;
  color: white;
}
.slide_container img {
  margin-top: 1%;
  width: 100%;
  height: 99%;
}
.slide_container2 {
  width: 58%;
  height: 100%;
  margin: auto;
}
.slide_container2 img {
  margin-top: 5%;
  width: 100%;
  height: 93%;
}
.background {
  height: 100vh;
  background: url("/image/space.png");
  background-size: cover;
  background-repeat: repeat;
}

.dots_industry {
  width: 50%;
}
.svg_jd {
  display: flex;
  align-items: center;
  padding: 0;
  width: 11%;
  margin-right: 0.5vw;
}
.svg_jd svg {
  width: 70%;
}
.green_round {
  width: 1.2vw;
  height: 2.2vh;
  margin-right: 1%;
  border-radius: 50%;
  background: #5eba50;
}
.blue_round {
  width: 1.2vw;
  height: 2.2vh;
  margin-right: 1%;
  border-radius: 50%;
  background: #8fbedf;
}

.svg {
  display: flex;
  align-items: center;
  padding: 0;
  width: 15%;
  margin-right: 0.5vw;
}
.svg svg {
  width: 70%;
}

* {
  font-family: "Montserrat";
}
.dots_wrap {
  display: flex;
  width: 100%;
  padding-left: 15%;
  margin-top: 15%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.dots_wrap h3 {
  line-height: 5vh;
  font-size: 2.3vw;
  font-weight: 600;
  font-family: "Montserrat bold";
  margin-top: 0;
  margin-bottom: 2%;
}
.buttons {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  margin: 0;
  padding: 0;
}
.isactive {
  fill: white !important;
  background: #2cccd8 !important;
  color: white !important;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.buttons button {
  margin-top: 0.5vh;
  text-align: center;
  fill: #72898b;
  height: 5vh;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border-radius: 100px;
  background: #c7d7e2;
  font-size: 0.93vw;
  border: none;
  color: #42595b;
  width: 8vw;
}
.buttons button:nth-child(2),
.buttons button:nth-child(3),
.buttons button:nth-child(4) {
  margin-left: 1vw;
}
</style>
<script>
export default {
  data() {
    return {
      map: "1"
    };
  },
  methods: {
    active(event) {
      let id = event.currentTarget.id;
      this.map = id;
      let button1 = document.getElementById("1");
      let button2 = document.getElementById("2");
      let button3 = document.getElementById("3");
      let button4 = document.getElementById("4");
      button1.classList.remove("isactive");
      button2.classList.remove("isactive");
      button3.classList.remove("isactive");
      button4.classList.remove("isactive");
      event.currentTarget.classList.add("isactive");
    },
    arrow_left() {
      this.$refs.map.previous();
      let button1 = document.getElementById("1");
      let button2 = document.getElementById("2");
      let button3 = document.getElementById("3");
      let button4 = document.getElementById("4");
      if (this.map == "1") {
        button1.classList.add("isactive");
        button2.classList.remove("isactive");
        button3.classList.remove("isactive");
        button4.classList.remove("isactive");
      } else if (this.map == "2") {
        button2.classList.add("isactive");
        button1.classList.remove("isactive");
        button3.classList.remove("isactive");
        button4.classList.remove("isactive");
      } else if (this.map == "3") {
        button3.classList.add("isactive");
        button1.classList.remove("isactive");
        button2.classList.remove("isactive");
        button4.classList.remove("isactive");
      } else if (this.map == "4") {
        button4.classList.add("isactive");
        button1.classList.remove("isactive");
        button2.classList.remove("isactive");
        button3.classList.remove("isactive");
      }
    },
    arrow_right() {
      this.$refs.map.next();
      let button1 = document.getElementById("1");
      let button2 = document.getElementById("2");
      let button3 = document.getElementById("3");
      let button4 = document.getElementById("4");
      if (this.industry == "1") {
        button1.classList.add("isactive");
        button2.classList.remove("isactive");
        button3.classList.remove("isactive");
        button4.classList.remove("isactive");
      } else if (this.map == "2") {
        button2.classList.add("isactive");
        button1.classList.remove("isactive");
        button3.classList.remove("isactive");
        button4.classList.remove("isactive");
      } else if (this.map == "3") {
        button3.classList.add("isactive");
        button1.classList.remove("isactive");
        button2.classList.remove("isactive");
        button4.classList.remove("isactive");
      } else if (this.industry == "4") {
        button4.classList.add("isactive");
        button1.classList.remove("isactive");
        button2.classList.remove("isactive");
        button3.classList.remove("isactive");
      }
    }
  }
};
</script>