import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

  function* fetchEvent() {
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
      this.fetchEvent();
    } catch(error) {
      console.log('events post request failed', error);
    }
  }//adds event
  
  function* eventSaga() {
    yield takeLatest('FETCH_EVENTS', fetchEvent);
    yield takeLatest('ADD_NEW_EVENT', addEvent);
    yield takeLatest('GET_EVENT_BY_ID', getEventInfo);
  }
  
  export default eventSaga;
  