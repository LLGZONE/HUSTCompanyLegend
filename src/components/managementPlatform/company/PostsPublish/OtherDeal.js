/**
 * Created by LLGZONE on 2017/11/9.
 */
import React from 'react'
import {Field, FormSection} from 'redux-form'

import './OtherDeal.scss'

const renderCheckBoxField = ({label, input}) => (
  <div onClick={e => {
    e.target.classList.toggle('active')
  }} >
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
        <div className="posts-publish-deal">
          其他待遇 :
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
        </div>
      </FormSection>
    )
  }
}

export default OtherDeal