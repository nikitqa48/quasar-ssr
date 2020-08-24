// import something here
import fullpage from "vue-fullpage.js";
import Vue from "vue";
// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
export default async (/* { app, router, Vue ... } */) => {
  const active = Vue.use(fullpage)
}

