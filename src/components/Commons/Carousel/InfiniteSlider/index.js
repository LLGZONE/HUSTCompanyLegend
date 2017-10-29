/**
 * Created by LLGZONE on 2017/10/29.
 */
import React from 'react'

import 'font-awesome/css/font-awesome.min.css'

class InfiniteSlider extends React.Component {
  constructor(props) {
    super(props)
    this.children = React.Children.toArray(this.props.children)
    this.state = {
      cur: 0,
      len: this.children.length
    }
  }

  handleRightClick() {
    const {cur, len} = this.state
    if (cur === len - 1) {
      this.setState({cur: 0})
    } else {
      this.setState({cur: cur + 1})
    }
  }

  handleLeftClick() {
    const {cur, len} = this.state
    if (cur === 0) {
      this.setState({cur: len - 1})
    } else {
      this.setState({cur: cur - 1})
    }
  }

  render() {
    const {cur, len} = this.state
    return (
      <section className="infiniteSlider">
        <div className="infiniteSlider-arrow arrow-left" onClick={() => this.handleLeftClick()}>
          <i className="fa fa-chevron-circle-left">
          </i>
        </div>
        <div className="infiniteSlider-imgs-container">
          {cur === 0 ? this.children[len - 1] : this.children[cur - 1]}
          {this.children[cur]}
          {cur === len - 1 ? this.children[0] : this.children[cur + 1]}
        </div>
        <div className="infiniteSlider-arrow arrow-right" onClick={() => this.handleRightClick()}>
          <i className="fa fa-chevron-circle-right">
          </i>
        </div>
      </section>
    )
  }
}

export default InfiniteSlider