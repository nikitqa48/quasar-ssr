<template>
<div>
<div class="main">
 <div class='header'  >

        <q-tabs
        indicator-color="blue-7"
        class='q-tabs my-tabs'
        active-color='blue'
     
  <router-link to = '/' style="align-self:center;">
  <button class="btn" > 
    <div class="img">
    <img src="icons/logotype-teal.png">
    </div>
     <div style="display:flex;flex-direction:column; padding-left:6vw;">
       <span class="investition"> Инвестиционный портал  </span> <span class="lipetsk">Липецкой области </span></div>
       </button>
  </router-link>
      <q-space/>
<div class="space">
          <q-btn  no-caps class='button' v-scroll="scrollHandler" clickable v-ripple="{color:'blue-6'}"   @click='description({behavior: "smooth"})' >Описание </q-btn >
                <q-btn  no-caps class='button'  clickable v-ripple="{color:'blue-6'}"   @click='team({behavior: "smooth"})' >Участники </q-btn >
           
              <q-btn  no-caps class='button'  clickable v-ripple="{color:'blue-6'}"  @click='scroll({behavior: "smooth"})' >Трансляция </q-btn >
    
             <q-btn  no-caps class='button'  clickable v-ripple="{color:'blue-6'}"   @click='winners({behavior: "smooth"})' >Награждение </q-btn >



</div>

 

</q-tabs>
        </div>
  <div class='center' style="margin-top:15%;">
  <h5 class="text text-white" style='margin-bottom:10%;' >
    <!-- <p style="text-align:center; padding-bottom:2%; font-size:2rem;">Конференция: </p>  -->
    {{event[0].title}}
  </h5>
   <p class='text-white' style='text-align:center; font-size:1.5rem; margin-bottom:10%;'>  Событие состоится {{date.date}}.  В {{date.time}} по МСК </p>
  <q-btn label="смотреть трансляцию" color="teal-4" no-caps size="1vw" style='width:50%; align-self:center; ' @click='scroll({behavior: "smooth"})'/> 
       
         </div>
        
           <q-btn color="white" flat icon="keyboard_backspace"  label="Вернуться на портал" no-caps  style="margin-top:5%;"  :to="{name:'home'}" />
          
</div>
<div class="description" ref='description'>
 
  <p class="text-description text-center text-teal-4"   >   
     <q-icon left name="import_contacts" />Описание мероприятия 
     </p>
           <q-scroll-area
      :thumb-style="thumbStyle"
      style="height:50vh; max-width: 100%;">
  <div class="row" style='justify-content:center;'>
    <div class="text-desc" v-html="event[0].description"> {{event[0].description}}</div>
<div class='image'>
  
  <q-img src='image/lathe.jpg'/>
   </div>
    </div>
           </q-scroll-area>
  </div>
  <div class = 'team' ref='team'>
  <p class="team-description text-center text-white"   >   
     <q-icon left name="group" />Участники
     </p>
           <!-- <div class="buttons">
            
           
</div> -->
<div class='stroke' style='flex-wrap:nowrap;'>
      <q-btn icon = 'arrow_back'   @click.prevent="slidePrev()" color='teal-4' class='left' />
         <hooper :settings="hooperSettings" class="slider" ref="carousel">
      <slide v-for="(slide, indx) in event[0].partner" :key="indx" :index="indx">

<div class = 'card'>
     <q-scroll-area
      :thumb-style="thumbStyle"
      style="height:100%; max-width: 100%;">
  <div class='card_container'>
<div class = 'logo'>
  <div class='logo_image'>
       <img :src='slide.logo' style='width:100%; '/>
       </div>
       <!-- <div class='border'>
         </div> -->
</div>
      
<div class='card_description'>
        {{ slide.description }}
        </div>
        
        </div>
   </q-scroll-area>     
</div>
      </slide>

     </hooper>
      <q-btn @click.prevent="slideNext()" icon = 'arrow_forward' color='teal-4' class='right' />
     </div>
    </div>
  <div class='translation' ref='video' id='video'>
      
     <p class="team-description text-center text-teal-4">   
     <q-icon left name="mic" />Трансляция
     </p>

      <div class="video" id='video'>
    <div class="q-video"> 
    <iframe
        :src="event[0].translation"
        frameborder="0"
        allowfullscreen
      /> 
    </div>
  </div>
    </div>
    <div class='winners' ref='winners'> 
         <p class="team-description text-center text-white"   >   
     <q-icon left name="emoji_events" />Награждение
     </p>
     <div class='winners_container bg-teal-4'>
       <div class='logotype' >
         <img src='icons/teal-logo.svg' style="width:100%;">
         </div>
         <p class='logo-text'> Скоро тут будет список награжденных. Следите за обновлениями</p>
       </div>
      </div> 
      <div class = 'star'>
         <p class="team-description text-center text-teal-4">   
     <q-icon left name="mic" />Поздравления
     </p>
     <div class='stroke' style='flex-wrap:nowrap;'>
      <q-btn icon = 'arrow_back'   @click.prevent="slidePrev1()" color='teal-4' class='left' />
      
              <hooper :settings="hooperSettingsVideo" class="slider" ref="carousel1" style="display:flex; flex-direction:column;">
     
      <slide v-for="(slide, indx) in event[0].video" :key="indx" :index="indx">
    <div class="q-video" style='width:85%;'> 
    <iframe
        :src="slide.video"
        frameborder="0"
        allowfullscreen
      /> 
    </div>
      </slide>

     </hooper>
           <q-btn @click.prevent="slideNext1()" icon = 'arrow_forward' color='teal-4' class='right' />
     </div>
        </div>
      <div class='footer bg-teal-4 text-white'>
         <p class="footer-header text-center text-white">   
     <q-icon left name="message" />Контакты
     </p>
     <div class='stroka'>
       <div class ='row'style='font-size:1rem; margin-top:2%;'> <q-icon left name="location_on" /> 398050, г. Липецк, пл. Соборная, 1</div>
       <div class ='row'style='font-size:1rem; margin-top:2%;'> <q-icon left name="call" /> +7(4742) 27-55-83</div>
         <div class ='row'style='font-size:1rem; margin-top:2%;'> <q-icon left name="email" />diirs@admlr.lipetsk.ru</div>
        </div>
        </div>
  </div>
</template>

<script>
import { Hooper } from 'hooper'
import {Slide } from 'hooper'
import 'hooper/dist/hooper.css';
import Vue from "vue";
Vue.use(Hooper, Slide)
export default {
 preFetch({store}){
     return store.dispatch('event/getEvent')
 },
 components:{
   Hooper, 
   Slide,
 },   
   methods:{
      slidePrev() {
      this.$refs.carousel.slidePrev();
    },
        slideNext() {
      this.$refs.carousel.slideNext();
    },
          slidePrev1() {
      this.$refs.carousel1.slidePrev();
    },
        slideNext1() {
      this.$refs.carousel1.slideNext();
    },
        updateCarousel(payload) {
      this.myCarouselData = payload.currentSlide;
    },
    scroll(options){
    let el = this.$refs.video
    el.scrollIntoView(options)
    },
    description(options){
   let el = this.$refs.description
    el.scrollIntoView(options)
    },
    team(options){
         let el = this.$refs.team
    el.scrollIntoView(options)
    },
    winners(options){
    let el = this.$refs.winners
    el.scrollIntoView(options)
    }
  },
 data(){
   return{
      // event:{},
      partner:'',
              thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75
      },
          hooperSettings: {
                    infiniteScroll: false,
                    // centerMode: true,
                    autoPlay: false,
                    wheelControl:false,
                    playSpeed: 3500,
                    breakpoints: {
                        2400: { // 2400px ~
                            itemsToShow: 3
                        },
                        1800: { // 1800px ~ 2400px
                            itemsToShow: 3
                        },
                        1500: { // 1500px ~ 1800px
                            itemsToShow: 3
                        },
                        1100: { // 1100px ~ 1500px
                            itemsToShow: 3
                        },
                        600: { // 600px ~ 1100px
                            itemsToShow: 3
                        },
                        0: { // 0px ~ 600px
                            itemsToShow: 3
                        }
                    }
                },
                          hooperSettingsVideo: {
                    infiniteScroll: false,
                    centerMode: true,
                    wheelControl:false,
                    autoPlay: false,
                    playSpeed: 3500,
                    breakpoints: {
                        2400: { // 2400px ~
                            itemsToShow: 2
                        },
                        1800: { // 1800px ~ 2400px
                            itemsToShow: 2
                        },
                        1500: { // 1500px ~ 1800px
                            itemsToShow: 2
                        },
                        1100: { // 1100px ~ 1500px
                            itemsToShow: 2
                        },
                        600: { // 600px ~ 1100px
                            itemsToShow: 2
                        },
                        0: { // 0px ~ 600px
                            itemsToShow: 2
                        }
                    }
                }   
    }
 },
 computed:{
   computedEvent(){
     return this.$store.state.event.items
    }
   },
     watch:{
       carouselData () {
      this.$refs.carousel.slideTo(this.carouselData);
    }
  },  
  computed:{
    date(){
      let string = this.event[0].date.split('T')[0]
      let string1 = string.split('-')
      let string2 = string1.reverse()
      let string3 = string2.join('-')
      let time = this.event[0].date.split('T')[1] 
      let time2 = time.split(':')
      let time3 = []
      time3.push(time2[0], time2[1])
      let time4 = time3.join(':')
      let datetime = {
        date:string3,
        time:time4
      }
     return datetime
      
    }
  },
   created(){
    this.event = this.$store.state.event.items
   }
 }
</script>
<style scoped>
.investition{
  text-transform: uppercase;
  font-size: 0.8rem;
  line-height: 100%;
  letter-spacing: 0.03vw;
  font-weight: 600;
}
.star{
  min-height:70vh;
  background-repeat:no-repeat;
  background:url('/image/bg2.png');
  background-size: cover;
  background-position: 50% 50%;
}
.footer{
  display:flex;
  flex-direction:column;
  align-items:center;
  height:30vh;
}
.stroka{
  display:flex;
  flex-direction:column;
}
.footer-header{
  padding-top:2%;
  font-size:2rem;
}
.btn{
  display: flex;
  align-self: flex-end;
  background:none;
  text-align: left;
  outline: none;
  border:none;
  cursor: pointer;
  color:white;
  align-items: center;
}
.img{
  padding-right: 0.2vw;
  margin-right: 0.2vw;
  width: 4.6%;
  height:150%;
  position: absolute;
}
.header{
  background:none;
  height:7vh!important;
  color:white;
  display:flex;
  position:absolute;
  top:0;
  width:80%;
  border-bottom:1px solid white;
}
.space{
  display:flex;
  align-items:center;
  flex-wrap:nowrap;
}
.video{
  height:50vh;
}
.logotype{
  width:10vw;
}
.logo-text{
  font-size:1.5rem;
  text-align:center;
  width:50%;
  color:white;
}
.winners{
  display:flex;
  flex-direction:column;
  min-height:70vh;
  padding-bottom: 7vh;
  background-repeat:no-repeat;
  background:url('/image/bg4.png');
  background-size: cover;
  background-position: 50% 50%;
}
.winners_container{
  width:55%;
  margin:auto;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  height:55vh;
  opacity: .7;
}
.q-video{
  width:50%;
  height:100%;
  margin:auto;
}
.translation{
  min-height:70vh;
     background:url('/image/bg2.png');
       background-repeat:no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}
.card_description{
  margin-top:5%;
  font-size:0.8rem;
  overflow:hidden;
  letter-spacing:0.05rem;
}
.left{
  margin-left:13%;
}
.right{
  margin-right:13%;
}
.card{
  height:100%;
  width:95%;
   border-radius: 0.35rem 0.35rem 0.35rem 0.35rem;
  background:white;
}
.stroke{
  display:flex;
  flex-direction:row;
  align-items:center;
  flex-wrap:nowrap;
}
.card_container{
  width:90%;
  margin:auto;
  height:95%;
}
.logo_image{
  width:8rem;
}
.logo{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  height:15vh;
  border-bottom: 0.5px solid rgba(0,0,0,0.5);
}
.text-desc{
  padding-left:1%;
  font-size:1rem;
  letter-spacing:0.05rem;
  padding-right:1%;
}
.text-description{
  font-size:1.5rem;
  margin-top:2%;
  margin-bottom:2%;
  text-transform:uppercase;
}
.slider{
  height:50vh;
  width:65%;
  margin:auto;
  outline:none;
}
.hooper{
}
.my-card{
 
  width:95%;
  min-height:100%;
}
.main{
  min-height: 100vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* filter: blur(8px); */
  backdrop-filter: blur(10px);
  background-position: 50% 50%;
  background: url('/image/bg1.png');
      -moz-background-size: cover; 
    -webkit-background-size: cover; 
    -o-background-size: cover; 
}
.center{
  display:flex;
  flex-direction: column;
}
.team{
  min-height:70vh;
  display:flex;
  flex-direction:column;
    background-repeat:no-repeat;
   background:url('/image/bg3.png');
  background-size: cover;
  background-position: 50% 50%;
}
.main h5{
    font-size: 2.5rem;
    text-transform: uppercase;
}
.description{
  min-height: 43vh;
  padding-bottom:7vh;
  display: flex;
  flex-direction: column;
    background-repeat:no-repeat;
  background:url('/image/bg2.png');
  background-size: cover;
  background-position: 50% 50%;
}
.team-description{
  font-size:1.5rem;
  padding-top:2%;
  padding-bottom:0!important;
  text-transform:uppercase;
}
.row{
  width:100%;
  height:100%;
  display: flex;
  flex-wrap: nowrap;
}
.text-desc{
  width:30%;
  height: 100%;
 
}
.image{
  width:30%;
}
</style>
