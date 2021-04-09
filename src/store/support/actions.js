import axios from 'axios'
export function getSupport ({ commit }) {
        const url = "https://backendinvest.admlr.lipetsk.ru/support/"
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
export function CheckConnect ({commit}){
  const url = "https://backendinvest.admlr.lipetsk.ru/check/"
  return axios.get(url).then(
      ({ data }) => {
      commit('changeCheck', data)
  })
}