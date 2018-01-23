/**
 * Created by LLGZONE on 2017/11/12.
 */
import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'

import FormSelect from '../../../../components/managementPlatform/Company/PerfectMessage/FormSelect'
import FormTextField from '../../../../components/managementPlatform/Company/PostsPublish/FormTextField'
import FormFile from '../../../../components/managementPlatform/Company/PerfectMessage/FormFile'
import Grid from 'material-ui/Grid'
import { perfectCMsg } from '../../../../actions/company'
import renderInputField from '../../../../components/commons/form/renderInputField'

import '../../../../components/managementPlatform/Company/PerfectMessage/FormField.scss'


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
    console.log('push')
    perfectCMsg({
      cname: companyName,
      address: companyPlace,
      corporation: contact,
      phone,
      subphone: alternativePhone,
      site,
      industry: 1,
      property: nature,
      scale: size,
      intro,
      cert_id,
      groupid,
      license,
      high_auth: '',
      environment,
    })
  }

  render() {
    const { pristine, submitting, reset } = this.props
    return (
      <form onSubmit={(e) => this.handleSubmitClick(e)}>
        <Grid spacing={24} container>
          <Field
            name="companyName"
            label="请输入企业信息"
            component={renderInputField}
          />
          <Field
            name="companyPlace"
            label="请输入企业地址"
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
            datas={['IT']}
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
    companyName: selector(state, 'companyName'),
    companyPlace: selector(state, 'companyPlace'),
    contact: selector(state, 'contact'),
    phone: selector(state, 'phone'),
    alternativePhone: selector(state, 'alternativePhone'),
    site: selector(state, 'site'),
    industry: selector(state, 'sector'),
    nature: selector(state, 'nature'),
    size: selector(state, 'size'),
    intro: selector(state, 'intro'),
    cert_id: selector(state, 'certId'),
    groupid: selector(state, 'groupid'),
    license: selector(state, 'license'),
    environment: selector(state, 'environment'),
  }
}

export default connect(mapStateToProps, {perfectCMsg: perfectCMsg.request})(FormPerfectMessage)