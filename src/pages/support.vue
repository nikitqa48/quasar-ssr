<template>
  <q-page class="support_wrap">
 
    <div class="container">
  
      <div class="wrap_container" style="display:flex; flex-direction:row; justify-content:space-between; align-items:flex-end; width:100%;">
      <h4>{{$t('support')}}</h4>
      <div class="presentation" style="display:flex;align-items:center; width:30%; justify-content:space-between; border:1px solid #52a4df; padding:1%; color:#5D5E62; ">
      Презентация <br> «поддержка промышленности<br>Липецкой области» 
      <button class="open" @click="open"> Открыть</button>
      </div>
</div>
      <q-form @submit="onSubmit" class="blue_container">
        <div class="form_wrapper">
         
          <div class="mobile">
      <template v-for="(select, index) in selectList">
              <q-item :key="index"  class='q-item'>
                  <q-item-section>
                  {{ select.label }}
                </q-item-section>
                  <q-select standout="bg-primary text-white"   outlined v-model="select.model"  
                    :options='select.options' class ='input_filter'
                    :option-value="select.value"
                    /> 
              </q-item>
            </template>
          
          </div>
            <button class="more" type="submit">{{$t('search')}}</button>
        </div>
      </q-form>
      <div class="items">
        <div class="item" v-for="item in support" v-if="support.length != 0">
          <router-link :to="{name: 'support_detail', params: { id: item.id}}" class="rout">
                        <div class="item_name" v-if="item.translations[$i18n.locale]">{{item.translations[$i18n.locale].name}}</div>
            <div class="border"></div>
            <div class="item_bottom">
              <div class="wrapper">
                <span class="grey">{{$t('Support.recipient')}}</span>
                <span class="poluch" v-if="item.recipient == 'small'">МСП</span>
                <span class="poluch" v-if="item.recipient == 'innovation'">{{$t('Support.innovation')}}</span>
                <span class="poluch" v-if="item.recipient == 'all'">{{$t('Support.all')}}</span>
                <span class="poluch" v-if="item.recipient == 'municipality'">{{$t('Support.municipality')}}</span>
                <span
                  class="poluch"
                  v-if="item.recipient == 'industrial'"
                >{{$t('Support.resident')}}</span>
                <span class="poluch" v-if="item.recipient == 'developers'">{{$t('Support.developers')}}</span>
                <span class="poluch" v-if="item.recipient == 'resident_oez'">Резиденты ОЭЗРУ Липецк</span>
                <span class="poluch" v-if="item.recipient == 'subject'">{{$t('Support.subject')}}</span>
                <span class="poluch" v-if="item.recipient == 'legally'">{{$t('Support.legal')}}</span>
                <!-- <span class="poluch" v-if="item.recipient == 'cooperatives'">{{$t('Support.cooperatives')}}</span> -->
                <span class="poluch" v-if="item.recipient == 'not_msp'">{{$t('Support.msp')}</span>
              </div>
              <div class="wrapper">
                <span class="grey">{{$t('Support.amount')}}</span>
                <!-- <span class="poluch" v-if="item.implementation == 'agreement'">Соглашение </span>
              <span class="poluch" v-if="item.gchp == 'agreement'">ГЧП </span>
                <span class="poluch" v-if="item.gchp == 'any'">Любой </span>-->
                <span class="poluch" v-if="item.translations[$i18n.locale]">{{item.translations[$i18n.locale].money}} </span>
              </div>
              <div class="wrapper">
                <span class="grey">{{$t('Support.type_support')}}</span>
                <span class="poluch" v-if="item.type == 'direct'">{{$t('Support.investments')}}</span>
                <span class="poluch" v-if="item.type == 'loan_funding'">{{$t('Support.debt')}}</span>

                <span class="poluch" v-if="item.type == 'loan'">Налоговые льготы по налогу на займ</span>
                <span class="poluch" v-if="item.type == 'subsidies'">{{$t('Support.subsidies')}}</span>
                <span
                  class="poluch"
                  v-if="item.type == 'profit'"
                >Налоговые льготы по налогу на прибыль</span>
                <span
                  class="poluch"
                  v-if="item.type == 'property'"
                >Налоговые льготы по налогу на имущество</span>
                <span class="poluch" v-if="item.type == 'grant'">{{$t('Support.grants')}}</span>
                <span class="poluch" v-if="item.type == 'rent'">льготы по аренде</span>
                <span class="poluch" v-if="item.type == 'garant'">{{$t('Support.warranty')}}</span>
                <span
                  class="poluch"
                  v-if="item.type == 'transport'"
                >Налоговые льготы по транспортному налогу</span>
                <span
                  class="poluch"
                  v-if="item.type == 'earth'"
                >налоговые льготы по земельному налогу</span>
                <span class="poluch" v-if="item.type == 'nds'">налоговые льготы по уплате НДС</span>
                <span class="poluch" v-if="item.type == 'customs'">таможенные льготы</span>
                <span class="poluch" v-if="item.type == 'infrastructure'">Субсидии на инфраструктуру</span>
                <span
                  class="poluch"
                  v-if="item.type == 'loan_profit'"
                >кредиты под залог создаваемого имущества</span>
              </div>
              <div class="wrapper">
                <span class="grey">{{$t('Support.activity_type')}}</span>
                <!-- <span class="poluch" v-if="item.implementation == 'agreement'">Соглашение </span>
              <span class="poluch" v-if="item.gchp == 'agreement'">ГЧП </span>
                <span class="poluch" v-if="item.gchp == 'any'">Любой </span>-->
                <span class="poluch" v-if="item.industry != undefined">{{item.industry.join(', ')}}</span>
              </div>
            </div>
          </router-link>
          {{select}}
        </div>

      </div>

    </div>
   
  </q-page>
</template>
<script>
import i18n from 'src/i18n';
</script>
<style scoped>
.input_filter{
  width:20vw;
  padding:0;
  margin:0;
 
}
.q-item{
  display:flex;
  flex-direction:column;
  padding:0;
}
.open{
  border:none;
  background: #52a4df;
  color:white;
  padding-left: 2%;
  padding-right: 2%;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
}
@media screen and (max-width: 800px) {
  .input_filter{
    width:100%!important;
  }
  .mobile {
    width: 95%;
    display: flex;
    flex-direction: column;
    margin: auto;
  }
  .presentation{
    display:none!important;
  }
  .grey {
    font-size: 3vw !important;
    margin: 2% !important;
  }
  .poluch {
    margin: 2% !important;
    font-size: 3vw !important;
  }
  .wrapper {
    padding-bottom: 2% !important;
    width: 100% !important;
  }
  .item_bottom {
    flex-direction: column !important;
  }
  .item {
    margin-bottom: 2vh !important;
  }
  .blue_container {
    height: auto !important;
  }
  .container h4 {
    font-size: 5vw !important;
  }
  .form_wrapper {
    padding-top: 2% !important;
    flex-direction: column !important;
    width: 100% !important;
  }
  .container {
    width: 95% !important;
  }
  .text {
    font-size: 3vw !important;
    margin-bottom: 1% !important;
  }
  .wrap {
    padding: 1% !important;
    font-size: 3vw !important;
  }
  .wrap select {
    padding-left: 2% !important;
    margin-top: 0 !important;
    margin-bottom: 1vh !important;
  }
  .more {
    width: 100% !important;
    margin-top: 1vh !important;
    border-radius: 26px !important;
    font-size: 3vw !important;
    margin-left: 0 !important;
  }
  .item_name {
    font-size: 3.5vw !important;
    padding-left: 2% !important;
  }
  .item_bottom {
    display: flex;
    flex-direction: column;
  }
}
.button {
  border: 1px solid white;
  border-radius: 15px;
}
.mobile {
  width: 100%;
  justify-content:space-between;
  display: flex;
}
body a {
  color: white;
  text-decoration: none;
  margin: 0;
  padding: 0;
}
.but {
  align-self: flex-end;
  margin-right: 15%;
}
.wrapper {
  display: flex;
  width: 20%;
  padding-bottom: 5%;
  flex-direction: column;
}
.item_name {
  padding-left: 1vw;
  font-size: 1vw;
  font-weight: 600;
}

.grey {
  color: #F6F6F6;
  margin: 2vh;
  font-size: 0.8vw;
}
.poluch {
  color: #c9c9c9;
  font-size: 0.8vw;
  margin: 2vh;
}
.text {
  font-size: 0.7vw;
}
.items {
  display: flex;
  flex-direction: column;
}
.border {
  margin-left: 1%;
  margin-top: 1vh;
  opacity: 0.5;
  width: 97%;
  margin-bottom: 2vh;
  border-bottom: 1px solid white;
}
.more {
  border: none;
  outline: none;
  cursor: pointer;
  background: #52a4df;
  align-self: flex-end;
  color: white;
  font-size: 0.8vw;
  /* border-radius: 5px; */
  margin-top:1%;
  margin-left: 10%;
  height: 3.5vh;
  width: 20vw;
}
.item {
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  padding-top: 2vh;
  z-index: 1;
  flex-direction: column;
  width: 100%;
  margin-bottom: 4vh;
}
.item:hover {
  background: rgba(0, 0, 0, 0.5);
}
.item:first-child {
  margin-top: 7vh;
}
.form_wrapper {
  /* background: rgba(35, 46, 75, 0.7); */
  margin-top:3vh;
  padding-bottom: 2vh;
  color:#727272;
  align-self: center;
  display: flex;
  flex-direction: column;
  min-width: 100%;
}
.left {
  border-right: 1px solid rgba(255, 255, 255, 0.6);
  width: 50%;
  justify-content: flex-end;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
}
.wrap {
  padding-top: 2vh;
  padding-left: 2vw;
  display: flex;
  font-size: 0.8vw;
  flex-direction: column;
}
.wrap select {
  margin-top: 0.3vh;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: url("/image/select.png");
  background-repeat: no-repeat;
  background-position-x: 98%;
  background-position-y: 50%;
  background-size: 2vh;
  color: white;
  border: 1px solid #dfdfdf;
  min-height: 3vh;
  width: 100%;
  outline: none;
  border-radius: 5px;
  padding-right: 2vw;
  padding-left: 0.5vw;
}

.wrap select option {
  color: black;
}
.select-selected {
  color: white;
}
.select-selected:after {
  color: white;
}
.inp {
  width: 15vw;
}
.blue_container {
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.item_bottom {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}
.title {
  font-size: 4.5vw;
  letter-spacing: 0.01vw;
  font-weight: 600;
  margin-left: 2%;
}
.support_wrap {
  min-height: 100vh;
  /* background: linear-gradient(70deg, #224870 0%, #1b3b5e 100%); */
  /* background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("/image/background.jpg"); */
  display: flex;
}
.left_content {
  margin-top: 5%;
  margin-right: 5%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
}
.container {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  color: white;
}
.container h4 {
  font-size: 1.8vw;
  color:#727272;
  font-weight: 600;
}
.container li {
  cursor: pointer;
  font-size: 0.8vw;
  width: 30%;
  list-style: none;
}
.container_image {
  margin-left: 5%;
  height: 10vh;
}
.container_image img {
  height: 100%;
}
</style>
<script>

     const form = {
        industry: '',
        type: "",
        recipient: "",
        type_project: "",
        support_type: "",
       }

export default {
  preFetch({store}){
    return store.dispatch('support/getSupport')
  },
  data() {
    return {
      options: ["1", "2", "3"],
      page: 1,
      support:{},
                        thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75
      },
      url: "https://backendinvest.admlr.lipetsk.ru/support/?format=json",
      form:{
        industry: '',
        type: "",
        recipient: "",
        type_project: "",
        support_type: "",
      },
      shape: "line",
      optns: [
        { id: "",  label: "Все" },
        { id: "1", label: "Промышленность" },
        { id: "4", label: "Сельское хозяйство" },
        { id: "6", label: "Лесное хозяйство" },
        { id: "7", label: "Строительство" },
        {
          id: "8",
          label: "Прочие виды деятельности сферы материального производства",
        },
        { id: "9", label: "Обслуживание сельского хозяйства" },
        { id: "10", label: "Транспорт" },
        { id: "11", label: "Связь" },
        { id: "12", label: "Торговля и общественное питание" },
        { id: "13", label: "Материально-техническое снабжение и сбыт" },
        { id: "14", label: "Заготовки" },
        { id: "15", label: "Информационно-вычислительное обслуживание" },
        { id: "16", label: "Операции с недвижимым имуществом" },
        {
          id: "17",
          label:
            "Геология и разведка недр, геодезическая и гидрометеологическая службы",
        },
        { id: "18", label: "Жилищное хозяйство" },
        { id: "19", label: "Коммунальное хозяйство" },
        {
          id: "20",
          label: "Непроизводственные виды бытового обслуживания населения",
        },
        {
          id: "21",
          label: "Здравоохранение, физическая культура и соц.обеспечение",
        },
        { id: "22", label: "Народное образование" },
        { id: "23", label: "Культура и искусство" },
        { id: "24", label: "Наука и научное обслуживание" },
        {
          id: "25",
          label: "Финансы, кредит, страхование, пенсионное обеспечение",
        },
        { id: "26", label: "Управление" },
        { id: "27", label: "Общественные объединения" },
      ],
      optns_type: [
        { id: "", label: "Все виды поддержки" },
        { id: "direct", label: "Прямая финансовая поддержка" },
        { id: "loan_funding", label: "Заемная финансовая поддержка" },
        { id: "profit", label: "Льготы по налогу на прибыль" },
        { id: "transport", label: "Льготы по транспортному налогу" },
        { id: "property", label: "Льготы по налогу на имущество" },
        { id: "subsidies", label: "Субсидии" },
        { id: "grant", label: "Гранты" },
        { id: "rent", label: "Льготы по аренде" },
        { id: "garant", label: "Гарантии" },
        { id: "earth", label: "Льготы по земельному налогу" },
        { id: "nds", label: "Льготы по уплате НДС" },
        { id: "infrastructure", label: "Субсидии на инфраструктуру" },
        {
          id: "loan_profit",
          label: "Кредиты под залог создаваемого имущества",
        },
        {
          id: "17",
          label:
            "Геология и разведка недр, геодезическая и гидрометеологическая службы",
        },
        { id: "18", label: "Жилищное хозяйство" },
      ],

          selectList: [
  {
    model: {
      value:'', 
      label:'Все отрасли'
      },
      options: [
      {
     value:'1', 
     label:'Промышленность' 
    },
    {
      value:'4',
       label:'Сельское хозяйство'
    },
    {
      value:'6',
      label:'Лесное хозяйство'
    },
      {
      value:'7',
      label:'Строительство'
    },
    {
      value:'8', 
      label:'Прочие виды материального произ-ва'
    },
    {
      value:"", 
      label:'Все отрасли'
    }
    ]
    ,
    label: 'Вид деятельности'
  },
  {
    model:
    {
      value:'',
      label:'Все'
     },
     
    label: 'Вид поддержки',
    options: [
      {
     value:'direct',
      label:'Прямая финансовая поддержка' 
    },
    {
      value:'loan_funding', label:'Заемная финансовая поддержка'
    },
    {
      value:'profit', label:'Льготы по налогу на прибыль'
    },
      {
      value:'transport', label:'Льготы по транспортному налогу'
    },
    {
      value:'property', label:'Льготы по налогу на имущество'
    },
    {
      value:"subsidies", label:'Субсидии'
    },
       {
      value:"grant", label:'Гранты'
    },
           {
      value:"rent", label:'Льготы по аренде'
    },
           {
      value:"garant", label:'Гарантии'
    },
           {
      value:"earth", label:'Льготы по земельному налогу'
    },
               {
      value:"nds", label:'Льготы по уплате НДС'
    },
                   {
      value:"customs", label:'Льготы по уплате НДС'
    },
        {
      value:"infrastructure", label:'Субсидии на инфраструктуру'
    },
           {
      value:"", label:'Все виды поддержки'
    },
    ]
  },
  {
    label: 'Тип проекта',
    model:{
      value:'', 
      label:'Все'
      },
    options:[
      {
      value:'3', 
      label:'Модернизация',
    },
      {
        value:'2',
         label:'Реконструкция'
      },
    {
      value:'1',
      label:'Новое строительство'
    },
    {
    value:'', 
    label: 'Все'
    }
    ],
  },
  {
    label: 'Тип получателя поддержки',
    model:{
      value:'', 
      label:'Все'
      },
        options:[
          {
      value:'small', 
      label:'МСП',
    },
      {
        value:'legally',
         label:'Юр. Лицо'
      },
    {
      value:'municipality', 
      label:"Муниципалитет"
    },
    {
    value:'', label: 'Все'
    }
    ],
  },
],
    };

  },

  methods: {

    open(){
      window.open('/files/podderzhka.pdf')
    },
    onSubmit() {
      let backendurl = "https://backendinvest.admlr.lipetsk.ru/support/?format=json";
      let url = backendurl;
      console.log(this.selectList[0].options[0])
      if (this.selectList[0].model.value == "" && this.selectList[2].model.value == "") {
        
        url = `${backendurl}&type=${this.selectList[1].model.value}&recipient=${this.selectList[3].model.value}`;
      } 
      else if (this.selectList[2].model.value == "") {
        url = `${backendurl}&type=${this.selectList[1].model.value}&recipient=${this.selectList[3].model.value}&industry=${this.selectList[0].model.value}`;
      } 
      else if (this.form.industry.valueOf() == "") {
        url = `${backendurl}&type=${this.selectList[1].model.value}&type_project=${this.selectList[2].model.value}&recipient=${this.selectList[3].model.value}`;
      }
       fetch(url)
        .then((response) => response.json())
        .then((data) => {
      this.support = data})
    },

  },


  computed: {
    getSupport() {
      return this.support = this.$store.state.support.stateSupport
    },
    select(){
      for(let i = 0; i < this.selectList.length;  i++){
       this.selectList[i].label = this.$i18n.t(`Support.selectLabel[${i}].label`)
       
          for (let x = 0; x< this.selectList[i].options.length; x++){
          this.selectList[i].options[x].label = this.$i18n.t(`Support.selectLabel[${i}].options[${x}].label`)
          
        }
      }    
      
    }
  },
  created(){
    this.support = this.getSupport
  }
};
</script>
