import React, {Component} from 'react';
import {connect} from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import DayCard from '../DayCard/DayCard'
import moment from 'moment';
import {Link} from 'react-router-dom'
import {Card} from 'semantic-ui-react';
import '../App/App.css'

class MainView extends Component {
  state = {
    today : moment().toISOString(),
    oldDate : ''
  }
  // componentDidMount(){
  //   let today = moment().toISOString(); //get today's date and set it to a format the database will be able to work with
  //   this.props.dispatch({type:'FETCH_EVENTS', payload: today});
  // }
 
  
   
  //   // console.log('new', this.state.today, 'old', this.state.oldDate);
    
  componentDidUpdate(preProps, prevState) {
    if (this.props.reduxStore.events.length !== preProps.reduxStore.events.length) {
      console.log('update due to ')
      this.props.dispatch({type:'FETCH_EVENTS', payload: this.state.today});
    } else if(moment(this.state.today).format('MM/DD/YYYY') !== moment(prevState.today).format('MM/DD/YYYY')){
      console.log('update due to state change')
      this.props.dispatch({type:'FETCH_EVENTS', payload: this.state.today});
    }
  }
  // refreshEvents = () =>{
  //   console.log('back one day',this.state.today)

  //   this.props.dispatch({type:'FETCH_EVENTS', payload: this.state.today});
  // }


  backDay = () =>{
    this.setState({
      today : moment(this.state.today).subtract(1,'days').toISOString(),
      oldDate : moment(this.state.today).subtract(2,'days').toISOString()
    })
    console.log('back one day',this.state.today)
    //this.refreshEvents();
  }
  advanceDay = () =>{
    this.setState({
      today: moment(this.state.today).add(1,'days').toISOString(),
      oldDate : moment(this.state.today).add(2,'days').toISOString()
    })
    console.log('forward one day',this.state.today);
    //this.refreshEvents();
  }
  render(){
    return (
      <div>
  <div className='card'>
         <button onClick={() => this.backDay()}><p><i className="arrow left"></i></p></button>
  </div>
  <div className='card'>
  <Card>
      <DayCard />
    <LogOutButton className="log-in" />
    <Link to="/addevent"><button className="log-in">Add Event</button></Link>
  </Card> 
  </div>
  <div className='card'>
      <button onClick={() => this.advanceDay()}><p><i className="arrow right"></i></p></button>
</div>
  </div>
    )};
};

const mapStateToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStateToProps)(MainView);

