<template>
    <div class="wrapper">
        <!-- <q-img src='image/ArtomonovIgor.png' class='absolute' style='border:1px solid red; '> </q-img> -->
        <div class = 'container'>
        <div class="text">
            <p style="padding:1%;font-size: 1.2vw;" class="lipetsk"> «<span style="font-weight:600;">Липецкая область</span> – <span style="opacity:.8;">надёжный и проверенный партнер для инвестора. Нам доверяют, мы это ценим. Могу с уверенностью сказать, что наш <br> опыт в реализации проектов сформировал положительный имидж региона не только на территории России, но и во всем мире.
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
@media screen and (min-width:280px){
    .container{
        width:100%!important;
        margin:0!important;
    }
    .text p {
        font-size:3.5vw!important;
    }
    .button{
        margin:auto!important;
        max-width: 100%!important;
    }
}
@media screen and (min-width:768px){
    .text p{
        font-size:3vw!important;
    }
    .text{
        width:75%!important;
    }
    .container{
        padding-bottom:13%!important;
    }
}
@media screen and (min-width:1024px){
          .text{
          margin-top:0!important;
          opacity: 1!important;
          padding:1%!important;
          
          width: 35%!important;
      }
      .wrapper{
    background: url(/image/ArtomonovIgor.png);
    min-height: 100vh;
    background-repeat: no-repeat;
    background-position: 60%;
    background-size: cover;
    display: flex;
    flex-direction: column;
      }
      .lipetsk{
          font-size: 1.2vw!important;
      }
          .text p{
        font-size:1vw!important;
    }
    .button{
            min-width: 20%!important;
    max-width: 25%!important;
    margin:0!important;
    }
      .wrap{
          font-size: 1vw!important;
      }
      .container{
         margin: auto!important;
    padding-bottom: 5%!important;
    width: 85%!important;
      }

}
  @media screen and (max-width: 800px) {
      .button{
          padding-left:1%!important;
          padding-right:1%!important;
        
          font-size: 4vw!important;
          width: 90%!important;
          margin:0 auto!important;
      }
      .wrapper{
          justify-content: flex-end;
          width: 100%;
      }
      .wrapper a{
          padding-bottom: 10vh;
      }

     .text p{
         letter-spacing: 2%!important;
         
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