const tokens = {
  '18650000000': 'admin-token',
  '123456': 'editor-token'
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

module.exports = [
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      console.log(config)
      const {username} = config.body
      const token = tokens[username]
      // mock error
      if (!token) {
        return {
          code: 401,
          msg: 'Account and password are incorrect.'
        }
      }
      return {
        code: 200,
        data: token
      }
    }
  },
  {
    url: '/user/info.*',
    type: 'get',
    response: config => {
      const {token} = config.query
      const info = users[token]
      if (!info) {
        return {
          code: 401,
          msg: 'Login failed, unable to get user details.'
        }
      }
      return {
        code: 200,
        data: info,
        msg: null
      }
    }
  },
  {
    url: '/user/logout',
    type: 'get',
    response: () => {
      return {
        code: 200,
        data: null,
        msg: null
      }
    }
  }
]
