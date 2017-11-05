/**
 * Created by LLGZONE on 2017/10/30.
 */
import React from 'react'

function controlInput(WrapComponent) {
  return class ControlInput extends React.Component {
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
      return <WrapComponent {...this.props} input={{value: this.state.inputValue, onChange: (e) => this.onChange(e)}} />
    }
  }
}

export default controlInput