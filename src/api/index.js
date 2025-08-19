import request from '../utils/request'

// 发送验证码
// data = { "tel": "string" }
export const getCode = (data) => {
    return request.post('/get/code', data)
}