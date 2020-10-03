<template>
    <div class="body">
        <router-view/>
        </div>
</template>
<style scoped>
.body{
   background:url('/image/bg2.png');
  background-position:50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>
<script>
export default {
  mounted(){
    return this.$emit('disableLoading', false)
  },
  destroyed(){
    return this.$emit('disableLoading', true)
  }
}
</script>