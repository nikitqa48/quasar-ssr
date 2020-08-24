<template>
    <q-page class="news">
        <q-scroll-area
      style="height:93vh; max-width: 100%;"
      :thumb-style="thumbStyle"
    >
     <div class="wrapper">
         <div class="top">
             
             <div class="all_news">
                 <router-link :to="{name: 'news' }" class="rout"> 
                 <q-btn color="white" flat icon="keyboard_backspace"  label="Все новости" no-caps />
                      </router-link>    
             </div>
                 
             <h5>{{news.title}}</h5>
             <div class="news_image">
                 <img :src="news.image">
             </div>
         </div>
         <div class='bottom' >
             <span v-html="news.body">{{news.body}}</span>
    </div>
     </div>
     </q-scroll-area>
    </q-page>
</template>
<style scoped>
  @media screen and (max-width: 800px) {
   .wrapper{
       padding-top: 8vh!important;
   }
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
    min-height:100vh;
     background: linear-gradient(180deg, #202F40 0%, #0D0D1C 100%); 
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
    width:70%;
    margin:0 auto;
    line-height: 130%;
    color:white;
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
    width:40%;
}
.top h5 {
    margin-top: 1.2vh;
    margin-bottom: 2vh;
    color:white;
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
    data(){
        return {
          news:{},  
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
    const url = "https://backendinvest.admlr.lipetsk.ru/news/detail/"+this.$route.params.id+'?format=json';
    fetch(url)
      .then(response => response.json())
      .then(data => (this.news = data));
     this.$emit('disableLoading', false)
    },
  destroyed(){
    return this.$emit('disableLoading', true)
  }
}
</script>