/**
 * Created by LLGZONE on 2017/11/8.
 */
import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import Grid from 'material-ui/Grid'

import 'react-datepicker/dist/react-datepicker.min.css'

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
    const {input: { onChange }} = this.props

    this.setState({start: date})
    onChange(date)
  }

  render() {
    const {label} = this.props

    return (
      <Grid item xs={6} lg={4} style={{display: 'flex', alignItems: 'flex-end'}}>
        {label} :
        <DatePicker
          selected={this.state.start}
          onChange={(date) => this.handleChange(date)}
          locale="zh-cn"
          popperPlacement="top-end"
          showYearDropdown
          className="date-picker"
        />
      </Grid>
    )
  }
}

export default FormDatePicker