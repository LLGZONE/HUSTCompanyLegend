/**
 * Created by LLGZONE on 2017/10/30.
 */
import React from 'react'
import contolInput from '../../Commons/WrapComponent/controlInput'

import './InputField.css'

class InputField extends React.Component {
  render() {
    const {onChange, value} = this.props
    return (
      <div className="queryfield-input">
        <input onChange={onChange} value={value} />
      </div>
    )
  }
}

export default contolInput(InputField)