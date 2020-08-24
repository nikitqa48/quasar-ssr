<template>
    <div class="wrapper">
        <!-- <q-img src='image/ArtomonovIgor.png' class='absolute' style='border:1px solid red; '> </q-img> -->
        <div class="text">
            <p style="padding:1%;font-size: 1.2vw;"> «<span style="font-weight:600;">Липецкая область</span> – <span style="opacity:.8;">надёжный и проверенный партнер для инвестора. Нам доверяют, мы это ценим. Могу с уверенностью сказать, что наш опыт в реализации проектов сформировал положительный имидж региона не только на территории России, но и во всем мире.
<br>Липецкая область - открытый регион для инвестиций»</span></p>
        <div class="wrap"><p style="font-size: 1vw; padding:1%;">  Глава администрации Липецкой области, Игорь Георгиевич Артамонов</p> <img src="icons/painting.png"> </div>
        </div>
        <a href="https://xn--80aacoonefzg3am8b1fsb.xn--p1ai/appeal"><div class="button">Обратиться к губернатору 
        </div> </a>
         <div class="hmm">
  <img src="icons/mouse.png">
</div>
    </div>
</template>
<style scoped>
  @media screen and (max-width: 800px) {
      .button{
          padding-left:1%!important;
          padding-right:1%!important;
          font-size: 4vw!important;
          width: 90%!important;
          margin:0 auto!important;
      }
      .wrapper{
          min-height: 105vh!important;
          justify-content: flex-end;
          width: 100%;
      }
      .wrapper a{
          padding-bottom: 2vh;
      }
      .text{
          opacity: 1!important;
          padding:3%!important;
          align-self: center;
          width: 90%!important;
      }
     .text p{
         letter-spacing: 2%!important;
         font-size: 3.5vw!important;
     }
      .hmm{
          display: none;
      }

  }
.wrapper{
    background: url('/image/ArtomonovIgor.png');
    min-height: 100vh;
    background-repeat: no-repeat;
    background-position: 60%;
    background-size: cover;
    display: flex;
    flex-direction: column;
}
body a{
    text-decoration: none;
}
.button{
    width: 25%;
    padding-top: 1vh;
    padding-bottom: 1vh;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    font-size: 1.2vw;
    color: #fff;
    background: #2cccd8;
    margin-left: 2%;
}
.text{
    margin-left: 2%;
    padding:1%;
    margin-top: 10%;
    margin-bottom: 5%;
    color: #fff;
    background: rgba(31, 37, 55, 0.5);
    opacity: .5;
    width: 35%;
}
.wrap{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}
.hmm{
 align-self: center;
margin-top: 1.5%;
}
</style>
<script>
export default {
    
}
</script>