<template>
  <div class="news">
    <p v-for="item in news" :key="item.id">
      {{item.id}}
      </p>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  },
  computed:{
    news(){
      return this.$store.state.lastNews.news
    }
  }
}
</script>
<style scoped>
.news{
  border:1px solid red;
}
</style>