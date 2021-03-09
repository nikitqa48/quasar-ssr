<template>
  <div class="background">
    <div class="container">
      <h3  style="margin:auto; color:#727272;">{{$t('trust')}}</h3>
      <div class="items">
        <div class="row">
          <div class="item">
            <q-img src="image/Bettermann.jpg"   class="image"/>
                           <q-tooltip content-class="bg-indigo" :offset="[10, 10]">
          Here I am!
        </q-tooltip>
          </div>
          <div class="item">
            <q-img src="image/fondital.jpg" class="image" />
                              <q-tooltip content-class="bg-indigo" :offset="[10, 10]">
          Here I am!
        </q-tooltip>
          </div>
          <div class="item">
            <q-img src="image/hawle-logo.jpg" class="image" />
          </div>
  
          <div class="item">
            <q-img src="image/honneywell.gif" class="image" />
          </div>
          <div class="item">
            <q-img src="image/kemin.jpg" class="image" />
          </div>
          <div class="item">
            <q-img src="image/nlmk.png" class="image" />
          </div>
          <div class="item">
            <q-img src="image/doka.jpg" class="image" />
          </div>
        </div>
        <div class="row">
          <div class="item">
            <q-img src="image/lambweston.jpg" class="image" />
          </div>
          <div class="item">
            <q-img src="image/whirlpool.jpg" class="image" />
          </div>
          <div class="item">
            <q-img src="image/kverneland.png" class="image" />
          </div>
          <div class="item">
            <q-img src="image/ropa.jpg" class="image" />
          </div>
          <div class="item">
            <q-img src="image/schlumberger.jpg" class="image" />
          </div>
          <div class="item">
            <q-img src="image/fenzi.jpg" class="image" />
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
            <q-img src="image/viesmann.gif" class="image" />
          </div>
          <div class="item">
            <q-img src="image/pepsico.jpg" class="image" />
          </div>
          <div class="item">
            <q-img src="image/yokohama.jpg" class="image" />
          </div>
        </div>
        <div class="row">
          <div class="item">
            <q-img src="image/bekaert.jpg" class="image" />
          </div>
          <div class="item">
            <q-img src="image/kws.jpg" class="image" />
          </div>
          <div class="item">
            <q-img src="image/cargill.jpg" class="image" />
          </div>
          <div class="item">
            <q-img src="image/racional.jpg" class="image" />
          </div>
          <div class="item">
            <q-img src="image/alupro.jpg" class="image" />
          </div>
          <div class="item">
            <q-img src="image/egida.jpg" class="image" />
          </div>
        </div>
        <div class="row">
          <div class="item">
            <q-img src="image/ilpea.jpg" class="image" />
          </div>
          <div class="item">
            <q-img src="image/abb.png" class="image" />
          </div>
          <div class="item">
            <q-img src="image/angel.jpg" class="image" />
          </div>
          <div class="item">
            <q-img src="image/syngena.png" class="image" />
          </div>
          <div class="item">
            <q-img src="image/fragariya.jpeg" class="image" />
          </div>
          <div class="item">
            <q-img src="image/danone.png" class="image" />
          </div>
        </div>
        <div class="row" style="display:flex; justify-content:center;">
                    <div class="item">
            <q-img src="image/akzonobel.gif" class="image" style="align-self:center;" />
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
@media screen and (max-width: 800px) {
  .item{
    width:20%!important;
  }
  .items{
    margin-top: 10%;
  }
  .container{
    width:95%!important;
    text-align: center;
  }
  .container h3{
    font-size: 2.5rem!important;
  }
}
.background {
  background: rgba(255, 255, 255, 1);
  min-height: 100vh;
  background-position: 50%;
  background-size: cover;
  background-image: url("/image/city.png");
}
.container {
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
}
.items {
  display: flex;
  flex-direction: column;
}
.row {
  margin-top: 1%;
  justify-content: space-between;
  align-items: center;
}
.item {

  min-height: 15%;
  width: 8vw;
}
.image {
    cursor: pointer;
  width: 100%;
}
</style>
