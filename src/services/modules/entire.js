import WYRequest from '../request'

export function getEntireList(offset, size = 20) {
  return WYRequest.get({
    url: '/entire/list',
    params: {
      offset,
      size
    }
  })
}
