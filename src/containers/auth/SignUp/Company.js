import React from 'react'

import SignUp from '../../../components/managementPlatform/SignUp/index'

class CompanySignUp extends React.Component {

  render() {
    return (
      <SignUp title={'公司单位'} identity={'companyManagement'} type={'company'}/>
    )
  }
}

export default CompanySignUp