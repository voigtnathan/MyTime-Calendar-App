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
    componentDidMount(){
        this.props.dispatch({type: 'GET_EVENT_BY_ID', payload: this.props.match.params.id});
        this.setEventToEdit();
    }
    setEventToEdit = () =>{
        console.log(this.props.reduxStore.singleEvent);
    }

    handleChange = (propertyName, event) => {
        console.log(this.state.eventToAdd);
        this.setState({
            eventToAdd: {
                ...this.state.eventToEdit,
                [propertyName]: event.target.value
            }
        })
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state.eventToEdit);
        
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
            <p>{JSON.stringify(this.props.match.params)}</p>
            </div>
        )
    };
};

const mapStateToProps = reduxStore => ({
    reduxStore
});

export default connect(mapStateToProps)(EditEvent);