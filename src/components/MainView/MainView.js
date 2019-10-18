import React, {Component} from 'react';
import {connect} from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import DayCard from '../DayCard/DayCard'
import moment from 'moment';
import {Link} from 'react-router-dom'

class MainView extends Component {
  weekdayshort = moment.weekdaysShort();
  
  render(){
    return (
  
  <div>
    {/* This will be used to map out the card objects */}
    {/* {this.weekdayshort.map(day => {
      return( */}
      <DayCard />
      {/* )
      })} */}
    <LogOutButton className="log-in" />
    <Link
              to="/addevent"
            ><button>Add Event</button></Link>
  </div>
    )};
};

const mapStateToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStateToProps)(MainView);

