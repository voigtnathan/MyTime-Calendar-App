import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
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
    <p>
     {JSON.stringify(this.props.reduxStore.events)}
    </p>
  </div>
    )};
};

const mapStateToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStateToProps)(DayCard);
