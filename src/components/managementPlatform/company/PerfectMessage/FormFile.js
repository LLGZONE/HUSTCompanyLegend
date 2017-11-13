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
      files
    })
    const imgUrls = this.state.files.map(file => URL.createObejectURL(file))
    onChange(imgUrls)
  }

  render() {
    const {input: {value}, label} = this.props

    let id = 0
    return (
      <div>
        <p>{label}</p>
        <Dropzone>
          <p>选择文件</p>
        </Dropzone>
        <ul>
          {value.map(url => <i key={id++}><img src={url} alt="img" /></i>)}
        </ul>
      </div>
    )
  }
}

export default FormFile