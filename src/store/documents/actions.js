import axios from 'axios'
export function getDocs ({ commit }) {
    const url = 'http://127.0.0.1:8000/file/'
        return axios.get(url).then(
            ({ data }) => {
          commit('changeDocs', data)
        })
}