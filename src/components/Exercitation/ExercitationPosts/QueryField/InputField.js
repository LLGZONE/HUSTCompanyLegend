/**
 * Created by LLGZONE on 2017/10/30.
 */
import React from 'react'
import controlInput from '../../../commons/WrapComponent/controlInput'

import './InputField.css'

class InputField extends React.Component {
  render() {
    const { onChange, value } = this.props.input
    return (
      <div className="queryfield-input">
        <input value={value} onChange={onChange} />
      </div>
    )
  }
}

export default controlInput(InputField)