module.exports={
  configureWebpack:{
      devServer:{
         port:8089,//端口号 
         open:true,
         //mock接口数据编写
         before(app){
          // app.get('请求地址',(req,res)=>{
          //   res.json(
          //   )
          // })
        //注册接口
        //用户信息池
        let userpoor =[
           { username:'杨良文',password:'123456'},
           { username:'admin',password:'123456'},
        ]
        app.get('/api/register',(req,res)=>{
             const { username,password}=req.query
             const userlength =userpoor.filter(v=>v.username==username).length
             console.log(userlength)
             if(userlength>0){
               res.json({
                success:false,
                message:'用户名已存在'
              })
             }
             else{
               userpoor.push(req.query)
               res.json({
                 success:true,
                 message:'注册成功'
               })
             }
             console.log("数据源打印",userpoor)
        })
           let tokenKey ='杨良文的京东token'
        app.get('/api/login',(req,res)=>{
          const { username,password}=req.query
          const flag =userpoor.filter(v=>v.username==username&&v.password==password).length
          console.log(flag)
          if(flag){
            res.json({
             success:true,
             code:0,
             message:'登录成功',
             token:tokenKey+'-'+username+'-'+(new Date().getTime()+60*60*1000)
           })
          }
          else{
            res.json({
              success:false,
              code:1,
              message:'账号或密码错误'
            })
          }
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
