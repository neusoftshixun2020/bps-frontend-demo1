import request from '@/utils/request'
export function login(data) {
  return request({
    url: '/vue-element-admin/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
export function updateManufacturer(user_id, gmc_report_type, gmc_report_url, description, created_by) {
  return request({

    url: '/vue-element-admin/user/updateManufacturer',
    // url: '/man/updateManufacturer',
    method: 'post',
    data: {
      user_id,
      gmc_report_type,
      gmc_report_url,
      description,
      created_by
    }
  })
}

export function addOrUpdateManufacturer(user_id, gmc_report_type, gmc_report_url, description, created_by) {
  return request({
    // url: '/vue-element-admin/user/addOrUpdateManufacturer',
    url: '/man/addOrUpdateManufacturer',
    method: 'post',
    data: {
      user_id,
      gmc_report_type,
      gmc_report_url,
      description,
      created_by
    }
  })
}
export function deleteBrandS(brd_id) {
  return request({
    url: ' /delete/deleteBrandS',
    method: 'post',
    data: {
      brd_id
    }
  })
}
export function updateBrand(brd_id,
  man_id,
  name_en,
  name_cn,
  created_by,
  image_url,
  operationFlag) {
  return request({
    url: '/brand/updateBrand',
    method: 'post',
    data: {
      brd_id,
      man_id,
      name_en,
      name_cn,
      created_by,
      image_url,
      operationFlag
    }
  })
}
export function getManufacturer() {
  return request({
    url: '/man/getManufacturer',
    method: 'post',
    data: {
    }
  })
}

export function getBrandByFilter(man_id) {
  return request({
    url: '/brand/getBrandByFilter',
    method: 'post',
    data: {
      man_id
    }
  })
}
