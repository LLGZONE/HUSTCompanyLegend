/**
 * Created by LLGZONE on 2017/11/12.
 */
import React from 'react'
import {Field} from 'redux-form'
import {renderInputField} from '../PostsPublish/PublishForm'
import FormSelect from './FormSelect'
import FormTextField from '../PostsPublish/FormTextField'

const render

const FormField = () => (
  <form>
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
    <Field
      name="intro"
      label="公司简介"
      component={FormTextField}
    />
    <Field
      name=""
    />
  </form>
)

export default FormField