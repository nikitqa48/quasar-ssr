import axios from 'axios'
export function getTerritory ({ commit }) {
        const url = "https://backendinvest.admlr.lipetsk.ru/greenfield/?format=json"
        return axios.get(url).then(
            ({ data }) => {
          commit('changeTerritory', data)
        })
}

