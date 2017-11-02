/**
 * Created by LLGZONE on 2017/11/1.
 */
import React from 'react'

class FilterField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      place: '',//实习地点
      chance: '',//转正机会
      time: '',  //实习时间
      companySize: 0,//公司规模
      room: '',//是否食宿
      type: ''//岗位类型
    }
  }

  getValue(type, value) {
    this.setState({[type]: value})
  }

  render() {

  }
}