import { updateManufacturer, addOrUpdateManufacturer, deleteBrandS, updateBrand,
  getManufacturer, getBrandByFilter, addBrand } from '../../api/user'

const addBrandAndCompany = {
  actions: {
    UpdateManufacturer({ commit }, user_id, gmc_report_type, gmc_report_url, description, created_by) {
      return new Promise((resolve, reject) => {
        updateManufacturer(user_id, gmc_report_type, gmc_report_url, description, created_by).then(response => {
          commit('')
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    AddOrUpdateManufacturer({ commit }, user_id, gmc_report_type, gmc_report_url, description, created_by) {
      return new Promise((resolve, reject) => {
        addOrUpdateManufacturer(user_id, gmc_report_type, gmc_report_url, description, created_by).then(response => {
          commit('')
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    DeleteBrandS({ commit }, brd_id) {
      return new Promise((resolve, reject) => {
        deleteBrandS(brd_id).then(response => {
          commit('')
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    UpdateBrand({ commit }, brd_id, man_id, name_en, name_cn, created_by, image_url, operationFlag) {
      return new Promise((resolve, reject) => {
        updateBrand(brd_id, man_id, name_en, name_cn, created_by, image_url, operationFlag).then(response => {
          commit('')
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
  AddBrand({ commit }, man_id, name_en, name_cn, created_by, image_url, operationFlag) {
    return new Promise((resolve, reject) => {
      addBrand(man_id, name_en, name_cn, created_by, image_url, operationFlag).then(response => {
        commit('')
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  GetManufacturer({ commit }) {
    return new Promise((resolve, reject) => {
      getManufacturer().then(response => {
        commit('')
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  GetBrandByFilter({ commit }, man_id) {
    return new Promise((resolve, reject) => {
      getBrandByFilter(man_id).then(response => {
        commit('')
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default addBrandAndCompany
