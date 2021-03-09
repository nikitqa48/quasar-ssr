import axios from 'axios'
export function getDocs ({ commit }, route) {
    const url = 'http://127.0.0.1:3030/file/'
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
