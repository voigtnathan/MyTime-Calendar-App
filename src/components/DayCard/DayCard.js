import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import './DayCard.css'
class DayCard extends Component {
  state = {
    dateObject : moment()
  }
  componentDidMount(){
    this.props.dispatch({type:'FETCH_EVENTS'});
  }
  render(){
    return(
  
  <div className="day-card">
    <h2>Today</h2>
    <h3>{this.props.reduxStore.events.event_date}</h3>
     {this.props.reduxStore.events.map(event => {
      return(
        <button>{event.event_title} on {event.event_date}</button>
      )
      })}
     
    
  </div>
    )};
};

const mapStateToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStateToProps)(DayCard);
