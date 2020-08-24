<template>
<div>
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
