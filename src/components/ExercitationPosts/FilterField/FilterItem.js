/**
 * Created by LLGZONE on 2017/11/2.
 */
import React from 'react'
import PropTypes from 'prop-types'

import './FilterItem.css'

class FilterItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lastRef: null,
    }
  }

  handleClick(e) {
    if (this.state.lastRef) {
      this.state.lastRef.classList.add('exercitationPosts-filter-deactive')
      this.state.lastRef.classList.remove('exercitationPosts-filter-active')
    } else {
      this.initRef.classList.add('exercitationPosts-filter-deactive')
      this.initRef.classList.remove('exercitationPosts-filter-active')
    }
    this.setState({lastRef: e.target})
    e.target.classList.add('exercitationPosts-filter-active')
    e.target.classList.remove('exercitationPosts-filter-deactive')
  }

  render() {
    const {title, children, type} = this.props
    return (
      <div className="exercitationPosts-filter-container">
        <p>{title}:</p>
        <button
          ref={(btn) => this.initRef = btn}
          className="exercitationPosts-filter-active"
          onClick={(e) => this.handleClick(e)}
          data-type={type}
        >
          不限
        </button>
        {
          React.Children.map(children, child => React.cloneElement(child, {
            onClick: (e) => this.handleClick(e),
            'data-type': type})
          )
        }
      </div>
    )
  }
}

FilterItem.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default FilterItem