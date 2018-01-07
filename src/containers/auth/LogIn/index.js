/**
 * Created by LLGZONE on 2017/11/4.
 */
import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import routes from '../../../routes/index'
import { login } from '../../../actions/user'
import LogInType from '../../../components/LogIn/LogInType'
import FormField from '../../../components/LogIn/FormField'

import '../../../components/LogIn/index.scss'
import { isLogin } from '../../../reducers/selectors'

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
    const { type } = this.props.match.params
    this.setState({type})
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.match.params.type)
    if (nextProps.match.params.type !== this.state.type) {
      this.setState({type: nextProps.match.params.type})
      console.log('aaa')
    }
  }

  handleInputChange(e) {
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  signUp(e) {
    e.preventDefault()
    const {dispatch} = this.props
    const {account: username, password, type} = this.state
    console.log(type)
    dispatch(login.request(username, password, type))
  }

  render() {
    const { isLogin, isFetching, error, redirect } = this.props
    let type
    if (isLogin) {
      type = this.props.type
    } else {
      type = this.props.match.params.type
    }
    let to = '/'

    switch (type) {
      case 'company':
        to = routes.companyManagement.signUp.path
        break
      case 'school':
        to = routes.schoolManagement.signUp.path
        break
      case 'student':
        to = routes.studentManagement.signUp.path
        break
      default:
        break
    }
    return (
      isLogin
        ? <Redirect to={redirect} />
        : <section className="login">
          <div className="login-container">
            <LogInType type={type}/>
            <FormField
              onSubmit={(e) => this.signUp(e)}
              onChange={(e) => this.handleInputChange(e)}
              to={to}
              progress={isFetching}
            />
            {error && <p style={{color: "rgb(119, 0, 0)"}}>{error}</p>}
          </div>
        </section>
    )
  }
}

const mapStateToProps = (state) => {
  const type = state.reducers.user.userType
  let redirect = '/'
  switch (type) {
    case 'company':
      redirect = routes.companyManagement.path
      break;
    case 'school':
      redirect = routes.schoolManagement.path
      break
    case 'student':
      redirect = routes.studentManagement.path
      break;
    default:
      break;
  }

  return {
    isLogin: isLogin(state),
    isFetching: state.reducers.user.isFetching,
    error: state.reducers.user.error,
    type,
    redirect,
  }
}

export default connect(mapStateToProps)(LogIn)