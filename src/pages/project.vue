<template>
    <q-page class='wrapper'>
    <q-scroll-area
      style="height:93vh; max-width: 100%;"
    :thumb-style="thumbStyle"
    >
     
        <div class="container">
            <div class="text-h4 q-mb-md">
                Реализуемые проекты Липецкой области
            </div>
            <div class="filter">
            <q-expansion-item
                         dark
        expand-separator
        label="Фильтр проектов"
        dark
        :header-style="{ backgroundColor: 'rgba(42, 50, 74, 0.6)' }"
        style="border-radius: 4px; margin-top:2%; "
      >
        <div class="form_filter">
    <q-form @submit="getProjectItems" class="q-gutter-md">
      <div class="q-mt-xl">
        <div class='mobile' style="display:flex; justify-content:space-between; ">
        <q-input dark outlined v-model="number" label="Сумма инвестиций (млн руб)" class = 'input_filter' stack-label  type="number"   />
       <q-select standout="bg-cyan-6 text-white"   v-model="industry"  label="Отрасль"  :options= 'options'  dark  outlined
       option-value="id" 
        class = 'input_filter'/> 
        <q-select standout="bg-cyan-6 text-white"  dark  outlined v-model="year"  label="Год реализации"  :options= 'years' class = 'input_filter'/> 
        </div>
      </div>

      <div class="btn">
        <q-btn label="Поиск" type="submit" color="cyan-6" class="search" />
      </div>
    </q-form>
        </div>
      </q-expansion-item>
 <q-dialog
      v-model="medium"
    >
      <q-card style="width: 50%; max-width: 80vw;">
        <q-card-section class="form_container">
        <q-card-section class="card">
          <div class="text-h6"> <b>Стать инвестором</b></div>
              <q-btn
              v-close-popup
              align="right"
      padding="none"
      color="primary"
      flat
      icon="close"
    />
        </q-card-section>

        <q-card-section class="q-pt-none">
          Отправьте ваши контакты и наши сотрудники свяжутся с вами в ближайшее время 
        </q-card-section>
  <q-card-section class="q-pt-none">
    
         <q-form class='form'>
           <div class="wrap">
              <div class="column">
           <span><b>ФИО *</b></span>
          
          <q-input class ='input'  filled v-model="name"  lazy-rules placeholder="Введите ФИО"
        :rules="[ val => val && val.length > 0 || 'Пожалуйста, введите ваше имя']" style="width:100%;" />
        </div>
        <div class="column">
       <span> <b>Организация</b> </span>
       
          <q-input class ='input' filled v-model="organisation" placeholder="Введите название" style="width:100%;" />
       </div>
          </div>
          <div class="wrap">
            <div class="column">
            <span> <b>Телефон</b></span>
          <q-input class ='input' type="number" filled v-model="phone" placeholder="Введите телефон" />
          </div>
          <div class="column">
          <span> <b>Email * </b> </span>
          <q-input class ='input'   lazy-rules
        :rules="[ val => val && val.length > 0 || 'Пожалуйста, введите вашу почту']"
         filled v-model="email" type='email' placeholder="Введите email*" />
          </div>
          </div>
          <div class="wrap">
            <div class="column">
              <span > <b>Комментарий </b> </span>
             <q-input
      v-model="comment"
      filled
      
      placeholder="Введите комментарий"
      type="textarea"
      
    />
            </div>
    <span class="comment"> <br>Поля помеченные * обязательны для заполнения
    <br><br>Нажимая на кнопку «Отправить» Вы даёте согласие на обработку своих персональных данных в соответствии со статьей 9 Федерального закона от 27 июля 2006 г. N 152-ФЗ «О персональных данных»
    </span>
          </div>
         </q-form>
             <q-card-actions align="left" class="bg-white text-teal">
           <q-btn label="Отправить" rounded type ='submit'v-close-popup  no-caps color="cyan-6" @click="submit" class='sub' style="width:20%; margin-top:5%;" />
        </q-card-actions>
        </q-card-section>
    
        </q-card-section>
      </q-card>
    </q-dialog>
      <div class="item" v-for="item in project">
          <div class="item_image__div">
                <q-img
        :src="item.image"
        style="height:100%"
        spinner-color="white"
      >
                </q-img>
           
          </div>
          <div class="right_content" >
            
       <p class="text-h5"> {{item.name}}</p>
              <p> <span style="opacity: .6;"> Отрасль:</span> {{item.industry}} </p>
              <p> <span style="opacity: .6;">Описание: </span>{{item.body}} </p>
              <p> <span style="opacity: .6;">Текущее состояние проекта: </span>  {{item.now}}</p>
              <p> <span style="opacity: .6;"> Реализация проекта: </span>  с {{item.start}} по {{item.finish}}г.</p>
              <p> <span style="opacity: .6;">Сумма инвестиций: </span>{{item.sum}} млн.руб.</p>
              <q-btn flat class="invest" @click="form(item)" v-if="item.help == true">Стать инвестором </q-btn>
          </div>
      </div>
      
            </div>
        </div>
        </q-scroll-area>
    </q-page>
</template>
<style scoped>
@media screen and (max-width: 900px) {
  .form_filter{
    flex-direction: column!important;
  }
  .comment{
    width:100%!important;
    font-size: 3vw!important;
  }
  .q-card{
    width: 100%!important;
    height: 100%!important;
    max-width: 100vw!important;
  }
  .wrap{
    flex-direction: column!important;
  }
  .column{
    width: 100%!important;
  }
  .sub{
    width:100%!important;
  }
.form_container{
  width:100%!important;
  padding:0!important;
}
.blue_container{
  height: auto!important;
}
  .invest{
    width:100%!important;
  }
  .item_image__div{
    max-width: 100%!important;
  }
  .mobile{
    flex-direction: column;
  }
  .right_content{
    width: 95%!important;
  }
  .text-h4{
    margin-top: 9vh!important;
    text-align: center;
    font-weight: 600!important;
    font-size: 5.3vw!important;
  }
  .text-h5{
    font-size: 1.3rem!important;
  }
  .item{
    flex-direction: column;
  }
  .container{
    width: 90%!important;
  }
  .search{
    width:100%!important;
  }
  .q-mt-xl{
    align-self: center;
    margin-top: 7%!important;
  }
  .btn{
    padding-bottom: 2%;
  }
  .input_filter{
    margin-bottom: 3%!important;
    background:none!important;
    margin:auto;
    width: 100%!important;
  }
}
.form{
  display:flex;
  flex-direction: column;
}
.form_container{
  margin:auto;
  padding-top: 1.3vw;
  width:95%;
}
.input_filter{
  width: 30%;
}
.wrap{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  justify-content: space-between;
}
.comment{
  color: #353535d7;
  align-self: flex-start;
  width:48%;
  font-size: 0.7vw;
}
.column{
  width:48%;
}
.card{
  display: flex;
  justify-content: space-between;
}
.input{
  margin-bottom: 1%;
}
    .container{
        display: flex;
        flex-direction: column;
        width:80%;
        margin:auto;
    }
    .text-h4{
        margin-top: 4vh;
        color:white;
    }
    .item{
        width:100%;
        border-bottom: 1px solid grey;
        padding-bottom: 0.5vh;
        margin-top: 5vh;
        margin-bottom: 5vh;
        display: flex;
    }
    .right_content{
        display:flex; 
        width:80%;
        flex-direction:column; 
        margin-left:2%;
    }
*{
  font-family: 'Montserrat';
}
.form_filter{
    background: rgba(42, 50, 74, 0.6);
    color:white;
    padding:1%;
}
    .wrapper{
        color:white;
       background: #3A4566;
    }
.item_image__div{
    min-width:15vw;
    max-width: 15vw;

}
.item_image__div img{
    width:100%!important;

}
.invest{
  color:white;
  width: 20%;
  border-radius: 15px;
  background:#2CCCD8;
  font-size: 0.8em;
}
</style>
<script>
import headerVue from "../components/header.vue";
import formsVue from "../components/forms.vue";

export default {
  preFetch({store}){
    return store.dispatch('project/getProject')
  },
    data(){
        return{
            industry:{
              label:'все',
              id:''
            },
                    thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75
      },
            medium:false,
            name:'',
            project_id:'',
            email:'',
            phone:'',
            organisation:'',
            comment:'',
            year:2010,
            number:'',
            options:[{ id: '',label:'Все' },
            { id:'1', label:'Промышленность'},
            { id:'4',label: 'Сельское хозяйство'},
      {id:'6', label: 'Лесное хозяйство'}, {id:'7', label:'Строительство'},
      {id:'8', label:'Прочие виды деятельности сферы материального производства'}, {id:'9', label:'Обслуживание сельского хозяйства'},
      {id:'10', label:'Транспорт'}, {id:'11', label:'Связь'}, {id:'12', label:'Торговля и общественное питание'},
      {id:'13', label:'Материально-техническое снабжение и сбыт'}, {id:'14', label:'Заготовки'},
      {id:'15', label:'Информационно-вычислительное обслуживание'}, {id:'16', label:'Операции с недвижимым имуществом'},
      {id:'17', label:'Геология и разведка недр, геодезическая и гидрометеологическая службы'}, {id:'18', label:'Жилищное хозяйство'},
      {id:'19', label:'Коммунальное хозяйство'}, {id:'20', label:'Непроизводственные виды бытового обслуживания населения'},
      {id:'21', label:'Здравоохранение, физическая культура и соц.обеспечение'}, {id:'22', label:'Народное образование'},
      {id:'23', label:'Культура и искусство'}, {id:'24', label:'Наука и научное обслуживание'}, {id:'25', label:'Финансы, кредит, страхование, пенсионное обеспечение'},
      {id:'26', label:'Управление'}, {id:'27', label:'Общественные объединения'}]
      ,
      years:['2010','2011','2012','2013', '2014', 
      '2015','2016','2017','2018','2019','2020','2021',
      '2022','2023','2024','2025','2026','2027','2028','2029','2030'],
      support:{},
      project:{}
        }
    },
      components:{
    headerVue, formsVue
  },
  computed:{
      getProject(){
        return this.project = this.$store.state.project.items
      }
  },
    mounted(){
    return this.$emit('disableLoading', false)
  },
  destroyed(){
    return this.$emit('disableLoading', true)
  },
  created(){
      this.project = this.getProject
  },
    methods:{
      form(project){
         this.project_id = project.id
     this.medium =! this.medium
          
      },
      submit(){
                let data2 ={name:this.name,
                  organisation:this.organisation,
                  phone:this.phone,
                  email:this.email,
                  comment:this.comment,
                  project_id: this.project_id
                  }
      let data = JSON.stringify(data2)
    fetch('https://backendinvest.admlr.lipetsk.ru/request/',{
      method:'POST',
      body:data,
      headers:{'content-type':'application/json'}
    }).then(function(response){
      return response.json()
    }).then(function(data){
      alert('С вами свяжутся')
    })
          this.medium =! this.medium
         
      },
        getProjectItems(){''
      let url = ''
      if (this.industry.id == "" && this.number == "") {
        url = `https://backendinvest.admlr.lipetsk.ru/searchyear/${this.year}`
      }
        else if(this.industry.id == '') {
          url = `https://backendinvest.admlr.lipetsk.ru/summyear/${this.number}/${this.year}?format=json`
        }
      else if (this.industry == '' && this.number != ''){
        url = `https://backendinvest.admlr.lipetsk.ru/searchyear${this.year}`
      }
      else {
        url = `https://backendinvest.admlr.lipetsk.ru/project/${this.number}/${this.industry.id}/${this.year}`
      }
       fetch(url)
        .then((response) => response.json())
        .then((data) => {
      this.project = data})
    }
     },
     
    }

</script>