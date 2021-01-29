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
        <q-tab :name="item.name" :label="item.name"  v-for="(item, index) in docs.section" :key="index"/>
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
    <q-tab-panel :name="section.name" v-for="(section, ix) in docs.section" :key="ix" class="content">
      <span v-html="section.text"></span>
         <q-expansion-item
                  dark
                  expand-separator
                  v-for="(item,index) in docs.subsection"
                  :label="item.name"
                  v-if="item.section.name == section.name"
                  :key="index"
                  class="subsection"
                  header-class="bg-blue-grey-8 text-white"
                >
               <div v-for="(file, ix) in docs.files" :key="ix"> 
                 <a v-if="file.subsection.name == item.name" :href="file.file" class="file_string"> <img src="image/file.svg" style="padding-right:1vh;"/>{{file.name}}</a>
               </div>
                 </q-expansion-item>  
           </q-tab-panel>
      </q-tab-panels>
      </div>
  </q-page>
</template>
<script>

export default {
   preFetch($route){
   return $route.store.dispatch('docs/getDocs')
 },
  data(){
    return{
      tab:'',
      docs:{}
    }
  },
    mounted() {
    return this.$emit("disableLoading", false);
  },
  destroyed() {
    return this.$emit("disableLoading", true);
  },
    computed:{
      documents(){
      return this.$store.state.docs.data
    }
  },
     created(){
    this.docs = this.documents
    this.tab = this.$store.state.docs.data.section[0].name
   }
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
  height: 27vh;
}
.ul{
background: #f0f0f0;
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