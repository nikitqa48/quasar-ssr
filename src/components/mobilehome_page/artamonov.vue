<template>
  <div class="container">
    <div style='width:50%;'>
      <q-img src='image/window.png' style="width:100%;"/>
      </div>
      <span style='font-weight:600; font-size:150%;'>Игорь Георгиевич Артамонов </span>
      <span style='opacity:.9;'> Глава администрации Липецкой области</span>
      <span style="font-weight:600; font-size:150%;line-height:100%;">.</span>
      <span style='width:90%; text-align:center;margin-top:1vh; opacity:.9'> Липецкая область – надёжный и проверенный партнер для инвестора. Могу с уверенностью сказать, что наш опыт
         в реализации проектов сформировал положительный имидж региона не только на территории России, но и во всем мире. Липецкая область - открытый регион для инвестиций</span>
          <div style='width:15%; margin-top:2vh;'>
          <q-img src='icons/pen.png' style='width:100%;'/>
          </div>
          <a href = 'https://xn--80aacoonefzg3am8b1fsb.xn--p1ai/appeal' style='text-decoration:none;'>
          <q-btn label='Обратиться к губернатору' color='primary' no-caps style='margin-top:15%;'/>
          </a>
    </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  }
}
</script>
<style scoped>
.container{
  color:white;
  background:#2C2C2C;
  height:100%;
}
@media all and (orientation:portrait){
  .container{
    display:flex;
    align-items:center;
    flex-direction:column;
  }
}
</style>