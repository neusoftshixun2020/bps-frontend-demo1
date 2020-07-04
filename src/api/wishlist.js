import request from '@/utils/request'

export function getProInfo() {
  return request({
    url: '/vue-element-admin/wishlist/getProInfo',
    method: 'post',
    data
  })
}
