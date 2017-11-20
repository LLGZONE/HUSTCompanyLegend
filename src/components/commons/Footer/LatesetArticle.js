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

const LatestArticle = ({latest}) => (
  <div>
    <h3>最新文章</h3>
    <nav>
      {latest.map(article => {
        const {text, url} = article
        return (
          <div key={key++} style={ClickItemStyle}>
            <ClickItem item={text} url={url} />
          </div>
        )
      })}
    </nav>
  </div>
)

export default LatestArticle