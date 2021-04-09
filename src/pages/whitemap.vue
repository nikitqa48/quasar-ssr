<template>
  <q-page class="page">

    <div class='container'>
    <div class="left_map__container">
  <p class="headline"> {{$t('interactiveMap')}}</p>
  <svgmap/>
            </div>
          </div>
          <div class="right_map">
            <div class="right_container">
          <rightSide/>
            </div>
          </div>
   
  </q-page>
</template>
<style scoped>
.title{
  margin-top:2%;
  letter-spacing: 10%;
  font-size: 150%;
}
.pres{
  width: 96%;
  margin-bottom: 1%;
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
.description{
  margin-top: 5%;
  font-size: 105%;
  color:rgb(32,38,42,1);
}
.description span{
  margin: 0;
}
.gr{
  font-size: 105%;
  margin:.5vw 0 0 0;
  color:rgb(157,157,157,1)
}
.cadastr{
  font-size: 105%;
  margin:0 0 0 1vw;
}
.greenfield_image{

  height:20vh;
}
.greenfield_inside{
  cursor: pointer;
  width:100%;
  height:100%;
}
.active {
  opacity: 1 !important;
  fill: #8fbedf;
}
.square{
  padding:1%;
  border-bottom:0.01rem solid rgba(0,0,0,0.2);
}
.list{
  margin-top:1vh;
  padding-bottom:1vh;
  font-size:1.5vw;
  font-weight:600;
}
.note{
  font-size:0.8vw;
  opacity:.6;
}
.btn{
  padding-bottom:5%;
}
.greenfield_border {
  font-size: 1vw;
  display: flex;
  margin-bottom: 1.2%;
  cursor: pointer;
  border-radius:8px;
  border:0.1rem solid rgba(0,0,0,0.2);
  flex-direction: column;
  width: 96%;
}
.greenfield_border:hover{
 background:#8fbedf;
 color:white;

} 
.square_number{
   width: 100%;
  padding-bottom: 1vh;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.wrap_number{
  margin-right: 1vw;
}



.svg_map{
    left: 0;
    z-index: 2;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    position: absolute;
    outline: none;
}
.part {
  opacity: 0;
  cursor: pointer;
}

.number_row span {
  margin-left: 0.2vw;
  margin-right:0.5vw;
  font-size: 80%;
  opacity: 0.3;
}

.part:hover {
  opacity: 1 !important;
  fill: #0D7DD9 !important;
}
.click {
  opacity: 1 !important;
  fill: #0D7DD9 !important;
}
.left_map__container{
  width:97%;
  margin-left:2%;
}
.right_container{
  width:90%;
  margin:auto;
  height:100%;
}
.square_name__territory{
  font-size:150%;
  opacity:.9;
  margin:0;
  font-weight:600;
}
.left_map{
  width:50vw;
  display:flex;
  margin:auto;

  position:relative;
  flex-direction: column;
}
.svg{
  width:100%;
}
.active{

}
.right_map{
  width:35%;

}
.container{
width:67%;
 background: #F2F6FA;
  display:flex;
  flex-direction: row;

}
.square_scroll {
  height: 83vh;
  max-width: 100%;
}
.page{
  width:100%;
  display:flex;
  flex-direction: row;
  margin:auto;
}
.headline{
  margin-top:1vh;
  line-height: 35,28px;
  font-size: 180%;
}
.contain_qscroll{
  display: flex;
  justify-content: space-between;
  margin-top: 4%;
}
.class{
  display: flex;
  justify-content:space-between;
  flex-wrap: wrap;
}
.right_wrapper{
    display: flex;
  flex-direction: column;
}


</style>
<script>

export default {
    preFetch($route) {
    return $route.store.dispatch("square/getTerritory");
  },
  components:{
    svgmap:()=> import ('components/desktop/map/svgmap.vue'),
    rightSide:()=> import ('components/desktop/map/rightSide.vue')
  },
  data(){
    return{
    }
  },
  mounted() {
    this.$emit("disableLoading", false);

  },
  destroyed() {
    return this.$emit("disableLoading", true);
  },
  methods:{
    //     onSubmit() {
    //   const greenfield_url =
    //     "https://backendinvest.admlr.lipetsk.ru/greenfield/?format=json&type=" +
    //     this.type;
    //   let oez_ppt = [];
    //   let oez = [];
    //   let industrial = [];
    //   let any = [];
      
      
    //   fetch(greenfield_url)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       this.green = data;
       
    //       for (let i = 0; i < data.length; i++) {
    //         if (data[i].territory == "oez") {
    //           oez_ppt.push(data[i]);
    //         } else if (data[i].territory == "oezru") {
    //           oez.push(data[i]);
    //         } else if (data[i].territory == "industrial") {
    //           industrial.push(data[i]);
    //         } else if (data[i].territory == "any") {
    //           any.push(data[i]);
    //         }
    //       }
    //       this.green.any = any;
    //       this.green.industrial = industrial;
    //       this.green.oez = oez_ppt;
    //       this.green.oez_ru= oez;
    //     })
      
    // },
    //     submit() {
    //   let data2 = {
    //     name: this.name,
    //     organisation: this.organisation,
    //     phone: this.phone,
    //     email: this.email,
    //     comment: this.comment,
    //     project_id: this.project_id,
    //   };
    //   let data = JSON.stringify(data2);
    //   fetch("https://backendinvest.admlr.lipetsk.ru/request/", {
    //     method: "POST",
    //     body: data,
    //     headers: { "content-type": "application/json" },
    //   })
    //     .then(function (response) {
    //       return response.json();
    //     })
    //     .then(function (data) {
    //       alert("С вами свяжутся");
    //     });
    //   this.medium = !this.medium;
    // },
  






  },

}
</script>
