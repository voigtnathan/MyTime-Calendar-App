import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
class EditEvent extends Component {
    state = {
        eventToEdit: {
            id: this.props.match.params.id,
            userId: this.props.reduxStore.user.id,
            title: '',
            location: '',
            description: '',
            date: '',
            startTime: '',
            endTime: ''
        }
    }
    componentDidMount() {
        this.props.dispatch({ type: 'GET_EVENT_BY_ID', payload: this.props.match.params.id });
    }
    componentDidUpdate(preProps) {
        if (this.props.reduxStore.singleEvent !== preProps.reduxStore.singleEvent) {
            this.setEventToEdit();
        }
    }
    
    setEventToEdit = () => {
        this.props.reduxStore.singleEvent.forEach(event => {
            this.setState({
                eventToEdit: {
                    id: this.props.match.params.id,
                    userId: this.props.reduxStore.user.id,
                    title: event.event_title,
                    location: event.event_location,
                    description: event.event_description,
                    date: event.event_date,
                    startTime: event.start_time,
                    endTime: event.end_time

                }
            })
        });
    }

    handleChange = (propertyName, event) => {
        event.preventDefault();
        //console.log(this.state.eventToEdit);
        this.setState({
            eventToEdit: {
                ...this.state.eventToEdit,
                [propertyName]: event.target.value
            }
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.eventToEdit);
        this.props.dispatch({type: 'UPDATE_EVENT', payload: this.state.eventToEdit});
        let todaysDate = moment().toISOString(); //get today's date and set it to a format the database will be able to work with
        this.props.dispatch({type:'FETCH_EVENTS', payload: {date: todaysDate, id: this.props.reduxStore.user.id}});
      
        this.props.history.push('/');

    }
    deleteEvent = () => {
        this.props.dispatch({type: 'DELETE_EVENT', payload: this.props.match.params.id});
        let todaysDate = moment().toISOString(); //get today's date and set it to a format the database will be able to work with
        this.props.dispatch({type:'FETCH_EVENTS', payload: {date: todaysDate, id: this.props.reduxStore.user.id}});    
        this.props.history.push('/');
    }

    render() {
        return (

            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Title</label><br />
                    <input defaultValue={this.state.eventToEdit.title} onChange={(event) => this.handleChange('title', event)}></input><br />
                    <label>Location</label><br />
                    <input defaultValue={this.state.eventToEdit.location} onChange={(event) => this.handleChange('location', event)}></input><br />
                    <label>Description</label><br />
                    <textarea defaultValue={this.state.eventToEdit.description} onChange={(event) => this.handleChange('description', event)}></textarea><br />
                    <label>Date mm/dd/yyyy</label><br />
                    <input defaultValue={this.state.eventToEdit.date} onChange={(event) => this.handleChange('date', event)}></input><br />
                    <label>Start Time</label><br />
                    <input defaultValue={this.state.eventToEdit.startTime} onChange={(event) => this.handleChange('startTime', event)}></input><br />
                    <label>End Time</label><br />
                    <input defaultValue={this.state.eventToEdit.endTime} onChange={(event) => this.handleChange('endTime', event)}></input><br />
                    <button className='submit' type='submit'>UpdateEvent</button>
                    <button className='delete' onClick={this.deleteEvent}>Delete Event</button>
                </form>
                
                
            </div>
        )
    };
};

const mapStateToProps = reduxStore => ({
    reduxStore
});

export default connect(mapStateToProps)(EditEvent);