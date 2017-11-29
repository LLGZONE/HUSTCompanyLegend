/**
 * Created by LLGZONE on 2017/10/2.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { addClassNames, removeClassNames } from './utils'
import './FadeCarousel.css'

class FadeCarousel extends React.Component {
  constructor(props) {
    super(props)
    const childArr = React.Children.toArray(this.props.children)
    const children = childArr.filter(child => !!child)
    this.children = children.map(child =>
      React.cloneElement(child, {
        className: 'slide-carousel',
      }))

    this.state = {
      cur: 0,
      last: -1,
      next: 1,
      len: this.children.length,
    }
  }

  componentDidMount() {
    this.moveNext()
  }

  componentWillUnmount() {
    clearTimeout(this._setTimeout)
  }

  setNext() {
    const {interval} = this.props
    if (interval && interval > 0) {
      if (this._setTimeout) {
        clearTimeout(this._setTimeout)
      }
      this._setTimeout = setTimeout(() => this.moveNext(), interval)
    }
  }

  moveNext() {
    const {cur, last, next, len} = this.state
    if (last >= 0) {
      this.children[last] = removeClassNames(this.children[last], 'carousel-show')
    }
    this.children[cur] = removeClassNames(this.children[cur], 'carousel-transition')
    this.children[cur] = addClassNames(this.children[cur], 'carousel-show')
    this.children[next] = addClassNames(this.children[next], 'carousel-transition')
    this.setState({
      last: last + 1 >= len ? 0 : last + 1,
      cur: cur + 1 >= len ? 0 : cur + 1,
      next: next + 1 >= len ? 0 : next + 1,
    })
    this.setNext()
  }

  render() {
    return (
      <div {...this.props}>
        {this.children}
      </div>
    )
  }
}

FadeCarousel.propTypes = {
  interval: PropTypes.number.isRequired,
}

export default FadeCarousel