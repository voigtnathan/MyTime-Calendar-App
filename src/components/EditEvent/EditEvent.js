import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        console.log(this.state.eventToEdit);
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

    }

    render() {
        return (

            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Title</label><br />
                    <input value={this.state.eventToEdit.title} onChange={(event) => this.handleChange('title', event)}></input><br />
                    <label>Location</label><br />
                    <input value={this.state.eventToEdit.location} onChange={(event) => this.handleChange('location', event)}></input><br />
                    <label>Description</label><br />
                    <textarea value={this.state.eventToEdit.description} onChange={(event) => this.handleChange('description', event)}></textarea><br />
                    <label>Date mm/dd/yyyy</label><br />
                    <input value={this.state.eventToEdit.date} onChange={(event) => this.handleChange('date', event)}></input><br />
                    <label>Start Time</label><br />
                    <input value={this.state.eventToEdit.startTime} onChange={(event) => this.handleChange('startTime', event)}></input><br />
                    <label>End Time</label><br />
                    <input value={this.state.eventToEdit.endTime} onChange={(event) => this.handleChange('endTime', event)}></input><br />
                    <button type='submit'>UpdateEvent</button>
                    <button className='delete' onClick={this.deleteEvent}>Delete Event</button>
                </form>
                <br /><br /><br /><br />
                <p>{JSON.stringify(this.props.match.params)}</p>
            </div>
        )
    };
};

const mapStateToProps = reduxStore => ({
    reduxStore
});

export default connect(mapStateToProps)(EditEvent);