<template>
<div class='news'>
  <router-view @disableLoading='disableLoading'/>
  </div>
</template>

<script>
export default {
  // name: 'LayoutName',

  data () {
    return {
      leftDrawer: true
    }
  },
  methods:{
    disableLoading(){
      this.$emit('disableLoading', false)
    }
  }
}
</script>
<style scoped>
.news{
      /* background:url('/image/bg2.png');
  background-position:50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed; */
}
</style>