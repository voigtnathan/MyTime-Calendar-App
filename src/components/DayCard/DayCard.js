import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import moment from 'moment';
import './DayCard.css'
import '../App/App.css'
class DayCard extends Component {
  
  componentDidMount(){
    let todaysDate = moment().toISOString(); //get today's date and set it to a format the database will be able to work with
    this.props.dispatch({type:'FETCH_EVENTS', payload: {date: todaysDate, id: this.props.reduxStore.user.id}});
  }
  

  
  render(){
    return(
  
  <div className="day-card">
    <ul>
     {this.props.reduxStore.events.map((event, id) => {
      return(
       <li key={event.id}><button className='event'  onClick={() => this.props.history.push(`/event/${event.id}`)}>{event.event_title} @ {event.start_time} to {event.end_time}</button></li>
      )
      })}
     </ul>
    
  </div>
    )};
};

const mapStateToProps = reduxStore => ({
  reduxStore
});

export default withRouter(connect(mapStateToProps)(DayCard));
