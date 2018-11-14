import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

const imgStyle = {
  height:"75px",
  width:"75px",
}

const Posts = (props) => {
  const { user, time } = props
  return (
    <div className="posts">
      <div className="user-info">&nbsp;
       <img src="/person.png" alt="user-icon" style={imgStyle} />
       <span className="ques-by"> &nbsp; Question by {user.name}, &nbsp;</span>
       <span className="post-time">Posted {moment(time).fromNow()}</span>
      </div>
    </div>
  )
}

function mapStateToProps ({ users }, { userId }) {
  return {
    user: users[userId]
  }
}

export default connect(mapStateToProps)(Posts);
