/**
 * Created by LLGZONE on 2017/11/4.
 */
import React from 'react'
import {Link} from 'react-router-dom'
import LogInType from './LogInType'
import FormField from './FormField'

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
    console.log(this.state.account, this.state.password)
  }

  render() {
    const type = this.props.match.params

    return (
      <section>
        <LogInType/>
        <FormField/>
      </section>
    )
  }
}