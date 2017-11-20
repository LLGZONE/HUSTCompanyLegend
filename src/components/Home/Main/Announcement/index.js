/**
 * Created by LLGZONE on 2017/10/27.
 */
import React from 'react'
import AnnounceContent from './AnnounceContent'
import './index.css'

const Announcement = ({items}) => (
  <section className="home-main-ann">
    <div className="home-main-ann-pic">{}</div>
    <AnnounceContent items={items} />
  </section>
)

export default Announcement