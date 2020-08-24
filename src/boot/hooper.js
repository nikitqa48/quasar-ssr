// import something here
import hooper from 'hooper'
import Vue from 'vue'
// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
export default async (/* { app, router, Vue ... } */) => {
  // something to do
  Vue.use(hooper)
}
