import axios from 'axios'
export function getNews ({ commit }) {
    const url = 'https://backendinvest.admlr.lipetsk.ru/news/'
    return axios.get(url).then(({ data }) => {
      commit('changeNews', data)
    })
}
export function getAllNews({commit}, page) {
  let url = 'https://backendinvest.admlr.lipetsk.ru/all_news/'
  let paginationUrl = ''
  if(page != 1){
   paginationUrl = `${url}?offset=${(page-1)*12}`
   url = paginationUrl 
  }
  else {
    url = `https://backendinvest.admlr.lipetsk.ru/all_news/` 
  }
  return axios.get(url).then(({ data }) => {
    commit('changeAllNews', data)
  })
}



