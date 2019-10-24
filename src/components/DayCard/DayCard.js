import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import moment from 'moment';
import './DayCard.css'
import '../App/App.css'
class DayCard extends Component {
  
  componentDidMount(){
    let todaysDate = moment().toISOString(); //get today's date and set it to a format the database will be able to work with
    this.props.dispatch({type:'FETCH_EVENTS', payload: todaysDate});
  }

  // componentDidUpdate(preProps) {
  //   let todaysDate = moment().toISOString(); //get today's date and set it to a format the database will be able to work with
  //   if (this.props.reduxStore.events.length !== preProps.reduxStore.events.length) {
  //     this.props.dispatch({type:'FETCH_EVENTS', payload: todaysDate});
  //   }
  // }
  
  render(){
    return(
  
  <div className="day-card">
    <h2>Today</h2>
    <h2>{this.props.reduxStore.events.event_date}</h2>
    
    <ul>
     {this.props.reduxStore.events.map((event, id) => {
      return(
       <li key={id}><button className='log-in'  onClick={() => this.props.history.push(`/event/${event.id}`)}>{event.event_title} on {event.event_date} @ {event.start_time} to {event.end_time} notes: {event.event_description}</button></li>
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
