import React from 'react'
import { Field } from 'redux-form'
import { Grid } from 'material-ui/Grid'

import renderInputField from '../../../../components/commons/form/renderInputField'
import FormDatePicker from '../../../../components/commons/form/FormDatePicker'

/*
 stid	integer($int64)
 学生ID
 sid	integer($int64)
 所属学校的ID
 stname	string
 学生姓名
 sex	integer($int64)
 性别
 birth	string
 出生日期
 mid	integer($int64)
 专业ID
 */
class FormField extends React.Component {
  render() {
    return (
      <form>
        <Grid container>
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
            name="请输入所在专业"
            label="major"
            component={renderInputField}
          />
        </Grid>
      </form>
    )
  }
}