import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleUserLogin } from '../actions/auth';

class LoginPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      login: false,
      redirect: false,
      userNotFound: false,
      isLoggedIn: false
    }
    this.handleSwitch = this.handleSwitch.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleSwitch(action){
    switch(action){
      case 'login':
        this.setState({
          login: true
        })
        break;
      default:
        break;
    }
  }

  handleLogin(e){
    e.preventDefault()
    const username = e.target[0].value
    let found = false

    const { users, dispatch, auth } = this.props
    users.map(user => {
      if(user === username){
        found = true
        dispatch(handleUserLogin(username))
        alert("Yeah, You are successfully Logged In!")
        this.setState({
          redirect: true
        })
      }
    })

    if(auth !== null){
        return(
          <Redirect to='/me' />
        )
      }

    if(!found){
      this.setState({
        userNotFound: true
      })
    }
  }

  render(){
    const { login, redirect, userNotFound } = this.state
    const { auth } = this.props

    if(auth !== null){
      if(this.props.location.state){
        return(
          <Redirect to={ this.props.location.state.referrer } />
        )
      }
      return(
        <Redirect to='/me' />
      )    
      }
    return(
      <div className="container">
        <h2 className="login-page">Login Page</h2>
        <div className="login-area">
        <center>
        <img src="/login-icon.png" alt="login-icon" className="login-logo" />
        <div className="sections">
         <div className="login-section">
         { userNotFound && (
           alert("Check the username!")
         )}
         <form onSubmit={this.handleLogin}>
          <div className="form-group">
           <select className="form-control" id="username" Style="height: 40px; width:300px; font-size:20px; font-weight:bolder; border: 2px solid black; border-radius: 8px; align:center;">
           <option select="selected">Select your username</option>
           <option>sarahedo</option>
           <option>tylermcginnis</option>
           <option>johndoe</option>
          </select>
           </div>
          <br/>
          <div className="login-button">
           <button className="btn btn-success" Style="height:50px; font-size: 25px; margin-bottom:30px;">Submit</button>
          </div>
         </form>
         </div>
        </div>
       </center>
       </div>
      </div>
    )
  }
}

function mapStateToProps({ users, auth }){
  const usersProp = Object.keys(users)
  return{
    users: usersProp,
    auth
  }
}

export default connect(mapStateToProps)(LoginPage);
