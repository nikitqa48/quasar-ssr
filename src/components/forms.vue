<template>
<div>        
        <button 
      class="fixed" 
       @click="show=!show">
    <div class="img">
      <img src="icons/call.svg">
    </div>
     Обратная связь
        </button>
        <q-dialog
      v-model="show" >
      <q-card  class = 'style' style="width: 55%; max-width: 100vw; height:83vh;">
        <q-card-section class="form_container">
        <q-card-section class="card">
          <div class="fond text-h6" > <span style="border-bottom:2px solid white; padding-bottom:0.2%;">Связаться с нами </span>
         </div>
           
              <q-btn
              v-close-popup
              align="right"
      padding="none"
      color="white"
      flat
      icon="close"
    />
        </q-card-section>
        <q-card-section class="text-white" style="opacity:.8">
          Отправьте ваши контакты и наши сотрудники свяжутся с вами в ближайшее время 
        </q-card-section>
  <q-card-section class="q-pt-none">
    
         <q-form class='form'>
           <div class="wrap">
              <div class="column">
           <span class="text-white" style="opacity:.8"><b>Фамилия *</b></span>
          
          <q-input class ='input'  filled v-model="surname" dark lazy-rules placeholder="Введите фамилию"
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
           <span class="text-white" style="opacity:.8"><b>Отчество</b></span>
          
          <q-input class ='input'  filled v-model="middle_name" dark  placeholder="Введите Отчество"
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
              <span class="text-white" style="opacity:.8"> <b>Комментарий </b> </span>
             <q-input
             dark 
             style="width:100%; margin-top:2%;"
      v-model="text"
      filled
      placeholder="Введите комментарий"
      type="textarea"
      
    />
            </div>
            <div class="column" style="justify-content:flex-end;">
    <span style="opacity:.8; color:white; font-size:0.8vw;"> Поля помеченные * обязательны для заполнения
    <br><br>Нажимая на кнопку «Отправить» Вы даёте согласие на обработку своих персональных данных в соответствии со статьей 9 Федерального закона от 27 июля 2006 г. N 152-ФЗ «О персональных данных»
    </span>
            </div>
          </div>
          
         </q-form>
                <q-card-actions align="left" class="text-white">
          <q-btn label="Отправить" rounded type ='submit'v-close-popup  no-caps color="cyan-6" @click="onSubmit" style="width:20%; margin-top:3%;" />
        </q-card-actions>
 
        </q-card-section>
    
        </q-card-section>
      </q-card>
    </q-dialog>
     <!-- <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="fixed-center"
      v-if="show"
    >

    <div class="form_button">
    <q-btn 
    :dense=true
    flat round color="white" icon="close" @click="show=!show"/>
    </div>
    <div class="form_container">
          <h2 class="left-top">
      Связаться с нами
    </h2>
    <hr class="border_bottom">
   <div class="form_inside">
     <div class="inside">
        <q-input
        dark outlined
        v-model="surname"
        label-color = 'grey-2'
        class="input"
        
        label="Ваша фамилия *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Пожалуйста, введите вашу фамилию']"
      />
      <q-input
        dark outlined
        v-model="name"
        class="input_right"
        label-color = 'grey-2'
        label="Ваше имя *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Пожалуйста, введите имя']"
      />
     </div>
     <div class="inside">
            <q-input
        dark outlined
        class="input"
        label-color = 'grey-2'
        v-model="middle_name"
        label="Ваше отчество *"
       
      />
            <q-input
            dark outlined
        class="input_right"
        label-color = 'white'
        type = 'tel'
        v-model="phone"
        label="Телефон *"
       
      />
     </div>
     <div class="inside">
      <q-input
      class="input"
        dark outlined
    
        type='email'
        v-model="email"
        label="Почта*"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Пожалуйста, введите вашу почту']"
      />
  
        <q-input
      class="input_right"
        dark outlined
    
        v-model="organisation"
        label="Организация*"

      />
      
   </div>
   </div>
      <div>
        <q-btn label="Отправить" type="submit" color="primary"/>
        <q-btn label="Сбросить" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
        </div>
    </q-form> -->
    
</div>
</template>
<script>
export default {
    data(){
        return{
      show:false,
      name:null,
      phone:null,
      text:null,
      middle_name:null,
      organisation:null,
      leftDrawerOpen: false,
      info:null,
      surname:null,
      email:null,
        }
    },
     methods: {
      onReset () {
    this.name = null
    this.middle_name = null
    this.organisation = null
    this.phone = null
    this.surname = null
    this.email = null
    this.text = null
     },
    onSubmit () {
      let data2 ={name:this.name,
                  surname:this.surname,
                  middle_name:this.middle_name,
                  email:this.email,
                  organisation:this.organisation,
                  phone:this.phone,
                  text:this.text
                  }
      let data = JSON.stringify(data2)
    fetch('https://backendinvest.admlr.lipetsk.ru/',{
      method:'POST',
      body:data,
      headers:{'content-type':'application/json'}
    }).then(function(response){
      return response.json()
    }).then(function(data){
      alert('Ожидайте')
    })
    this.onReset()
    data.show=!show
    },
    OpenPDF(){
window.open("data:application/pdf;base64, " + base64EncodedPDF);
// window.open(fileURL);
      // pdfWindow.document.write("<iframe width='100%' height='100%' src='data:assets/example.pdf;base64,"  +"'></iframe>");
    }


  }
}
</script>
<style scoped>
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
  width:97%;
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