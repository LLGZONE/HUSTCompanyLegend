/**
 * Created by LLGZONE on 2017/10/28.
 */
import React from 'react'

import ClickItem from './ClickItem'

const ClickItemStyle = {
  borderBottom: '1px solid rgba(255,255,255,.3)',
  padding: '5px 0'
}

const LatestArticle = ({latest}) => (
  <div>
    <h3>最新文章</h3>
    <nav>
      {latest.map(article => {
        const {text, url} = article
        return (
          <div  style={ClickItemStyle}>
            <ClickItem item={text} url={url} />
          </div>
        )
      })}
    </nav>
  </div>
)

export default LatestArticle