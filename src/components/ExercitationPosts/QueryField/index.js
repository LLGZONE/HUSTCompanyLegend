/**
 * Created by LLGZONE on 2017/10/30.
 */
import React from 'react'
import {Link} from 'react-router-dom'

import InputField from './InputField'
import QueryBtn from './QueryBtn'

import './index.css'

class QueryField extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue: ''
    }
  }

  //在这里dispatch
  handleClick() {
    console.log(this.inputValue)
  }

  getInputValue(value) {
    this.setState({inputValue: value})
  }

  render() {
    return (
      <section className="">
        <div className="">
          <InputField getInputValue={(value)=> this.getInputValue(value)} />
          <QueryBtn handleClick={()=>this.handleClick()} />
        </div>
        <div className="">
          <Link to="/exercitation/query">更多筛选</Link>
          <Link to="/exercitation/publish">我要发布</Link>
        </div>
      </section>
    )
  }
}

export default QueryField