import React, {Component} from 'react';
import {connect} from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import moment from 'moment';
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class MainView extends Component {
  weekdayshort = moment.weekdaysShort();
  
  render(){
    return (
  
  <div>
    
    {this.weekdayshort.map(day => {
      return(
      <h1 key={day} className="week-day">{day}</h1>
      )})}
    <LogOutButton className="log-in" />
  </div>
    )};
};

const mapStateToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStateToProps)(MainView);

