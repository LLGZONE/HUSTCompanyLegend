/**
 * Created by LLGZONE on 2017/11/1.
 */
import React from 'react'
import FilterItem from './FilterItem'

import './index.css'

class FilterField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      place: 'all',//实习地点
      chance: 'all',//转正机会
      time: 'all',  //实习时间
      companySize: 'all',//公司规模
      room: 'all',//是否食宿
      postType: 'all'//岗位类型
    }
  }

  getValue(type, value) {
    this.setState({[type]: value})
  }

  render() {
    return (
      <section className="exercitationPosts-filter-field">
        <div className="exercitationPosts-filter-field-container">
          <FilterItem title="实习地点" type="place">
            <button>北京</button>
            <button>武汉</button>
          </FilterItem>
          <FilterItem title="转正机会" type="chance">
            <button>提供转正</button>
            <button>不提供转正</button>
          </FilterItem>
          <FilterItem title="实习时间" type="time">
            <button>一周起</button>
            <button>一个月起</button>
            <button>两个月起</button>
            <button>三个月起</button>
            <button>半年起</button>
            <button>一年含以上</button>
          </FilterItem>
          <FilterItem title="公司规模" type="companySize">
            <button>10人以内</button>
            <button>10-20人</button>
            <button>20-50人</button>
            <button>50-100人</button>
            <button>100人以上</button>
          </FilterItem>
          <FilterItem title="是否食宿" type="room">
            <button>包住宿+三餐</button>
            <button>包住宿+中晚餐</button>
            <button>包住宿</button>
            <button>包三餐</button>
          </FilterItem>
          <FilterItem title="岗位类型" type="postType">
            <button>包住宿+三餐</button>
            <button>包住宿+中晚餐</button>
            <button>包住宿</button>
            <button>包三餐</button>
          </FilterItem>
        </div>
      </section>
    )
  }
}

export default FilterField