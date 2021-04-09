import axios from 'axios'

export function getTerritory ({ commit }, value) {
        const url = "https://backendinvest.admlr.lipetsk.ru/greenfield/?format=json"
        return axios.get(url).then(
            ({ data }) => {
          commit('changeTerritory', data)
        })
}

export function actionListValue({ commit }, value) {
  commit('changeListValue', value)
}

export function actionChangeListValue({ commit }, value) {
  commit('changeListBlockValue', value)
}

export function actionDetailValue({ commit }, value) {
  commit('changeDetailValue', value)
}

export function actionDetailPlot({ commit }, object) {
  commit('changeDetailPlot', object)
}
export function actionFilterValue({ commit }, value) {
  commit('changeFilterBlockValue', value)
}