import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/instance";
import moment from "moment";



// action
const LOAD_CMT = "comment/LOAD_CMT";
const CREATE_CMT = "comment/CREATE_CMT";
const EDIT_CMT = "comment/EDIT_CMT";
const DELETE_CMT = "comment/DELETE_CMT";


// action creator
const loadComment = createAction(LOAD_CMT, (comment) => ({comment}));
const createComment = createAction(CREATE_CMT, (comment) => ({comment}));
const editComment = createAction(EDIT_CMT, (comment) => ({comment}));
const deleteComment = createAction(DELETE_CMT, (comment) => ({comment}));

//initialState
// "comments": [
//     {
//     "_id": "...",
//     "studyCommentId": 2,
//     "studyId": 1,
//     "content": "",
//     "userId": "5",
//     "date": "2021-07-10 오후 05:39:53",
//     }
//     ]

const initialState = [{
    _id: "...",
    studyCommentId: 2,
    studyId: 1,
    content: "",
    userId: "5",
    date: "2021-07-10 오후 05:39:53"
}]





// reducer
export default handleActions({

    [LOAD_CMT]: (state, action) => produce(state, (draft) => {
        draft.list = action.payload.study_list;
    }),

    [CREATE_CMT]: (state, action) => produce(state, (draft) => {
        draft.list.unshift(action.payload.study);
    }),

    [EDIT_CMT]: (state, action) => produce(state, (draft) => {
        let idx = draft.list.findIndex((s) => s.studyId === action.payload.study_id);
        draft.list[idx] = {...draft.list[idx], ...action.payload.study};
    }),

            //  코멘트 데이터 구조를 어떻게 짤지 생각하기!!! study 데이터와 같이 갈 것인가 따로 갈 것인가!
            //  서버에 delete 요청에 코멘트도 지워달라고 요청하기
    [DELETE_CMT]: (state, action) => produce(state, (draft) => {
        const del_list = draft.list.filter((s, idx) => {
            if (idx !== action.payload.study){
                return s;
            }
        });
        return { list: del_list};
    }),

}, initialState);


export const actionCreators = {
    // loadStudy,
    // createStudy,
    // editStudy,
    // deleteStudy,
    // loadStudyDB,
    // createStudyDB,
    // editStudyDB,
    // deleteStudyDB,
};
