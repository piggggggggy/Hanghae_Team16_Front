import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/instance";
import moment from "moment";



// actions
const LOAD_STUDY = "study/LOAD_STUDY";
const CREATE_STUDY = "study/CREATE_STUDY";
const EDIT_STUDY = "study/EDIT_STUDY";
const DELETE_STUDY = "study/DELETE_STUDY";
// const APPLY_STUDY = "study/APPY_STUDY";


// action creator
const loadStudy = createAction(LOAD_STUDY, (study_list) => ({study_list}));
const createStudy = createAction(CREATE_STUDY, (study) => ({study}));
const editStudy = createAction(EDIT_STUDY, (study_id, study) => ({study_id, study}));
const deleteStudy = createAction(DELETE_STUDY, (study_id) => ({study_id}));
// const applyStudy = createAction(APPLY_STUDY, (study) => ({study}));


// initialState
const initialState = {
    list: [
    {
    _id: "abc",
    studyId: 1,
    name: "스터디 구해용1",
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
    },
    {
    _id: "abc",
    studyId: 2,
    name: "스터디 구해용2",
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
    },
    {
    _id: "abc",
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
    joinNum: 0,
    },
    {
    _id: "abc",
    studyId: 4,
    name: "스터디 구해용4",
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
    }
    ]
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
            console.log(res);

            let study_list = [];
            
            study_list.push(res.studys);
            console.log(study_list);

            dispatch(loadStudy(study_list));

        }).catch(err => {
            console.log("load : 에러 났다!!", err);
            // err를 출력해서 정확한 내역 파악. 에너메세지에 이름을 붙여주어 어디서 에러가 났는지 확인!!
        })
    }
};

// create
                            // 파라미터에 기본값 주기 - es6
const createStudyDB = (contents="") => {
    return function (dispatch, getState, {history}){
        
        const date = moment().format("YYYY-MM-DD-hh-mm-ss"); 
                // 작성시간 포멧 의논하기 서버랑!!!!
        contents["writeDate"] = date;

        instance.post("/api/study", contents).then((res) => {
            console.log(res);
            dispatch(createStudy(contents));
        }).catch(err => {
            console.log("create : 에러 났다!!!!", err);
        });
    }
};

// update
const editStudyDB = (studyId=null, study={}) => {
    return function (dispatch, getState, {history}){

        const studyIdx = getState().study.list.findIndex(s => s.studyId === studyId);
        const _study = getState().post.list[studyIdx];
        console.log(_study);

        if(!_study.studyId){
            console.log('게시물 정보가 없어요 힝')
            return; 
        }
        
        instance.put("/api/study/:studyId", study).then((res) =>{
            console.log(res)
            dispatch(editStudy(studyId, {...study}))
        }).catch(err => {
            console.log("edit : 에너났읍니다.", err);
        });
    }
};


// delete
export const deleteStudyDB = (studyId) => {
    return function (dispatch, getState, {history}) {
        let studyIdx = getState().study.list.findIndex(s => s.studyId === studyId);
        console.log(studyId)
        console.log(studyIdx);
        let _study = getState().study.list[studyIdx];
            // studyId 가 인덱스인가???? 그렇다면 위의 식은 축약될 수 있음.........
        
        console.log(_study);


        if(!_study.studyId){
            console.log("스터디가 없어용.")
            return;
        }; // 에러 미연에 방지 (혹시나 있을 에러)

        instance.delete("/api/study/:studyId").then((res) => {
            console.log(res);
            dispatch(deleteStudy(studyId));
        }).catch(err => {
            console.log("delete : 에러 났다!!", err);
        });
    };
};




// reducer
export default handleActions({

    [LOAD_STUDY]: (state, action) => produce(state, (draft) => {
        draft.list = action.payload.study_list;
    }),

    [CREATE_STUDY]: (state, action) => produce(state, (draft) => {
        draft.list.unshift(action.payload.study);
    }),

    [EDIT_STUDY]: (state, action) => produce(state, (draft) => {
        let idx = draft.list.findIndex((s) => s.studyId === action.payload.study_id);
        draft.list[idx] = {...draft.list[idx], ...action.payload.study};
    }),

            //  코멘트 데이터 구조를 어떻게 짤지 생각하기!!! study 데이터와 같이 갈 것인가 따로 갈 것인가!
            //  서버에 delete 요청에 코멘트도 지워달라고 요청하기
    [DELETE_STUDY]: (state, action) => produce(state, (draft) => {
        const del_list = draft.list.filter((s, idx) => {
            if (idx !== action.payload.study){
                return s;
            }
        });
        return { list: del_list};
    }),

}, initialState);


export const actionCreator = {
    loadStudy,
    createStudy,
    editStudy,
    deleteStudy,
    loadStudyDB,
    createStudyDB,
    editStudyDB,
    deleteStudyDB,
};



