import axios from 'axios'
// import store from '@/store'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000,
})

service.interceptors.request.use(
  config => {
    console.log('request config', config)
    return config
  },
  error => {
    console.error(error.toJSON())
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    console.log('response', res)
    
    return res
  },
  error => {
    console.error(error.toJSON())
  }
)

export default service