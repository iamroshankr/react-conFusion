// import * as ActionTypes from './ActionTypes';

// export const Feedback = (state = {
//        errMess: null,
//         feedback: []
//     }, action) => {
//     switch(action.type) {
//         case ActionTypes.ADD_FEEDBACK:
//             return {...state, errMess: null, feedback: state.feedback.concat(action.payload) };

//         default:
//             return state;
//     }    
// };

export const InitialFeedback = {
    firstname: '',
    lastname: '',
    telnum: '',
    email: '',
    agree: false,
    contactType: 'Tel.',
    message: ''
};