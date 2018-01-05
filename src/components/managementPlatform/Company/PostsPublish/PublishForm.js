/**
 * Created by LLGZONE on 2017/11/8.
 */
import React from 'react'
import {Field, reduxForm} from 'redux-form'
import TextField from 'material-ui/TextField'
import Grid from 'material-ui/Grid'

import OtherDeal from './OtherDeal'
import FormDatePicker from  './FormDatePicker'
import FormSelect from './FormSelect'
import {required} from '../../../../utils/validate'
import FormTextField from './FormTextField'
import moment from 'moment'

export const renderInputField = ({ input, label, type, meta: { touched, error}, custom}) => (
  <Grid item xs={6} lg={4}>
    <TextField
      id={label}
      error={error && touched}
      {...input}
      label={label}
      type={type}
      helperText={error}
      style={{width: '100%'}}
      {...custom}
    />
  </Grid>
)

const PublishForm = ({companyName}) => (
  <form>
    <Grid container>
      <Field
        name="companyName"
        label="单位名称"
        type="text"
        component={renderInputField}
        validate={required}
      />
      <Field
        name="postsName"
        label="岗位名称"
        type="text"
        component={renderInputField}
        validate={required}
      />
      <FormSelect
        label="岗位类别"
        name="postsTypes"
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
        datas={["包食宿", "包三餐", "包食宿+早餐", "包食宿+中餐"]}
      />
      <Field
        name="validDate"
        label="报名有效期"
        component={FormDatePicker}
      />
    </Grid>
    <br/>
    <OtherDeal/>
    <br/>
    <Field
      name="condition"
      label="岗位条件"
      component={FormTextField}
    />
    <br/>
    <Field
      name="duty"
      label="岗位职责"
      component={FormTextField}
    />
    <br/>
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
  form: 'publishForm',
  initialValues: {
    postsType: '研发岗',
    beOfficial: '无转正',
    room: '包食宿',
    duration: '一周起',
    invalidDate: moment()
  },
  destroyOnUnmount: false,
})(PublishForm)