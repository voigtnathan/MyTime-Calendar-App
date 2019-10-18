import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import moment from 'moment';
import './DayCard.css'
import '../App/App.css'
class DayCard extends Component {
  state = {
    dateObject : moment()
  }
  componentDidMount(){
    this.props.dispatch({type:'FETCH_EVENTS'});
  }
  componentDidUpdate(preProps) {
    if (this.props.reduxStore.events.length !== preProps.reduxStore.events.length) {
      this.props.dispatch({type:'FETCH_EVENTS'});
    }
}
  
  render(){
    return(
  
  <div className="day-card">
    <h2>Today</h2>
    <h3>{this.props.reduxStore.events.event_date}</h3>
     {this.props.reduxStore.events.map((event, id) => {
      return(
        <button className='log-in' key={id}onClick={() => this.props.history.push(`/event/${event.id}`)}>{event.event_title} on {event.event_date}</button>
      )
      })}
     
    
  </div>
    )};
};

const mapStateToProps = reduxStore => ({
  reduxStore
});

export default withRouter(connect(mapStateToProps)(DayCard));
