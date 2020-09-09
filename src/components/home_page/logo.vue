<template>
  <div class="background">
    <div class="container">
      <h3  style="margin:auto; color:#727272;">Нам доверяют</h3>
      <div class="items">
        <div class="row">
          <div class="item">
            <q-img src="image/betterman.png"   class="image"/>
                           <q-tooltip content-class="bg-indigo" :offset="[10, 10]">
          Here I am!
        </q-tooltip>
          </div>
          <div class="item">
            <q-img src="image/fondital.png" class="image" />
                              <q-tooltip content-class="bg-indigo" :offset="[10, 10]">
          Here I am!
        </q-tooltip>
          </div>
          <div class="item">
            <q-img src="image/hawle-logo.png" class="image" />
          </div>
          <div class="item">
            <q-img src="image/honneywell.png" class="image" />
          </div>
          <div class="item">
            <q-img src="image/kemin.png" class="image" />
          </div>
          <div class="item">
            <q-img src="image/nlmk.png" class="image" />
          </div>
          <div class="item">
            <q-img src="image/doka.png" class="image" />
          </div>
        </div>
        <div class="row">
          <div class="item">
            <q-img src="image/lamb-weston.png" class="image" />
          </div>
          <div class="item">
            <q-img src="image/whirlpool.png" class="image" />
          </div>
          <div class="item">
            <q-img src="image/kverneland.png" class="image" />
          </div>
          <div class="item">
            <q-img src="image/ropa.png" class="image" />
          </div>
          <div class="item">
            <q-img src="image/schlumberger.png" class="image" />
          </div>
          <div class="item">
            <q-img src="image/fenzi.png" class="image" />
          </div>
        </div>
        <div class="row">
          <div class="item">
            <q-img src="image/sest.png" class="image" />
          </div>
          <div class="item">
            <q-img src="image/horsch.png" class="image" />
          </div>
          <div class="item">
            <q-img src="image/ppg.png" class="image" />
          </div>
          <div class="item">
            <q-img src="image/viesmann.png" class="image" />
          </div>
          <div class="item">
            <q-img src="image/pepsico.png" class="image" />
          </div>
          <div class="item">
            <q-img src="image/yokohama-logo.png" class="image" />
          </div>
        </div>
        <div class="row">
          <div class="item">
            <q-img src="image/bekaert.png" class="image" />
          </div>
          <div class="item">
            <q-img src="image/kws.png" class="image" />
          </div>
          <div class="item">
            <q-img src="image/cargill.png" class="image" />
          </div>
          <div class="item">
            <q-img src="image/racional.png" class="image" />
          </div>
          <div class="item">
            <q-img src="image/alu.png" class="image" />
          </div>
          <div class="item">
            <q-img src="image/egida.png" class="image" />
          </div>
        </div>
        <div class="row">
          <div class="item">
            <q-img src="image/ilpea.png" class="image" />
          </div>
          <div class="item">
            <q-img src="image/abb.png" class="image" />
          </div>
          <div class="item">
            <q-img src="image/angel.png" class="image" />
          </div>
          <div class="item">
            <q-img src="image/syngena.png" class="image" />
          </div>
          <div class="item">
            <q-img src="image/fragariya.png" class="image" />
          </div>
          <div class="item">
            <q-img src="image/danone.png" class="image" />
          </div>
        </div>
        <div class="row" style="display:flex; justify-content:center;">
                    <div class="item">
            <q-img src="image/akzonobel.png" class="image" style="align-self:center;" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data() {
    return {};
  },
};
</script>
<style scoped>
.background {
  background: rgba(255, 255, 255, 1);
  min-height: 100vh;
  background-size: contain;
  background-image: url("/image/city.png");
}
.container {
  width: 60%;
  padding-top: 3%;
  margin: auto;
  display: flex;
  flex-direction: column;
}
.items {
  display: flex;
  flex-direction: column;
}
.row {
  margin-top: 3%;
  justify-content: space-between;
  align-items: center;
}
.item {

  min-height: 15%;
  min-width: 8vw;
}
.image {
    cursor: pointer;
  width: 100%;
}
</style>
