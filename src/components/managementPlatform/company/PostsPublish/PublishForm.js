/**
 * Created by LLGZONE on 2017/11/8.
 */
import React from 'react'
import {Field, reduxForm} from 'redux-form'

import OtherDeal from './OtherDeal'
import FormDatePicker from  './FormDatePicker'
import FormSelect from './FormSelect'
import {required} from '../../../../utils/other/validate'

const renderInpuField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const PublishForm = ({companyName}) => (
  <form>
    <Field
      name="companyName"
      label="单位名称"
      type="text"
      component={renderInputField)}
      validate={required}
    />
    <Field
      name="postsName"
      label="岗位名称"
      type="text"
      component={renderInpuField}
      validate={required}
    />
    <div>
      <FormSelect
        label="单位名称"
        name="companyName"
        datas={["研发岗", "测试岗", "运维岗", "运营岗", "产品岗", "行政岗"]}
      />
      <FormSelect
        name="转正机会"
        label="beOfficial"
        datas={["无转正", "可转正", "优先录用"]}
      />
      <Field
        name="place"
        label="实习地点"
        type="text"
        component={renderInpuField}
        validate={required}
      />
      <FormSelect
        name="duration"
        label="实习周期"
        datas={["一周起", "一个月", "两个月", "三个月", "半年", "一年"]}
      />
      <FormSelect
        name="room"
        label="食宿条件"
        datas={["包住宿", "包三餐", "包食宿+早餐", "包食宿+中餐"]}
      />
      <Field
        name="validDate"
        label="报名有效期"
        component={FormDatePicker}
      />
    </div>
    <Field
      name="otherDeal"
      label="其他待遇"
      component={OtherDeal}
    />
  </form>
)

export default reduxForm()(PublishForm)