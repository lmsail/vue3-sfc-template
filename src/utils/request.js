import axios from 'axios'

const instance = axios.create({
    baseURL: '/api',
    timeout: 1000 * 10,
    withCredentials: true,
    headers: {}
})

// 请求拦截器，如果存在token则在请求头中携带token
instance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = token
        }
        return config
    },
    error => Promise.reject(error)
)

instance.interceptors.response.use(
    success => success.status === 200 ? Promise.resolve(success) : Promise.reject(success),
    error => {
        if (JSON.stringify(error).includes('timeout')) {
            return ElMessage.error('服务器响应超时，请刷新当前页')
        }
        const { response } = error
        if (error && response) {
            errorHandle(response.status, response.data.message)
            return Promise.reject(response)
        }
        return Promise.resolve(error)
    }
)

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
 const errorHandle = (status, other) => {
    console.log('errorHandle:', status, other)
}

export default async (url, data = {}) => await instance.post(url, data);
