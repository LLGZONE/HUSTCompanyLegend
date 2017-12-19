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
    const { query, filter } = this.props

    query({queryString: this.state.inputValue, filter})
  }

  getInputValue(value) {
    this.setState({inputValue: value})
  }

  render() {
    const { isFetching } = this.props

    return (
      <section className="exercitationPosts-query-field">
        <div className="exercitationPosts-query-searchbar">
          <InputField getInputValue={(value)=> this.getInputValue(value)} value={this.state.inputValue} />
          <QueryBtn handleClick={()=>this.handleClick()} isFetching={isFetching} />
        </div>
        <div className="exercitationPosts-query-links">
          <Link to="/exercitation/posts/filter">更多筛选</Link>
          <Link to="/exercitation/posts/apply/company">我要发布</Link>
        </div>
      </section>
    )
  }
}

export default QueryField