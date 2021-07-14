import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/instance";
import moment from "moment";
import { useSelector } from "react-redux";




// actions
const JOIN_STUDY = "join/JOIN_STUDY";
const WITHDRAW_STUDY = "join/WITHDRAW_STUDY";



// action creator
const joinStudy = createAction(JOIN_STUDY, (user_id) => ({user_id}));
const withdrawStudy = createAction(WITHDRAW_STUDY, (user_id) => ({user_id}));


// initialState
const initialState = {
    join_list: []
};


// middleware thunk





// reducer
export default handleActions({

    [JOIN_STUDY]: (state, action) => produce(state, (draft) => {

    }),

    [WITHDRAW_STUDY]: (state, action) => produce(state, (draft) => {

    }),
},initialState);