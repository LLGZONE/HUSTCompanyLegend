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
    this.setState({
      files
    })
  }

  render() {
    return (
      <div>
        <Dropzone>
          <p>选择文件</p>
        </Dropzone>
      </div>
    )
  }
}