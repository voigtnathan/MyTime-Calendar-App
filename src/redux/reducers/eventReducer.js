const eventReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_TODAYS_EVENTS':
            return action.payload;
        default:
            return state;
    }
}

export default eventReducer;