/**
 * Created by LLGZONE on 2017/11/8.
 */
import React from 'react'
import {Field} from 'redux-form'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import Grid from 'material-ui/Grid'
import MenuItem from 'material-ui/Menu/MenuItem'

const FormSelect = ({name, label, datas}) => (
    <Grid item xs={6} lg={4}>
      <Field name={name} label={label} component={({input, label}) =>
        <TextField
          select
          id={label}
          label={label}
          value={input.value}
          onChange={(e)=>input.onChange(e.target.value)}
          style={{width: '100%'}}
        >
          {datas.map((data) => (
            <MenuItem key={data} value={data}>{data}</MenuItem>
          ))}
        </TextField>}
      />
    </Grid>
)

FormSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  datas: PropTypes.array.isRequired
}

export default FormSelect