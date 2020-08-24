import axios from 'axios'
export function getConctact ({ commit }) {
    const url = 'https://backendinvest.admlr.lipetsk.ru/contacts/'
        return axios.get(url).then(
            ({ data }) => {
          commit('changeContact', data)
        })
}