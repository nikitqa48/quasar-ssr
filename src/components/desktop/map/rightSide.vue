<template>
<div>
    <div class="column" v-if="listBlock">
    <span class="list">
    {{$t(`map.region.${territoryList.nameRegion}`)}}
    </span>
    <q-btn-toggle
        v-model="button"
        toggle-color="primary"
        unelevated
        rounded
        color="grey-3"
        text-color="grey-8"
        no-caps
        :options="[
          {label: $t('map.greenfield'), value: 'greenfield'},
          {label: $t('map.brownfield'), value: 'brownfield'},
          {label: $t('map.all'), value: 'all'}
        ]"
      />
 <span class='note'> {{$t('map.note')}}</span>
     <q-scroll-area
                  dark
                  class="scroll"
                  :thumb-style="thumbStyle"
                >
          <div class="contain">         
      <template v-for="(zone, key) in territoryList"> 
      
           <div class="row justify-between items-center"  v-if="zone.label">
            <template v-if="zone.array.length > 0">
            <p class="zone-name" > {{zone.label}} </p>
            </template>
             <q-btn  
          :label="zone.presentation.label"
          @click="zone.presentation.open"
          v-if="zone.presentation"
          no-caps/>
          </div> 
      <div class="item" v-for="plots in zone.array" @click="showDetailPlot(plots)"> 
            <div class="number">{{$t('map.plot')}} 
              №{{plots.number_territory}}
              </div>
            <div class="bottom"> 
              <div style="margin-right:1vw;">
                 <div class="number_row">
                    <q-icon name='mdi-map' style='opacity:.5'/>
                    <span>{{$t('map.area')}}:</span>
                      </div>
                      <div class="inside">{{ plots.square}} ГА </div>
              </div>
                  <div style="margin-right:1vw;">
                 <div class="number_row">
                    <q-icon name='mdi-map' style='opacity:.5'/>
                    <span>{{$t('map.type_plot')}}:</span>
                      </div>
                      <div class="inside">{{$t(`map.${plots.type}`)}}</div>
              </div>
                      <div style="margin-right:1vw;">
                 <div class="number_row">
                    <q-icon name='mdi-map' style='opacity:.5'/>
                    <span>{{$t('map.form')}}:</span>
                      </div>
                      <div class="inside">{{$t(`map.${plots.desired}`)}}</div>
              </div>
            </div>
        </div> 
 
    </template>
    </div>
  </q-scroll-area>
  </div>
    <detailPlot :thumbStyle="thumbStyle"/>
   <filterPlot v-if="filterValue"/>
</div>
</template>
<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      button:'all',
        thumbStyle: {
        right: '2px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75
      },
    detailPlot:{}
    }
  },
  components:{
    detailPlot:()=>import('components/desktop/map/detailPlot.vue'),
    filterPlot:()=>import('components/desktop/map/filter.vue')
  },
   computed:{
    territoryList(){
      let region =  this.$store.state.square.listPlot.name
      let array = this.$store.state.square.zone
      let typeZone = {
        oez: {
          oezLipetsk:{
            label:this.$t('map.oezru_lipetsk'),
            region:['9','12'],
            presentation:{
              label: "Презентация ОЭЗ ППТ «Липецк»",
              open:function(){
              window.open('/files/oez_lipetsk.pdf')
}
            }
          }
        },
        oezru:{
            dankov:{
              label:this.$t('map.oezru_dankov'),
              region:['1'],
              presentation:{
                label:"Презентация ОЭЗ ППТ «Данков»",
                open:function(){
                window.open('/files/dankov_oezru.pdf')
        }
              }
            },
            zadonshina:{
              label:this.$t('map.oezru_zadonshina'),
              region:['10']
            },
            izmalkovo:{
              label:this.$t('map.oezru_izmalkovo'),
              region:['8']
            },
            astapovo:{
              label:this.$t('map.oezru_astapovo'),
              region:['2']
            },
            terbuny:{
              label:this.$t('map.oezru_terbuny'),
              region:['14']
            },
            elets:{
              label:this.$t('map.oezru_elets'),
              region:['9'],
              presentation:{
                label:'Презентация ОЭЗ РУ «Елец»',
                open:function(){
                  window.open('/files/Elets.pdf')
                }
              }
            },
            khlevnoe:{
              label:this.$t('map.oezru_khlevnoe'),
              region:['15']
            },
            chaplygin:{
              label:this.$t('map.oezru_chaplygin'),
              region:['3'],
              presentation:{
                label:'Презентация ОЭЗ РУ «Чаплыгин»',
                open:function(){
                  window.open('/files/chaplygin_oezru.pdf')
                }
              }
            }
        },
        techno:{
          lipetsk:{
            label:this.$t('techno'),
            region:['11'],
            presentation:{
              label:'Презентация МБУ «Технопарк Липецк»',
              open:function(){
                window.open('/files/technopark.pdf')
              }
            }
          }
        },
        industrial:{
          krasnoe:{
            label:this.$t('map.industrial'),
            region:['5'],
            presentation:{
              label:'Презентация ИП «Рождество»',
              open:function(){
                  window.open('/files/krasnoe.pdf')
              }
            }
          }
        },
        any:{
          all:{
            label:this.$t('map.other'),
            region:['9', '13', '12','1', '8', '10', "11",
            "2", "7", "3","6", "5", "4", "16",
            "15", "14", "18", "17"]
          }
        }
      }
      let plots = {
        value:this.$store.state.square.listPlot.value,
        nameRegion:region
      }
      for (let key in array){
        // Крутим массив Экономических зон
       
        plots[key] = {}
        plots[key].array = []
        for (let index in typeZone[key]){
          // Крутим типы экономических зон по каждому ключу массива

          if(typeZone[key][index].region.includes(region)){
            // Если тип экономической зоны содержит выбранный регион, то изменить лейбл

            if(typeZone[key][index].presentation){
              // Если есть презентация, то добавить в объект

              plots[key].presentation =typeZone[key][index].presentation
            }
              plots[key].label = typeZone[key][index].label
          }
        }
        for (let k in array[key]){
          // Крутим участки в каждой экономической зоне

          if(array[key][k].region == region){
            // Если объект участка содержит выбранный регион, то добавить в массив
              plots[key].array.push(array[key][k])
          }
        }
      }
      return plots
    },
    listBlock(){
      return this.$store.state.square.listValue
    },
    filterValue(){
      return this.$store.state.square.filter
    }
  },
  methods:{
    showDetailPlot(plot){
      this.changeBlockList(false)
      this.$store.dispatch('square/actionDetailPlot', plot)
    },
      changeBlockList(value){
      this.$store.dispatch('square/actionChangeListValue', value)
      this.$store.dispatch('square/actionDetailValue', !value)
    }
  }
}
</script>
<style scoped>
.contain{
  width:97%;
}
.list{
  margin-top:1vh;
  padding-bottom:1vh;
  font-size:1.5vw;
  font-weight:600;
}

.zone-name{
  font-size:150%;
  opacity:.9;
  margin:0;
  font-weight:600;
}
.scroll {
  height: 75vh;
  max-width: 100%;
}
.note{
  margin-top: 2.6vh;
  margin-bottom: 0.5vh;
  font-size:0.8vw;
  opacity:.6;
}
.item {
  font-size: 1vw;
  display: flex;
  margin-bottom: 1.2%;
  cursor: pointer;
  border-radius:8px;
  border:0.1rem solid rgba(0,0,0,0.2);
  flex-direction: column;
  width: 100%;
}
.item:hover{
 background:#8fbedf;
 color:white;
} 
.number{
  padding:1%;
  border-bottom:0.01rem solid rgba(0,0,0,0.2);
}
.bottom{
  width: 100%;
  padding-bottom: 1vh;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.number_row span {
  margin-left: 0.2vw;
  margin-right:0.5vw;
  font-size: 80%;
  opacity: 0.3;
}
.inside{
display:flex;
justify-content:center;
font-size:80%!important;
}
</style>