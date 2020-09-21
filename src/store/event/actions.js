import axios from 'axios'
export function getEvent ({ commit }) {
    const url = 'https://backendinvest.admlr.lipetsk.ru/event_api/'
        return axios.get(url).then(
            ({ data }) => {
          commit('changeEvent', data)
        })
}