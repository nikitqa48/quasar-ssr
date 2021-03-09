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
                  header-class="bg-blue-grey-8 text-white"
                >
               
               <div v-for="(file, ix) in docs.files" :key="ix"> 
                 <a v-if="file.subsection.name == item.name" :href="file.file" class="file_string"> <img src="image/file.svg" style="padding-right:1vh;"/>{{file.name}}</a>
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
.text >>>  a{
  text-decoration: none;
  color:#0a79c9;
}
.text >>> a img{
  padding-right: 0.5vw;
}
</style>