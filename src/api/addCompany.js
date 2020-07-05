import request from '@/utils/request'

export function addManufacturer(name_cn,name_en,description,gmc_report_type,gmc_report_url) {
  return request({
    url: 'manufacturer/addManufacturer',
    method: 'post',
    data: {
      name_cn,
      name_en,
      description,
      gmc_report_type,
      gmc_report_url
    }
  })
}

export function updateManufacturer(name_cn,name_en,description,gmc_report_type,gmc_report_url) {
  return request({
    url: 'man/UpdateManufacturer',
    method: 'post',
    data: {
      name_cn,
      name_en,
      description,
      gmc_report_type,
      gmc_report_url
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

export function addBrand(name_en) {
  return request({
    url: 'brand/addBrand',
    method: 'post',
    data: {
      name_cn
    }
  })
}


export function updateBrand( name_en) {
  return request({
    url: 'brand/addOrUpdateBrand',
    method: 'post',
    data: {
      name_en
    }
  })
}
export function getManByFilter() {
  return request({
    url: 'manufacturer/getManByFilter',
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
