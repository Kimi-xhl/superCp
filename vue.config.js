const path = require('path')
const myTheme = path.resolve(__dirname, "./src/assets/style/theme.less");

module.exports = {
  configureWebpack: {
    devServer: {
      //MOCK接口编写的地方
      //每次做更改这个配置文件的时候，都必须重启项目才会生效
      before(app) {
        // app.get('请求地址',(req,res)=>{
        //   res.json({
        //   })
        // })

        //用户信息池
        let userpoor = [{
            username: 'xiaod',
            password: '123456'
          },
          {
            username: 'xhl',
            password: '123456'
          }
        ]
        //注册接口
        app.get('/api/register', (req, res) => {
          const {
            username,
            password
          } = req.query
          const userlength = userpoor.filter(v => v.username == username).length
          if (userlength > 0) {
            res.json({
              success: false,
              message: '用户名已存在'
            })
          } else {
            res.json({
              success: true,
              message: '注册成功'
            })
          }
        })
        //登录接口
        let tokenkey = 'xdclass'
        app.get('/api/login', (req, res) => {
          const {
            username,
            password
          } = req.query
          if (username == 'xiaod' && password == '123456' || username == 'xhl' && password == '123456') {
            res.json({
              code: 0,
              message: '登录成功',
              token:tokenkey+'-'+username+'-'+(new Date().getTime()+60*60*1000)
            })
          } else {
            res.json({
              code: 1,
              message: '账号或密码错误'
            })
          }
        })
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        // lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "${myTheme}";`
          },
        },
      // },
    },
  },

}