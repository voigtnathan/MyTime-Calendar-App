import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
class DayCard extends Component {
  state = {
    eventToAdd : {
        title : '',
        location : '',
        desciption: '',
        date: '',
        startTime: 0,
        endTime: 0
    }
  }
  
  render(){
    return(
  
  <div>
      <label>Title</label>
      <input onChange={(event) => this.handleChange('title', event)}></input>
      <label>Location</label>
      <input onChange={(event) => this.handleChange('location', event)}></input>
      <label>Description</label>
      <textarea onChange={(event) => this.handleChange('description', event)}></textarea>
    <p>
     {/* {this.state.dateObject} */}
    </p>
  </div>
    )};
};

const mapStateToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStateToProps)(DayCard);