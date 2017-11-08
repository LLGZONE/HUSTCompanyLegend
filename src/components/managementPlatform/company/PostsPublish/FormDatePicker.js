/**
 * Created by LLGZONE on 2017/11/8.
 */
import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

class FormDatePicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      start: moment()
    }
  }

  componentWillMount() {
    this.props.input.onChange(this.state.start)
  }

  handleChange(date) {
    const {input: {value, onChange}} = this.props

    this.setState({start: date})
    onChange(date)
  }

  render() {
    const {label} = this.props

    return (
      <div>
        {label}
        <DatePicker
          selected={this.state.start}
          onChange={(date) => this.handleChange(date)}
        />
      </div>
    )
  }
}

export default FormDatePicker