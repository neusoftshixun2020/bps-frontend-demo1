import { addManufacturer ,updateManufacturer,deleteBrand,addBrand,updateBrand,getManByFilter,
  getBrandByFilter,getAll} from '../../api/addCompany'
  
  const company = {
    actions: {
        AddManufacturer({ commit }, maninfo) {
            return new Promise((resolve, reject) => {
                addManufacturer(maninfo.name_en, maninfo.name_cn, maninfo.gmc_report_type, maninfo.gmc_report_url,
                  maninfo.description, maninfo.created_by, maninfo.creation_date, maninfo.last_update_by, maninfo.last_update_date, maninfo.call_cnt, maninfo.remark, maninfo.sts_cd, maninfo.user_id).then(response => {
                commit('')
                resolve(response)
            }).catch(error => {
                reject(error)
            })
            })
        },


      UpdateManufacturer({ commit }, maninfo) {
        return new Promise((resolve, reject) => {
          updateManufacturer(maninfo.name_en, maninfo.name_cn, maninfo.gmc_report_type, maninfo.gmc_report_url,
            maninfo.description, maninfo.created_by, maninfo.creation_date, maninfo.last_update_by, maninfo.last_update_date, maninfo.call_cnt, maninfo.remark, maninfo.sts_cd, maninfo.user_id).then(response => {
            commit('')
            resolve(response)
          }).catch(error => {
            reject(error)
          })
        })
      },

      DeleteBrand ({ commit }, brd_id) {
        return new Promise((resolve, reject) => {
          deleteBrand(brd_id).then(response => {
            commit('')
            resolve(response)
          }).catch(error => {
            reject(error)
          })
        })
      },
     UpdateBrand({ commit }, brandinfo) {
        return new Promise((resolve, reject) => {
          updateBrand(brandinfo.name_en).then(response => {
            commit('')
            resolve(response)
          }).catch(error => {
            reject(error)
          })
        })
      }
    },
    AddBrand({ commit }, brandinfo) {
      return new Promise((resolve, reject) => {
        addBrand(brandinfo.name_en).then(response => {
          commit('')
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetManByFilter ({ commit }) {
      return new Promise((resolve, reject) => {
        getManByFilter().then(response => {
          commit('')
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // GetAll({ commit }) {
    //   return new Promise((resolve, reject) => {
    //     getAll().then(response => {
    //       commit('')
    //       resolve(response)
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

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
 
export default company