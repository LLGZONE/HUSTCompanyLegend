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

  handleFilterShowClick() {
    const {  showFilter, hiddenFilter, isFilterShow } = this.props
    if (isFilterShow) {
      hiddenFilter()
    } else {
      showFilter()
    }
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
          <a href="javascript:" onClick={() => this.handleFilterShowClick()}>
            更多筛选
          </a>
          <Link to="/exercitation/posts/apply/company">我要发布</Link>
        </div>
      </section>
    )
  }
}

export default QueryField