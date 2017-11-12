/**
 * Created by LLGZONE on 2017/11/11.
 */
import React, { Component } from 'react'
import 'react-table/react-table.css'
import renderPagesBtn from './renderPagesBtn'

const defaultButton = props => (
  <button type='button' {...props} className='-btn'>
    {props.children}
  </button>
)

class ReactTablePagination extends Component {
  constructor (props) {
    super()

    this.getSafePage = this.getSafePage.bind(this)
    this.changePage = this.changePage.bind(this)

    this.state = {
      page: props.page,
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ page: nextProps.page })
  }

  getSafePage (page) {
    if (isNaN(page)) {
      page = this.props.page
    }
    return Math.min(Math.max(page, 0), this.props.pages - 1)
  }

  changePage (page) {
    page = this.getSafePage(page)
    this.setState({ page })
    if (this.props.page !== page) {
      this.props.onPageChange(page)
    }
  }

  handleClick (e) {
    const val = e.target.value
    const page = val - 1
    console.log(val)
    this.setState({ page: this.getSafePage(page) })
    if (this.props.page !== page) {
      this.props.onPageChange(page)
    }
  }

  render () {
    const {
      // Computed
      pages,
      // Props
      page,
      showPageSizeOptions,
      pageSizeOptions,
      pageSize, //页面
      canPrevious,
      canNext,
      onPageSizeChange,
      PreviousComponent = defaultButton,
      NextComponent = defaultButton,
    } = this.props

    const activeStyle = {
      backgroundColor: '#FF9800',
      color: 'white'
    }
    const size = 4 // pagination btn 个数

    const pageIndex = this.state.page + 1
    const rest = Math.ceil(size / 2 + 1)
    const isStart = pageIndex <= size / 2
    const isEnd = pages - pageIndex + 2 <= rest

    const restArr = new Array(rest)
      .fill(1)
      .map((item, id) => pages - rest + id + 1)
    const sizeArr = new Array(size).fill(1).map((item, id) => pageIndex - Math.ceil(size/2)+id+1)
    let startArr;
    if (pages < size) {
      startArr = new Array(pages).fill(1).map((item, id) => 1+id)
    } else {
      startArr = new Array(size).fill(1).map((item, id) => 1+id)
    }

    console.log(isStart)

    return (
      <div
        className={'-pagination'}
        style={this.props.paginationStyle}
      >
        <div className='-previous'>
          <PreviousComponent
            onClick={e => {
              if (!canPrevious) return
              this.changePage(page - 1)
            }}
            disabled={!canPrevious}
          >
            {this.props.previousText}
          </PreviousComponent>
        </div>
        <div className='-center'>
          {
            isStart
              ? renderPagesBtn(startArr, pageIndex, activeStyle, e => this.handleClick(e))
              : isEnd
                ? renderPagesBtn(restArr, pageIndex, activeStyle, e => this.handleClick(e))
                : renderPagesBtn(sizeArr, pageIndex, activeStyle, e => this.handleClick(e))
          }
          <span className='-pageInfo'>{' '}
            <span className='-totalPages'>{pages || 1}</span>
          </span>
          {showPageSizeOptions &&
          <span className='select-wrap -pageSizeOptions'>
              <select
                onChange={e => onPageSizeChange(Number(e.target.value))}
                value={pageSize}
              >
                {pageSizeOptions.map((option, i) => {
                  return (
                    <option key={i} value={option}>
                      {option} {this.props.rowsText}
                    </option>
                  )
                })}
              </select>
            </span>}
        </div>
        <div className='-next'>
          <NextComponent
            onClick={e => {
              if (!canNext) return
              this.changePage(page + 1)
            }}
            disabled={!canNext}
          >
            {this.props.nextText}
          </NextComponent>
        </div>
      </div>
    )
  }
}

export default ReactTablePagination