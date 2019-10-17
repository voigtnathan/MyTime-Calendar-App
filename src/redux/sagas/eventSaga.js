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
  }
  
  function* eventSaga() {
    yield takeLatest('FETCH_EVENTS', fetchEvent);
  }
  
  export default eventSaga;
  