import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleAnswer } from '../actions/shared';

class Questions extends Component {
  constructor (props) {
    super(props)
    this.state = {
      answer: this.props.answer
    }
    this.changeOption = this.changeOption.bind(this)
  }

  changeOption(opt){
    const { dispatch, auth, question } = this.props
    if (!this.state.answer) {
      if (opt === 1) {
        dispatch(handleAnswer(auth, question.id, 'optionOne'))
        this.setState({ answer: 'optionOne' })
      } else if (opt === 2) {
        dispatch(handleAnswer(auth, question.id, 'optionTwo'))
        this.setState({ answer: 'optionTwo' })
      }
    }
  }

  render(){
    const { question } = this.props
    const { answer } = this.state
    let classes = []
    if(answer){
      if(answer === 'optionOne'){
        classes = ['opt option-one selected', 'opt option-two']
      }
       else if(answer === 'optionTwo'){
        classes = ['opt option-one', 'opt option-two selected']
      }
    }
    else{
      classes = ['opt option-one', 'opt option-two']
    }
    return (
      <div>
       <div className="well" style={divStyle}>
       <div className="media">
        <div className="media-body">
         <div className="well well-sm" style={divwellStyle}>
          <div className={classes[0]} onClick={() => this.changeOption(1)}>{question.optionOne.text}</div>
         </div>
         <div className="well well-sm" style={wellStyle}>
          <div className={classes[1]} onClick={() => this.changeOption(2)}>{question.optionTwo.text}</div>
         </div>
         </div>
         <div className="media-right">
         <Link to={`/questions/${question.id}`}>
           <button className="btn btn-success" style={linkStyle}>See</button>
         </Link>
        </div>
       </div>
      </div>
     </div>
    )
  }
}

const divStyle = {
  background: "#CCD1D1",
  border: "2px solid #660099",
  borderRadius: "8px",
}

const wellStyle = {
  border: "2px solid black",
  borderRadius: "6px",
}

const linkStyle = {
  marginTop:"35px",
  fontSize: "30px",
  marginRight: "30px",
  marginLeft: "20px",
  border: "2px solid #1E8449",
  borderRadius: "4px",
}

const divwellStyle = {
  border: "2px solid black",
  borderRadius: "6px",
}

function mapStateToProps ({ auth }) {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Questions);
