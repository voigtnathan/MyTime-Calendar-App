import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
class DayCard extends Component {
  state = {
    dateObject : moment()
  }
  
  render(){
    return(
  
  <div>
    <p>
     Day Card
    </p>
  </div>
    )};
};

const mapStateToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStateToProps)(DayCard);
