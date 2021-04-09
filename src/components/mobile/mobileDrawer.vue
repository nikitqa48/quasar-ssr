<template>
   <q-drawer
        :value="leftDrawer"
        dark
        mini-to-overlay
        :width="width"
        :breakpoint="500"
        bordered
        no-swipe-open
        no-swipe-close
        content-class="bg-grey-10 fit"
      >
        <q-scroll-area class="fit" >
          <q-list padding class="menu">
            <q-item >
                  <router-link to='/' class="fit flex border">
      <div class="logo">
        <q-img src='icons/logo-svg.svg' class="fit"/>
    </div>
    </router-link>
    <q-btn icon="close" flat  @click="closeDrawer"/>
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
  name: 'mobileDrawer',
  data () {
    return {
      drawer:false,
      width:500
    }
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
    mounted(){
      this.width = window.innerWidth
    },
    updated(){
       window.addEventListener('orientationchange', this.getClientWidth)
    },
    methods:{
       getClientWidth(){
          return this.width = window.innerHeight
       },
       closeDrawer(){
         this.$store.dispatch('drawer/changeDrawer', false)
       }
    }
}
</script>
<style scoped>
.menu{
display:flex;
flex-direction:column;
justify-content:space-between;
}
</style>