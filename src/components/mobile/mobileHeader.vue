<template>
  <q-header elevated class="deckstop">
    <div class="container">
      <q-toolbar>
        <q-tabs indicator-color="blue-7" class="my-tabs" active-color="blue">
          <div class="items">
            <router-link to="/" style="align-self: center">
              <div class="flex fit">
                <img src="icons/logo_button.png" class="fit" />
              </div>
            </router-link>
            <span class="span-bold" style="font-weight: 400">
              <span class="span-bold">Инвестиционный портал</span>
              <br />Липецкой области</span
            >
            <q-btn flat @click="disableDrawer" round dense icon="menu" />
          </div>
        </q-tabs>
      </q-toolbar>
    </div>
  </q-header>
</template>

<script>
export default {
  name: "mobileHeader",
  data() {
    return {

    };
  },
  computed: {
    leftDrawer() {
      return this.$store.state.drawer.drawer;
    },
  },

  methods: {
    disableDrawer() {
      return this.$store.dispatch("drawer/changeDrawer", !this.leftDrawer);
    },
  },
};
</script>
<style scoped>
.my-tabs {
  width: 100%;
}

.container {
  background: #515151;
  display: flex;
  min-height: 8vh;
}
.span-bold {
  font-weight: 600;
}
.items {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.q-router-link--active {
  color: #52a4df;
  font-weight: 600;
  border-bottom: 3px solid #52a4df;
}
</style>