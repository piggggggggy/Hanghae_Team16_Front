import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/instance";

// actions
const LOAD_STUDY = "study/LOAD_STUDY";
const CREATE_STUDY = "study/CREATE_STUDY";
const EDIT_STUDY = "study/EDIT_STUDY";
const DELETE_STUDY = "study/DELETE_STUDY";
const DETAIL_STUDY = "study/DETAIL_STUDY";

const JOIN_STUDY = "join/JOIN_STUDY";
const WITHDRAW_STUDY = "join/WITHDRAW_STUDY";


// action creator
const loadStudy = createAction(LOAD_STUDY, (study_list) => ({study_list}));
const createStudy = createAction(CREATE_STUDY, (new_study) => ({new_study}));
const editStudy = createAction(EDIT_STUDY, (study_id, new_study) => ({study_id, new_study}));
const deleteStudy = createAction(DELETE_STUDY, (study_id) => ({study_id}));
const detailStudy = createAction(DETAIL_STUDY, (study, members) => ({study, members}))

const joinStudy = createAction(JOIN_STUDY, (join) => ({join}));
const withdrawStudy = createAction(WITHDRAW_STUDY, (join) => ({join}));


// initialState
const initialState = {
    list: [
        {
            _id: "1",
            studyId: 1,
            name: "스터디 구해용1",
            schedule: "2021-07-30 ~ 2021-10-23",
            startDate: "2021-07-21",
            endJoinDate: "2021-07-30",
            writeDate: "2021-07-20 오후 18:31:22",
            size: 3,
            explain: "초보도 가능합니다.",
            joinLater: false,
            userId: 5,
            level: 2,
            studyType: 1,
            joinNum: 2,
        },
        {
            _id: "2",
            studyId: 2,
            name: "스터디 구해용2",
            schedule: "2021-07-30 ~ 2021-10-23",
            startDate: "2021-07-21",
            endJoinDate: "2021-10-30",
            writeDate: "2021-07-20 오후 18:31:22",
            size: 4,
            explain: "초보도 가능합니다.",
            joinLater: false,
            userId: 5,
            level: 2,
            studyType: 1,
            joinNum: 3,
        },
        {
            _id: "3",
            studyId: 3,
            name: "스터디 구해용3",
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
            joinNum: 2,
        },
        {
            _id: "4",
            studyId: 4,
            name: "스터디 구해용4",
            schedule: "2021-07-30 ~ 2021-10-23",
            startDate: "2021-07-21",
            endJoinDate: "2021-10-30",
            writeDate: "2021-07-20 오후 18:31:22",
            size: 6,
            explain: "초보도 가능합니다.",
            joinLater: false,
            userId: 5,
            level: 2,
            studyType: 1,
            joinNum: 2,
        },
        {
            _id: "5",
            studyId: 5,
            name: "스터디 구해용5",
            schedule: "2021-07-30 ~ 2021-10-23",
            startDate: "2021-07-21",
            endJoinDate: "2021-10-30",
            writeDate: "2021-07-20 오후 18:31:22",
            size: 7,
            explain: "초보도 가능합니다.",
            joinLater: false,
            userId: 5,
            level: 2,
            studyType: 1,
            joinNum: 2,
        },
        {
            _id: "6",
            studyId: 6,
            name: "스터디 구해용6",
            schedule: "2021-07-30 ~ 2021-10-23",
            startDate: "2021-07-21",
            endJoinDate: "2021-10-30",
            writeDate: "2021-07-20 오후 18:31:22",
            size: 8,
            explain: "초보도 가능합니다.",
            joinLater: false,
            userId: 5,
            level: 2,
            studyType: 1,
            joinNum: 2,
        }        
    ],
    study: null,
    join: [],
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
};

// 함수
// load
const loadStudyDB = () => {
    return function (dispatch, getState, {history}){
        
        instance.get("/api/study").then((res) =>{
            // console.log(res)
            let study_list = res.data.studys;
            dispatch(loadStudy(study_list));
        }).catch(err => {
            console.log("load : 에러 났다!!", err);
            // err를 출력해서 정확한 내역 파악. 에너메세지에 이름을 붙여주어 어디서 에러가 났는지 확인!!
        })
    }
};

// detail
const detailStudyDB = (study_id='') => {
    return function (dispatch, getState, {history}){

        instance.get(`/api/study/${study_id}`).then((res) => {
            // console.log(res); 

            let study = res.data;
            dispatch(detailStudy(study));
        }).catch(err => {
            console.log("load : 에러 났다!!", err);
        });
    };
};


// create
                            // 파라미터에 기본값 주기 - es6
const createStudyDB = (contents={}) => {
    return function (dispatch, getState, {history}){
        
        instance.post("/api/study", contents).then((res) => {
            // console.log(res);
        
            contents.studyId = res.data.studyId;
            dispatch(createStudy(contents));
        
        }).catch(err => {
            console.log("create : 에러 났다!!!!", err);
        });
    }
};

// update
const editStudyDB = (studyId=null, study={}) => {
    return function (dispatch, getState, {history}){

        instance.put(`/api/study/${studyId}`, study).then((res) =>{
            // console.log(res);
            dispatch(editStudy(studyId, study));
        }).catch(err => {
            console.log("edit : 에너났읍니다.", err);
        });
    }
};

// delete
const deleteStudyDB = (studyId='') => {
    return function (dispatch, getState, {history}) {
        instance.delete(`/api/study/${studyId}`).then((res) => {
            // console.log(res);
            dispatch(deleteStudy(studyId));
        }).catch(err => {
            console.log("delete : 에러 났다!!", err);
        });
    };
};

// join
const joinDB = (studyId='', userInfo={}) => {
    return function (dispatch, getState, {history}){

        instance.post(`/api/join-study/${studyId}`,userInfo).then((res) => {
            // console.log(res.data);
            let users = res.data;
 
            dispatch(joinStudy(users));
        }).catch(err => {
            console.log("join : 에.러", err);
        });
    };
};

// withdraw
const withdrawDB = (studyId='', userInfo={}) => {
    return function (dispatch, getState, {history}){

        instance.delete(`/api/join-study/${studyId}`,userInfo).then((res) => {
            console.log(res);
            let users = res.data
            dispatch(withdrawStudy(users));
        }).catch(err => {
            console.log("withdraw : 에.러", err);
        });
    };
};





// reducer
export default handleActions({

    [LOAD_STUDY]: (state, action) => produce(state, (draft) => {
        draft.list = action.payload.study_list;
    }),

    [CREATE_STUDY]: (state, action) => produce(state, (draft) => {
        draft.list.unshift(action.payload.new_study);
    }),

    [EDIT_STUDY]: (state, action) => produce(state, (draft) => {
        let idx = draft.list.findIndex((s) => s.studyId === action.payload.study_id);
        draft.list[idx] = {...draft.list[idx], ...action.payload.new_study};
    }),

    [DELETE_STUDY]: (state, action) => produce(state, (draft) => {
        const del_list = draft.list.filter((s, idx) => {
            if (s.studyId !== action.payload.study_id){
                return s;
            }
        });
        return { list: del_list};
    }),

    [DETAIL_STUDY]: (state, action) => produce(state, (draft) => {
        draft.study = action.payload.study 
    }),

    [JOIN_STUDY]: (state, action) => produce(state, (draft) => {
        draft.study.joinNum += 1;
        draft.join = action.payload.join
    }),

    [WITHDRAW_STUDY]: (state, action) => produce(state, (draft) => {
        draft.study.joinNum -= 1;
        draft.join = action.payload.join
    }),

}, initialState);


export const actionCreator = {
    joinStudy,
    withdrawStudy,
    
    loadStudy,
    createStudy,
    editStudy,
    deleteStudy,
    detailStudy,

    joinDB,
    withdrawDB,

    loadStudyDB,
    createStudyDB,
    editStudyDB,
    deleteStudyDB,
    detailStudyDB,
};



