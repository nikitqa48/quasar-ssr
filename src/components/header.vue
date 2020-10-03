<template>
<div class="wrap_header">

        <q-toolbar class='deckstop'  >
      <!-- <q-btn align="between" flat class="btn-fixed-width" color="white" label="Главная страница"  no-wrap  no-caps icon= 'img:statics/icons/logo.png'  to="/"/>
      <q-space />
    

 <div style="display:flex;">
   <q-item  class="header_button" clickable v-ripple to ='/square' stretch flat >Площадки </q-item>
      <q-item  class="header_button" clickable v-ripple="{color:'blue-6'}" to ='/state'   >Господдержка </q-item>
    
       
   <q-item  class="header_button" clickable v-ripple to ='/project' stretch flat >Проекты </q-item>
      <q-item  class="header_button" clickable v-ripple to ='/news' stretch flat >Новости </q-item>
       <q-item  class="header_button" clickable v-ripple to ='/documents' stretch flat >Документы </q-item>
         <q-item  class="header_button" clickable v-ripple to ='/contacts' stretch flat >Контакты </q-item>
        </div> -->
        <q-tabs
        indicator-color="blue-7"
        class='q-tabs my-tabs'
        active-color='blue
'
        >
            <!-- <q-route-tab
  flat class="btn-fixed-width" color="white"   no-wrap  no-caps icon= 'img:statics/icons/logo.png' 
    label="Главная страница"
    no-caps
    to="/example/head"
    exact
  /> -->
  <!-- <q-btn align="between" flat class="btn-fixed-width" color="white" style="width:15%;"
    no-caps icon= 'img:statics/icons/logo.png'  to="/example/head">
  <span> Инвестиционный портал Липецкой области </span>
  </q-btn> -->
  
  <router-link to = '/' style="align-self:center;">
  <button class="btn" > 
    <div class="img">
    <img src="icons/full_logo.png">
    </div>
     <div style="display:flex;flex-direction:column; padding-left:0.5vw;">
       <span class="investition"> Инвестиционный портал  </span> <span class="lipetsk">Липецкой области </span></div>
       </button>
  </router-link>
      <q-space/>
<!-- <div class="space">
  
            <q-item   clickable v-ripple to ='/region'  class='button' stretch flat >Регион </q-item>
              <q-item   class='button' clickable v-ripple to ='/square' stretch flat >Площадки </q-item>
           
              <q-item   class='button'  clickable v-ripple="{color:'blue-6'}" to ='/support'   >Господдержка </q-item>
    
             <q-item   class='button' clickable v-ripple to ='/project' stretch flat >Проекты </q-item>
           
            <q-item  class='button' clickable v-ripple to ='/news' stretch flat >Новости </q-item>
             <q-item  class='button'  clickable v-ripple to ='/event' stretch flat >События </q-item>
                  <q-item   class='button'  clickable v-ripple to ='/documents' stretch flat >Документы </q-item>
        
        
                            <q-item  class='button'  clickable v-ripple to ='/contacts' stretch flat >Контакты </q-item> -->

      <!-- <q-btn
    
    label="Регион"
    class="route"
    no-caps
    to="/region"
  
  />
        <q-btn
    label="Площадки"
    class="route"
    no-caps
    to="/square"
    exact
  /> 
    <q-btn
    class="route"
    label="Господдержка"
    no-caps
    to="/support"
    exact  
  />
  <q-btn
  class="route"
    label="Проекты"
    no-caps
    to="/project"
    exact
  />
  <q-btn
  class="route"
    :to="{name:'news'}"
    label='Новости'
    no-caps=""
    exact
  />
    <q-btn
    class="route"
    label="Документы"
    no-caps
    to="/documents"
    exact
  />
  <q-btn
    class="route"
    label="Контакты"
    no-caps
    to="/contacts"
    exact
  /> -->

<!-- </div> -->

 

</q-tabs>
        </q-toolbar>
       
      <div class="mobile">
        <q-toolbar  class="moble_header bg-grey-10" >
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" color="white"/>
          <q-btn flat  dense icon="img:logo.png"  label="Инвест. Липецк" to="/" no-caps color="white"/> 
        </q-toolbar>
      <q-menu
      max-height="100vh"
      max-width="300px"
      square
      no-parent-event
      v-model="drawer"
      auto-close
        :content-style="{ background: 'rgba(31, 37, 55, 0.9)', color:'#FFFFFF', position:'fixed', height:'100%' }"
        transition-show="slide-right"
        transition-hide="slide-left"
      >
 <q-list style="width: 70vw; height:100%;"  >
            <q-item   clickable v-ripple to ='/square' stretch flat >Площадки </q-item>
           
              <q-item   clickable v-ripple="{color:'blue-6'}" to ='/support'   >Господдержка </q-item>
    
             <q-item  clickable v-ripple to ='/project' stretch flat >Проекты </q-item>
           
            <q-item  clickable v-ripple to ='/news' stretch flat >Новости </q-item>
                  <q-item   clickable v-ripple to ='/documents' stretch flat >Документы </q-item>
        
                            <q-item   clickable v-ripple to ='/contacts' stretch flat >Контакты </q-item>
          </q-list>
      </q-menu>
    

  </div>
</div>
</template>
<script>

export default {
    data(){
      return{
        drawerRight:false,
        drawerLeft:false,
        drawer:false
      }
    }
}
</script>
<style scoped>

  @media screen and (max-width: 900px) {
.header{
  display: none!important;
}
.deckstop{
  display:none;
}
.mobile{
  height: 100%;
  width: 100%;
}

.wrap_header{
  /* position: fixed; */
  width: 100%;
  z-index: 100;
 
}
.button{
  display:flex;
  height: 100%;
  align-items:center;
}
.mobile{
  
  /* display: flex!important; */
  display:none!important;
}
.moble_header{
  display: flex!important;
 
  justify-content: space-between;
  z-index: 10;
}
.menu{
  display: flex;
  justify-content: space-between;
}
   }

.img{
  padding-right: 0.2vw;
  margin-right: 0.2vw;
  width:2.7vw;
  height:100%;
  /* position: absolute; */
}

.img img{
  width: 100%;
  height:100%;
}
.moble_header{
  display: none;
}

.mobile{
  display: none;
}
.invest{
  margin-left: 3%;
  font-size: 0.8vw;
}
.space{
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}
.space a{
  height: 100%;
  display: flex;
  letter-spacing:0.05vw;
  align-items: center;
}
.header_button{
  font-size: 0.8vw;
  padding-bottom: 1%;
  height: 100%;
  display: flex;
  align-items: center;
}
.q-tabs{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between!important;
}
.investition{
  text-transform: uppercase;
  font-size: 0.8rem;
  line-height: 100%;
  letter-spacing: 0.03vw;
  font-weight: 600;
}
.lipetsk{
  font-weight: 100;
}
.btn{
  display: flex;
  align-self: flex-end;
  background:none;
  text-align: left;
  outline: none;
  border:none;
  cursor: pointer;
  color:white;
  align-items: center;
}
body a{

 text-decoration: none;
}
.route{
  margin:0;
  }
 /* .deckstop{ 

  margin:auto;
}  */
@font-face {
  font-family: "Montserrat";
  src: url("../css/fonts/Montserrat/Montserrat-Regular.woff") format("woff");
}
*{
  font-family: 'Montserrat'!important;
}
.wrap_header{
  width:95%;
  margin: auto;
}

.q-router-link--active{
  color: #52A4DF;
  font-weight: 600;
  border-bottom: 3px solid #52A4DF;
}
</style>