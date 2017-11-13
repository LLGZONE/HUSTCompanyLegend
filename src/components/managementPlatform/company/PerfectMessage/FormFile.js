/**
 * Created by LLGZONE on 2017/11/12.
 */
import React from 'react'
import Dropzone from 'react-dropzone'

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
    const imgUrls = this.state.files.map(file => URL.createObjectURL(file))
    onChange(imgUrls)
  }

  render() {
    return (
      <div>
        <Dropzone onDrop={() => this.onDrop()}>
          <p>选择文件</p>
        </Dropzone>
        <ul>
          {this.state.files.map()}
        </ul>
      </div>
    )
  }
}