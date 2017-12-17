/**
 * Created by LLGZONE on 2017/10/30.
 */
import React from 'react'
import controlInput from '../../../commons/WrapComponent/controlInput'

import './InputField.css'

class InputField extends React.Component {
  render() {
    return (
      <div className="queryfield-input">
        <input />
      </div>
    )
  }
}

export default controlInput(InputField)