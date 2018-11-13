import React, { Fragment } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { verifyAuth } from '../utils/helpers';

class PrivateRoute extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        isAuthenticated: false
      }
  }

  componentDidMount(){
    verifyAuth().then(isAuthenticated => {
      this.setState({
        isAuthenticated
      });
    } );
  }
  render(){
    const { component: Component, ...rest } = this.props
    return(
      <Route { ...rest } render={props => (
        <div>
         {!this.state.isAuthenticated && (
           <Redirect to={{
             pathname: '/loginpage',
             state: { from: this.props.location }
           }} />
         )}
         <Component { ...this.props } />
        </div>
      )} />
    );
  }
}

export default connect()(PrivateRoute);
