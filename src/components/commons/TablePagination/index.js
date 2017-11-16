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
    this.applyPage = this.applyPage.bind(this)

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

  applyPage (e) {
    e && e.preventDefault()
    const page = this.state.page
    this.changePage(page === '' ? this.props.page : page)
  }

  render () {
    const {
      // Computed
      pages,
      // Props
      page,
      showPageJump,
      showPageSizeOptions,
      pageSizeOptions,
      pageSize, //页面
      canPrevious,
      canNext,
      onPageSizeChange,
      PreviousComponent = defaultButton,
      NextComponent = defaultButton,
      paginationStyle,
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

    return (
      <div
        className={'-pagination'}
        style={{...paginationStyle, justifyContent: 'center'}}
      >
        <div>
          <PreviousComponent
            onClick={e => {
              if (!canPrevious) return
              this.changePage(page - 1)
            }}
            disabled={!canPrevious}
          >
            上一页
          </PreviousComponent>
        </div>
        <div className='-center' style={{flex: '1 1 auto', maxWidth: '500px'}}>
          {
            isStart
              ? renderPagesBtn(startArr, pageIndex, activeStyle, e => this.handleClick(e))
              : isEnd
                ? renderPagesBtn(restArr, pageIndex, activeStyle, e => this.handleClick(e))
                : renderPagesBtn(sizeArr, pageIndex, activeStyle, e => this.handleClick(e))
          }
          {showPageJump
            ? <div className='-pageJump'>
              至
              <input
               type={'text'}
               onChange={e => {
                 const val = e.target.value
                 const page = val - 1
                 if (val === '') {
                   return this.setState({ page: val })
                 }
                 this.setState({ page: this.getSafePage(page) })
               }}
               value={this.state.page === '' ? '' : this.state.page + 1}
               onBlur={this.applyPage}
               onKeyPress={e => {
                 if (e.which === 13 || e.keyCode === 13) {
                   this.applyPage()
                 }
               }}
             />
           </div>
            : <span className='-currentPage'>
                {page + 1}
              </span>}
          {showPageSizeOptions &&
          <span className='select-wrap -pageSizeOptions'>
              <select
                onChange={e => onPageSizeChange(Number(e.target.value))}
                value={pageSize}
              >
                {pageSizeOptions.map((option, i) => {
                  return (
                    <option key={i} value={option}>
                      {option}行/页
                    </option>
                  )
                })}
              </select>
            </span>}
        </div>
        <div>
          <NextComponent
            onClick={e => {
              if (!canNext) return
              this.changePage(page + 1)
            }}
            disabled={!canNext}
          >
            下一页
          </NextComponent>
        </div>
      </div>
    )
  }
}

export default ReactTablePagination