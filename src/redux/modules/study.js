import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/instance";
// import axios from "axios";



// actions
const LOAD_STUDY = "study/LOAD_STUDY";
const LOAD_DETAIL = "study/LOAD_DETAIL";
const CREATE_STUDY = "study/CREATE_STUDY";
const EDIT_STUDY = "study/EDIT_STUDY";
const DELETE_STUDY = "study/DELETE_STUDY";



// action creator
const loadStudy = createAction(LOAD_STUDY, (study_list) => ({study_list}));
const loadDetail = createAction(LOAD_DETAIL, (study) => ({study}));
const createStudy = createAction(CREATE_STUDY, (study) => ({study}));
const editStudy = createAction(EDIT_STUDY, (study) => ({study}));
const deleteStudy = createAction(DELETE_STUDY, (study_id) => ({study_id}));


// initialState
const initialState = {
    list: {
        _id: "abc",
    studyId: 1,
    name: "스터디 구해용",
    schedule: "2021-07-30 ~ 2021-10-23",
    startDate: "2021-07-21",
    endJoinDate: "2021-07-30",
    writeDate: "2021-07-20 오후 18:31:22",
    size: 5,
    explain: "초보도 가능합니다.",
    joinLater: false,
    userId: 5,
    level: 2,
    studyType: 1,
    joinNum: 0,
    __v: 0,
    }
};

const initialStudy = {
    _id: "abc",
    studyId: 1,
    name: "스터디 구해용",
    schedule: "2021-07-30 ~ 2021-10-23",
    startDate: "2021-07-21",
    endJoinDate: "2021-07-30",
    writeDate: "2021-07-20 오후 18:31:22",
    size: 5,
    explain: "초보도 가능합니다.",
    joinLater: false,
    userId: 5,
    level: 2,
    studyType: 1,
    joinNum: 0,
    __v: 0,
};

// 함수
// load
const loadStudyDB = () => {
    return function (dispatch, getState, {history}){
        
        instance.get("/api/study").then((res) =>{
            console.log(res);

            let study_list = [];
            
            study_list.push(res);
            console.log(study_list);

            dispatch(loadStudy(study_list));

        }).catch(err => {
            console.log("에러 났다!!")
        })
    }
};

// load detail
// const loadDetailDB

// create
const createStudyDB = (contents="") => {
    return function (dispatch, getState, {history}){
        let data = {
            studyId: 1,
            name: "스터디 구합니다",
            schedule: "2021-08-01-2021-08-07",
            startDate: "2021-07-21",
            endJoinDate: "2021-07-30",
            writeDate: "2021-07-10",
            size: 5,
            explain: "초보도 가능합니다!",
            joinLater: "false",
            userId: 5,
            level: 2,
            studyType: 1,
            joinNum: 0,
        };

        instance.post("/api/study", data).then((res) => {
            console.log(res);
        }).catch(err => {
            console.log("에러 났다!!!!");
        });
    }
};



// reducer
export default handleActions({

    [LOAD_STUDY]: (state, action) => produce(state, (draft) => {
        draft.list = action.payload.study_list;
    }),

    // [LOAD_DETAIL]: (state, action) => produce(state, (draft) => {
    //     draft.
    // }),

    [CREATE_STUDY]: (state, action) => produce(state, (draft) => {
        draft.list.unshift(action.payload.study);
    }),

    // [EDIT_STUDY]: (state, action) => produce(state, (draft) => {

    //     let idx = draft.list.findIndex((s) => s.id === action.payload.study_id);
    //     draft.list[idx] = {...draft.list[idx], ...action.payload.study};
    // }),

    // [DELETE_STUDY]: (state, action) => produce(state, (draft) => {

    //     let idx = draft.list.findIndex((s) => s.id === action.payload.study_id);

    // }),
}, initialState);


export const actionCreators = {
    loadStudy,
    loadDetail,
    createStudy,
    editStudy,
    deleteStudy,
    loadStudyDB,
    // loadDetailDB,
    createStudyDB,


}



