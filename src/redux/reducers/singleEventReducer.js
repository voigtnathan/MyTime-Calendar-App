const singleEventReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_EVENT':
            return action.payload;
        default:
            return state;
    }
}

export default singleEventReducer;