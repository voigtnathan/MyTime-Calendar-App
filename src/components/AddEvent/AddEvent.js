import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../DayCard/DayCard.css'
import moment from 'moment';
class AddEvent extends Component {
    state = {
        eventToAdd: {
            userId: this.props.reduxStore.user.id,
            title: '',
            location: '',
            description: '',
            date: '',
            startTime: '',
            endTime: ''
        }
    }
    

    handleChange = (propertyName, event) => {
        console.log(this.state.eventToAdd);
        this.setState({
            eventToAdd: {
                ...this.state.eventToAdd,
                [propertyName]: event.target.value
            }
        })
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state.eventToAdd);
        this.props.dispatch({type: 'ADD_NEW_EVENT', payload: this.state.eventToAdd});
        let todaysDate = moment().toISOString(); //get today's date and set it to a format the database will be able to work with
        this.props.dispatch({type:'FETCH_EVENTS', payload: {date: todaysDate, id: this.props.reduxStore.user.id}});    
        this.props.history.push('/');
    }
    sneakyFill = () =>{
        this.setState({
            eventToAdd: {
                userId: this.props.reduxStore.user.id,
                title: 'Interview with TR',
                location: 'Prime Campus',
                description: 'Interview with Ed from Thomson Reuters',
                date: '10/30/2018',
                startTime: '10:00',
                endTime: '12:00'
            }
        })
        console.log('sneaky fill complete');
    }

    render() {
        return (

            <div>
                <h2 onClick={this.sneakyFill}>Add Event</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Title</label><br />
                    <input value={this.state.eventToAdd.title} onChange={(event) => this.handleChange('title', event)}></input><br />
                    <label>Location</label><br />
                    <input value={this.state.eventToAdd.location} onChange={(event) => this.handleChange('location', event)}></input><br />
                    <label>Description</label><br />
                    <textarea value={this.state.eventToAdd.description} onChange={(event) => this.handleChange('description', event)}></textarea><br />
                    <label>Date mm/dd/yyyy</label><br />
                    <input value={this.state.eventToAdd.date} onChange={(event) => this.handleChange('date', event)}></input><br />
                    <label>Start Time</label><br />
                    <input value={this.state.eventToAdd.startTime} onChange={(event) => this.handleChange('startTime', event)}></input><br />
                    <label>End Time</label><br />
                    <input value={this.state.eventToAdd.endTime} onChange={(event) => this.handleChange('endTime', event)}></input>
                    <button className='submit' type='submit'>Submit</button>
                </form>
            </div>
        )
    };
};

const mapStateToProps = reduxStore => ({
    reduxStore
});

export default connect(mapStateToProps)(AddEvent);