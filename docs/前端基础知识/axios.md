- `axios(config)` default use GET method
- `axios.request(config)`
- `axios[get | delete | head](url, config?)`
- `axios[post |put |patch](url, data?, config?)`
```js
axios({
    url:'http://123.207.32.32:8000/home/multidata',
    params:{
        type:'pop',
        page:1
    }
}).then().catch()

axios.get('http://123.207.32.32:8000/home/multidata',{
  params:{
    type:'pop', page:1
  }
})

// axios.defaults.配置项===>axios全局配置
axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5000

axios('home/multidata',{})
axios.all([
    axios.get('http://123.207.32.32:8000/home/multidata'}),
    axios({ url: 'http://123.207.32.32:8000/home/multidata'})
])

import axios from 'axios'
// axios实例1
const axiosInstance1 = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
})

axiosInstance1({url:'/home/multidata'})

axiosInstance1.default.baseURL = 'http://123.207.32.32:8000'

axiosInstance1({
    url:'/home/multidata',
    params:{
        type:'pop',
        page:3
    }
})
```

- 请求地址：`url: '/user'`
- 请求类型：`method: 'get'`
- 请根路径：`baseURL: 'http://www.mt.com/api'`
- 请求前的数据处理：`transformRequest:[function(data){}]`
- 请求后的数据处理： `transformResponse: [function(data){}]`
- 自定义的请求头：`headers:{'x-Requested-With':'XMLHttpRequest'}`
- URL查询对象：`params:{ id: 12 },`
- 查询对象序列化函数：`paramsSerializer: function(params){ }`
- request body：`data: { key: 'aa'}`
- 超时设置：`timeout: 1000,`
- 跨域是否带Token：`withCredentials: false`
- 自定义请求处理：`adapter: function(resolve, reject, config){}`
- 身份验证信息：`auth: { uname: '', pwd: '12'}`
- 响应的数据格式`json / blob /document /arraybuffer / text / stream：\`responseType: 'json'`

`axios.interceptor.request.use()`请求拦截器
`axios.interceptor.response.use()`响应拦截器

```js
axios.interceptor.request.use(res=>{
    console.log('来到了request拦截的success中');
    return res
},err=>{
    console.log('来到了request拦截的failure中');
})
```