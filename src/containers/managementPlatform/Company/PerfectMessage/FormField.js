/**
 * Created by LLGZONE on 2017/11/12.
 */
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import FormSelect from '../../../../components/managementPlatform/Company/PerfectMessage/FormSelect'
import FormTextField from '../../../../components/managementPlatform/Company/PostsPublish/FormTextField'
import FormFile from '../../../../components/managementPlatform/Company/PerfectMessage/FormFile'
import { Link } from 'react-router-dom'
import TextField from 'material-ui/TextField'
import '../../../../components/managementPlatform/Company/PerfectMessage/FormField.scss'
import Grid from 'material-ui/Grid'

const renderInputField = ({ input, label, meta: { touched, error } }) => (
  <Grid item xs={10} md={6} lg={4}>
    <TextField
      {...input}
      id={label}
      label={label}
      error={touched && error}
      style={{width: '100%'}}
    />
  </Grid>
)

const FormField = ({ pristine, submitting, reset }) => (
  <form>
    <Grid spacing={24} container>
      <Field
        name="companyName"
        label="请输入企业信息"
        hasLabel={false}
        component={renderInputField}
      />
      <Field
        name="companyPlace"
        label="请输入企业地址"
        hasLabel={false}
        component={renderInputField}
      />
      <Field
        name="contact"
        label="请输入联系人"
        hasLabel={false}
        component={renderInputField}
      />
      <Field
        name="alternativePhone"
        label="请输入备用号码"
        hasLabel={false}
        component={renderInputField}
      />
      <FormSelect
        name="sector"
        label="请选择所属行业"
        datas={['计算机集成', '通信与信息', '电力自动化']}
      />
      <FormSelect
        name="nature"
        label="请选择公司性质"
        datas={['国有控股', '集体控股', '私营企业', '股份制企业']}
      />
      <FormSelect
        name="size"
        label="请选择公司规模"
        datas={['10人一下', '10-50人', '50-100人', '100-500人', '500人以上']}
      />
    </Grid>
    <br/>
    <Field
      name="intro"
      label="公司简介"
      component={FormTextField}
    />
    <br/>
    <Field
      name="license"
      label="上传公司信用资质"
      component={FormFile}
      multiple={false}
      className="perfect-message-drag"
      dropClassName="perfect-message-drag-select"
    />
    <Field
      name="environment"
      label="上传公司环境照片"
      component={FormFile}
      dropClassName="perfect-message-drag-env"
    />
    <div className="perfect-message-form-btn">
      <button type="button" disabled={pristine || submitting} onClick={reset}>
        重置
      </button>
      <button onSubmit={() => {

      }} type="submit" disabled={pristine || submitting}>
        <Link to="/management/company/exercitation/pending">
          提交
        </Link>
      </button>
    </div>
  </form>
)

export default reduxForm({
  form: 'perfectMessage',
  destroyOnUnMount: false,
})(FormField)