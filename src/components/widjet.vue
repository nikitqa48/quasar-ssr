<template>


  
  <div>
 <div id='js-show-iframe-wrapper'> <div class='pos-banner-fluid bf-2'> <div class='bf-2__decor'> 
     <div class='bf-2__logo-wrap'> 
     <img class='bf-2__logo' src='https://pos.gosuslugi.ru/bin/banner-fluid/gosuslugi-logo.svg' alt='Госуслуги' /> 
     <div class='bf-2__slogan'>Жалобы на всё</div >
      </div > 
      </div >
       <div class='bf-2__content'> 
           <div class='bf-2__description'> 
               <span class='bf-2__text'> Не убран мусор, яма на дороге, не горит фонарь? <!-- Не убран мусор, яма на дороге, не горит фонарь?--> </span > 
               <span class='pos-banner-fluid__text pos-banner-fluid__text_small'> Столкнулись с проблемой&nbsp;— сообщите о ней! <!-- Столкнулись с проблемой&nbsp;— сообщите о ней!--> </span > </div > <div class='bf-2__btn-wrap'> <!-- pos-banner-btn_2 не удалять; другие классы не добавлять -->
                <button class='pos-banner-btn_2' type='button' >Подать жалобу </button > 
                </div >
                 </div > 
                 </div > 
                 </div > 
                 <script></script> 

  


<!-- <div id="pos-banner-lock" style="color:black;">
    <div class="pos-banner b2" id='banner'>
        <div class="b2__content">

            <div class="pos-banner__text b2__text">
                Жалобы, предложения? Пишите – разберемся!
            </div>
            <div class="b2__logo-wrap">
                <img src="https://pos.gosuslugi.ru/bin/banner/logo.svg"
                     alt=""
                     class="b2__logo">
            </div>

            <!--Hint-->
            <!-- <div class="pos-banner__hint-icon b2__hint-icon pos-banner__hint-icon_center-right">
                <span class="pos-banner__hint-icon-symbol">?</span>
            </div> -->
            <!-- <div class="pos-banner__hint-message">
                Направляемые сообщения не являются обращениями граждан,
                рассматриваемыми в порядке, установленном Федеральным законом от 2
                мая 2006 г. № 59-ФЗ «О порядке рассмотрения обращений граждан
                Российской Федерации».
            </div> -->
            <!--/Hint-->
        <!-- </div> -->
<!-- 
        <div class="b2__bg-wrap">
            <img src="https://pos.gosuslugi.ru/bin/banner/banner-bg-2.svg"
                 alt=""
                 class="b2__bg">
        </div> -->

        <!-- <div class="pos-banner__button-wrap b2__button-wrap"> -->
            <!-- pos-banner-btn не удалять; другие классы не добавлять -->
            <!-- <button type="button"
                    class="pos-banner-btn"
                    id="js-show-iframe-wrapper">Написать
            </button>
            
        </div>
    </div> -->
    <!-- <script> Widget("https://pos.gosuslugi.ru/form", 222178)</script> -->
<!-- </div> --> 


  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  },
  mounted(){
      let Widget = document.createElement('script')
      Widget.innerText = 'Widget("https://pos.gosuslugi.ru/form", 222178)'
      let banner = document.getElementById('js-show-iframe-wrapper')
      banner.appendChild(Widget)
      let secondScript = document.createElement('script')
      secondScript.innerText = `"use strict";var root=document.documentElement,banner=document.getElementById("js-show-iframe-wrapper");function displayWindowSize(){var o=banner.offsetWidth;o<=405&&(root.style.setProperty("--pos-banner-fluid-2__grid-template-columns","100%"),root.style.setProperty("--pos-banner-fluid-2__grid-template-rows","310px auto"),root.style.setProperty("--pos-banner-fluid-2__decor-grid-column","initial"),root.style.setProperty("--pos-banner-fluid-2__decor-grid-row","initial"),root.style.setProperty("--pos-banner-fluid-2__decor-padding","30px 30px 0 30px"),root.style.setProperty("--pos-banner-fluid-2__content-padding","0 30px 30px 30px"),root.style.setProperty("--pos-banner-fluid-2__bg-url","url('https://pos.gosuslugi.ru/bin/banner-fluid/2/banner-fluid-bg-2-small.svg')"),root.style.setProperty("--pos-banner-fluid-2__bg-position","calc(10% + 64px) calc(100% - 20px)"),root.style.setProperty("--pos-banner-fluid-2__bg-size","cover"),root.style.setProperty("--pos-banner-fluid-2__slogan-font-size","20px"),root.style.setProperty("--pos-banner-fluid-2__slogan-line-height","32px"),root.style.setProperty("--pos-banner-fluid-2__logo-wrap-padding","20px 30px 30px 40px"),root.style.setProperty("--pos-banner-fluid-2__logo-wrap-top","0"),root.style.setProperty("--pos-banner-fluid-2__logo-wrap-bottom","initial"),root.style.setProperty("--pos-banner-fluid-2__logo-wrap-border-radius","0 0 0 80px")),o>405&&o<=500&&(root.style.setProperty("--pos-banner-fluid-2__grid-template-columns","100%"),root.style.setProperty("--pos-banner-fluid-2__grid-template-rows","310px auto"),root.style.setProperty("--pos-banner-fluid-2__decor-grid-column","initial"),root.style.setProperty("--pos-banner-fluid-2__decor-grid-row","initial"),root.style.setProperty("--pos-banner-fluid-2__decor-padding","30px 30px 0 30px"),root.style.setProperty("--pos-banner-fluid-2__content-padding","0 30px 30px 30px"),root.style.setProperty("--pos-banner-fluid-2__bg-url","url('https://pos.gosuslugi.ru/bin/banner-fluid/2/banner-fluid-bg-2-small.svg')"),root.style.setProperty("--pos-banner-fluid-2__bg-position","calc(10% + 64px) calc(100% - 20px)"),root.style.setProperty("--pos-banner-fluid-2__bg-size","cover"),root.style.setProperty("--pos-banner-fluid-2__slogan-font-size","24px"),root.style.setProperty("--pos-banner-fluid-2__slogan-line-height","32px"),root.style.setProperty("--pos-banner-fluid-2__logo-wrap-padding","30px 50px 30px 70px"),root.style.setProperty("--pos-banner-fluid-2__logo-wrap-top","0"),root.style.setProperty("--pos-banner-fluid-2__logo-wrap-bottom","initial"),root.style.setProperty("--pos-banner-fluid-2__logo-wrap-border-radius","0 0 0 80px")),o>500&&o<=585&&(root.style.setProperty("--pos-banner-fluid-2__grid-template-columns","min-content 1fr"),root.style.setProperty("--pos-banner-fluid-2__grid-template-rows","100%"),root.style.setProperty("--pos-banner-fluid-2__decor-grid-column","2"),root.style.setProperty("--pos-banner-fluid-2__decor-grid-row","1"),root.style.


setProperty("--pos-banner-fluid-2__decor-padding","30px 30px 30px 0"),root.style.setProperty("--pos-banner-fluid-2__content-padding","30px"),root.style.setProperty("--pos-banner-fluid-2__bg-url","url('https://pos.gosuslugi.ru/bin/banner-fluid/2/banner-fluid-bg-2-small.svg')"),root.style.setProperty("--pos-banner-fluid-2__bg-position","0% calc(100% - 70px)"),root.style.setProperty("--pos-banner-fluid-2__bg-size","cover"),root.style.setProperty("--pos-banner-fluid-2__slogan-font-size","24px"),root.style.setProperty("--pos-banner-fluid-2__slogan-line-height","32px"),root.style.setProperty("--pos-banner-fluid-2__logo-wrap-padding","30px 30px 24px 40px"),root.style.setProperty("--pos-banner-fluid-2__logo-wrap-top","initial"),root.style.setProperty("--pos-banner-fluid-2__logo-wrap-bottom","0"),root.style.setProperty("--pos-banner-fluid-2__logo-wrap-border-radius","80px 0 0 0")),o>585&&o<=800&&(root.style.setProperty("--pos-banner-fluid-2__grid-template-columns","min-content 1fr"),root.style.setProperty("--pos-banner-fluid-2__grid-template-rows","100%"),root.style.setProperty("--pos-banner-fluid-2__decor-grid-column","2"),root.style.setProperty("--pos-banner-fluid-2__decor-grid-row","1"),root.style.setProperty("--pos-banner-fluid-2__decor-padding","30px 30px 30px 0"),root.style.setProperty("--pos-banner-fluid-2__content-padding","30px"),root.style.setProperty("--pos-banner-fluid-2__bg-url","url('https://pos.gosuslugi.ru/bin/banner-fluid/2/banner-fluid-bg-2-small.svg')"),root.style.setProperty("--pos-banner-fluid-2__bg-position","0% calc(100% - 6px)"),root.style.setProperty("--pos-banner-fluid-2__bg-size","cover"),root.style.setProperty("--pos-banner-fluid-2__slogan-font-size","24px"),root.style.setProperty("--pos-banner-fluid-2__slogan-line-height","32px"),root.style.setProperty("--pos-banner-fluid-2__logo-wrap-padding","30px 30px 24px 40px"),root.style.setProperty("--pos-banner-fluid-2__logo-wrap-top","initial"),root.style.setProperty("--pos-banner-fluid-2__logo-wrap-bottom","0"),root.style.setProperty("--pos-banner-fluid-2__logo-wrap-border-radius","80px 0 0 0")),o>800&&o<=1020&&(root.style.setProperty("--pos-banner-fluid-2__grid-template-columns","min-content 1fr"),root.style.setProperty("--pos-banner-fluid-2__grid-template-rows","100%"),root.style.setProperty("--pos-banner-fluid-2__decor-grid-column","2"),root.style.setProperty("--pos-banner-fluid-2__decor-grid-row","1"),root.style.setProperty("--pos-banner-fluid-2__decor-padding","30px 30px 30px 0"),root.style.setProperty("--pos-banner-fluid-2__content-padding","30px"),root.style.setProperty("--pos-banner-fluid-2__bg-url","url('https://pos.gosuslugi.ru/bin/banner-fluid/2/banner-fluid-bg-2.svg')"),root.style.setProperty("--pos-banner-fluid-2__bg-position","0% center"),root.style.setProperty("--pos-banner-fluid-2__bg-size","cover"),root.style.setProperty("--pos-banner-fluid-2__slogan-font-size","24px"),root.style.setProperty("--pos-banner-fluid-2__slogan-line-height","32px"),root.style.setProperty("--pos-banner-fluid-2__logo-wrap-padding","30px 30px 24px 40px"),root.style.setProperty("--pos-banner-fluid-2__logo-wrap-top","initial"),root.style.setProperty("--pos-banner-fluid-2__logo-wrap-bottom","0"),root.style.setProperty("--pos-banner-fluid-2__logo-wrap-border-radius","80px 0 0 0")),o>1020&&(root.style.setProperty("--pos-banner-fluid-2__grid-template-columns","min-content 1fr"),root.style.setProperty("--pos-banner-fluid-2__grid-template-rows","100%"),root.style.setProperty("--pos-banner-fluid-2__decor-grid-column","2"),root.style.setProperty("--pos-banner-fluid-2__decor-grid-row","1"),root.style.setProperty("--pos-banner-fluid-2__decor-padding","30px 30px 30px 0"),root.style.setProperty("--pos-banner-fluid-2__content-padding","30px"),root.style.setProperty("--pos-banner-fluid-2__bg-url","url('https://pos.gosuslugi.ru/bin/banner-fluid/2/banner-fluid-bg-2.svg')"),root.style.setProperty("--pos-banner-fluid-2__bg-position","0% center"),root.style.


setProperty("--pos-banner-fluid-2__bg-size","cover"),root.style.setProperty("--pos-banner-fluid-2__slogan-font-size","24px"),root.style.setProperty("--pos-banner-fluid-2__slogan-line-height","32px"),root.style.setProperty("--pos-banner-fluid-2__logo-wrap-padding","30px 30px 24px 40px"),root.style.setProperty("--pos-banner-fluid-2__logo-wrap-top","initial"),root.style.setProperty("--pos-banner-fluid-2__logo-wrap-bottom","0"),root.style.setProperty("--pos-banner-fluid-2__logo-wrap-border-radius","80px 0 0 0"))}displayWindowSize();var resizeListener=window.addEventListener("resize",displayWindowSize);window.onunload=function(){window.removeEventListener("resize",resizeListener)}; `
    banner.appendChild(secondScript)
  }

}
</script>
<style scoped>
#pos-banner-lock{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;max-width:100%}#pos-banner-lock .pos-banner{position:relative;width:-webkit-min-content;width:-moz-min-content;width:min-content;max-width:100%;min-width:220px;font-family:ALS Ekibastuz,sans-serif;box-shadow:0 2px 10px 2px rgba(0,0,0,.25);box-sizing:border-box}#pos-banner-lock .pos-banner *{box-sizing:border-box}#pos-banner-lock .pos-banner__text{font-style:normal;font-weight:700;font-size:16px;line-height:21px;color:#0066b3}#pos-banner-lock .pos-banner__button-wrap{text-align:center}#pos-banner-lock .pos-banner .pos-banner-btn{width:190px;max-width:100%;padding:9px;border:none;outline:0;border-radius:4px;background:#0066b3;color:#fff;font-family:Helvetica Neue,sans-serif;font-style:normal;font-weight:500;font-size:16px;line-height:19px}#pos-banner-lock .pos-banner .pos-banner-btn:active,#pos-banner-lock .pos-banner .pos-banner-btn:focus,#pos-banner-lock .pos-banner .pos-banner-btn:hover{border:none;outline:0;cursor:pointer;background:#005ca1}#pos-banner-lock .pos-banner__hint-icon{position:absolute;top:16px;right:16px;display:flex;justify-content:center;align-items:center;width:22px;height:22px;background-color:#f5f5f5;text-align:center;font-family:Helvetica Neue,sans-serif;font-size:12px;font-weight:700;color:#3e3e3e;border:1px solid gray;border-radius:50%;cursor:pointer}#pos-banner-lock .pos-banner__hint-icon:hover~.pos-banner__hint-message{display:block;-webkit-animation:fadeInFromNone .5s ease-out;animation:fadeInFromNone .5s ease-out}#pos-banner-lock .pos-banner__hint-icon_center-right{top:initial;right:16px;bottom:16px;left:initial}#pos-banner-lock .pos-banner__hint-icon_center-right~.pos-banner__hint-message{top:100%;right:calc(16px - 3px);bottom:initial;left:initial}#pos-banner-lock .pos-banner__hint-icon_center-right~.pos-banner__hint-message:after{content:"";position:absolute;top:-5px;right:10px;bottom:initial;left:initial}#pos-banner-lock .pos-banner__hint-icon_center-left{top:initial;right:initial;bottom:16px;left:16px}#pos-banner-lock .pos-banner__hint-icon_center-left~.pos-banner__hint-message{top:100%;right:initial;bottom:initial;left:calc(16px - 3px)}#pos-banner-lock .pos-banner__hint-icon_center-left~.pos-banner__hint-message:after{content:"";position:absolute;top:-5px;right:initial;bottom:initial;left:10px}#pos-banner-lock .pos-banner__hint-icon_bottom-right{top:initial;right:16px;bottom:16px;left:initial}#pos-banner-lock .pos-banner__hint-icon_bottom-right~.pos-banner__hint-message{top:initial;right:calc(16px - 3px);bottom:calc(22px + 16px + 20px);left:initial}#pos-banner-lock .pos-banner__hint-icon_bottom-right~.pos-banner__hint-message:after{content:"";position:absolute;top:initial;right:10px;bottom:-5px;left:initial}#pos-banner-lock .pos-banner__hint-icon_bottom-left{top:initial;right:initial;bottom:16px;left:16px}#pos-banner-lock .pos-banner__hint-icon_bottom-left~.pos-banner__hint-message{top:initial;right:initial;bottom:calc(22px + 16px + 20px);left:calc(16px - 3px)}#pos-banner-lock .pos-banner__hint-icon_bottom-left~.pos-banner__hint-message:after{content:"";position:absolute;top:initial;right:initial;bottom:-5px;left:10px}#pos-banner-lock .pos-banner__hint-icon_top-left{top:16px;right:initial;bottom:initial;left:16px}#pos-banner-lock .pos-banner__hint-icon_top-left~.pos-banner__hint-message{top:calc(22px + 16px + 20px);right:initial;bottom:initial;left:calc(16px - 3px)}#pos-banner-lock .pos-banner__hint-icon_top-left~.pos-banner__hint-message:after{content:"";position:absolute;top:-5px;right:initial;bottom:initial;left:10px}#pos-banner-lock .pos-banner__hint-icon-symbol{background-color:transparent;font-size:14px;font-weight:400}#pos-banner-lock .
pos-banner__hint-message{position:absolute;top:calc(22px + 16px + 20px);right:calc(16px - 3px);display:none;width:85%;padding:10px;background-color:#fff;color:#3e3e3e;font-family:Arial,sans-serif;font-size:11px;font-weight:400;line-height:1.2;box-shadow:0 0 6px rgba(0,0,0,.2)}#pos-banner-lock .pos-banner__hint-message:after{content:"";position:absolute;top:-5px;right:10px;width:10px;height:10px;background:#fff;border-radius:1px;transform:matrix(-.7,-.8,.63,-.7,0,0)}@-webkit-keyframes fadeInFromNone{0%{display:none;opacity:0}1%{display:block;opacity:0}100%{display:block;opacity:1}}@keyframes fadeInFromNone{0%{display:none;opacity:0}1%{display:block;opacity:0}100%{display:block;opacity:1}}@font-face{font-family:"Als Ekibastuz Heavy";src:url('https://pos.gosuslugi.ru/bin/banner/als_ekibastuz_heavy-webfont.woff2') format("woff2"),url('https://pos.gosuslugi.ru/bin/banner/als_ekibastuz_heavy-webfont.woff') format("woff");font-weight:400;font-style:normal}
#pos-banner-lock .b2{display:grid;grid-template-columns:1fr;grid-template-rows:minmax(calc(284px - 92px - 75px),auto) 92px 75px;background:#fff}#pos-banner-lock .b2__content{position:relative;display:flex;align-items:flex-start;justify-content:space-between;padding:16px 16px 16px 16px}#pos-banner-lock .b2__logo{width:43px;margin-left:6px}#pos-banner-lock .b2__bg-wrap{width:100%;overflow:hidden}#pos-banner-lock .b2__bg{display:block;height:100%}#pos-banner-lock .b2__button-wrap{padding:18px 16px 16px 16px;text-align:center}
</style>
<style> @charset "UTF-8";#js-show-iframe-wrapper{position:relative;display:flex;align-items:center;justify-content:center;width:100%;min-width:293px;max-width:100%;background:linear-gradient(138.4deg,#38bafe 26.49%,#2d73bc 79.45%);color:#fff; cursor: pointer;}#js-show-iframe-wrapper .pos-banner-fluid *{box-sizing:border-box}#js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2{display:block;width:195px;min-height:56px;font-size:18px;line-height:24px;cursor:pointer;background:#0d4cd3;color:#fff;border:none;border-radius:8px;outline:0}#js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2:hover{background:#1d5deb}#js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2:focus{background:#2a63ad}#js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2:active{background:#2a63ad}@-webkit-keyframes fadeInFromNone{0%{display:none;opacity:0}1%{display:block;opacity:0}100%{display:block;opacity:1}}@keyframes fadeInFromNone{0%{display:none;opacity:0}1%{display:block;opacity:0}100%{display:block;opacity:1}}@font-face{font-family:LatoWebLight;src:url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Light.woff2) format("woff2"),url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Light.woff) format("woff"),url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Light.ttf) format("truetype");font-style:normal;font-weight:400;text-rendering:optimizeLegibility}@font-face{font-family:LatoWeb;src:url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Regular.woff2) format("woff2"),url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Regular.woff) format("woff"),url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Regular.ttf) format("truetype");font-style:normal;font-weight:400;text-rendering:optimizeLegibility}@font-face{font-family:LatoWebBold;src:url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Bold.woff2) format("woff2"),url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Bold.woff) format("woff"),url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Bold.ttf) format("truetype");font-style:normal;font-weight:400;text-rendering:optimizeLegibility} </style> <style> #js-show-iframe-wrapper .bf-2{position:relative;display:grid;grid-template-columns:var(--pos-banner-fluid-2__grid-template-columns);grid-template-rows:var(--pos-banner-fluid-2__grid-template-rows);width:100%;max-width:1060px;font-family:LatoWeb,sans-serif;box-sizing:border-box}#js-show-iframe-wrapper .bf-2__decor{grid-column:var(--pos-banner-fluid-2__decor-grid-column);grid-row:var(--pos-banner-fluid-2__decor-grid-row);padding:var(--pos-banner-fluid-2__decor-padding);background:var(--pos-banner-fluid-2__bg-url) var(--pos-banner-fluid-2__bg-position) no-repeat;background-size:var(--pos-banner-fluid-2__bg-size)}#js-show-iframe-wrapper .bf-2__logo-wrap{position:absolute;top:var(--pos-banner-fluid-2__logo-wrap-top);bottom:var(--pos-banner-fluid-2__logo-wrap-bottom);right:0;display:flex;flex-direction:column;align-items:flex-end;padding:var(--pos-banner-fluid-2__logo-wrap-padding);background:#2d73bc;border-radius:var(--pos-banner-fluid-2__logo-wrap-border-radius)}#js-show-iframe-wrapper .bf-2__logo{width:128px}#js-show-iframe-wrapper .bf-2__slogan{font-family:LatoWebBold,sans-serif;font-size:var(--pos-banner-fluid-2__slogan-font-size);line-height:var(--pos-banner-fluid-2__slogan-line-height)}#js-show-iframe-wrapper .bf-2__content{padding:var(--pos-banner-fluid-2__content-padding)}#js-show-iframe-wrapper .bf-2__description{display:flex;flex-direction:column;margin-bottom:24px}#js-show-iframe-wrapper .bf-2__text{margin-bottom:12px;font-size:24px;line-height:32px;font-family:LatoWebBold,sans-serif}#js-show-iframe-wrapper .bf-2__text_small{margin-bottom:0;font-size:16px;line-height:24px;font-family:LatoWeb,sans-serif}#js-show-iframe-wrapper .


bf-2__btn-wrap{display:flex;align-items:center;justify-content:center} </style >