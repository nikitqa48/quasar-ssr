<template>
<div >
          <div class="risk">
        <div class="overlay">
          <div class="risk_container">
            <h2 class="heading">Липецкая область</h2>
            <div class="white_heading"></div>
            
            <p class="risk_p">
              Минимальный риск инвестирования В РФ
              <br />за 15 лет - RAEX rating agency
               
            </p>
            


          </div>
  
        </div>
        <video loop muted autoplay class="fullscreen-bg__video" src="video/video_background1.webm" type="video/webm" media="(min-width:800px)" rel="preload" >
         
          <!-- <source src="video/video_background1.webm" media="(min-width: 800px)" type="video/webm"> -->
        </video>
      </div>
      <form-vue class="form"/>
         <!-- <div class="arrow_slide">
                       <q-btn  label="Стать инвестором" color="primary" no-caps square style="padding-left:3vw; padding-right:3vw; font-size:1.4em;"   	/>
</div> -->
       <div class="presentation"> <span>Презентация <br> <b>Липецкой области</b> </span><button class="open" @click="open"> Открыть</button></div>
</div>
     
</template>
<style scoped>
@media screen and (max-width: 800px) {
  .presentation{
    display: none!important;
  }
  .form{
    display: none!important;
  }
  .risk_container{
    background: url("/image/mobile_video.png");
    background-size: cover;
    background-repeat: no-repeat;
  }
  .risk_p{
    font-size: 4vw!important;
    width:70%;
  }
  .fullscreen-bg__video {
display: none!important;
}
.heading {
  line-height: 100%!important;
  font-weight: 600;
  text-align: center;
  color: white;
  padding-bottom: 5%;
  font-size: 15vw!important;
}
}
.risk {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
  overflow: hidden;
  position: relative;
  height: 100vh;
  width: 100%;
}
.open{
height:70%;
background: #2CCCD8;
outline: none;
border-radius: 5px;

border:none;
color:white;
cursor: pointer;
padding-left: 1vw;
padding-right: 1vw;
margin-left: 1.3vw;
}
.presentation{
  border:1px solid #2CCCD8;
  position: absolute;
  align-items: center;
  color:white;
  border-radius: 5px;
  padding:1vw;
  text-align: center;
  display: flex;
  top:0;
  margin-left: 5vw;
  margin-top: 15vh;
  left:0;
}
.hmm{
  color:white;
  margin-bottom: 2%;
}
.arrow_slide{
  position: absolute;
  
    top: 0;
    margin-top: 83vh;
}
.risk_container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.heading {
  line-height: 6.09375vw;
  font-weight: 600;
  text-align: center;
  color: white;
  font-size: 5vw;
}
.risk_p {
  line-height: 140%;
  font-size: 2.5vw;
  text-align: center;
  color: white;
}
.overlay {
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 4;
}
.fullscreen-bg__video {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
}
.risk_container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>
<script>
import formVue from "components/investorform.vue";
export default {
    components:{
      formVue
    },
    methods:{
      open(){
        window.open('/files/lipetsk.pdf')
      }
    }
}
</script>