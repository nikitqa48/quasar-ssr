import axios from 'axios'
export function getSupport ({ commit }) {
        const url = "https://backendinvest.admlr.lipetsk.ru/support/?format=json"
        return axios.get(url).then(
            ({ data }) => {
          commit('changeSupport', data)
        })
}
export function getDetailSupport ({commit}, url){
  return axios.get(url).then(
      ({ data }) => {
      commit('changeDetailSupport', data)
  })
}