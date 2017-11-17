/**
 * Created by LLGZONE on 2017/11/12.
 */
import React from 'react'
import Dropzone from 'react-dropzone'

import PropTypes from 'prop-types'

class FormFile extends React.Component {
  constructor() {
    super()
    this.state = {files: []}
  }

  onDrop(files) {
    const {input: {onChange}} = this.props

    this.setState({
      files: this.state.files.push(files)
    })

    const imgUrls = this.state.files.map(file => URL.createObejectURL(file))
    onChange(imgUrls)
  }

  render() {
    const {
      input: {value},
      label,
      multiple,
      className,
      dropClassName,
    } = this.props

    const v = value || []

    let id = 0
    return (
      <div className={className}>
        <span>{label}</span>:
        <Dropzone multiple={multiple} className={dropClassName}>
          选择文件
        </Dropzone>
        <ul>
          {v.map(url => <i key={id++}><img src={url} alt="img" /></i>)}
        </ul>
      </div>
    )
  }
}

FormFile.propTypes = {
  dropClassName: PropTypes.string,
}

export default FormFile