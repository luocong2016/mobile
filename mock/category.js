module.exports = [
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      return {
        code: 200,
        data: [
          {
            name: '家装',
            key: ''
          },
          {
            name: '数码',
            key: ''
          },
          {
            name: '女装',
            key: ''
          },
          {
            name: '医药',
            key: ''
          }
        ]
      }
    }
  }
]
