import axios from 'axios'
export function getProject ({ commit }) {
    const url = 'https://backendinvest.admlr.lipetsk.ru/project/'
    return axios.get(url).then(
        ({ data }) => {
      commit('changeProject', data)
    })
}