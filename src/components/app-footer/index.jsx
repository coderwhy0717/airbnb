import React, { memo } from 'react'
import { FooterWrapper } from './style'
import { airbnbfooter, airbnblink } from '@/common/app-footer.js'
const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="footer-top">
        {airbnblink.map((item, index) => {
          return (
            <div key={index} className="item">
              <div className="title">{item.title}</div>
              {item.children.map((itemd, indexd) => {
                return (
                  <div key={indexd} className="names">
                    <span href="#">{itemd.name}</span>{' '}
                    {itemd.tab && <span className="spana">{itemd.tab}</span>}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
      <div className="airbnbfooter">
        {airbnbfooter.map((item, index) => {
          return <div key={index}>{item.text}</div>
        })}
      </div>
    </FooterWrapper>
  )
})

export default AppFooter
