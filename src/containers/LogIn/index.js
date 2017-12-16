/**
 * Created by LLGZONE on 2017/11/4.
 */
import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import routes from '../../routes'
import { login } from '../../actions/user'
import LogInType from '../../components/LogIn/LogInType'
import FormField from '../../components/LogIn/FormField'

import '../../components/LogIn/index.scss'
import { isLogin } from '../../reducers/selectors'

class LogIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: '',
      account: '',
      password: '',
    }
  }

  componentWillMount() {
    const type = this.props.match.params
    this.setState({type})
  }

  handleInputChange(e) {
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  signUp() {
    const { dispatch, isLogin } = this.props
    const { account: username, password, type } = this.state

    dispatch(login.request(username, password, type))
    if (isLogin) {
      dispatch(push(routes.companyManagement.path))
    } else {
      alert('not login')
    }
  }

  render() {
    const {type} = this.props.match.params
    let to = '/';

    switch (type) {
      case 'company':
        to = '/management/company/exercitation/signup'
        break
      case 'school':
        to = '/management/school/signup'
        break
      case 'person':
        to = '/management/person/signup'
        break
      default:
        break
    }

    return (
      <section className="login">
        <div className="login-container">
          <LogInType type={type}/>
          <FormField
            onSubmit={() => this.signUp()}
            onChange={(e) => this.handleInputChange(e)}
            to={to}
          />
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: isLogin(state)
  }
}

export default connect(mapStateToProps)(LogIn)