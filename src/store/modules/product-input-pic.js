import { fetchList, deleteRecord, addRecord, updateRecord, searchRecord, changeState } from '../../api/product-input-pic'

const productCategory = {
  actions: {
    FetchList({ commit }) {
      return new Promise((resolve, reject) => {
        fetchList().then(response => {
          commit('')
          resolve(response)
        }).catch(error => {
          console.log('获取失败')
          reject(error)
        })
      })
    },
    DeleteRecord({ commit }, PRC_ID) {
      return new Promise((resolve, reject) => {
        deleteRecord(PRC_ID).then(response => {
          commit('')
          resolve(response)
        }).catch(error => {
          console.log('获取失败')
          reject(error)
        })
      })
    },
    AddRecord({ commit }, productInfo) {
      return new Promise((resolve, reject) => {
        console.log(productInfo)
        addRecord(productInfo.PRC_ID, productInfo.TITLE, productInfo.CATEGORY_NAME, productInfo.SECOND_CATEGORY, productInfo.image).then(response => {
          commit('')
          resolve(response)
        }).catch(error => {
          console.log('添加失败')
          reject(error)
        })
      })
    },
    UpdateRecord({ commit }, productInfo) {
      console.log('进入UpdateRecord:' + productInfo.PRC_ID)
      return new Promise((resolve, reject) => {
        updateRecord(productInfo.PRC_ID, productInfo.TITLE, productInfo.CATEGORY_NAME, productInfo.SECOND_CATEGORY, productInfo.image).then(response => {
          commit('')
          resolve(response)
        }).catch(error => {
          console.log('更新失败')
          reject(error)
        })
      })
    },
    SearchRecord({ commit }, TITLE) {
      return new Promise((resolve, reject) => {
        searchRecord(TITLE).then(response => {
          commit('')
          resolve(response)
        }).catch(error => {
          console.log('查询失败')
          reject(error)
        })
      })
    },
    ChangeState({ commit }, para) {
      return new Promise((resolve, reject) => {
        changeState(para.PRC_ID, para.state).then(response => {
          commit('')
          resolve(response)
        }).catch(error => {
          console.log('操作失败')
          reject(error)
        })
      })
    }

  }
}

export default productCategory
