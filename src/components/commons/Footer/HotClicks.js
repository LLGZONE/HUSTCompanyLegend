/**
 * Created by LLGZONE on 2017/10/28.
 */
import React from 'react'
import ClickItem from './ClickItem'

const ClickItemStyle = {
  borderBottom: '1px solid #BBBBBB',
  padding: '5px 0'
}

let key = 1

const HotClicks = ({hot}) => (
  <div>
    <h3>热门点击</h3>
    <nav>
      {hot.map(hotItem => {
        const {text, url} = hotItem
        return (
          <div key={`${key++}`} style={ClickItemStyle}>
            <ClickItem item={text} url={url} />
          </div>
        )
      })}
    </nav>
  </div>
)

export default HotClicks