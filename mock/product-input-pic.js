const Mock = require('mockjs')
//const mUtils = require('./mUtils')


const List = []
const count = 10

const baseContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
const image = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'



function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}


for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: Mock.Random.guid(),
    'productname|1':['可乐','Ipad','奶茶','吹风机'],
    'category|1': ['饮料', '电器', '食品', '电子产品'],
    'state|1': ['入仓中', '待上架'],
    image
  }))
}

module.exports = [
  {
    url: '/vue-element-admin/product-input-pic/list',
    type: 'get',
    response: config => {
      const { importance, type, title, page = 1, limit = 20, sort } = config

      let mockList = List.filter(item => {
        if (importance && item.importance !== +importance) return false
        if (type && item.type !== type) return false
        if (title && item.title.indexOf(title) < 0) return false
        return true
      })

      if (sort === '-id') {
        mockList = mockList.reverse()
      }

     const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  },
  {

    url: '/vue-element-admin/product-input-pic/deleteRecord',
    type: 'get',
    response: config => {
      const { id } = param2Obj(config.url)
      console.log("mock收到的id:"+id)
      if (!id) {
        return {
          code: -999,
          message: '参数不正确'
        }
      } else {
        this.List = List.filter(u => u.id !== id)
        return {
          code: 20000,
          data: {
            message: '删除成功'
          }
        }
      }
    }

  },{
    url: '/vue-element-admin/product-input-pic/addRecord',
    type: 'get',

    response: config => {
      const { title, first_category, second_category, image } = param2Obj(config.url)
      List.push({
        id: Mock.Random.guid(),
        'productname|1':['可乐','Ipad','奶茶','吹风机'],
        'category|1': ['饮料', '电器', '食品', '电子产品'],
        'state|1': ['入仓中', '待上架'],
        image
      })
      return {
        code: 20000,
        data: {
          message: '添加成功'
        }
      }
    }
  }

]

