<template>
  <div class="wrap">
    <div class="container">
   
        <div class="back">
     <router-link :to="{name: 'support', }" class="rout">
               <q-btn color="white" flat icon="keyboard_backspace"  label="Вернуться назад" no-caps />
                </router-link>
        </div>
     
      <div class="name">{{support.name}}</div>
      <div class="category">
        <div class="item" v-if="support.recipient != ''">
          <div class="wrapper">
            <span class="text">Получатели:</span>
            <!-- <q-select v-model="model" :options="options" label="Standard" outlined label-color="white" class="select" color="white"/> -->
            <span
              class="vid"
              v-if="support.recipient == 'industrial'"
            >Резиденты индустриальных парков</span>
            <span class="vid" v-if="support.recipient == 'small'">МСП</span>
            <span class="vid" v-if="support.recipient == 'municipality'">муниципалитет</span>
            <span class="vid" v-if="support.recipient == 'developers'">Разработчики ПО</span>
            <span class="vid" v-if="support.recipient == 'resident_oez'">Резиденты ОЭЗРУ Липецк</span>
            <span class="vid" v-if="support.recipient == 'subject'">Субъект</span>
            <span class="vid" v-if="support.recipient == 'legally'">Юридические лица</span>
            <span class="vid" v-if="support.recipient == 'not_msp'">Все кроме МСП</span>
            <span class="vid" v-if="support.recipient == 'cooperatives'">Кооперативы</span>
          </div>
        </div>
        <div class="item" v-if="support.type != ''">
          <div class="wrapper">
            <span class="text">Тип поддержки:</span>
            <span class="vid" v-if="support.type == 'direct'">Инвестиции</span>
            <span class="vid" v-if="support.type == 'loan'">Налоговые льготы по налогу на займ</span>
            <span class="vid" v-if="support.type == 'subsidies'">Субсидии</span>
            <span class="vid" v-if="support.type == 'profit'">Налоговые льготы по налогу на прибыль</span>
            <span class="vid" v-if="support.type == 'grant'">Гранты</span>
            <span class="vid" v-if="support.type == 'rent'">Льготы по аренде</span>
            <span class="vid" v-if="support.type == 'garant'">Гарантии</span>
            <span class="vid" v-if="support.type == 'loan_funding'">Заемное финансирование</span>
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
            <span class="text">Вид деятельности:</span>
            <span class="vid" v-if="support.industry!=undefined">{{support.industry.toString()}}</span>
          </div>
        </div>
        <div class="item" v-if="support.implementation != ''">
          <div class="wrapper">
            <span class="text">Способ реализации проекта:</span>
            <span class="vid" v-if="support.implementation == 'agreement'">Соглашение</span>
            <span class="vid" v-if="support.implementation == 'gchp'">ГЧП</span>
            <span class="vid" v-if="support.implementation == 'any'">Любой</span>
          </div>
        </div>
        <div class="item" v-if="support.target != 0 && support.target != ''">
          <div class="wrapper">
            <span class="text">Цели/ адресаты государственной поддержки:</span>
            <!-- <span class="vid" v-if="support.implementation == 'agreement'">{{support.target}}</span> -->
            <span class="vid">{{support.target}}</span>
          </div>
        </div>
        <div class="item" v-if="support.condition != ''">
          <div class="wrapper">
            <span
              class="text"
            >Основные условия предоставления мер гос. поддержки для инвесторов (предпринимателей): ставка, сроки, сумма:</span>
            <span class="vid">{{support.condition}}</span>
          </div>
        </div>
        <div class="item" v-if="support.authority != ''">
          <div class="wrapper">
            <span class="text">Куррирующий орган:</span>
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
        <div class="item" v-if="support.project_name != '' && support.program_name != 0">
          <div class="wrapper">
            <span class="text">Наименование национального проекта:</span>
            {{support}}
            <span class="vid">{{support.project_name}}</span>
          </div>
        </div>
        <div class="item" v-if="support.program_name != 0 && support.program_name != ''">
          <div class="wrapper">
            <span class="text">Наименование гос программы:</span>
            <span class="vid">{{support.program_name}}</span>
          </div>
        </div>
        <div class="item" v-if="support.money != 0 && support.money != ''">
          <div class="wrapper">
            <span class="text">Объем меры гос.поддержки(млрд.руб.):</span>
            <span class="vid">{{support.money}}</span>
          </div>
        </div>
        <div class="item" v-if="support.form != ''">
          <div class="wrapper">
            <span class="text">Категория получателя:</span>
            <span class="vid" v-if="support.form == 'lawyer'">Юр.лицо</span>
            <span class="vid" v-if="support.form == 'ip'">ИП</span>
             <span class="vid" v-if="support.form == 'municipality'">Муниципалитет</span>
          </div>
        </div>
        <div class="item" v-if="support.nds != 0 && support.nds != ''">
          <div class="wrapper">
            <span class="text">Налоговая ставка НДС:</span>
            <span class="vid">{{support.nds}}</span>
          </div>
        </div>
        <div class="item" v-if="support.expenses != '' && support.expenses != 0">
          <div class="wrapper">
            <span class="text">Затраты подлежащие возмещению:</span>
            <span class="vid">{{support.expenses}}</span>
          </div>
        </div>

        <div class="item" v-if="support.territory != ''">
          <div class="wrapper">
            <span class="text">Территория реализации проекта:</span>
            <span class="vid" v-if="support.territory == 'without'">Без ограничений</span>
            <span class="vid" v-if="support.territory == 'park'">индустриальные парки</span>
            <span class="vid" v-if="support.territory == 'mono'">моногород</span>
            <span class="vid" v-if="support.territory == 'techno'">технопарк</span>
            <span class="vid" v-if="support.territory == 'oez'">ОЭЗ ппт липецк</span>
            <span class="vid" v-if="support.territory == 'oezru'">ОЭЗРУ</span>
            <span class="vid" v-if="support.territory == 'all'">Любая</span>
            <span class="vid" v-if="support.territory == 'cluster'">Участник кластера</span>
          </div>
        </div>
        <div class="item" v-if="support.type_project != ''">
          <div class="wrapper">
            <span class="text">Тип проекта:</span>

            <span class="vid">{{support.type_project.toString('')}}</span>
          </div>
        </div>
        <div class="item" v-if="support.npa != 0 && support.npa != ''">
          <div class="wrapper">
            <span class="text">НПА устанавливающий меры:</span>

            <span class="vid">{{support.npa}}</span>
          </div>
        </div>
        <div class="item" v-if="support.loan_time != '' && support.loan_time != 0">
          <div class="wrapper">
            <span class="text">Сроки займа:</span>

            <span class="vid">{{support.loan_time}}</span>
          </div>
        </div>
        <div class="item" v-if="support.organisation != '' ">
          <div class="wrapper">
            <span class="text">Меру поддержки выдает:</span>

            <span class="vid" v-html="support.organisation">{{support.organisation}}</span>
          </div>
        </div>
        <div class="item" v-if="support.category != '' ">
          <div class="wrapper">
            <span class="text">Категория налогоплатильщиков:</span>

            <span class="vid">{{support.category}}</span>
          </div>
        </div>
        <div class="item" v-if="support.property_rate != '' ">
          <div class="wrapper">
            <span class="text">Налоговая ставка на имущество:</span>

            <span class="vid">{{support.property_rate}}</span>
          </div>
        </div>
        <div class="item" v-if="support.profit != '' ">
          <div class="wrapper">
            <span class="text">Налог на прибыль:</span>

            <span class="vid">{{support.profit}}</span>
          </div>
        </div>
        <div class="item" v-if="support.transport != '' ">
          <div class="wrapper">
            <span class="text">Налоговая ставка по транспортному налогу:</span>

            <span class="vid">{{support.transport}}</span>
          </div>
        </div>
        <div class="item" v-if="support.land != '' ">
          <div class="wrapper">
            <span class="text">Налоговая ставка по земельному налогу:</span>

            <span class="vid">{{support.land}}</span>
          </div>
        </div>
        <div class="item" v-if="support.summ != '' && support.summ != null ">
          <div class="wrapper">
            <span class="text">Сумма займа:</span>

            <span class="vid">{{support.summ}}</span>
          </div>
        </div>
                <div class="item" v-if="support.percent != '' && support.percent != null ">
          <div class="wrapper">
            <span class="text">Процентная ставка:</span>
            <span class="vid">{{support.percent}}</span>
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

    };
  },
  computed:{
    support(){
      return this.$store.state.support.detailSupport

    }
  },

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
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background: linear-gradient(180deg, #202f40 0%, #0d0d1c 100%);
}
.wrapper {
  display: flex;
  padding-top: 2vh;
  padding-bottom: 2vh;
  flex-direction: column;
  background: rgba(35, 46, 75, 0.7);
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
  opacity: 0.5;
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
  color: white;
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