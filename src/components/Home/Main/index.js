/**
 * Created by LLGZONE on 2017/10/27.
 */
import React from 'react'

import Achievement from './Achievement'
import Announcement from './Announcement'
import Experts from './Experts'
import Feature from './Feature'
import Members from './Members'
import Recommendation from './Recommendation'
import WorkChance from './WorkChance'

import './index.scss'

const Main = () => (
  <main>
    <Feature/>
    <Announcement/>
    <Members/>
    <Achievement/>
    <section className="home-main-row">
      <WorkChance/>
      <Experts/>
    </section>
    <Recommendation/>
  </main>
)

export default Main