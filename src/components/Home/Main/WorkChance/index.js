/**
 * Created by LLGZONE on 2017/10/28.
 */
import React from 'react'
import {Link} from 'react-router-dom'

import wCh from '../images/work_chance.png'

const WorkChance = () => (
  <Link to="/exercitation">
    <img src={wCh} alt="实习机会" />
  </Link>
)

export default WorkChance