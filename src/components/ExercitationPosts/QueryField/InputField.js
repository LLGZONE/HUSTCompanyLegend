/**
 * Created by LLGZONE on 2017/10/30.
 */
import React from 'react'
import controlInput from '../../Commons/WrapComponent/controlInput'
import PropTypes from 'prop-types'

import './InputField.css'

class InputField extends React.Component {
  render() {
    const {onChange, value} = this.props.input
    return (
      <div className="queryfield-input">
        <input onChange={onChange} value={value} />
      </div>
    )
  }
}

InputField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default controlInput(InputField)