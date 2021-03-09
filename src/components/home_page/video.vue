<template>
<div >
      <div class="risk">
        <div class="overlay">
          <div class="risk_container">
            <div class="presentation"> <span v-html="$t('presentation')"></span><q-btn class="open" @click="open" :label="$t('open')" color="white" text-color="black"> </q-btn></div>
            <div class="content">
            <h2 class="heading">{{ $t('lipetsk') }}</h2>
            <div class="white_heading">
                   <p class="risk_p">
              {{ $t('risk') }}  
            </p>
      <form-vue class="form"/>
            </div>
            
          


      </div>
          </div>
  
        </div>
        <video loop muted autoplay class="fullscreen-bg__video" :src="$t('video_src')" type="video/mp4" media="(min-width:800)" rel="preload" data-autoplay>
         
      
        </video>
        
      </div>


      
</div>
     
</template>
<style scoped>
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
  margin-top: 5vh;
  left:0;
}
.open{
  margin-left: 2vw;
}
.content{
width:100%;
text-align:center;
height: 90%;
display: flex;
flex-direction: column;
justify-content:space-between;
}
@media screen and (min-width:320px){
.risk {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  color:white;
  overflow: hidden;
  position: relative;
  height: 100vh;
  width: 100%;
}
.fullscreen-bg__video{
  display:none;
}

.overlay {
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
  .risk_container{  
    height:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    text-align:center;
    justify-content: space-between;
    background: url("/image/mobile_video.png");
    background-size: cover;
    background-repeat: no-repeat;
  }
  .heading {
  line-height: 100%!important;
  font-weight: 600;
  text-align: center;
  color: white;
  /* margin-bottom: 30%; */
  /* padding-bottom: 15%; */
  font-size: 15vw!important;
}
  .risk_p{
    font-size: 4vw!important;
    width:100%;
  }
  .hmm{
  color:white;
  margin-bottom: 2%;
}
  .heading {
  line-height: 100%!important;
  font-weight: 600;
  text-align: center;
  color: white;
  font-size: 15vw!important;
}
}
@media screen and (min-width:768px){
  .risk_container{
    background:none!important;
  }
 .fullscreen-bg__video {
   display: block!important;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
}
.heading{
  font-size: 5vw!important;
}
}
@media screen and (min-width:1024px){
 
   .form{
     /* margin-bottom:15%; */
   }
  .heading{
    line-height: 6.09375vw;
    font-weight: 600;
    text-align: center;
    color: #fff;
    font-size: 5vw!important;
  }
  .overlay{
    background: rgba(0,0,0,0.6);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 4;
  }
  .risk{
       display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    height: 100vh;
    width: 100%;
  }
  .risk_p{
        line-height: 140%;
        width:50%;
        margin:auto;
        padding-bottom: 2%!important;
    font-size: 2.5vw!important;
    text-align: center;
    color: #fff;
  }
}
/* @media screen and (max-width: 799px) {
  .presentation{
    display: none!important;
  } */
  /* .form{
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
} */

</style>
<script>
import formVue from "components/investorform.vue";
export default {
    components:{
      formVue
    },
    data(){
      return{
      }
    },
    methods:{
      open(){
        window.open('/files/lipetsk.pdf')
      }
    },

}
</script>