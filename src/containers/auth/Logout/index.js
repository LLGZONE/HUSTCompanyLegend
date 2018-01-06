import React from 'react'
import { connect } from 'react-redux'
import { getUid, isLogin } from '../../../reducers/selectors'

import { logout } from '../../../actions/user'

import '../../../components/commons/ExercitationHeader/index.css'
import 'font-awesome/css/font-awesome.min.css'

class LogoutBtn extends React.Component {
  handleClick() {
    const {uId, logout} = this.props

    if (uId) {
      logout(uId)
    }
  }

  render() {
    return (
      <div onClick={() => this.handleClick()} className="commons-exercitation-icon">
        <i className="fa fa-sign-out" aria-hidden="true">
        </i>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const login = isLogin(state)
  let uId = null
  if (login) {
    uId = getUid(state)
  }

  return {
    uId
  }
}

export default connect(mapStateToProps, {logout: logout.request})(LogoutBtn)