import WYRequest from '../request'

export function getHmoePlus() {
  return WYRequest.get({
    url: '/home/goodprice'
  })
}
