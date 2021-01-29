// import something here
import scrolloverflow from 'fullpage.js/vendors/scrolloverflow.js'
import fullpage from "vue-fullpage.js";

import Vue from "vue";
// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
export default async (/* { app, router, Vue ... } */) => {
  const active = Vue.use(fullpage, scrolloverflow)
}

