/**
 * Created by LLGZONE on 2017/11/8.
 */
import React from 'react'
import {Field, reduxForm} from 'redux-form'

import OtherDeal from './OtherDeal'
import FormDatePicker from  './FormDatePicker'
import FormSelect from './FormSelect'
import {required} from '../../../../utils/other/validate'
import FormTextField from './FormTextField'

export const renderInputField = ({ input, label, type, meta: { touched, error, warning }, hasLabel=true}) => (
  <div className="posts-publish-gap" style={{display: 'flex', alignItems: 'center', marginLeft: '10px'}}>
    {hasLabel ? <label>{label} :</label> : null}
    <div>
      <input {...input} placeholder={label} type={type} style={{padding: '0 0 0 10px'}}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const PublishForm = ({companyName}) => (
  <form>
    <div className="posts-publish-two-col">
      <Field
        name="companyName"
        label="单位名称"
        type="text"
        component={renderInputField}
        validate={required}
      />
      <div> </div>
      <Field
        name="postsName"
        label="岗位名称"
        type="text"
        component={renderInputField}
        validate={required}
      />
      <div> </div>
      <FormSelect
        label="岗位类别"
        name="companyName"
        datas={["研发岗", "测试岗", "运维岗", "运营岗", "产品岗", "行政岗"]}
      />
      <FormSelect
        name="beOfficial"
        label="转正机会"
        datas={["无转正", "可转正", "优先录用"]}
      />
      <Field
        name="place"
        label="实习地点"
        type="text"
        component={renderInputField}
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
    <OtherDeal/>
    <Field
      name="condition"
      label="岗位条件"
      component={FormTextField}
    />
    <Field
      name="duty"
      label="岗位职责"
      component={FormTextField}
    />
    <div className="posts-publish-btn-container">
      <button className="posts-publish-btn">
        提交
      </button>
      <button className="posts-publish-btn">
        预览
      </button>
    </div>
  </form>
)

export default reduxForm({
  name: 'publish'
})(PublishForm)