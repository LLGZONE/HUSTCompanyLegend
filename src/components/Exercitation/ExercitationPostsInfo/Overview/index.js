/**
 * Created by LLGZONE on 2017/11/3.
 */
import React from 'react'
import ApplicationBtn from './ApplicationBtn'

import 'font-awesome/css/font-awesome.min.css'

class Overview extends React.Component {
  star(e) {
    e.target.classList.add('fa-')
  }

  render() {
    const {
      title,
      company,
      place,
      beOfficial,
      mark } = this.props

    return (
      <section>
        <div>
          <h3>{title}</h3>
          <p>{company}</p>
          <div>
            <i className="fa fa-globe">
            </i>
            <p>{place}</p>
            <p>转正机会：{beOfficial ? '有' : '无'}</p>
          </div>
          <div>
            <p>岗位评价：{mark}分</p>
            <p>实习时间：</p>
          </div>
        </div>
        <div>
          <div>
            <i className="fa fa-star-o">
            </i>
            <i className="fa fa-check">
            </i>
          </div>
          <ApplicationBtn />
        </div>
      </section>
    )
  }
 }