<template>
  <q-page class="page">
      <h5 class="document_title">Документы</h5>
      <div class="row">
 <q-tabs
    v-model="tab"
    ertical
    no-caps
    class="left_menu"
    indicator-color="transparent">
          <div class="column ul">
        <q-route-tab :to="{name:'doc', params:{slug:item.slug}}" :label="item.name"  v-for="(item, index) in docs.section" :key="index" :name="item.slug"/>
          </div>
       </q-tabs>
   <q-tab-panels
     v-model="tab"
     animated
     class="fit"
     swipeable
     vertical
     transition-prev="jump-up"
     transition-next="jump-up"
    >
    <q-tab-panel  v-for="(section, ix) in docs.section" :key="ix" class="content" :name="section.slug">
           <section-vue  :section="section" :docs="docs"/>
         </q-tab-panel>
      </q-tab-panels> 
      </div>
  </q-page>
</template>
<script>
import { route } from 'quasar/wrappers';
import sectionVue from 'pages/section.vue';
export default {
  components:{
    sectionVue
  },
   preFetch($route){
      function getAccess(){
        return new Promise((resolve, reject) => { 
        const get = $route.store.dispatch('docs/getDocs')
        resolve(get)
      })
      }
      const promice = getAccess().then(()=>{
        return new Promise((resolve,reject) => {
          const access = $route.store.dispatch('docs/getAccess', $route.currentRoute.params.slug)
          resolve(access)
        })
      })
      const promice2 = promice.then(()=>{
        return new Promise((resolve,reject)=>{
          if ($route.store.state.docs.access){
            // $route.redirect({path:'404/'})
             resolve()
          }
        })
      })
      return promice2
    
  
     
 },
  data(){
    return{
      tab:this.$route.params.slug,
      docs:{}
    }
  },
    mounted() {
    return this.$emit("disableLoading", false);
  },
  beforeMount(){
    this.docs = this.documents
    
    if (this.$route.params.slug == undefined){
      this.$router.push({name:'doc', params:{slug:this.$store.state.docs.data.section[0].slug}})
      this.tab = this.$store.state.docs.data.section[0]
    }
  },
  created(){
  },
  destroyed() {
    return this.$emit("disableLoading", true);
  },
    computed:{
      documents(){
      return this.$store.state.docs.data
    }
  },
}

</script>
<style scoped>
* {
  font-family: "Montserrat";
}
.content{
  width: 100%;
  padding:0 2vw;

}
.row{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.subsection{
  margin-top:2vh;
  background:#e5e5e5;
   border: 1px solid rgba(31, 37, 55, 0.7);
   border-radius: 4px;
}
.document_title{
  font-weight: 600;
}
.file_string{
  font-size: 0.8vw;
  font-weight: 400;
  padding: 1vh;
  color:#0a79c9;
  text-decoration: none;
  display: flex;
  align-items: flex-start;
}
.q-tab--active{
  background:#28a5ff;
  color:white;
}
.left_menu{
  display: flex;
  flex-direction: column;
  text-transform: none;
  height: 40%;
}
.ul{
background: #f0f0f0;
display: flex;
flex-direction: column;
height: 100%;
}
.q-tabs__content{
  display:flex;
  flex-direction: column;
}
.page{
  width:75%;
  margin:auto;
}
.q-tab{
   justify-content: flex-start;
    padding-left: 1vw;
    padding-right: 1vw;
    text-align: left;
}
</style>