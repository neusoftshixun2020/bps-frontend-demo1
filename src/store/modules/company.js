import { addManufacturer ,updateManufacturer,deleteBrand,addBrand,updateBrand,getManByFilter,getBrandByFilter} from '../../api/addCompany'
  
  const company = {
    actions: {
        AddManufacturer({ commit }, name_cn,name_en,description,gmc_report_type,gmc_report_url) {
            return new Promise((resolve, reject) => {
                addManufacturer(name_cn,name_en,description,gmc_report_type,gmc_report_url).then(response => {
                commit('')
                resolve(response)
            }).catch(error => {
                reject(error)
            })
            })
        },


      UpdateManufacturer({ commit }, name_cn,name_en,description,gmc_report_type,gmc_report_url) {
        return new Promise((resolve, reject) => {
          updateManufacturer(name_cn,name_en,description,gmc_report_type,gmc_report_url).then(response => {
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



      UpdateBrand({ commit }, name_en) {
        return new Promise((resolve, reject) => {
          updateBrand(name_en).then(response => {
            commit('')
            resolve(response)
          }).catch(error => {
            reject(error)
          })
        })
      }
    },
    AddBrand({ commit }, name_en) {
      return new Promise((resolve, reject) => {
        addBrand(name_en).then(response => {
          commit('')
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetManByFilter({ commit }) {
      return new Promise((resolve, reject) => {
        getManByFilter().then(response => {
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
 
export default company