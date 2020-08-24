<template>
  <div class="slider">
    <q-img src='image/indesit.png' class='absolute'> </q-img>
    <div class = "history">
      <div class="number">  </div>
      <h4> Истории успеха </h4>
      <p class="today"> В Липецкой области </p>
      <div class="buttons">
                <button   @click.prevent="slidePrev()" class="prev"><img src="/icons/prev_history.png"></button>
            <button class="next" @click.prevent="slideNext()"><img src="/icons/next_history.png"></button>
      </div>
         <hooper :settings="hooperSettings" class="ok" ref="carousel">
      <slide>
        <div class="images img2">
          <div class="wrap">
           <div class="left">
                  <div class="levo">
                    <h5 class="title">
                           ООО «ЙОКОХАМА Р.П.З.»
                <br />производство автомобильных шин
                    </h5>
                    <div class="left_text">
                      <p>
                        Наша компания очень <br>комфортно чувствует <br>себя в Липецкой области.
                      </p>
                    </div>
             </div>
           </div>
           <div class="right">
             <div class="image">
                <picture>
              <source media="(max-width: 799px)" srcset="/image/yokohama_mobile.png" />
              <source media="(min-width: 800px)" srcset="/image/yokohama.png" />
              <img src="elva-800w.jpg" alt="lipetsk map" />
            </picture>
             </div>
           </div>
         </div>
        </div>
      </slide>
      <slide>          
        <div class="images img2">
          <div class="wrap">
           <div class="left">
                  <div class="levo">
                    <h5 class="title">
                      <b>АО «ИНДЕЗИТ ИНТЕРНЕШНЛ» <br>
                      производство бытовой техники</b>
                    </h5>
                    <div class="left_text">
                      <p>
                        Факт присутствия <br> нашей корпорации <br> в Липецке укрепился  <br>с годами.
                      </p>
                    </div>
             </div>
           </div>
           <div class="right">
             <div class="image">
                    <picture>
              <source media="(max-width: 799px)" srcset="/image/indesit_mobile.png" />
              <source media="(min-width: 800px)" srcset="/image/indesit2.png" />
              <img src="elva-800w.jpg" alt="lipetsk map" />
            </picture>
             
             </div>
           </div>
         </div>
        </div> 
      </slide>
            <slide>          
        <div class="images img2">
          <div class="wrap">
           <div class="left">
                  <div class="levo">
                    <h5 class="title">
                      <b>ООО «Хавле Индустриверке» производство оборудования для систем водоснабжения</b>
                    </h5>
                    <div class="left_text">
                      <p>
                       С 2011 года мы находимся <br>в Чаплыгине Липецкой <br> области и не жалеем <br>об этом.
                      </p>
                    </div>
             </div>
           </div>
           <div class="right">
             <div class="image">
                       <picture>
              <source media="(max-width: 799px)" srcset="/image/hawle_mobile.png" />
              <source media="(min-width: 800px)" srcset="/image/hawle.png" />
              <img src="elva-800w.jpg" alt="Хавле" />
            </picture>
             </div>
           </div>
         </div>
        </div>  
      </slide>
                <slide>          
        <div class="images img2">
          <div class="wrap">
           <div class="left">
                  <div class="levo">
                    <h5 class="title">
                      <b> ООО «Ангел Ист Рус» производство дрожжей </b>
                    </h5>
                    <div class="left_text">
                      <p>
                        Каждый год нам нужно минимум 100 000 тонн сахарной свеклы, которую обеспечивает Липецкая область.
                      </p>
                    </div>
             </div>
           </div>
           <div class="right">
             <div class="image">
                              <picture>
              <source media="(max-width: 799px)" srcset="statics/image/angel_mobile.png" />
              <source media="(min-width: 800px)" srcset="/image/angel1.png" />
              <img src="elva-800w.jpg" alt="angel" />
            </picture>
      
             </div>
           </div>
         </div>
        </div> 
      </slide>

     </hooper>
           <div class="hmm">
  <img src="/icons/mouse.png">
</div>
    </div>
  </div>
</template>
<style scoped>
@media screen and (max-width: 800px) {
   .wrap{
     flex-wrap: nowrap!important;
  height:100%!important;
  width:100%;
  display:flex;
  flex-direction: column!important;
   }
  .right{
    /* height: auto!important; */
  }
   .hooper{
     margin-top: 5%;
     height: 75%!important;
   }
   .title{
     line-height: 130%!important;
     font-size: 3vw!important;
   }
   .left_text{
     font-size: 2.5vw!important;
   }
   .left_text p{
    padding:2%!important;
   min-width: 75%!important;
     font-size: 2.5vw!important;
   }
   .image img{
     width: 100%!important; 
   }
   .levo{
    width: 100%!important;
   }
   .left{
     
   width:100%!important;
     height: 60%!important; 
   }
   .image{
      position: relative!important; 
   }
   .levo{
      height:auto!important;
   }
   .images{
     margin-right: 8%!important;
     height:100%!important 
   }
   .slide{
     height: 100vh!important; 
   }
    .image{
     left:0!important;
     position: relative!important;
   } 
   
   .history h4{
     margin-top: 0!important;
   }
   .history{
     justify-content: flex-start!important;
   }
   .buttons{
     display: none!important;
   }
   .hmm{
     display: none;
   }
 }
.history{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.hmm{
  color:white;
  margin-bottom: 2.2%;
}
.prev{
  margin-left: 3.5%;
  display: flex;
  align-items:center;
  justify-content: center;
}
.left_text{
 
  border-left:3px solid #52A4DF;
  font-size: 1vw;
  margin:5%;
}
.left_text p{
  margin-bottom: 0;
   min-width:30%;
  max-width: 60%;
  margin-left:0.4vw;
  font-weight: 400;
  color:black;
  font-size: 0.8vw;
}
.levo{
  width:70%;
  height:100%;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
 
}
.next{
  display:flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.6%;
}

.number{
  color:white;
  margin-top: 5%;
}
.buttons{
  display: flex;
  width:83%;
  justify-content: space-between;
  flex-direction: row;
}
.buttons button{
  border:none;
  cursor: pointer;
  outline: none;
  background:white;
  border-radius: 5px;
  width: 2.5vw;
  margin-bottom: 0.5%;
  height:5vh;
}
.buttons button img{
  width:30%;
}

.today{
  margin-top: 0.5%;
  color: grey;
}
.history h4{
    margin-top: 0;
  color:white;
  margin-bottom: 0;
}

.parent{
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height:100%;
}
.child { 
  height: 300px;
  width: 100%;
   background:  linear-gradient(to left, rgba(255,255,255,0) 20%, rgba(255,255,255,1),  ),url('/statics/image/OEZ.png');
   background-size: cover;
}

.ok{
  outline: none;
}
.dots {
  margin-top: 100%;
  display: flex;
  flex-direction: column;
}
.column{
 
  width:70%;
  overflow:visible!important;
}
.dots_industry {
  display: flex;
  margin-bottom: 50vh !important;
  flex-direction: column;
}
.slider {
  height: 100%;
  width: 100%;
}
.border_indesit {
  width: 100vw;
}
.indesit {
  font-size: 3.35vw;
  color: white;
  width: 80%;
}

.h2_indesit {
  font-size: 3vw;
}
.indesit_text {
  font-size: 1.25vw;
  color: white;
}
.sucess_container {
  justify-content: center;
  height: 99%;
  width: 95%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-bottom: 7%;
}
.sucess {
  width: 40%;
  border-bottom: 0.5px solid white;
}
.lipetsk {
  font-size: 1.875vw;
  color: #c6c6c6;
  margin: 0;
  padding: 0;
}
.suc {
  padding: 0;
  margin: 0;
  width: 100%;
  font-size: 3.75vw;
  color: white;
}
.left{
  background: white;
  width:70%;
  height:99.9%;
}
.title{
  color:black;
  font-size: 2vw;
  line-height: 100%;
  font-weight: 600;
  margin:5%;
}
.wrap{
  position: relative;
  height:70%;
  width:100%;
  display:flex;
  flex-direction: row;
}
.right{
  height:100%;
}
.image{
  height:100%;
  width:100%;
  position: absolute;
  left:30%;
}

.image img{
  height:100%;
  width: 70%;
}

.images{
  margin-right: 2%;
  height:145%;
  
}
.hooper{
  height: 50%;
  margin-bottom: 5%;
}
</style>
<script>
import { Hooper } from 'hooper'
import {Slide } from 'hooper'
import {Pagination as HooperPagination} from 'hooper'
import 'hooper/dist/hooper.css';
import Vue from "vue";
Vue.use(Hooper, Slide)


export default {
    methods:{
      slidePrev() {
      this.$refs.carousel.slidePrev();
    },

        slideNext() {
      this.$refs.carousel.slideNext();
    },
        updateCarousel(payload) {
      this.myCarouselData = payload.currentSlide;
    }
  },
  watch:{
       carouselData () {
      this.$refs.carousel.slideTo(this.carouselData);
    }
  },  
  data() {
    return {
      slide: "1",
      carouselData: 0,

    hooperSettings: {
                    infiniteScroll: true,
                    centerMode: true,
                    autoPlay: false,
                    playSpeed: 3500,
                    breakpoints: {
                        2400: { // 2400px ~
                            itemsToShow: 1.3
                        },
                        1800: { // 1800px ~ 2400px
                            itemsToShow: 1.3
                        },
                        1500: { // 1500px ~ 1800px
                            itemsToShow: 1.3
                        },
                        1100: { // 1100px ~ 1500px
                            itemsToShow: 1.3
                        },
                        600: { // 600px ~ 1100px
                            itemsToShow: 1.3
                        },
                        0: { // 0px ~ 600px
                            itemsToShow: 1.3
                        }
                    }
                }   
    }

  },
  components:{
   Hooper, 
   Slide,
   HooperPagination
  },
};
</script>