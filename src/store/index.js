import Vue from 'vue'
import Vuex from 'vuex'
import loading from './loading'
import lastNews from './lastNews'
import square from './territory'
import support from './support'
import contacts from './conctact'
import project from './project'
import event from './event'
import drawer from './drawer'
import docs from './documents'
Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      loading,
      lastNews,
      square,
      support,
      event,
      contacts,
      drawer,
      docs,
      project
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
