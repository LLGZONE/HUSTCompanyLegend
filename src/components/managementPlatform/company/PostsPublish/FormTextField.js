import React from 'react'
import Editor from '../../../commons/Editor'

const FormTextField = ({label,input: {value, onChange}}) => (
  <div>
    {label}:
    <Editor
      placeholder={`${label}...`}
      value={value}
      onChange={onChange}
      style={{minHeight: '300px'}}
    />
  </div>
)

export default FormTextField