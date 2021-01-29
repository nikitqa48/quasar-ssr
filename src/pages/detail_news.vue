<template>
    <q-page class="news">
        <q-scroll-area
      style="height:90vh; max-width: 100%;"
      :thumb-style="thumbStyle"
    >
     <div class="wrapper">
         <div class="top">
             
             <div class="all_news">
                 <router-link :to="{name: 'news' }" class="rout"> 
                 <q-btn color="primary" flat icon="keyboard_backspace"  label="Все новости" no-caps />
                      </router-link>    
             </div>
                 
             <h5 v-if="news.translations[$i18n.locale]"  >{{news.translations[$i18n.locale].title}}</h5>
             <div class="news_image">
                 <img :src="news.image">
             </div>
         </div>
         <div class='bottom' v-if="news.translations[$i18n.locale]" >
             <span v-html="news.translations[$i18n.locale].body">{{news.translations[$i18n.locale].body}}</span>
    </div>
     </div>
     </q-scroll-area>
    </q-page>
</template>
<style scoped>
  @media screen and (max-width: 800px) {

   .all_news{
       margin-top: 1vh;
   }
   .all_news__text{
       font-size: 2vw!important;
   }
   .top{
       width: 95%!important;
   }
   .top h5{
       font-size: 4vw!important;
       line-height: 150%!important;
   }
   .bottom{
       width: 95%!important;
       font-size: 3.5vw!important;
       opacity: .8;
   }
    }

*{
  font-family: 'Montserrat';
}
.news_image{
    width:100%;
    height:100%;
    padding-bottom: 2vh;
}
body a{
    text-decoration: none;
}
.news_image img{
    height:100%;
    width:100%;
}
.news{
    /* min-height:100vh;
     background: linear-gradient(180deg, #202F40 0%, #0D0D1C 100%);  */
}

.wrapper{
    padding-top: 2%;
    width:100%;
    height:100%;
    margin: auto;
    display:flex;
    flex-direction: column;
}
.bottom{
    width:45%;
    margin:0 auto;
    line-height: 130%;
    color:rgba(0,0,0,1);
    font-size: 0.8vw;
    padding-bottom: 4vh;
}
.arrow{
    margin:0;
    width: 10%;
}
body a{
   
}
.all_news{
    align-items: center;
    display: flex;
    
    }
.arrow img{
    width:100%;
}
.top{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width:60%;
}
.top h5 {
    margin-top: 1.2vh;
    margin-bottom: 2vh;
    color:black;
    font-weight: 600;
    font-size: 1.1vw;
}
.all_news__text{
    font-size: 0.8vw;
    margin-left:0.5vw;
    color:#808080;
}
</style>
<script>
import headerVue from "../components/header.vue";
import Vue from 'vue';

export default {
     preFetch($route){
   const url = `https://backendinvest.admlr.lipetsk.ru/support/detail/${$route.currentRoute.params.id}?format=json`
   return $route.store.dispatch('lastNews/getDetailNews', $route.currentRoute.params.id)
 },
    data(){
        return {
        //   news:{},  
                thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75
      },
        }
    },
    components:{
        headerVue
    },
    mounted() {
    const url = "http://127.0.0.1:8000/news/detail/"+this.$route.params.id+'?format=json';
    fetch(url)
      .then(response => response.json())
      .then(data => (this.news = data));
     this.$emit('disableLoading', false)
    },
  destroyed(){
    return this.$emit('disableLoading', true)
  },
    computed:{
    news(){
      return this.$store.state.lastNews.all_news

    }
  },
}
</script>