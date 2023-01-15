import WYRequest from '../request'

export function getgoodPrice() {
  return WYRequest.get({
    url: '/home/goodprice'
  })
}

export function getDiscount() {
  return WYRequest.get({
    url: '/home/discount'
  })
}

export function gethigHscore() {
  return WYRequest.get({
    url: '/home/highscore'
  })
}

export function getHmoePlus() {
  return WYRequest.get({
    url: '/home/plus'
  })
}

export function getHotRecommend() {
  return WYRequest.get({
    url: '/home/hotrecommenddest'
  })
}

export function getLongFor() {
  return WYRequest.get({
    url: '/home/longfor'
  })
}
