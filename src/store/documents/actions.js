import axios from 'axios'
export function getDocs ({ commit }, route) {
    const url = 'https://backendinvest.admlr.lipetsk.ru/file/'
        return axios.get(url).then(
            ({ data }) => {
     
          commit('changeDocs', data)
        })
}
export function getAccess ({commit}, route){
  commit('changeAccess', route)
  // for (let value of data.section){
  //        if (route == value.slug || route == undefined && route == value.slug){
  //           commit('ChangeAccess', true)
  //        }
  //      }
}
