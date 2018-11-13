import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import UserBar from './UserBar';
import Questions from './Questions';
import { Redirect } from 'react-router-dom';

class MyQuestions extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currentLocation: window.location.pathname
    }
  }
  render(){
    const { questions, user, auth } = this.props

    if(auth === null){
      return(
        <Redirect to={{
          pathname: '/loginpage',
          state: { referrer: this.state.currentLocation }
        }} />
      )
    }
    return(
      <div className="container">
        <NavBar />
       <UserBar user={ user } />
        <div className="question-set">
          { questions.map(question => (
            <Questions question={question} answer={user.answers[question.id]} key={question.id} />
          )).reverse()}
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ auth, users, questions }) {
  let myQuestions = []
  let user = users[auth]

  Object.keys(questions).map(k => questions[k]).filter(question => {
    if (user.questions.includes(question.id)) {
      myQuestions.push(question)
    }
  })

  return {
    auth,
    user: users[auth],
    questions: myQuestions
  }
}

export default connect(mapStateToProps)(MyQuestions);
