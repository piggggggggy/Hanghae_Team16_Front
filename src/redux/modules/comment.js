import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/instance";


// action
const LOAD_CMT = "comment/LOAD_CMT";
const CREATE_CMT = "comment/CREATE_CMT";

const DELETE_CMT = "comment/DELETE_CMT";


// action creator
const loadCmt = createAction(LOAD_CMT, (comments) => ({comments}));
const createCmt = createAction(CREATE_CMT, (comment) => ({comment}));

const deleteCmt = createAction(DELETE_CMT, (studyCommentId) => ({studyCommentId}));

//initialState
const initialState = {
    comments: [],
}


const initialComment = {
    _id: "...",
    studyCommentId: 2,
    studyId: 1,
    content: "",
    userId: "5",
    date: "2021-07-10 오후 05:39:53"
}


// thunk 함수

const loadCmtDB = (studyId='') => {
    return function (dispatch, getState, {history}){
        
        instance.get(`/api/study-all-comment/${studyId}`).then((res) =>{
            // console.log(res)
            let comment_list = res.data.comments;
            console.log(comment_list);
            dispatch(loadCmt(comment_list));
        }).catch(err => {
            console.log("load : 에러 났다!!", err);
            // err를 출력해서 정확한 내역 파악. 에너메세지에 이름을 붙여주어 어디서 에러가 났는지 확인!!
        });
    };
};




// create
const createCmtDB = (comment={}) => {
    return function (dispatch, getState, {history}){
        
        instance.post("/api/study-comment", comment).then((res) => {
            // console.log(res.data);
            comment.studyCommentId = res.data.studyCommentId;
            dispatch(createCmt(comment));
        }).catch(err => {  
            console.log("create : 에러 났다!!!!", err);
        });
    };
};

// delete
const deleteCmtDB = (studyCommentId='') => {
    return function (dispatch, getState, {history}) {
        instance.delete(`/api/study-comment/${studyCommentId}`).then((res) => {
            dispatch(deleteCmt(studyCommentId));
        }).catch(err => {
            console.log("delete : 에러 났다!!", err);
        });
    };
};





// reducer
export default handleActions({

    [LOAD_CMT]: (state, action) => produce(state, (draft) => {
        draft.comments = action.payload.comments;
    }),

    [CREATE_CMT]: (state, action) => produce(state, (draft) => {
        draft.comments.push(action.payload.comment);
    }),

    [DELETE_CMT]: (state, action) => produce(state, (draft) => {
        const del_list = draft.comments.filter((c, idx) => {
            if (c.studyCommentId !== action.payload.studyCommentId){
                return c;
            }
        });
        draft.comments = [...del_list];
    }),

}, initialState);


export const actionCreator = {
    loadCmt,
    createCmt,
    deleteCmt,

    loadCmtDB,
    createCmtDB,
    deleteCmtDB

};
