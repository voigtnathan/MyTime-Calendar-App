import React, {Component} from 'react';
import {connect} from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import DayCard from '../DayCard/DayCard'
import moment from 'moment';
import AddEvent from '../AddEvent/AddEvent';
import {Link} from 'react-router-dom'
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class MainView extends Component {
  weekdayshort = moment.weekdaysShort();
  
  render(){
    return (
  
  <div>
    {/* This will be used to map out the card objects */}
    {this.weekdayshort.map(day => {
      return(
      <DayCard />
      )
      })}
    <LogOutButton className="log-in" />
    <Link
              to="/addevent"
            >Add Event </Link>
  </div>
    )};
};

const mapStateToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStateToProps)(MainView);

