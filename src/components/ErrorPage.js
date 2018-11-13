import React from 'react';
import { Redirect } from 'react-router-dom';

class ErrorPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currentLocation: window.location.pathname
    }
  }

  render(){
    const { auth } = this.props

    if(auth === null){
      return(
        <Redirect to={{
          pathname: '/loginpage',
          state: { referrer: this.state.currentLocation }
        }} />
      )
    }

    return(
      <div className="well">
       <h2>404 Page Not Found!</h2>
      </div>
    )
  }
}

export default ErrorPage;
