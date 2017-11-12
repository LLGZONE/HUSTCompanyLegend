/**
 * Created by LLGZONE on 2017/11/9.
 */
import React from 'react'
import {Field, FormSection} from 'redux-form'

const renderCheckBoxField = ({label, input}) => (
  <div>
    <label>
      {label}
      <input
        type="checkbox"
        value={label}
        onChange={input.onChange}
        style={{display: 'none'}}
      />
    </label>
  </div>
)


class OtherDeal extends React.Component {

  render() {

    return (
      <FormSection name="otherDeal">
        <div>
          其他待遇:
        </div>
        <Field
          name="employee"
          label="正式员工待遇"
          component={renderCheckBoxField}
        />
        <Field
          name="trafic"
          label="交通补贴"
          component={renderCheckBoxField}
        />
        <Field
          name="communication"
          label="通讯补贴"
          component={renderCheckBoxField}
        />
        <Field
          name="tutor"
          label="一对一辅导"
          component={renderCheckBoxField}
        />
      </FormSection>
    )
  }
}

export default OtherDeal