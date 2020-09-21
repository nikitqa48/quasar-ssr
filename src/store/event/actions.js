import axios from 'axios'
export function getEvent ({ commit }) {
    const url = 'http://127.0.0.1:8000/event_api/'
        return axios.get(url).then(
            ({ data }) => {
          commit('changeEvent', data)
        })
}