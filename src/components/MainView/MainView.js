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
  componentDidMount(){
    let today = moment().toISOString(); //get today's date and set it to a format the database will be able to work with
    this.props.dispatch({type:'FETCH_EVENTS', payload: {date: today, id: this.props.reduxStore.user.id}});
  }
  //this.props.dispatch({type:'FETCH_EVENTS', payload: {date: todaysDate, id: this.props.reduxStore.user.id}});

    
  componentDidUpdate(preProps, prevState) {
    if (this.props.reduxStore.events.length !== preProps.reduxStore.events.length) {
      console.log('update due to added event')
      this.props.dispatch({type:'FETCH_EVENTS', payload: {date: this.state.today, id: this.props.reduxStore.user.id}});
    }
     if(moment(this.state.today).format('MM/DD/YYYY') !== moment(prevState.today).format('MM/DD/YYYY')){
      console.log('update due to state change')
      this.props.dispatch({type:'FETCH_EVENTS', payload: {date: this.state.today, id: this.props.reduxStore.user.id}});
    } 
    // else if(this.props.reduxStore.events != preProps.events){
    //   console.log('update due to event update')
    //   this.props.dispatch({type:'FETCH_EVENTS', payload: this.state.today});
    // }
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
        <h2>{moment(this.state.today).format('MM/DD/YYYY')}</h2>
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

