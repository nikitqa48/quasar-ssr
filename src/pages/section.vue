<template>
  <div>
      <span v-html="section.text" class="text"></span>
        <q-expansion-item
                  dark
                  expand-separator
                  v-for="(item,index) in docs.subsection"
                  :label="item.name"
                  v-if="item.section.slug == section.slug"
                  :key="index"
                  class="subsection"
                  header-class="bg-blue-grey-8 text-white border"
                >
               <div class="container">
               
               <div v-for="(file, ix) in docs.files" :key="ix" class="text_inside"> 
                 <a v-if="file.subsection.name == item.name" :href="file.file" class="file_string"> <img src="image/file.svg" style="padding-right:1vh;"/>{{file.name}}</a>
               </div>
                 <div v-html='item.text' class="text" ></div>
               </div>
                 </q-expansion-item>

  </div>
</template>
<script>
export default {
  props:{
    section:{},
    docs:{}
  },
  data(){
    return{

    }
  }
}
</script>
<style scoped>
.border{
      border: 4px solid rgba(31, 37, 55, 0.7);
}
.text_inside >>> a{
   text-decoration: none;
  color:#0a79c9;
  margin-bottom: 1.2%;
}
.text >>> a{
  text-decoration: none;
  color:#0a79c9;
}
.text >>> a img{
  padding-right: 0.5vw;
}
.container{
  background: #e5e5e5;
    padding: 1%;
    display: flex;
    flex-direction: column;
}
.subsection{
border: 1px solid rgba(31, 37, 55, 0.7);
border-radius: 4px;
margin-bottom: 2%;
}
</style>