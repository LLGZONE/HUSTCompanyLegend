/**
 * Created by LLGZONE on 2017/11/8.
 */
import React from 'react'
import {Field} from 'redux-form'
import PropTypes from 'prop-types'

const FormSelect = ({name, label, datas}) => (
  <div style={{display: 'flex'}} className="posts-publish-gap">
    <label>{label} :</label>
    <div style={{marginLeft: '10px', flex: 'auto', maxWidth: '257px'}}>
      <Field name={name} component="select" style={{width: '100%', height: '100%'}}>
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