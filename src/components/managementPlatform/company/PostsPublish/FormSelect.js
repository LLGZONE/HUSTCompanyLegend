/**
 * Created by LLGZONE on 2017/11/8.
 */
import React from 'react'
import {Field} from 'redux-form'
import PropTypes from 'prop-types'

const FormSelect = ({name, label, datas}) => (
  <div>
    <label>岗位类别</label>
    <div>
      <Field name={name} component="select">
        {datas.map((data) => (
          <option key={data} value={data}>{data}</option>
        ))}
      </Field>
    </div>
  </div>
)

FormSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  datas: PropTypes.array.isRequired
}

export default FormSelect