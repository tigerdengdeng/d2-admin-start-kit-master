import request from '@/plugin/axios'

export function AccountLogin (data) {
  return request({
    url: 'http://localhost:8081/user/webapi/login',
    method: 'post',
    data
  })
}
