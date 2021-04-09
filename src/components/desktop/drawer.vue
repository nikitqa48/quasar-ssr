<template>
       <q-drawer
        v-model="drawer"
        show-if-above
        dark
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        mini-to-overlay
        :width="200"
        :breakpoint="500"
        bordered
        content-class="bg-grey-10 fit"
      >
        <q-scroll-area class="fit" >
          <q-list padding  style="height:90vh; display:flex;flex-direction:column; justify-content:space-between;" class="menu">
            <q-item >
                  <router-link to='/' class="fit flex border">
      <div class="logo">
        <q-img src='icons/logo-svg.svg' style="width:100%;"/>
    </div>
    </router-link>
            </q-item>
            <div>
            <q-item clickable v-ripple v-for="(menuItem, index) in menuList" :key='index' :to="menuItem.to" class="section" >
              <q-item-section avatar >
                <q-icon :name="menuItem.icon" />
              </q-item-section>

              <q-item-section v-html="menuItem.label" class="label">
                
              </q-item-section>
            </q-item>
          </div>
          </q-list>
        </q-scroll-area>
      </q-drawer>
</template>

<script>
export default {
  name: "desktopDrawer",
  data() {
    return {
      drawer: true,
      miniState: true,

    };
  },
  computed:{
    leftDrawer(){
      return this.$store.state.drawer.drawer
    },
    menuList(){
      let list = [   
        {
          icon: "mdi-map-marker",
          label: this.$t('regionDrawer'),
          separator: false,
          to: "/region",
        },

        {
          icon: "mdi-map",
          label: this.$t('squareDrawer'),
          separator: false,
          to: "/square",
        },
        {
          icon: "mdi-bank",
          label: this.$t('supportDrawer'),
          separator: false,
          to: "/support",
        },

        {
          icon: "mdi-folder-open",
          label: this.$t('projectDrawer'),
          separator: false,
          to: "/project",
        },
        {
          icon: "mdi-newspaper-variant",
          label:this.$t('newsDrawer'),
          separator: false,
          to: "/news",
        },
        // {
        //   icon: 'mdi-calendar-multiple-check',
        //   label: 'События',
        //   separator: false,
        //   to:'/event'
        // },
        {
          icon: "mdi-file",
          iconColor: "primary",
          label:  this.$t('documentsDrawer'),
          to: "/documents",
          separator: false,
        },
        {
          icon: "mdi-tooltip-account",
          iconColor: "primary",
          label: this.$t('contactsDrawer'),
          separator: false,
          to: "/contacts",
        },
        {
          icon: "mdi-file",
          iconColor: "primary",
          label: this.$t('climate'),
          separator: false,
          to: { name: "doc", params: { slug: "nacionalnyj-rejting" } },
        },
      ]
    return list
    }
    },
  methods:{
    changeDrawer(){
      return this.$store.dispatch('drawer/changeDrawer', !this.leftDrawer)
    },
    disableLoading(){
      // Отключение загрузки 
      return this.$store.dispatch('loading/changeLoading', false)
    }
  }
};
</script>
<style scoped>
@font-face {
  font-family: "Montserrat";
  src: url("../../css/fonts/Montserrat/Montserrat-Regular.woff") format("woff");
}
* {
  font-family: "Montserrat" !important;
}
.border{
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo{
width:3vw; 
height:6vh;
}
.label{
  max-height: 3vh;
}
.menu{
  min-height: 85%;
  display:flex;
  justify-content: space-between;
}
.section{
  margin-bottom: 2vh;
}

</style>