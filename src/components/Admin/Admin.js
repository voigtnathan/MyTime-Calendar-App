import React, {Component} from 'react';
import {connect} from 'react-redux';

 

class Admin extends Component{
  componentDidMount(){
      this.props.dispatch({type: 'FETCH_USERS'});
  }

  deleteUser = (userId) =>{
      console.log(userId)
  }

  render(){
      return(
  <div>
    <div>
    <ul>
     {/* This feature is in progress, it is an admin page that to allow removal of users who may for
     some reason attempt to abuse the application once Google Calendars API is connected.*/}
         {this.props.reduxStore.users.map((user, id) => {
             return (
                 <li key={id}>{user.username} <button className="delete" onClick={() => this.deleteUser(user.id)}>Delete</button></li>
             )
         })}
         
    </ul>
   
    
    </div>
  </div>
      )};
};
const mapStateToProps = reduxStore => ({
    reduxStore
  });
  
  export default connect(mapStateToProps)(Admin);
  


