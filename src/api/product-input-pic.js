import request from '@/utils/request'

export function fetchList() {
  return request({
    url: '/vue-element-admin/product-input-pic/list',
    method: 'get',

  })
}

export function DeleteRecord(params) {
  console.log("进入DeleteRecord")
  return request({
    url: '/vue-element-admin/product-input-pic/deleteRecord',
    method: 'get',
    params: params
  })
}



export function AddRecord(params) {
  console.log("进入AddRecord")
  return request({
    url: '/vue-element-admin/product-input-pic/addRecord',
    method: 'get',
    params: params
  })
}

export function EditRecord(params) {
  console.log("进入AddRecord")
  return request({
    url: '/vue-element-admin/product-input-pic/editRecord',
    method: 'get',
    params: params
  })
}

