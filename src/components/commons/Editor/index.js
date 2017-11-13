/**
 * Created by LLGZONE on 2017/11/9.
 */
import React from 'react'
import PropTypes from 'prop-types'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './index.scss'

class Editor extends React.Component {
  render () {
    const {value, onChange, children, readOnly, style, bounds} = this.props

    return (
        <ReactQuill
          theme='snow'
          onChange={(html) => onChange(html)}
          value={value}
          modules={readOnly ? Editor.modulesNoBar : Editor.modules}
          formats={Editor.formats}
          bounds={bounds ? bounds : '#root'}
          readOnly={readOnly}
          placeholder={this.props.placeholder}
          style={style}
        >
          {children}
        </ReactQuill>
    )
  }
}

Editor.modules = {
  toolbar: [
    [{ 'header': [false, 1, 2, 3, 4, 5, 6]}],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'script': 'sub'}, { 'script': 'super' }],
    [{'list': 'ordered'}, {'list': 'bullet'}],
    [{'indent': '-1'}, {'indent': '+1'}],
    ['blockquote', 'code-block'],
    ['link', 'image'],
    ['clean']
  ],
  clipboard: {
    matchVisual: false
  }
}

Editor.modulesNoBar = {
  toolbar: false,
  clipboard: {
    matchVisual: false
  }
}

Editor.propTypes = {
  placeholder: PropTypes.string,
}

export default Editor