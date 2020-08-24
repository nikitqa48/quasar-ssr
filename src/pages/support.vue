<template>
  <q-page class="support_wrap">
 
    <div class="container">
  
      
      <h4>Государственная поддержка</h4>

      <q-form @submit="onSubmit" class="blue_container">
        <div class="perekrestok">
          <div class="mobile">
            <div class="wrap">
              <span class="text">Вид деятельности:</span>

              <select v-model="form.industry">
                <option value="1">Промышленность</option>
                <option value="4">Сельское Хозяйство</option>
                <option value="6">Лесное Хозяйство</option>
                <option value="7">Строительство</option>
                <option value="8">Прочие виды материального произ-ва</option>
                <option value>Все отрасли</option>
              </select>
              <!-- <q-select standout="text-white" class="inp"  v-model="industry"  :options= 'optns'    outlined :dense='true'  hide-bottom-space
              option-value="id" />-->
            </div>
            <div class="wrap">
              <span class="text">Вид поддержки:</span>
              <!-- <q-select standout="text-white" class="inp"  v-model="type"  :options= 'optns_type'  outlined :dense='true'  hide-bottom-space  
              option-value="id" />-->
              <select v-model="form.type">
                <option value="direct">Прямая финансовая поддержка</option>
                <option value="loan_funding">Заемная финансовая поддержка</option>
                <option value="profit">Льготы по налогу на прибыль</option>
                <option value="transport">Льготы по транспортному налогу</option>
                <option value="property">Льготы по налогу на имущество</option>
                <option value="subsidies">Субсидии</option>
                <option value="grant">Гранты</option>
                <option value="rent">Льготы по аренде</option>
                <option value="garant">Гарантии</option>
                <option value="earth">Льготы по земельному налогу</option>
                <option value="nds">Льготы по уплате НДС</option>
                <option value="customs">Льготы по уплате НДС</option>
                <option value="infrastructure">Субсидии на инфраструктуру</option>
                <!-- <option value="loan_profit"> Кредиты под залог создаваемого имущества</option> -->
                <option value>Все виды поддержки</option>
              </select>
            </div>
            <div class="wrap">
              <span class="text">Тип проекта:</span>
              <select v-model="form.type_project">
                <option value="3">Модернизация</option>
                <option value="2">Реконструкция</option>
                <option value="1">Новое строительство</option>
                <option value>Все</option>
              </select>
            </div>
            <div class="wrap">
              <span class="text">Тип получателя поддержки:</span>
              <select v-model="form.recipient">
                <option value="small">МСП</option>
                <option value="legally">Юр. Лицо</option>
                <option value="municipality">Муниципалитет</option>
                <!-- <option value="all">Для всех</option> -->
                <option value>Все</option>
              </select>
            </div>
            <button class="more" type="submit">Поиск</button>
          </div>
        </div>
      </q-form>
      <div class="items">


        <div class="item" v-for="item in support" v-if="support.length != 0">
          <router-link :to="{name: 'support_detail', params: { id: item.id}}" class="rout">
            <div class="item_name">{{item.name}}</div>
            <div class="border"></div>
            <div class="item_bottom">
              <div class="wrapper">
                <span class="grey">Получатели</span>
                <span class="poluch" v-if="item.recipient == 'small'">МСП</span>
                <span class="poluch" v-if="item.recipient == 'innovation'">Инновации</span>
                <span class="poluch" v-if="item.recipient == 'all'">для всех</span>
                <span class="poluch" v-if="item.recipient == 'municipality'">Муниципалитет</span>
                <span
                  class="poluch"
                  v-if="item.recipient == 'industrial'"
                >Резиденты индустриальных парков</span>
                <span class="poluch" v-if="item.recipient == 'developers'">Разработчики ПО</span>
                <span class="poluch" v-if="item.recipient == 'resident_oez'">Резиденты ОЭЗРУ Липецк</span>
                <span class="poluch" v-if="item.recipient == 'subject'">Субъект</span>
                <span class="poluch" v-if="item.recipient == 'legally'">Юридические лица</span>
                <span class="poluch" v-if="item.recipient == 'cooperatives'">Кооперативы</span>
                <span class="poluch" v-if="item.recipient == 'not_msp'">Все кроме МСП</span>
              </div>
              <div class="wrapper">
                <span class="grey">Объем поддержки</span>
                <!-- <span class="poluch" v-if="item.implementation == 'agreement'">Соглашение </span>
              <span class="poluch" v-if="item.gchp == 'agreement'">ГЧП </span>
                <span class="poluch" v-if="item.gchp == 'any'">Любой </span>-->
                <span class="poluch">{{item.money}}</span>
              </div>
              <div class="wrapper">
                <span class="grey">Вид поддержки</span>
                <span class="poluch" v-if="item.type == 'direct'">Инвестиции</span>
                <span class="poluch" v-if="item.type == 'loan_funding'">Заемное финансирование</span>

                <span class="poluch" v-if="item.type == 'loan'">Налоговые льготы по налогу на займ</span>
                <span class="poluch" v-if="item.type == 'subsidies'">Субсидии</span>
                <span
                  class="poluch"
                  v-if="item.type == 'profit'"
                >Налоговые льготы по налогу на прибыль</span>
                <span
                  class="poluch"
                  v-if="item.type == 'property'"
                >Налоговые льготы по налогу на имущество</span>
                <span class="poluch" v-if="item.type == 'grant'">Гранты</span>
                <span class="poluch" v-if="item.type == 'rent'">льготы по аренде</span>
                <span class="poluch" v-if="item.type == 'garant'">гарантии</span>
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
                <span class="grey">Вид деятельности</span>
                <!-- <span class="poluch" v-if="item.implementation == 'agreement'">Соглашение </span>
              <span class="poluch" v-if="item.gchp == 'agreement'">ГЧП </span>
                <span class="poluch" v-if="item.gchp == 'any'">Любой </span>-->
                <span class="poluch" v-if="item.industry != undefined">{{item.industry.join(', ')}}</span>
              </div>
            </div>
          </router-link>
        </div>

      </div>

    </div>
   
  </q-page>
</template>
<script>
</script>
<style scoped>
@media screen and (max-width: 900px) {
  .mobile {
    width: 95%;
    display: flex;
    flex-direction: column;
    margin: auto;
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
  .perekrestok {
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
  color: #56718a;
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
  border-radius: 5px;
  margin-left: 10%;
  height: 3.5vh;
  width: 6vw;
}
.item {
  background: rgba(35, 46, 75, 0.7);
  display: flex;
  padding-top: 2vh;
  z-index: 1;
  flex-direction: column;
  width: 100%;
  margin-bottom: 4vh;
}
.item:hover {
  background: rgba(59, 70, 104, 0.7);
}
.item:first-child {
  margin-top: 7vh;
}
.perekrestok {
  background: rgba(35, 46, 75, 0.7);
  padding-bottom: 2vh;
  align-self: center;
  display: flex;
  flex-direction: row;
  min-width: 90%;
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("/image/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
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
  margin-top: 10vh;
  font-size: 1.8vw;

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
      url: "http://127.0.0.1:8000/support/?format=json",
      form: {
        industry: "",
        type: "",
        recipient: "",
        type_project: "",
        support_type: "",
      },
      shape: "line",
      optns: [
        { id: "", label: "Все" },
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
    };
  },
  methods: {
    onSubmit() {
      let backendurl = "https://backendinvest.admlr.lipetsk.ru/support/?format=json";
      let url = backendurl;
      if (this.form.industry == "" && this.form.type_project.valueOf() == "") {
        url = `${backendurl}&type=${this.form.type}&recipient=${this.form.recipient}`;
      } 
      else if (this.form.type_project.valueOf() == "") {
        url = `${backendurl}&type=${this.form.type}&recipient=${this.form.recipient}&industry=${this.form.industry}`;
      } 
      else if (this.form.industry.valueOf() == "") {
        url = `${backendurl}&type=${this.form.type}&type_project=${this.form.type_project}&recipient=${this.form.recipient}`;
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
  },
  created(){
    this.support = this.getSupport
  }
};
</script>
