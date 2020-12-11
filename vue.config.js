module.exports = {
  configureWebpack: {
    devServer: {
      port: 8089,//端口号 
      open: true,
      //mock接口数据编写
      before(app) {
        // app.get('请求地址',(req,res)=>{
        //   res.json(
        //   )
        // })

        //用户信息池
        let userpoor = [
          { username: '杨良文', password: '123456' },
          { username: 'admin', password: '123456' },
        ]
        app.get('/api/register', (req, res) => {
          //注册接口
          const { username, password } = req.query
          const userlength = userpoor.filter(v => v.username == username).length
          console.log(userlength)
          if (userlength > 0) {
            res.json({
              success: false,
              message: '用户名已存在'
            })
          }
          else {
            userpoor.push(req.query)
            res.json({
              success: true,
              message: '注册成功'
            })
          }
          console.log("数据源打印", userpoor)
        })
        let tokenKey = '杨良文的京东token'
        app.get('/api/login', (req, res) => {
          //登陆接口
          const { username, password } = req.query
          const flag = userpoor.filter(v => v.username == username && v.password == password).length
          if (flag) {
            res.json({
              success: true,
              code: 0,
              message: '登录成功',
              token: tokenKey + '-' + username + '-' + (new Date().getTime() + 60 * 60 * 1000)
            })
          }
          else {
            res.json({
              success: false,
              code: 1,
              message: '账号或密码错误'
            })
          }
        })
            //首页轮播图数据接口
            app.get('/api/banner',(req,res)=>{
              res.json({
                  data:[ 
                    {
                      url: 'https://m.xdclass.net',
                      image: 'http://demo.qfpffmp.cn:8020/cssthemes6/zly_20201123_16/images/grid.jpg'
                    },
                    {
                      url: 'https://m.xdclass.net',
                      image: 'https://img30.360buyimg.com/pop/s1180x940_jfs/t1/148503/38/15694/94091/5fbe0950Ee2b630f1/ff6a4762180a4698.jpg.webp'
                    },
                    {
                      url: 'https://m.xdclass.net',
                      image: 'https://img10.360buyimg.com/babel/s1180x940_jfs/t1/139909/20/17733/140763/5fd0a877E79d39f8d/df0fbd261e24c5c5.jpg.webp'
                    },
                    {
                      url: 'https://m.xdclass.net',
                      image: 'https://img14.360buyimg.com/pop/s1180x940_jfs/t1/146933/19/18015/80228/5fd331a6Ec86192fa/d502d6a7d685ebd0.jpg.webp'
                    }]
              })
          })
      }
    }
  },

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },

  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
} 
