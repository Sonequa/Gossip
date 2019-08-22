// 存储用户昵称

const SET_USERNAME = 'SET_USERNAME';
const initState = { user: '' };

export function User (state = initState, action) {
    switch (action.type) {
        case SET_USERNAME:
            return { ...state, user: action.payload };
        default:
            return state;
    }
}

export function setUserName(user) {
    return {
        type: SET_USERNAME,
        payload: user
    };
}