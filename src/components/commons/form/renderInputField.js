import React from 'react'
import TextField from 'material-ui/TextField'
import Grid from 'material-ui/Grid'

const renderInputField = ({ input, label, meta: { touched, error }, custom }) => (
  <Grid item xs={10} md={6} lg={4}>
    <TextField
      {...input}
      id={label}
      label={label}
      error={touched && error}
      style={{ width: '100%' }}
      {...custom}
    />
  </Grid>
)

export default renderInputField