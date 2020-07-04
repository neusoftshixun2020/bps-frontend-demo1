import { getProInfo } from '@/api/wishlist'

const wishlist = {

  actions:{
    GetProInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getProInfo().then(response => {
          commit('')
          resolve(response)
        }).catch(error => {
          reject(error)
          console.log("获取失败")
        })
      })
    }}

}

export default wishlist

