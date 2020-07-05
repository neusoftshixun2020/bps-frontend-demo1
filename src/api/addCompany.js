import request from '@/utils/request'

export function addManufacturer(name_en, name_cn, gmc_report_type, gmc_report_url,
  description, created_by, creation_date, last_update_by, last_update_date, call_cnt, remark, sts_cd, user_id) {
  return request({
    url: 'manufacturer/addManufacturer',
    method: 'post',
    data: {
      name_en, 
      name_cn, 
      gmc_report_type , 
      gmc_report_url,
      description, 
      created_by, 
      creation_date, 
      last_update_by, 
      last_update_date, 
      call_cnt, remark, 
      sts_cd, 
      user_id
    }
  })
}

export function updateManufacturer(name_en, name_cn, gmc_report_type, gmc_report_url,
  description, created_by, creation_date, last_update_by, last_update_date, call_cnt, remark, sts_cd, user_id) {
  return request({
    url: 'manufacturer/UpdateManufacturer',
    method: 'post',
    data: {
      name_en, 
      name_cn, 
      gmc_report_type , 
      gmc_report_url,
      description, 
      created_by, 
      creation_date, 
      last_update_by, 
      last_update_date, 
      call_cnt, remark, 
      sts_cd, 
      user_id
    }
  })
}


export function deleteBrand(brd_id) {
  return request({
    url: ' brand/deleteBrand',
    method: 'post',
    data: {
      brd_id
    }
  })
}

export function addBrand(man_id,name_en,name_cn,created_by,creation_date,last_update_by,last_update_date,call_cnt,
  remark,sts_cd) {
  return request({
    url: 'brand/addBrand',
    method: 'post',
    data: {
      man_id,
      name_en,
      name_cn,
      created_by,
      creation_date,
      last_update_by,
      last_update_date,
      call_cnt,
      remark,sts_cd
    }
  })
}


export function updateBrand( man_id,name_en,name_cn,created_by,creation_date,last_update_by,last_update_date,call_cnt,
  remark,sts_cd) {
  return request({
    url: 'brand/addOrUpdateBrand',
    method: 'post',
    data: {
      man_id,
      name_en,
      name_cn,
      created_by,
      creation_date,
      last_update_by,
      last_update_date,
      call_cnt,
      remark,sts_cd
    }
  })
}


export function getManByFilter () {
  return request({
    url: 'manufacturer/getManByFilter',
    method: 'post',
    data: {
    }
  })
}

export function getAll () {
  return request({
    url: 'manufacturer/getAll',
    method: 'post',
    data: {
    }
  })
}

export function getBrandByFilter(man_id) {
  return request({
    url: 'brand/getBrandByFilter',
    method: 'post',
    data: {
      man_id
    }
  })
}
