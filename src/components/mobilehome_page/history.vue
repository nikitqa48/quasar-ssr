<template>
  <div class='container' >
      <p class="text-white" style='text-align:center; font-size:200%; padding-top:5%;' > Истории успеха</p>
      <p class ='text-white'style='text-align:center; opacity:.9; margin:0; padding:0;'> В Липецкой области </p>
     <hooper :settings="hooperSettings" class="hooper" ref="carousel">
      <slide>
        <div class="images img2">
          <div class="wrap">
           <div class="left">
                  <div class="levo">
                       <div class="image">
               <q-img src ='image/yokohama_mobile.png' class='q-img'/>
            
             </div>
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
    
         </div>
        </div>
      </slide>
      <slide>          
        <div class="images img2">
          <div class="wrap">
           <div class="left">
                  <div class="levo">
                           <div class="image">
             <q-img src='image/indesit.png' class='q-img'/>
             </div>
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

         </div>
        </div> 
      </slide>
            <slide>          
        <div class="images img2">
          <div class="wrap">
           <div class="left">
                  <div class="levo">
                         <div class="image">
               <q-img src='image/hawle_mobile.png' class='q-img'/>
             </div>
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
         </div>
        </div>  
      </slide>
                <slide>          
        <div class="images img2">
          <div class="wrap">
           <div class="left">
                  <div class="levo">
                     <div class="image" >
               <q-img src='image/angel_mobile.png' style='width:100%; height:100%;' class='q-img'/>
             </div>
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
         </div>
        </div> 
      </slide>

     </hooper>
    </div>
</template>

<script>
import { Hooper } from 'hooper'
import {Slide } from 'hooper'
import {Pagination as HooperPagination} from 'hooper'
import 'hooper/dist/hooper.css';
import Vue from "vue";
Vue.use(Hooper, Slide)
export default {
  // name: 'ComponentName',
  components:{
       Hooper, 
   Slide,
   HooperPagination
  },
  data () {
    
    return {
         slide: "1",
      carouselData: 0,
       hooperSettings: {
                    infiniteScroll: true,
                    centerMode: true,
                    autoPlay: false,
                    touchDrag:true,
                    playSpeed: 3500,
                    breakpoints: {
                        2400: { // 2400px ~
                            itemsToShow: 1.1
                        },
                        1800: { // 1800px ~ 2400px
                            itemsToShow: 1.1
                        },
                        1500: { // 1500px ~ 1800px
                            itemsToShow: 1.1
                        },
                        1100: { // 1100px ~ 1500px
                            itemsToShow: 1.1
                        },
                        600: { // 600px ~ 1100px
                            itemsToShow: 1.1
                        },
                        0: { // 0px ~ 600px
                            itemsToShow: 1.1
                        }
                    }
                }   
    }
  },
  watch:{
        carouselData () {
      this.$refs.carousel.slideTo(this.carouselData);
    }
  }
}
</script>
<style scoped>
.container{
  height:100%;
  color:white;
  background:#2C2C2C;
}
.image{
  width:90%; 
   height:30%;
}
.title{
  padding:0;
  margin:0;
}
.hooper{
  margin-top:10%;
  height:90%;
}
.levo{
  display:flex;
  flex-direction: column;
  justify-content: space-between;
    min-height: 60vh;
}
.q-img{
  width:100%;
}
.left_text{
  margin-top:20%;
  padding-left:5%;
  border-left:3px solid #318BEF;
}
.iamges img2{
  border:1px solid red;
  height:100%;
}
</style>