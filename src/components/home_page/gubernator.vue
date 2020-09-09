<template>
    <div class="wrapper">
        <!-- <q-img src='image/ArtomonovIgor.png' class='absolute' style='border:1px solid red; '> </q-img> -->
        <div class = 'container'>
        <div class="text">
            <p style="padding:1%;font-size: 1.2vw;"> «<span style="font-weight:600;">Липецкая область</span> – <span style="opacity:.8;">надёжный и проверенный партнер для инвестора. Нам доверяют, мы это ценим. Могу с уверенностью сказать, что наш <br> опыт в реализации проектов сформировал положительный имидж региона не только на территории России, но и во всем мире.
<br>Липецкая область - открытый регион для инвестиций»</span></p>
        <div class="wrap"><p style="font-size: 1vw; padding:1%;">  Глава администрации  <br>Липецкой области, <br>Игорь Георгиевич Артамонов</p> <img src="icons/painting.png" style="width:30%;"> </div>
        </div>
        <a href="https://xn--80aacoonefzg3am8b1fsb.xn--p1ai/appeal"><div class="button">Обратиться к губернатору 
        </div> </a>
         <!-- <div class="hmm">
  <img src="icons/mouse.png">
</div> -->
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
          padding-bottom: 10vh;
      }
      .text{
          margin-top:0!important;
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
.container{
    margin:auto;
    padding-bottom: 5%;
    width: 85%;
}
.button{
    min-width: 20%;
    max-width: 25%;
    padding-top: 1vh;
    padding-bottom: 1vh;
    margin-left: 1%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1vw;
    color: #fff;
    background: #3E8FD1;
}
.text{

    padding:1%;
    color: #fff;
    width: 35%;
}
.wrap{
    display: flex;
    justify-content: space-between;
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