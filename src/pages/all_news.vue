<template>
    <q-page class="news">

    <q-scroll-area
      style="height:93vh; max-width: 100%;"
    :thumb-style="thumbStyle"
    >

     <div class="wrapper">
         <h4> Новости </h4>
         <div class="items">


     
       <div class = "item2" v-for ='item in news.results'>  
  
          <router-link :to="{name: 'detail', params: { id: item.id}}" class="rout"> 
                
                      <q-card class="image2">
      <q-img
        :src="item.image"
        style="height:100%"
        spinner-color="white"
      >
     
        <div class="absolute-bottom text-subtitle2 text-center">
         {{item.title}}
         
        </div>
      </q-img>
    </q-card>
   
                  </router-link>
    
     
        </div>
      </div>
         </div>
      <div class="q-pa-lg flex flex-center">

        <q-pagination
      v-model="page"
      color="blue-6"
      style="margin-top:5%"
      :max="Math.ceil(news.count/12)"
      :max-pages="5"
      :boundary-numbers="true"
      @click="getPaginationNews"
    >
    </q-pagination>
  </div>

    </q-scroll-area>
    </q-page>
</template>
<style scoped>
  @media screen and (max-width: 800px) {
    .items{
      flex-direction: column!important;
    }
    .item2{
      width: 100%!important;
      margin-left: 0!important;
      margin-bottom: 2%!important;
    }
    .item2 a{
      font-size: 3.5vw!important;
    }
  }

*{
  font-family: 'Montserrat';
}
.items{
    display:flex;
    flex-wrap: wrap;
    flex-direction: row;
    height:100%;
}
.news_image{
    width:100%;
    height:100%;
    padding-bottom: 2vh;
}
.title{
  bottom:55%;
  margin-left: 2%;
  position: absolute;
}

.news_image img{
    height:100%;
    width:100%;
}
.item2{
  border-radius: 5px;
  cursor:pointer;
  margin:1%;
  width:22.3%;

}
.item2 a {
    color:white;
    text-decoration: none;
    font-size: 1vw;
    height:100%;
    width:100%;
}
.image2{
  border-radius: 5px;
  height:20vh;
  position: relative;
  width:100%;
}
.dark{
  border-radius: 5px;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  height:100%;
  width:100%;
  z-index: 0;
}
.dark:hover{
  background:rgba(255, 255, 255, 0);
}
.image2 img{
  border-radius: 5px;
  width:100%;
  height:100%;
}
.news{
    height: 100%;
    background: #3A4566;
}

.wrapper{

    width:90%;
    height:100%;
    margin: auto;
    display:flex;
    flex-direction: column;
}
.wrapper h4{
    align-self: center;
    color:white;
    font-weight: 600;
}
.bottom{
    width:70%;
    margin:0 auto;
    color:white;
    font-size: 0.8vw;
    padding-bottom: 4vh;
}
.arrow{
    margin:0;
    width: 10%;
}
.all_news{
    align-items: center;
   
    display: flex;
    width:20%;
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
.virtual_scroll{
  width:100%;
  background:none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  border:1px solid red;
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
.q-pa-lg{
  margin:0;

}
.q-pagination{
  margin-top: 0!important;
}
</style>
<script>

import headerVue from "../components/header.vue";
import formsVue from "../components/forms.vue";
export default {
  preFetch({store}){
  
   return store.dispatch('lastNews/getAllNews')
  },
    data(){
        return {
        items: 3,
        size: 0,
        page:1,
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
        headerVue, formsVue,
        
    },

  
    methods:{
      getPaginationNews(){
        
      
        this.$router.push({name:'news', params:{id:this.page}})
        let url = 'https://backendinvest.admlr.lipetsk.ru/all_news/'
        let paginationUrl = ''
        if(this.page != 1){
         paginationUrl = `${url}?offset=${(this.page-1)*12}`
         url = paginationUrl 
        }
         fetch(url)
        .then((response) => response.json())
        .then((data) => {
      this.news = data})
      }
    },

    computed:{
        allnews(){
          return this.$store.state.lastNews.all_news
        }
    },
    created(){
      this.news = this.allnews
    },
 mounted(){
    return this.$emit('disableLoading', false)
  },
  destroyed(){
    return this.$emit('disableLoading', true)
  }
}
</script>