import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Grid from 'material-ui/Grid'
import {withStyles} from 'material-ui/styles'

import renderInputField from '../../../../components/commons/form/renderInputField'
import FormDatePicker from '../../../../components/commons/form/FormDatePicker'
import perfectSTMsg from '../servies/perfectSTMsg'

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
    const stid = await perfectSTMsg(values)
  }

  render() {
    const { submitting, pristine, reset, handleSubmit } = this.props
    const {classes} = this.props

    return (
      <form onSubmit={handleSubmit}>
        <Grid className={classes.center} spacing={24} container>
          <Field
            name="name"
            label="请输入姓名"
            component={renderInputField}
          />
          <Field
            name="sex"
            label="请输入性别"
            component={renderInputField}
          />
          <Field
            name="school"
            label="请输入所在学校"
            component={renderInputField}
          />
          <Field
            name="birth"
            label="出生日期"
            component={FormDatePicker}
          />
          <Field
            name="major"
            label="请输入所在专业"
            component={renderInputField}
          />
        </Grid>
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
  form: 'stdPerfectMessage',
  destroyOnUnmount: false,
  onSubmit: FormField.handleSubmit,
})(FormField))