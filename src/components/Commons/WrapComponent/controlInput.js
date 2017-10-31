/**
 * Created by LLGZONE on 2017/10/30.
 */
import React from 'react'

function controlInput(WrapComponent) {
  return class ControlInput extends React.components {
    constructor(props) {
      super(props)
      this.state = {
        inputValue: ''
      }
    }

    onChange(e) {
      const value = e.target.value
      this.props.getInputValue(value)
      this.setState({inputValue: value})
    }

    render() {
      return <WrapComponent {...this.props} input={{value: this.state.inputValue, onChange: () => this.onChange}} />
    }
  }
}

export default controlInput