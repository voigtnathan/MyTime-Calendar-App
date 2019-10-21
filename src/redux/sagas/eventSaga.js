import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

  function* fetchEvents() {
    try {
      const response = yield axios.get('/api/events');
      console.log(response.data)
      yield put({ type: 'SET_TODAYS_EVENTS', payload: response.data });

    } catch (error) {
      console.log('events get request failed', error);
    }
  }//grabs all events for particular date

  function* getEventInfo(action) {
    try{

        const response = yield axios.get(`/api/events/event/${action.payload}`);
        yield put({type: 'SET_EVENT', payload: response.data});
    }catch(error){
        console.log('failed to grab single event', error);
    }
}//grabs individual event

  function* addEvent(action) {
    try {
      const response = yield axios.post('/api/events', action.payload);
      console.log(response);
      this.fetchEvents();
    } catch(error) {
      console.log('events post request failed', error);
    }
  }//adds event to user's calendar

  function* deleteEvent(action) {
    try {
      const response = yield axios.delete(`/api/events/event/${action.payload}`);
      console.log(response);
      this.fetchEvents();
    } catch (error) {
      console.log('event delete request failed', error);
    }
  }
  
  function* updateEvent(action) {
    try {
      const response = yield axios.put(`/api/events/event/${action.payload.id}`,action.payload);
      console.log(response);
      this.fetchEvents();
    }catch(error) {
      console.log(`error updating event ${error}`)
    }
  }
  
  function* eventSaga() {
    yield takeLatest('FETCH_EVENTS', fetchEvents);
    yield takeLatest('ADD_NEW_EVENT', addEvent);
    yield takeLatest('GET_EVENT_BY_ID', getEventInfo);
    yield takeLatest('DELETE_EVENT', deleteEvent);
    yield takeLatest('UPDATE_EVENT', updateEvent);
  }
  
  export default eventSaga;
  