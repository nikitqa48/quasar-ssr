<template>
    <div>
        <router-view/>
        </div>
</template>
<style scoped>

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