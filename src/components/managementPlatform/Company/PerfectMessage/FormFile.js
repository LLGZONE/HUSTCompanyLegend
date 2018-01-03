/**
 * Created by LLGZONE on 2017/11/12.
 */
import React from 'react'
import Dropzone from 'react-dropzone'

import PropTypes from 'prop-types'

class FormFile extends React.Component {
  constructor() {
    super()
    this.state = {
      files: [],
    }
  }

  onDrop(files) {
    const {input: {onChange, value}} = this.props

    this.setState({
      files: [...this.state.files, ...files]
    })

    onChange([...files, ...value])
  }

  render() {
    const {
      label,
      multiple,
      className,
      dropClassName,
      input: {
        value
      }
    } = this.props

    let id = 0
    return (
      <div className={className}>
        <span>{label}</span>:
        <Dropzone onDrop={(files) => this.onDrop(files)} multiple={multiple} className={dropClassName}>
          选择文件
        </Dropzone>
        <ul>
          {value && value.map(file => {
            return <i key={id++}>
              <img style={{marginLeft: '2px'}} src={file.preview} width="80px" height="80px" alt="img" />
            </i>
          })}
        </ul>
      </div>
    )
  }
}

FormFile.propTypes = {
  dropClassName: PropTypes.string,
}

export default FormFile