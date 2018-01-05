/**
 * Created by LLGZONE on 2017/11/12.
 */
import React from 'react'
import { Field } from 'redux-form'
import PropTypes from 'prop-types'
import MenuItem from 'material-ui/Menu/MenuItem'
import TextField from 'material-ui/TextField'
import Grid from 'material-ui/Grid'

const FormSelect = ({ name, label, datas }) => (
  <Field label={label} name={name} component={({ input, label, meta: { touched, error } },) => (
    <Grid item xs={11} md={6} lg={4}>
      <TextField
        id={label}
        error={error && touched}
        value={input.value}
        onChange={e => input.onChange(e.target.value)}
        select
        label={label}
        helperText={error}
        style={{ width: '100%'}}
      >
        {datas.map((data) => (
          <MenuItem key={data} value={data}>{data}</MenuItem>
        ))}
      </TextField>
    </Grid>
  )}/>
)

FormSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  datas: PropTypes.array.isRequired,
}

export default FormSelect