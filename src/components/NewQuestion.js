import React from 'react';
import NavBar from './NavBar';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleAddQuestionAction } from '../actions/shared';

class NewQuestion extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      redirect: false,
      currentLocation: window.location.pathname
    }
    this.addQuestion = this.addQuestion.bind(this)
  }

  addQuestion(e){
    e.preventDefault()
    let optOne = e.target[0].value
    let optTwo = e.target[1].value
    this.props.dispatch(handleAddQuestionAction(this.props.auth, optOne, optTwo))
    this.setState({
      redirect: true
    })
  }

  render(){
    const { auth } = this.props
    console.log(window.location.toString())
    if(auth === null){
      return(
        <Redirect to={{
          pathname: '/loginpage',
          state: { referrer: this.state.currentLocation }
        }} />
      )
    }
    if(this.state.redirect){
      return(
        <Redirect to='/me' />
      )
    }
    return(
      <div className="container">
        <NavBar />
        <br/>
        <center className="well" style={centerStyle}>
        <div>
         <h1 className="heading">Add Question</h1>
        </div>
        <br/>
        <form onSubmit={this.addQuestion}>
        <div className="media">
         <div className="media-body">
          <div className="input-box">
            <input type="text" className="opt input option-one" placeholder="First Option..." required />
         </div>
         <h2 style={{ marginLeft:'10px' }}>OR</h2>
         <div className="input-box">
           <input type="text" className="opt input option-two" placeholder="Second Option..." required />
         </div>
         </div>
         <div className="media-right">
          <button className="btn btn-success" style={btnStyle}>Add</button>
         </div>
        </div>

        </form>
       </center>
     </div>
    )
  }
}

const centerStyle = {
  background: "#CCD1D1",
  border: "2px solid #660099",
  borderRadius: "8px",
}

const btnStyle = {
  float: "right",
  marginTop:"65px",
  fontSize: "30px",
  marginRight:"200px",
  width: "100px",
  border: "2px solid #1E8449",
  borderRadius: "4px",
}

function mapStateToProps({auth}){
  return{
    auth
  }
}
export default connect(mapStateToProps)(NewQuestion);
