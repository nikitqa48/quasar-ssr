<template>
<q-page class="wrapper">
<q-scroll-area
      style="height:93vh; max-width: 100%;"
      :thumb-style="thumbStyle"
    >
    
    <div>

     
    <div class="container">
        <h4> Контакты </h4>
        <div class="tab">
        <q-tabs
          v-model="tab"
          dense
          class="q-tab"
      
          active-color="light-blue-14"
          indicator-color="light-blue-14"
          align="left"
          
        >
          <q-tab name="Руководство"   no-caps >  <span class='tab'> Руководство </span> </q-tab>
          <q-tab name="Агентство"    no-caps > <span class="tab"> Агентство </span> </q-tab>
 
        </q-tabs>
        </div>
        <q-tab-panels v-model="tab" >
          <q-tab-panel name="Руководство" >
                     <div class="items_wrap" v-for="item in contact.leader">
   <div class="wrap">
    <span class = 'text'> {{item.position}}</span>
    <div class="border"> </div>
    <div class="parent">
    <div class="image">
          <q-img
      :src="item.image"
      spinner-color="white"
 
    />
 
        <!-- <img :src="item.image"> -->
    </div>
    <div class="mobile">
     <div class="inside_parent">
        <span class="fio">
            Ф.И.О
        </span>
        <span class="name">
           {{item.name}}
        </span>
    </div>
         <div class="inside_parent">
        <span class="fio">
            Телефон
        </span>
        <span class="name">
            {{item.phone}}
        </span>
    </div>
             <!-- <div class="inside_parent">
        <span class="fio">
            Должность
        </span>
        <span class="name">
            {{item.position}}
        </span>
    </div> -->
                 <div class="inside_parent">
        <span class="fio">
            E-mail
        </span>
        <span class="name">
          {{item.email}}
        </span>
    </div>
    </div>
    </div>
   </div>
             </div>
          </q-tab-panel>

          <q-tab-panel name="Агентство"  class="text-black">
                              <div class="items_wrap" v-for="item in contact.agent">
   <div class="wrap">
    <span class = 'text'> {{item.position}}</span>
    <div class="border"> </div>
    
    <div class="parent">
    <div class="image">

   
     <img :src="item.image"> 
    </div>
    <div class="mobile">
     <div class="inside_parent">
        <span class="fio">
            Ф.И.О
        </span>
        <span class="name">
           {{item.name}}
        </span>
    </div>
         <div class="inside_parent">
        <span class="fio">
            Телефон
        </span>
        <span class="name">
            {{item.phone}}
        </span>
    </div>
             <!-- <div class="inside_parent">
        <span class="fio">
            Должность
        </span>
        <span class="name">
            {{item.position}}
        </span>
    </div> -->
                 <div class="inside_parent">
        <span class="fio">
            E-mail
        </span>
        <span class="name">
          {{item.email}}
        </span>
    </div>
    </div>
    </div>
   </div>
             </div>
          
          </q-tab-panel>

          <q-tab-panel name="movies"  class="text-black">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
    


             

             
             <!-- <div class="perekrestok">
   <div class="wrap">
    <span class = 'text'> Заместитель</span>
    <div class="border"> </div>
    <div class="parent">
    <div class="photo">
        <img src="/statics/image/OEZ.png">
    </div>
     <div class="inside_parent">
        <span class="fio">
            Ф.И.О
        </span>
        <span class="name">
            Имя Фамилия
        </span>
    </div>
         <div class="inside_parent">
        <span class="fio">
            Телефон
        </span>
        <span class="name">
            (4742) 22-84-45 
        </span>
    </div>
             <div class="inside_parent">
        <span class="fio">
            Должность
        </span>
        <span class="name">
            Начальник управления
        </span>
    </div>
                 <div class="inside_parent">
        <span class="fio">
            E-mail
        </span>
        <span class="name">
            ugskr@admlr.lipetsk.ru *
        </span>
    </div>
    </div>
   </div>
             </div> -->
             <!-- <div class="perekrestok">
   <div class="wrap">
    <span class = 'text'> Заместитель</span>
    <div class="border"> </div>
    <div class="parent">
    <div class="photo">
        <img src="/statics/image/OEZ.png">
    </div>
     <div class="inside_parent">
        <span class="fio">
            Ф.И.О
        </span>
        <span class="name">
            Имя Фамилия
        </span>
    </div>
         <div class="inside_parent">
        <span class="fio">
            Телефон
        </span>
        <span class="name">
            (4742) 22-84-45 
        </span>
    </div>
             <div class="inside_parent">
        <span class="fio">
            Должность
        </span>
        <span class="name">
            Начальник управления
        </span>
    </div>
                 <div class="inside_parent">
        <span class="fio">
            E-mail
        </span>
        <span class="name">
            ugskr@admlr.lipetsk.ru *
        </span>
    </div>
    </div>
   </div>
             </div> -->
             <!-- <div class="perekrestok">
   <div class="wrap">
    <span class = 'text'> Заместитель</span>
    <div class="border"> </div>
    <div class="parent">
    <div class="photo">
        <img src="/statics/image/OEZ.png">
    </div>
     <div class="inside_parent">
        <span class="fio">
            Ф.И.О
        </span>
        <span class="name">
            Имя Фамилия
        </span>
    </div>
         <div class="inside_parent">
        <span class="fio">
            Телефон
        </span>
        <span class="name">
            (4742) 22-84-45 
        </span>
    </div>
             <div class="inside_parent">
        <span class="fio">
            Должность
        </span>
        <span class="name">
            Начальник управления
        </span>
    </div>
                 <div class="inside_parent">
        <span class="fio">
            E-mail
        </span>
        <span class="name">
            ugskr@admlr.lipetsk.ru *
        </span>
    </div>
    </div>
   </div>
             </div> -->
    </div>

 
  </div>
    
    </q-scroll-area>
</q-page>
                 

              








</template>
<style scoped>
.button {
  border: 1px solid white;
  border-radius: 15px;
}
.border{
    width:100%;
    border-bottom: 1px solid white;
}
.mobile{
  display: flex;
  width: 100%;
}
.image{
    margin-top: 1vh;
    border-radius: 5px;
    min-width: 13%;
    max-width: 13%;
}
.photo{
    margin-top: 1vh;
    border-radius: 5px;
    width:6%;
}
.photo img{
    width:100%;
    border-radius: 5px;
    height: 100%;
}
.fio{
    font-size: 1vw;
    color:#56718A;
}
.name{
    color:white;
    opacity:.8; 
    font-size: 1vw;
}

.inside_parent{
    display: flex;
    flex-direction: column;
    width:30%;
    margin-left: 1.2vw;
    margin-top: 2vh;
    padding-bottom: 3vh;
}


.image img{
    width:100%;
    border-radius: 5px;
    height: 100%;
}
body a{
  color:white;
  text-decoration: none;
  margin:0;
  padding:0;
}
.parent{
    display:flex;
    width:100%;
    flex-direction: row;
    justify-content: space-between;
}
.but{
  align-self: flex-end;
  margin-right: 15%;
}
.wrapper{
  display:flex;
  margin-right: 10%;
 
 
  flex-direction: column;
}
.item_name{
  padding-left: 1vw;
  padding-top: 2vh;
  font-size: 1vw;
}

.grey{
  color:#56718A;
  margin: 2vh;
  font-size: 0.8vw;
}
.myclass{
  border:1px solid red;
}
.poluch{
  color:#C9C9C9;
  font-size: 0.8vw;
  margin: 2vh;
}
.text{
    font-weight: 600;
    margin-top: 2.2vh;
  font-size: 1.1vw;
  letter-spacing: 0.02vw;
  opacity:.8;
}
.items{
  display: flex;
  flex-direction: column;
}
.border{
  margin-top: 1vh;
  opacity:.5;
  margin-bottom: 0.12vh;
  border-bottom:1px solid #3D455B;
}
.more{
  border:none;
  outline: none;
  cursor: pointer;
  background:#52A4DF;
  align-self: flex-end;
  color:white;
  font-size: 0.8vw;
  border-radius: 5px;
  margin-right: 2%;
  height:3.5vh;
  width:6vw;
}
.item{
  background:rgba(35, 46, 75, 0.7);
  display: flex;
  padding-top: 2vh;
  margin-top: 5vh;
  flex-direction: column;
  width:100%;
  margin-bottom: 2vh;
 
}
.items_wrap{
background:rgba(35, 46, 75, 0.7);
padding-bottom: 2vh;
margin-top: 1vh;
margin-bottom: 0.5vh;
  align-self: center;
  display: flex;
  flex-direction: row;
  min-width:100%;
  justify-content: space-between;

}

.left {
  border-right: 1px solid rgba(255, 255, 255, 0.6);
  width: 50%;
  justify-content: flex-end;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
}
.wrap{
  padding-left: 0.5vw;
  display:flex;
  font-size: 0.8vw;
  width:100%;
  flex-direction: column;
}
.wrap select {
  margin-top: 0.3vh;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: url("/statics/image/select.png");
  background-repeat: no-repeat;
  background-position-x: 98%;
  background-position-y: 50%;
  background-size: 2vh;
  color: white;
  border: 1px solid #dfdfdf;
  min-height: 3vh;
  width:100%;
  outline: none;
  border-radius: 5px;
  padding-right: 2vw;
  padding-left: 2%;
}

.wrap select option{
  color:black;
}
.select-selected{
  color:white;
}
.select-selected:after{
  color:white;
}

.blue_container{
  width:100%;
  height:10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.sposob{
  display:flex;
  flex-direction: row;
}
.title {
  font-size: 4.5vw;
  letter-spacing: 0.01vw;
  font-weight: 600;
  margin-left: 2%;
}
.wrapper {
  width: 100%;
    background: #3A4566;;
  display: flex;
}
.left_content {
  margin-top: 5%;
  margin-right: 5%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
}
.container {
  display: flex;
  flex-direction: column;
  width: 83%;
  margin:0 auto;
  color: white;
}
.container h4{

    font-size: 2.25vw;
    letter-spacing: 0.1vw;
    margin-bottom: 4vh;
    font-weight: 600;
}

.container li {
  cursor: pointer;
  font-size: 0.8vw;
  width: 30%;
  list-style: none;
}
.container_image {
  margin-left: 5%;
  height: 10vh;
}
.container_image img {
  height: 100%;
}
.q-tab{
  padding: 0;
  background: none;
  color:white;

  margin-right: 1%;
}
.q-tab-panels{
  background: none;
}
.q-tab-panel {
  padding:0;
}
.text{
  color:white;
}
.tab{
 padding:0;
 font-weight: 600;
 letter-spacing: 0.02vw;
}

*{
  font-family: 'Montserrat';
}
@media screen and (max-width: 900px) {
.container{
  width:95%!important;
}
.mobile{
  margin-left: 2%;
  flex-direction: column;
}
.inside_parent{
  width:auto!important;
  margin-top: 0!important;
  margin-bottom: 2vh!important;
  padding-bottom: 0!important;
}
.container h4{
  margin-bottom: 0!important;
  font-size: 5vw!important;
}
.text{
  padding-left: 2vw;
  padding-right: 2vw;
  font-size: 3.5vw!important;
}
.border{
  border:none!important;
}
.fio{
 
  font-size: 3vw!important;
}
.name{
  font-size: 3vw!important;
}
.image{
  max-width:40%!important;
}
}
</style>


<script>
import headerVue from "../components/header.vue";
import formsVue from "components/forms.vue";
import {mapState, mapGetters} from 'vuex'
  export default {
    preFetch({store}){
        return store.dispatch('contacts/getConctact')
    },
    components: {
      formsVue
    },
    data(){
      return{
        
        contact:{},
          thumbStyle: {
        right: '2px',
        borderRadius: '5px',
        width: '10px',
        opacity: 0.5
      },
      tab:'Руководство',
      
      }
    },
      computed:{
        getContact(){
          return this.contact = this.$store.state.contacts.team
        }
      },
        created(){
    this.contact = this.getContact
    
  },
  mounted(){
    return this.$emit('disableLoading', false)
  },
  destroyed(){
    return this.$emit('disableLoading', true)
  }

  }
</script>
