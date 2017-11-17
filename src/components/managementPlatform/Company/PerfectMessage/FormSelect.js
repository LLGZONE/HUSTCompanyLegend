/**
 * Created by LLGZONE on 2017/11/12.
 */
import React from 'react'
import {Field} from 'redux-form'
import PropTypes from 'prop-types'

const FormSelect = ({name, label, datas}) => (
    <Field name={name} component="select">
      <option value=''>{label}</option>
      {datas.map((data) => (
        <option key={data} value={data}>{data}</option>
      ))}
    </Field>
)

FormSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  datas: PropTypes.array.isRequired
}

export default FormSelect