import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
class DayCard extends Component {
    state = {
        eventToAdd: {
            title: '',
            location: '',
            desciption: '',
            date: '',
            startTime: 0,
            endTime: 0
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
    }

    render() {
        return (

            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Title</label><br />
                    <input onChange={(event) => this.handleChange('title', event)}></input><br />
                    <label>Location</label><br />
                    <input onChange={(event) => this.handleChange('location', event)}></input><br />
                    <label>Description</label><br />
                    <textarea onChange={(event) => this.handleChange('description', event)}></textarea><br />
                    <label>Date mm/dd/yyyy</label><br />
                    <input onChange={(event) => this.handleChange('date', event)}></input><br />
                    <label>Start Time</label><br />
                    <input onChange={(event) => this.handleChange('startTime', event)}></input><br />
                    <label>End Time</label><br />
                    <input onChange={(event) => this.handleChange('endTime', event)}></input>
                    <button type='submit'>Submit</button>
                </form>
                <br/><br/><br/><br/>
            {JSON.stringify(this.state.eventToAdd)}
            </div>
        )
    };
};

const mapStateToProps = reduxStore => ({
    reduxStore
});

export default connect(mapStateToProps)(DayCard);