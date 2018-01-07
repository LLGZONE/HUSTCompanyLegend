import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Grid from 'material-ui/Grid'
import {withStyles} from 'material-ui/styles'

import renderInputField from '../../../../components/commons/form/renderInputField'
import FormTextField from '../../../../components/managementPlatform/Company/PostsPublish/FormTextField'

import '../../../../components/managementPlatform/Company/PerfectMessage/FormField.scss'

const styles =(theme) => ({
  center: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    }
  }
})

class FormField extends React.Component {
  static async handleSubmit(values, dispatch) {
    console.log(values)
  }

  render() {
    const { submitting, pristine, reset, handleSubmit } = this.props
    const {classes} = this.props

    return (
      <form onSubmit={handleSubmit}>
        <Grid className={classes.center} spacing={24} container>
          <Field
            name="name"
            label="请输入学校名"
            component={renderInputField}
          />
          <Field
            name="site"
            label="请输入网站"
            component={renderInputField}
          />
          <Field
            name="certId"
            label="请输入证书编号"
            component={renderInputField}
          />
          <Field
            name="highAuth"
            label="请输入上级部门"
            component={renderInputField}
          />
          <Field
            name="corporation"
            label="请输入法人"
            component={renderInputField}
          />
          <Field
            name="groupId"
            label="请输入组织代码"
            component={renderInputField}
          />
        </Grid>
        <Field
          name="intro"
          label="学校简介"
          component={FormTextField}
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

export default withStyles(styles, {withTheme: true})(reduxForm({
  form: 'sPerfectMessage',
  destroyOnUnmount: false,
  onSubmit: FormField.handleSubmit,
})(FormField))