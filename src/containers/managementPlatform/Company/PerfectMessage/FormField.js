/**
 * Created by LLGZONE on 2017/11/12.
 */
import React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import FormSelect from '../../../../components/managementPlatform/Company/PerfectMessage/FormSelect'
import FormTextField from '../../../../components/managementPlatform/Company/PostsPublish/FormTextField'
import FormFile from '../../../../components/managementPlatform/Company/PerfectMessage/FormFile'
import TextField from 'material-ui/TextField'
import '../../../../components/managementPlatform/Company/PerfectMessage/FormField.scss'
import Grid from 'material-ui/Grid'
import { perfectCMsg } from '../../../../actions/company'

import { connect } from 'react-redux'

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

class FormField extends React.Component {
  handleSubmitClick(e) {
    e.preventDefault()
    const {
      companyName,
      companyPlace,
      contact,
      phone,
      alternativePhone,
      site,
      industry,
      nature,
      size,
      intro,
      cert_id,
      groupid,
      license,
      environment,
      perfectCMsg,
    } = this.props

    perfectCMsg({
      companyName,
      companyPlace,
      contact,
      phone,
      alternativePhone,
      site,
      industry,
      nature,
      size,
      intro,
      cert_id,
      groupid,
      license,
      environment,
    })
  }

  render() {
    const { pristine, submitting, reset } = this.props
    return (
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
            label="请输入公司法人"
            component={renderInputField}
          />
          <Field
            name="phone"
            label="请输入电话号码"
            component={renderInputField}
          />
          <Field
            name="alternativePhone"
            label="请输入备用号码"
            component={renderInputField}
          />
          <Field
            name="site"
            label="公司网站"
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
        <Grid container>
          <Field
            name="certId"
            label="公司证书编号"
            component={renderInputField}
            custom={{
              InputLabelProps: {
                shrink: true,
              },
            }}
          />
        </Grid>
        <br/>
        <Grid>
          <Field
            name="groupid"
            label="组织机构代码"
            component={renderInputField}
            custom={{
              InputLabelProps: {
                shrink: true,
              },
            }}
          />
        </Grid>
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
          <button
            onSubmit={(e) => this.handleSubmitClick(e)}
            type="submit"
            disabled={pristine || submitting}
          >
            提交
          </button>
        </div>
      </form>
    )
  }
}

const FormPerfectMessage = reduxForm({
  form: 'perfectMessage',
  destroyOnUnMount: false,
})(FormField)

const selector = formValueSelector('perfectMessage')

const mapStateToProps = (state) => {

  return {
    companyName: selector('companyName'),
    companyPlace: selector('companyPlace'),
    contact: selector('contact'),
    phone: selector('phone'),
    alternativePhone: selector('alternativePhone'),
    site: selector('site'),
    industry: selector('sector'),
    nature: selector('nature'),
    size: selector('nature'),
    intro: selector('intro'),
    cert_id: selector('certId'),
    groupid: selector('groupid'),
    license: selector('license'),
    environment: selector('environment'),
  }
}

export default connect(mapStateToProps, {perfectCMsg: perfectCMsg.request})(FormPerfectMessage)