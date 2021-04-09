<template>
  <div class="video" style='position:relative;'>
    <div style='display:flex;flex-direction:column;align-items:center; '>
    <span class='lipetsk text-white'> Липецкая область </span>
    <span class='text text-white' style='margin-top:2%;'> Минимальный риск инвестирования в РФ за 15 лет – RAEX rating agency</span>
        <div style='position:relative; margin-top:12%;'>
        <Invest-Vue/>
        </div>
            <div style='width:18vw; position:absolute; bottom:15%;'>
          <q-icon name="fas fa-fingerprint"  color="white" style='width:100%;'/>
          </div>
        </div>
  </div>
</template>

<script>
import InvestVue from 'components/investorform.vue'
export default {
  components:{
    InvestVue
  },
  // name: 'ComponentName',
  data () {
    return {}
  },
  methods:{
    alarm(){
      this.$emit('touchDown')
    }
  }
}
</script>
<style scoped>

  .video{
    background-repeat: no-repeat;
    background-size: cover!important;
    height:100%!important;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    width:100%;
    background: url('/image/mobile_video.png') no-repeat;
  }
  .lipetsk{
    font-weight:600;
    font-size:250%;
  }
  .text{
    font-size:100%;
    text-align:center;
    width:80%;
  }

</style>