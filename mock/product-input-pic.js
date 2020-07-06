const Mock = require('mockjs')


const List = []
const count = 50

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
    PRC_ID: Mock.Random.guid(),
    'TITLE|1':['可乐','Ipad','奶茶','吹风机','饼干'],
    'CATEGORY_NAME|1': ['drinks', 'electric appliance', 'food', 'electronic product'],
    'SECOND_CATEGORY|1': ['drinks', 'electric appliance', 'food', 'electronic product'],
    'state|1': ['入仓中', '待上架','上架中','待入仓'],
    image
  }))
}

module.exports = [
  {
    url: '/vue-element-admin/product-input-pic/list',
    type: 'post',
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
  /**
   * 删除记录
   */
  {
    url: '/vue-element-admin/product-input-pic/deleteRecord',
    type: 'post',
    response: config => {
      const { PRC_ID } = param2Obj(config.url)
      console.log("mock收到的id:"+PRC_ID)
      if (!PRC_ID) {
        return {
          code: -999,
          message: '参数不正确'
        }
      } else {
        this.List = List.filter(u => u.PRC_ID !== PRC_ID)
        return {
          code: 20000,
          data: {
            message: '删除成功'
          }
        }
      }
    }

  },

  /**
   * 添加记录
   */
  {
    url: '/vue-element-admin/product-input-pic/addRecord',
    type: 'post',
    response: config => {
      const { TITLE, CATEGORY_NAME, SECOND_CATEGORY, image } = param2Obj(config.url)
      console.log("config.title:"+TITLE)
      console.log("config.first_category:"+CATEGORY_NAME)
      console.log("config.second_category:"+SECOND_CATEGORY)
      console.log("config.image:"+image)
      List.push({
        PRC_ID: Mock.Random.guid(),
        TITLE:TITLE,
        CATEGORY_NAME: CATEGORY_NAME,
        SECOND_CATEGORY: SECOND_CATEGORY,
        image:image

      })
      return {
        code: 20000,
        data: {
          message: '添加成功'
        }
      }
    }
  },{

    url: '/vue-element-admin/product-input-pic/updateRecord',
    type: 'post',

    response: config => {
      const { PRC_ID, TITLE, CATEGORY_NAME, image } = param2Obj(config.url)
      console.log("id:"+PRC_ID)
      console.log("测试获取到的id："+config.url.PRC_ID)
      console.log("测试获取到的id："+config.PRC_ID)
      console.log("title:"+TITLE)
      List.some(u => {

        console.log("u.id:"+u.PRC_ID)
        if (u.PRC_ID === PRC_ID) {
          u.TITLE = TITLE
          u.CATEGORY_NAME = CATEGORY_NAME
          u.image = image
        }
      })

      return {
        code: 20000,
        data: {
          message: '编辑成功'
        }
      }
    }

  },
  {
    url: '/vue-element-admin/product-input-pic/searchRecord',
    type: 'post',
    response: config => {
       const { importance, title,type, page = 1, limit = 20, sort } = config
        const{ sCondition } = param2Obj(config.url)
        console.log("mock收到的title:"+sCondition)
        let mockList = List.filter(item => {
          if (importance && item.importance !== +importance) return false
          if (type && item.type !== type) return false
          if (title && item.title.indexOf(title) < 0) return false
          return true
        })

        if (sort === '-id') {
          mockList = mockList.reverse()
        }
        const pageList = []


        for(let i = 0; i < List.length; i++){
          console.log("List["+i+"]:title:"+List[i].TITLE)
          if(List[i].TITLE===sCondition){
            pageList.push({
              PRC_ID: List[i].PRC_ID,
              TITLE:List[i].TITLE,
              CATEGORY_NAME: List[i].CATEGORY_NAME,
              SECOND_CATEGORY: List[i].SECOND_CATEGORY,
              STS_CD:List[i].STS_CD,
              image:List[i].image
            })
          }
          }

        return {
          code: 20000,
          data: {
            total: mockList.length,
            items: pageList
          }
        }
    }
  },

]

