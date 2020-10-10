import axios from 'axios'
import config from '../lib/config'
import qs from 'qs'
import { Message } from 'element-ui'

const service = axios.create({
    baseURL: config.AdminHost,
    timeout: 15 * 1000
})

service.interceptors.request.use(config => {
    config.data = qs.stringify(config.data)
    // config.headers = {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    // }
    return config
}, error => {
    Promise.reject(error)
})

service.interceptors.response.use(response => {
    return response
}, error => {
    if (error && error.response) {
        switch (error.response.status) {
            case 400:
                error.message = '错误请求'
                break
            case 401:
                error.message = '未授权，请重新登录'
                break
            case 408:
                error.message = '请求超时'
                break
            case 500:
                error.message = '服务器端出错'
                break
            case 501:
                error.message = '网络未实现'
                break
            default:
                error.message = `连接错误${error.response.status}`
        }
    } else {
        if (JSON.stringify(error).includes('timeout')) {
            Message.error('服务器响应超时，请刷新当前页')
        }
        error.message('连接服务器失败')
    }

    Message.error(error.message)
    return Promise.resolve(error.response)
})


const httpRequest = {
    /**
     * methods: 请求
     * @param url 请求地址
     * @param params 请求参数
     */
    get(url, params) {
        const config = {
            method: 'get',
            url: url
        }
        if (params) {
            config.params = params
        }
        return service(config)
    },
    post(url, params) {
        const config = {
            method: 'post',
            url: url
        }
        if (params) {
            config.data = params
        }
        return service(config)
    }
}

export default httpRequest
