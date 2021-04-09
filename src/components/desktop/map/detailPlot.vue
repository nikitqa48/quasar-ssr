<template>
<div v-if="detailPlot.value"> 
 <q-btn color="grey-6"  
  @click="returnBack" flat icon="keyboard_backspace"  :label="$t('back')" no-caps style='margin-top:5%;'/>
          <p class="title"
              >{{$t('map.plot')}} № {{detailPlot.plot.number_territory}}</p>
                    <q-scroll-area
                :thumb-style="thumbStyle"
                class="bg-white text-black rounded-borders scroll"
              >
              <div class="contain">
              <div class="image" ref="grinf" >
                  <q-img
                    :src="detailPlot.plot.image"
                    @click="modalImage = true"
                    class="fit cursor-pointer"
                  />
                </div>
                <div class="container">
                  <div class="justify-between fit flex">
                    <div class="table">
                    <p class="item-name">{{$t('map.area')}}:</p>
                    <span class="opacity">{{detailPlot.plot.square}} ГА</span>
                      </div>
                        <div class="table">
                    <p class="item-name">{{$t('map.type_plot')}}:</p>
                    <span class="opacity">{{$t(`map.${detailPlot.plot.type}`)}}</span>
                      </div>
                            <div class="table">
                    <p class="item-name">{{$t('map.cadastr')}}:</p>
                    <span class="opacity">{{detailPlot.plot.number}}</span>
                      </div>
                                    <div class="table">
                    <p class="item-name">{{$t('map.permitted')}}:</p>
                    <span class="opacity">{{$t(`map.permit.${detailPlot.plot.category}`)}}</span>
                      </div>
                                            <div class="table">
                    <p class="item-name">{{$t('map.transaction')}}:</p>
                    <span class="opacity">{{detailPlot.plot.form.toString()}}</span>
                      </div>
                    <div class="table" v-if="detailPlot.plot.water != null && detailPlot.plot.water != ''">
                    <p class="item-name">{{$t('map.water')}}:</p>
                    <span class="opacity">{{detailPlot.plot.water}}</span>
                      </div>
                        <div class="table" v-if="detailPlot.plot.gas != null && detailPlot.plot.gas != ''">
                    <p class="item-name">{{$t('map.gas')}}:</p>
                    <span class="opacity">{{detailPlot.plot.gas}}</span>
                      </div>
                           <div class="table" v-if="detailPlot.plot.power != null && detailPlot.plot.power != ''">
                    <p class="item-name">{{$t('map.electricity')}}:</p>
                    <span class="opacity">{{detailPlot.plot.power}}</span>
                      </div>
                               <div class="table" v-if="detailPlot.plot.heat != null && detailPlot.plot.heat != ''">
                    <p class="item-name">{{$t('map.heat')}}:</p>
                    <span class="opacity">{{detailPlot.plot.heat}}</span>
                      </div>
                                  <div class="table" v-if="detailPlot.plot.water_out != null && detailPlot.plot.water_out != ''">
                    <p class="item-name">{{$t('map.water_out')}}:</p>
                    <span class="opacity">{{detailPlot.plot.water_out}}</span>
                      </div>
                                         <div class="table" v-if="detailPlot.plot.danger != null && detailPlot.plot.danger != ''">
                    <p class="item-name">{{$t('map.danger')}}:</p>
                    <span class="opacity">{{detailPlot.plot.danger}}</span>
                      </div>
                    </div>
               </div>
               <div class ='description'> 
                 <div v-if="detailPlot.plot.description != '' && detailPlot.plot.description != null">
                   <p style="margin:0;">{{$t('map.description')}}:</p>
                    <p v-html="detailPlot.plot.description"></p>
                    </div>
                    <div v-if="detailPlot.plot.customs_priveleges != '' && detailPlot.plot.customs_priveleges != null">
                   <p >{{$t('map.permit.benefits')}}:</p>
                            <span >{{detailPlot.plot.customs_priveleges}}</span>  
                      </div>
                               <div v-if="detailPlot.plot.nalog != '' && detailPlot.plot.nalog != null">
                           <p
                      style='margin:0;'
                      >
                      {{$t('map.permit.tax')}}:</p>
                      <span >{{detailPlot.plot.nalog}}</span>
                      </div>
                                   <div  v-if="detailPlot.plot.territory_priveleges != '' && detailPlot.plot.territory_priveleges != null">
                           <p
                      >
                     {{$t('map.permit.cost')}}:</p>
                      <span>{{detailPlot.plot.territory_priveleges}}</span>
                      </div>
      <q-dialog
      v-model="modalImage"
    >
    <div class="modalImage">
    <q-img :src="detailPlot.plot.image" class="fit"/>
    </div>
                         </q-dialog>
               </div>
              </div>
      </q-scroll-area>
</div>
</template>

<script>
export default {
  // name: 'ComponentName',
  props:['thumbStyle'],
  data () {
    return {
      modalImage:false
    }
  },
  computed:{
      detailPlot(){
        return this.$store.state.square.detailPlot
      }
  },
  methods:{
    returnBack(){
      this.$store.dispatch('square/actionChangeListValue', true)
      this.$store.dispatch('square/actionDetailValue',false)
    }
  }
}
</script>
<style scoped>
.title{
  margin-top:2%;
  letter-spacing: 10%;
  font-size: 150%;
}
.description{
  margin-top: 5%;
  font-size: 105%;
  color:rgb(32,38,42,1);
}
.modalImage{
  width:75vw;
}
.contain{
  width:97%;
}
.scroll{
height: 75vh;
width: 100%; 
}
.image{
  height:20vh;
}
.container{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-top: 4%;
}
.table{
  display:flex;
  margin-top: 2%;
  padding-bottom: 0.5vh;
  padding-top: 0.5vh;
  justify-content:space-between;
  width:48%;
  flex-direction:column;
  flex-wrap:wrap;
  background:#F3F3F3;
}
.table p{
  padding:0;
  margin:0.5vh 0 0 1vw;
}
.opacity{
  font-size: 105%;
  margin:0 0 0 1vw;
}
.item-name{
  font-size: 105%;
  margin:.5vw 0 0 0;
  color:rgb(157,157,157,1)
}
</style>