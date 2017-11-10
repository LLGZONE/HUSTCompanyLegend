import React from 'raect'
import Editor from '../../../commons/Editor'

const FormTextField = ({label,input: {value, onChange}}) => (
  <div>
    {label}:
    <Editor
      placeholder={`${label}...`}
      value={value}
      onChange={onChange}
    />
  </div>
)

export default FormTextField