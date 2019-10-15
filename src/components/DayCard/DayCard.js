import React, {Component} from 'react';
import {connect} from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class DayCard extends Component {
  render(){
    return(
  
  <div>
    <p>
     This is a day card to hold event objects
    </p>
    <LogOutButton className="log-in" />
  </div>
    )};
};

const mapStateToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStateToProps)(DayCard);
