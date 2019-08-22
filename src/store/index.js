import { combineReducers } from 'redux';
import { User as userReducer } from './reducer/user';

const initialState = {
    data: {
        name: 'Sherry',
        age: 23,
        sex: 'male',
        company: 'yonyou',
    }
};

const stuffReducer = function(state = initialState, action) {
    switch(action.type) {
        case 'SET_INITIALSTATE':
            return state;
        default: 
            return state;
    }
};

const studentReducer = function(state = [], action) {
    switch(action.type) {
        case 'SET_INITIALSTATE':
            return state;
        default: 
            return state;
    }
};

const allReducer = {
    student: studentReducer,
    stuff: stuffReducer,
    user: userReducer
};

const rootReducer = combineReducers(allReducer);

export default rootReducer;