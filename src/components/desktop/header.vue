<template>
  <q-header elevated class="desktop" >
    <div class="container">
      <q-toolbar class="deckstop" >
        <span>
          <span style="font-weight: 600">{{ $t("header.invest") }}</span>
          <br />{{ $t("header.gateway") }}</span
        >
        <q-space />
        <q-select
          v-model="lang"
          :options="langOptions"
          :label="$t('language')"
          dense
          borderless
          emit-value
          map-options
          options-dense
          class="select"
        />
        <div
        class="column text-center margin"
      
        >
          <span style="font-weight: 600; color: #727272">
            +7 4742 (51-53-68)
          </span>
          <span >
            {{ $t("phone") }}
          </span>
        </div>
        <formVue />
      </q-toolbar>
    </div>
  </q-header>
</template>

<script>
import formVue from "components/forms.vue";
export default {
  name: "headercomponent",
  components: {
    formVue,
  },
  data() {
    return {
      draw: false,
      lang: this.$i18n.locale,
      langOptions: [
        { value: "ru", label: "Russian" },
        { value: "en", label: "English" },
      ],
    };
  },
  watch: {
    lang(lang) {
      this.$i18n.locale = lang;
    },
  },
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
.select {
  min-width: 120px;
  color: white;
  margin-right: 5%;
}
.margin{
  margin-right: 2vw;
}
.container{
  background: white;
  color:black;
  min-height: 8vh;
  margin:auto;
  display: flex;
}

</style>