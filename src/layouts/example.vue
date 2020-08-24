<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
        <q-toolbar class="header"  >
        <q-tabs
        
        dense
        indicator-color="blue-7"
        class='q-tabs'
        active-color='light-blue-13'
        >
  <router-link to = '/' style="align-self:flex-end;">
  <button class="btn" > 
    <div class="img">
    <img src="logo.png">
    </div>
     <div style="display:flex;flex-direction:column;">
       <span class="investition"> Инвестиционный портал  </span> <span class="lipetsk">Липецкой области </span></div>
       </button>
  </router-link>
      <q-space/>

      <q-route-tab
    label="Регион"
    no-caps
    class='route'
    dense
    to="/region"
    exact
  />
        <q-route-tab
    label="Площадки"
    no-caps
    to="/square"
    class='route'
    exact
  /> 
    <q-route-tab
    label="Господдержка"
    no-caps
    to="/support"
    class='route'
    exact  
  />
  <q-route-tab
    label="Проекты"
    class='route'
    no-caps
    to="/project"
    dense
    exact
  />
  <q-route-tab
    dense
    :to="{name:'news'}"
    class='route'
    label='Новости'
    no-caps=""
    exact
  />
    <q-route-tab
    dense
    class='route'
    label="Документы"
    no-caps
    to="/documents"
    exact
  />

  <q-route-tab
    class='route'
    label="Контакты"
    no-caps
    to="/contacts"
    exact
  />



 

</q-tabs>
        </q-toolbar>

    </q-header>

    <!-- (Optional) The Footer -->


    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer
      v-model="leftDrawer"
      side="left"
      bordered
      content-class="bg-grey-2"
    >
      <!-- QScrollArea is optional -->
      <q-scroll-area class="fit q-pa-sm">
        
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',

  data () {
    return {
      leftDrawer: false
    }
  }
}
</script>
<style scoped>
  @media screen and (max-width: 900px) {
.header{
  display: none!important;
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
.mobile{
  display: flex!important;
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
.header{
  font-size: 1em;
  position: relative;
  width:100%;
  height:5vh;
  color:white;
  display: flex;
  z-index: 1;
  background: #262626;
}
.img{
  padding-right: 0.2vw;
  margin-right: 0.2vw;
  width: 10%;
}
.img img{
  width: 100%;
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
  justify-content: space-between!important;
}
.investition{
  text-transform: uppercase;
  font-size: 0.8rem;
  line-height: 100%;
  letter-spacing: 0.02vw;
  font-weight: 600;
}
.lipetsk{
  font-weight: 100;
}
.route{
  padding:0;
  margin:0;
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
@font-face {
  font-family: "Montserrat";
  src: url("../css/fonts/Montserrat/Montserrat-Regular.woff") format("woff");
}
*{
  font-family: 'Montserrat'!important;
}
/* .q-router-link--active{
  color: #52A4DF;
  border-bottom: 2px solid #52A4DF;
} */
</style>