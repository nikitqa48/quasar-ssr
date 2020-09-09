<template>
  <q-page padding class="background">
  <q-card-section class ='description'>
    <p class="text-white" style="font-size:2em; font-weight:600; "> Уважаемые коллеги и партнеры</p>
    <p class="text-white"> Агенство инвестиционного развития Липецкой области и компания Knight Frank приглашают Вас принять участие в первой логистической конференции "Липецкая область- верное направление!"</p>
    <p class='text-white'> Спикерами и участниками мероприятия станут представители власти, ведущие производители товаров, логистические операторы, крупнейшие девелоперы, ритейлеры и дитрибьюторы, которые в режиме живого диалога обсудят точки роста и возможности развития рынка</p>
    <p class= 'small text-white' style='font-size:0.7em;'>Место проведения:Липецкая область <br> территория особой экономической зоны  "Липецк" административно-деловой центр </p>
  </q-card-section>
    <q-card-section class ='description'>
    <p class="text-h3 text-white" style="font-size:2em; font-weight:600;"> Программа </p>
    <p class="text-white"> 11 <sup> 30 </sup>- 11 <sup> 00 </sup> <span class='span'> Регистрация на мероприятие. Приветственный кофе </span></p>
     <p class="text-white"> 11 <sup> 00 </sup>- 11 <sup> 15 </sup> <span class='span'> Визитная карточка Липецкой области  </span></p>
          <p class="text-white"> 11 <sup> 15 </sup>- 11 <sup> 30 </sup> <span class='span'> Приветственное слово  </span></p>
             <p class="text-white"> 11 <sup> 30 </sup>- 11 <sup> 45 </sup> <span class='span'>Векторы развития логистического потенциала региона  </span> </p>
                 <p class="text-white"> 11 <sup> 45 </sup>- 11 <sup> 55 </sup> <span class='span'>Инвестиционная карта Липецкой области   </span></p>
                            <p class="text-white"> 11 <sup> 55 </sup>- 12 <sup> 05 </sup> <span class='span'>Действующие инструменты развития и поддержки бизнеса  </span></p>
         <p class="text-white"> 12 <sup> 05 </sup>- 12 <sup> 15 </sup> <span class='span'>Время для дискуссии</span></p>
            <p class="text-white"> 12 <sup> 15 </sup>- 12 <sup> 45 </sup> <span class='span'>Кофе-брейк</span></p>
              <p class="text-white"> 12 <sup> 45 </sup>- 13 <sup> 30 </sup> <span class='span'>Практикум. Оценка потребности в складской недвижимости со стороны бизнеса:<br></span></p>
                <p class="text-white" ><span style='opacity:0'> 12 <sup> 45 </sup>- 13 <sup> 30 </sup></span> <span class='span'>Компания «ИнтерГрупп» успешный опыт строительства складских площадей в Липецкой области</span></p>
      <p class="text-white" ><span style='opacity:0'> 12 <sup> 45 </sup>- 13 <sup> 30 </sup></span> <span class='span'> АО Фирма "Август" ключевые аргументы в пользу выбора площадки</span></p>
      <p class="text-white"> 13 <sup> 00 </sup>- 13 <sup> 30 </sup> <span class='span'>Время для дискуссии</span></p>
  </q-card-section>
        <q-card-section class="form_container">
    <p class="text-h3 text-white" style="font-size:2em; font-weight:600;  align-self:center;"> Регистрация </p>
  <q-card-section class="q-pt-none">
    
         <q-form class='form'>
           <div class="wrap">
              <div class="column">
           <span class="text-white" style="opacity:.8"><b>Фамилия *</b></span>
          
          <q-input class ='input'  filled v-model="second_name" dark lazy-rules placeholder="Введите фамилию"
        :rules="[ val => val && val.length > 0 || 'Пожалуйста, введите вашу Фамилию']" style="width:100%;" />
        </div>
        <div class="column">
       <span class="text-white " style="opacity:.8"> <b>Имя *</b> </span>
       
          <q-input class ='input' dark filled v-model="name"
          lazy-rules
        :rules="[ val => val && val.length > 0 || 'Пожалуйста, введите ваше Имя']"
           placeholder="Введите имя" style="width:100%; opacity:.8" />
       </div>
          </div>
                     <div class="wrap">
              <div class="column">
           <span class="text-white" style="opacity:.8"><b>Профиль деятельности</b></span>
          
          <q-input class ='input'  filled v-model="profile" dark  placeholder="Ваш профиль деятельности"
      style="width:100%; opacity:.8" />
        </div>
        <div class="column">
            <span class="text-white" style="opacity:.8"> <b>Телефон</b></span>
          <q-input class ='input' type="number" filled v-model="phone" placeholder="Введите телефон" style="width:100%; opacity:.8" dark />
          </div>
          </div>
          <div class="wrap">
                 <div class="column">
           <span class="text-white" style="opacity:.8"><b>Организация </b></span>
          
          <q-input class ='input'  filled v-model="organisation" dark  placeholder="Введите название"
      style="width:100%; opacity:.8" />
        </div>
          <div class="column">
          <span class="text-white" style="opacity:.8"> <b>Почта * </b> </span>
          <q-input class ='input'   dark lazy-rules
        :rules="[ val => val && val.length > 0 || 'Пожалуйста, введите вашу почту']"
         filled v-model="email" type='email' placeholder="Введите email*" style="width:100%; opacity:.8" />
          </div>
          </div>
          <div class="wrap_comment">
            <div class="column">
              <span class="text-white" style="opacity:.8"> <b>Ваша должность </b> </span>
             <q-input
             dark 
             style="width:100%; margin-top:2%;"
      v-model="role"
      filled


    />
            </div>
            <div class="column" style="justify-content:flex-end;">
    <span style="opacity:.8; color:white; font-size:0.8vw;"> 
      Нужен трансфер из города Липецка?
      <q-checkbox v-model="transfer" dark />
    </span>
            </div>
          </div>
          
         </q-form>
                <q-card-actions align="center" class="text-white">
          <q-btn label="Регистрация" rounded type ='submit'v-close-popup  no-caps color="cyan-6" @click="onSubmit" style="width:20%; margin-top:3%;"  />
        </q-card-actions>
 
        </q-card-section>
    
        </q-card-section>
    

  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data(){
    return{
      transfer:false,
      second_name:null,
      profile:null,
      name:null,
      phone:null,
      role:null,
      organisation:null,
      info:null,
      email:null,

    }
  },
  methods:{
      onSubmit () {
      let data2 ={name:this.name,
                  second_name:this.second_name,
                  profile:this.profile,
                  email:this.email,
                  organisation:this.organisation,
                  phone:this.phone,
                  role:this.role,
                  transfer:this.transfer
                  }
      let url = 'https://backendinvest.admlr.lipetsk.ru/event/'
      let data = JSON.stringify(data2)
    fetch(url,{
      method:'POST',
      body:data,
      headers:{'content-type':'application/json'}
    }).then(function(response){
      return response.json()
    }).then(function(data){
      alert('Ожидайте')
    })
    },
  },

  mounted(){
    return this.$emit('disableLoading', false)
  },
  destroyed(){
    return this.$emit('disableLoading', true)
  }
}
</script>
<style scoped>
.background{
  background: linear-gradient(180deg, #202F40 0%, #0D0D1C 100%)
}
@media screen and (max-width: 800px) {
  .fixed{
    display: none!important;
  }
}
.style{
  display:flex;
  flex-direction: column;
  height:75%;
  width: 50%;
  background:rgba(0, 0, 0, .9);
}
.card{
  display: flex;
  width:100%;

  justify-content: space-between;
}
.comment{
    color: white;
  align-self: flex-start;
  width:48%;
  font-size: 0.7vw;
}
.span{
  margin-left:2%;
}
.wrap{
    display: flex;
  flex-direction: row;
  margin-top: 2%;
  flex-wrap: nowrap;
  width: 100%;
  justify-content: space-between; 
}
.wrap_comment{
      display: flex;
  flex-direction: row;

  flex-wrap: nowrap;
  width: 100%;
  justify-content: space-between; 
}
.column{
  width:48%;
}
.description{
  width:68%;
  margin:auto;
}
.fixed{
  right: 0;
  border:none;
  height: 6vh;
  width:14vw;
  border-radius: 150px;
  margin-right: 6%;
  font-size: 0.8vw;
  color:white;
  background: #2CCCD8;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 5%;
  cursor: pointer;
  z-index: 10;
}
.fond{
  padding-top: 1.5%;
  margin: 0;
  color:white;
  
  font-size: 2.3vw;
}
.absolute:hover{
  /* background: rgba(255, 255, 255, 0.3); */
}
.img{
  width:1.2vw;
  margin-right: 0.5vw;
}
.img img{
  width:100%;
}
.form_inside{
  margin-top: 5%;
  height: 60%;
  display: flex;
  flex-direction: column;
}

.border_bottom{
  margin-right: 150%;
  width:50%;
}
.inside{
  display: flex;
}
.left-top{
  padding-top: 3%;
  margin: 0;
  color:white;
  font-size: 2.3vw;
}

.flex{
  align-items: center;
  justify-content: space-between;
}
.input{

  margin-top: 3%;
  opacity: .8;
  width:47%;
}
.input_right{
  margin-top: 3%;
  margin-left:10%;
  opacity: .8;
  width:47%;
}
.wrapp{
  align-items: center;
  display: flex;
  flex-direction: column;
}
.form_container{
  height: 90%;
  width:70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.one{ 
  margin-bottom: 10%;

}
.fixed-center{
  z-index: 10;
  display:flex;
  flex-direction: column;
  height:75%;
  width: 50%;
  background:rgba(0, 0, 0, .9);
}
*{

  font-family: 'Montserrat';
}

.form_button{
  position: absolute;
  top:0;
  right:2%;
  justify-content: flex-end;
  align-items: flex-end;
}
</style>
