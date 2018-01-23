import React from 'react'

import SignUp from '../../../components/managementPlatform/SignUp/index'

class StudentSignUp extends React.Component {

  render() {
    return (
      <SignUp title={'学生个人'} identity={'studentManagement'} type={'student'} />
    )
  }
}

export default StudentSignUp