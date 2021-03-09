<template>
  <div class="wrap">

    <div class="container" >
   
        <div class="back">
     <router-link :to="{name: 'support', }" class="rout">
               <q-btn color="primary" flat icon="keyboard_backspace"  :label="$t('back')" no-caps />
                </router-link>
        </div>
     <div v-if="support.translations[$i18n.locale]" style='display:flex;flex-direction:column;'>
      <div class="name" v-if="support.translations[$i18n.locale]">
        {{support.translations[$i18n.locale].name}}
        </div>
      <div class="category">
        <div class="item" v-if="support.recipient != ''">
          <div class="wrapper">
            <span class="text">{{$t('Support.recipient')}}:</span>
            <!-- <q-select v-model="model" :options="options" label="Standard" outlined label-color="white" class="select" color="white"/> -->
            <span
              class="vid"
              v-if="support.recipient == 'industrial'"
            >{{$t('Support.sez_industrial')}}</span>
            <span class="vid" v-if="support.recipient == 'small'">{{$t('Support.real_msp')}}</span>
            <span class="vid" v-if="support.recipient == 'municipality'">{{$t('Support.municipality')}}</span>
            <!-- <span class="vid" v-if="support.recipient == 'developers'">Разработчики ПО</span> -->
            <span class="vid" v-if="support.recipient == 'resident_oez'">{{$t('Support.sez_lipetsk')}}</span>
            <span class="vid" v-if="support.recipient == 'subject'">{{$t('Support.subject')}}</span>
            <span class="vid" v-if="support.recipient == 'legally'">{{$t('Support.legal')}}</span>
            <span class="vid" v-if="support.recipient == 'not_msp'">{{$t('Support.msp')}}</span>
            <span class="vid" v-if="support.recipient == 'cooperatives'">{{$t('Support.cooperatives')}}</span>
          </div>
        </div>
        <div class="item" v-if="support.type != ''">
          <div class="wrapper">
            <span class="text">{{$t('Support.type_support')}}:</span>
            <span class="vid" v-if="support.type == 'direct'">{{$t('Support.investition')}}</span>
            <span class="vid" v-if="support.type == 'loan'">{{$t('Support.tax')}}</span>
            <span class="vid" v-if="support.type == 'subsidies'">{{$t('Support.subsidies')}}</span>
            <span class="vid" v-if="support.type == 'profit'">{{$t('Support.income')}}</span>
            <span class="vid" v-if="support.type == 'grant'">{{$t('Support.grants')}}</span>
            <span class="vid" v-if="support.type == 'rent'">{{$t('Support.rental')}}</span>
            <span class="vid" v-if="support.type == 'garant'">{{$t('Support.warranty')}}</span>
            <span class="vid" v-if="support.type == 'loan_funding'">{{$t('Support.debt')}}</span>
            <span
              class="vid"
              v-if="support.type == 'transport'"
            >Налоговые льготы по транспортному налогу</span>
            <span class="vid" v-if="support.type == 'earth'">Налоговые льготы по земельному налогу</span>
            <span class="vid" v-if="support.type == 'nds'">Налоговые льготы по уплате НДС</span>
            <span class="vid" v-if="support.type == 'customs'">таможенные льготы</span>
            <span class="vid" v-if="support.type == 'infrastructure'">Субсидии на инфраструктуру</span>
            <span
              class="vid"
              v-if="support.type == 'property'"
            >Налоговые льготы по налогу на имущество</span>
            <span
              class="vid"
              v-if="support.type == 'loan_profit'"
            >кредиты под залог создаваемого имущества</span>
          </div>
        </div>
        <div class="item" v-if="support.industry != '' ">
          <div class="wrapper">
            <span class="text">{{$t('Support.activity_type')}}:</span>
            <span class="vid" v-if="support.industry!=undefined">{{example}}{{support.industry.join(', ')}} </span>
          </div>
        </div>
        <div class="item" v-if="support.implementation != ''">
          <div class="wrapper">
            <span class="text">{{$t('Support.implementation')}}:</span>
            <span class="vid" v-if="support.implementation == 'agreement'">{{$t('Support.agreement')}}</span>
            <span class="vid" v-if="support.implementation == 'gchp'">ГЧП</span>
            <span class="vid" v-if="support.implementation == 'any'">{{$t('Support.other')}}</span>
          </div>
        </div>
        <div class="item" v-if="support.translations.ru.target != 0 && support.translations[$i18n.locale] != ''">
          <div class="wrapper">
            <span class="text">{{$t('Support.goals')}}:</span>
            <!-- <span class="vid" v-if="support.implementation == 'agreement'">{{support.target}}</span> -->
            <span class="vid">{{support.translations[$i18n.locale].target}}</span>
          </div>
        </div>
        <div class="item" v-if="support.translations[$i18n.locale].condition != ''">
          <div class="wrapper">
            <span
              class="text"
            >{{$t('Support.condition')}}:</span>
            <span class="vid">{{support.translations[$i18n.locale].condition}}</span>
          </div>
        </div>
        <div class="item" v-if="support.authority != ''">
          <div class="wrapper">
            <span class="text">{{$t('Support.organ')}}:</span>
            <span class="vid" v-if="support.authority == 'uilo'">УИиИ ЛО</span>
            <span class="vid" v-if="support.authority == 'min'">Минпромторг России</span>
            <span class="vid" v-if="support.authority == 'bank'">Уполномоченные банки</span>
            <span class="vid" v-if="support.authority == 'fond'">Фонд содействия инновациям</span>
            <span class="vid" v-if="support.authority == 'rvk'">АО "РВК"</span>
            <span
              class="vid"
              v-if="support.authority == 'business'"
            >Центры "мой бизнес", Управляющие компании</span>
          </div>
        </div>
        <div class="item" v-if="support.translations[$i18n.locale].project_name != '' && support.translations[$i18n.locale].project_name != 0">
          <div class="wrapper">
            <span class="text">{{$t('Support.national')}}:</span>
            <span class="vid">{{support.translations[$i18n.locale].project_name}}</span>
          </div>
        </div>

        <div class="item" v-if="support.translations[$i18n.locale].program_name != 0 && support.translations[$i18n.locale].program_name != ''">
          <div class="wrapper">
            <span class="text">{{$t('Support.program_name')}}:</span>
            <span class="vid">{{support.translations[$i18n.locale].program_name}}</span>
          </div>
        </div>
        <div class="item" v-if="support.translations[$i18n.locale].money != 0 && support.translations[$i18n.locale].money != ''">
          <div class="wrapper">
            <span class="text">{{$t('Support.volume')}}:</span>
            <span class="vid">{{support.translations[$i18n.locale].money}}</span>
          </div>
        </div>
        <div class="item" v-if="support.form != ''">
          <div class="wrapper">
            <span class="text">{{$t('Support.form')}}:</span>
            <span class="vid" v-if="support.form == 'lawyer'">{{$t("Support.legal")}}</span>
            <span class="vid" v-if="support.form == 'ip'">{{$t('Support.msp')}}</span>
             <span class="vid" v-if="support.form == 'municipality'">{{$t('Support.municipality')}}</span>
          </div>
        </div>
        <div class="item" v-if="support.translations[$i18n.locale].nds != 0 && support.translations[$i18n.locale].nds != ''">
          <div class="wrapper">
            <span class="text">{{$t('Support.nalog')}}:</span>
            <span class="vid">{{support.translations[$i18n.locale].nds}}</span>
          </div>
        </div>
        <div class="item" v-if="support.translations[$i18n.locale].expenses != '' && support.translations[$i18n.locale].expenses != 0">
          <div class="wrapper">
            <span class="text">Затраты подлежащие возмещению:</span>
            <span class="vid">{{support.translations[$i18n.locale].expenses}}</span>
          </div>
        </div>

        <div class="item" v-if="support.territory != ''">
          <div class="wrapper">
            <span class="text">{{$t('Support.project_area')}}:</span>
            <span class="vid" v-if="support.territory == 'without'">{{$t('Support.borders')}}</span>
            <span class="vid" v-if="support.territory == 'park'">{{$t('map.industrial')}}</span>
            <span class="vid" v-if="support.territory == 'mono'">моногород</span>
            <span class="vid" v-if="support.territory == 'techno'">{{$t('techno')}}</span>
            <span class="vid" v-if="support.territory == 'oez'">{{$t('Support.oez_ppt')}}</span>
            <span class="vid" v-if="support.territory == 'oezru'">ОЭЗРУ</span>
            <span class="vid" v-if="support.territory == 'all'">{{$t('Support.other')}}</span>
            <span class="vid" v-if="support.territory == 'cluster'">Участник кластера</span>
          </div>
        </div>
        <div class="item" v-if="support.type_project != ''">
          <div class="wrapper">
            <span class="text">{{$t('Support.type_project')}}:</span>
            <span class="vid">{{support.type_project.toString('')}}</span>
          </div>
        </div>
        <div class="item" v-if="support.translations[$i18n.locale].npa != 0 && support.translations[$i18n.locale].npa != ''">
          <div class="wrapper">
            <span class="text">НПА устанавливающий меры:</span>

            <span class="vid">{{support.translations[$i18n.locale].npa}}</span>
          </div>
        </div>
        <div class="item" v-if="support.translations[$i18n.locale].loan_time != '' && support.translations[$i18n.locale].loan_time != 0">
          <div class="wrapper">
            <span class="text">Сроки займа:</span>

            <span class="vid">{{support.translations[$i18n.locale].loan_time}}</span>
          </div>
        </div>
        <div class="item" v-if="support.translations[$i18n.locale].organisation != '' ">
          <div class="wrapper">
            <span class="text">{{$t('Support.issued')}}:</span>

            <span class="vid" v-html="support.translations[$i18n.locale].organisation">{{support.translations[$i18n.locale].organisation}}</span>
          </div>
        </div>
        <div class="item" v-if="support.translations[$i18n.locale].category != '' ">
          <div class="wrapper">
            <span class="text">Категория налогоплатильщиков:</span>

            <span class="vid">{{support.translations[$i18n.locale].category}}</span>
          </div>
        </div>
        <div class="item" v-if="support.translations[$i18n.locale].property_rate != '' ">
          <div class="wrapper">
            <span class="text">Налоговая ставка на имущество:</span>

            <span class="vid">{{support.translations[$i18n.locale].property_rate}}</span>
          </div>
        </div>
        <div class="item" v-if="support.translations[$i18n.locale].profit != '' ">
          <div class="wrapper">
            <span class="text">Налог на прибыль:</span>

            <span class="vid">{{support.translations[$i18n.locale].profit}}</span>
          </div>
        </div>
        <div class="item" v-if="support.translations[$i18n.locale].transport != '' ">
          <div class="wrapper">
            <span class="text">Налоговая ставка по транспортному налогу:</span>

            <span class="vid">{{support.translations[$i18n.locale].transport}}</span>
          </div>
        </div>
        <div class="item" v-if="support.translations[$i18n.locale].land != '' ">
          <div class="wrapper">
            <span class="text">Налоговая ставка по земельному налогу:</span>

            <span class="vid">{{support.translations[$i18n.locale].land}}</span>
          </div>
        </div>
        <div class="item" v-if="support.translations[$i18n.locale].summ != '' && support.translations[$i18n.locale].summ != null ">
          <div class="wrapper">
            <span class="text">Сумма займа:</span>

            <span class="vid">{{support.translations[$i18n.locale].summ}}</span>
          </div>
        </div>
                <div class="item" v-if="support.translations[$i18n.locale].percent != '' && support.translations[$i18n.locale].percent != null ">
          <div class="wrapper">
            <span class="text">Процентная ставка:</span>
            <span class="vid">{{support.translations[$i18n.locale].percent}}</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>


export default {
 preFetch($route){
   const url = `https://backendinvest.admlr.lipetsk.ru/support/detail/${$route.currentRoute.params.id}?format=json`
   return $route.store.dispatch('support/getDetailSupport', url)
 },
// preFetch({router}){

// console.log('деталь')
// },
  data() {
    return {
      support:{}
    };
  },
  computed:{
     example(){

        for(let x=0; x<this.support.industry.length; x++){
        if(this.support.industry[x] == 'промышленность'){
          this.support.industry[x] = this.$i18n.t('Support.industry')
        }
        else if(this.support.industry[x] == 'Industry'){
          this.support.industry[x] = this.$i18n.t('Support.industry')
        }
        else if (this.support.industry[x] == 'сельское хозяйство'){
          this.support.industry[x] = this.$i18n.t('Region.agriculture')
        }
          else if (this.support.industry[x] == 'Agriculture'){
          this.support.industry[x] = this.$i18n.t('Region.agriculture')
        }
           else if (this.support.industry[x] == 'любой'){
          this.support.industry[x] = this.$i18n.t('Support.other')
        }
               else if (this.support.industry[x] == 'other'){
          this.support.industry[x] = this.$i18n.t('Support.other')
        }
   
          }
  
    },
    supportDetail(){
      return this.support = this.$store.state.support.detailSupport

    }
  },
  created(){
    this.support = this.supportDetail
  }

  // mounted() {
  //   const url =
  //     "https://backendinvest.admlr.lipetsk.ru/support/detail/" +
  //     this.$route.params.id +
  //     "?format=json";
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => (this.support = data));
  // }
};
</script>
<style scoped>
@media screen and (max-width: 900px) {
  .container{
    margin-top: 4vh!important;
    width:95%!important;
  }
  .name{
    margin-top: 2vh!important;
    align-self: start!important;
    font-size: 3.5vw!important;
  }
  .category{
    width: 100%!important;
  }
}
body a {
  text-decoration: none;
}
.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  /* background: linear-gradient(180deg, #202f40 0%, #0d0d1c 100%); */
}
.wrapper {
  display: flex;
  padding-top: 2vh;
  padding-bottom: 2vh;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.6);
}
.item {
  margin-top: 0.5vh;
  margin-bottom: 0.5vh;
  width: 100%;
}
.vid {
  margin-top: 1vh;
  margin-left: 2vh;
  color: white;
}
.text {
  color: white;
  margin-left: 2vh;
  margin-right: 2vh;
  border-bottom: 1px solid white;
  opacity: 0.7;
}

.container {
  height: 92%;
  display: flex;
  flex-direction: column;
  width: 80%;
}

.arrow_back {
  z-index: 1;
  width: 1vw;
}
.back p {
  margin: 0;
  padding-left: 0.5vw;
  color: white;
}

.arrow {
  z-index: 1;
  width: 100%;
}
.name {
  color:rgba(0, 0, 0, 0.7);
  font-size: 1.2vw;
  align-self: center;
  font-weight: 600;
  margin-top: 2%;
}
.back {
  z-index: 1;
  margin-top: 5vh;
  align-items: center;
  display: flex;
}
.category {
  margin-top: 1.5vh;
  display: flex;
  align-self: center;
  flex-direction: column;
  width: 75%;
  padding-bottom: 5vh;
}
</style>