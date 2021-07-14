import axios from "axios";
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/instance";

const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";
const GET_TOKEN = "GET_TOKEN";
const LOAD_MYSTUDY = "LOAD_MYSTUDY";
const LOAD_MYCOMMENT = "LOAD_MYCOMMENT";


const logOut = createAction(LOG_OUT, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const getToken = createAction(GET_TOKEN, (user_token) => ({ user_token }));
const loadMyStudy = createAction(LOAD_MYSTUDY, (my_study) => ({my_study}));
const loadMyComment = createAction(LOAD_MYCOMMENT, (my_commnet) => ({my_commnet}));

const initialState = {
    user: {
        email: "이메일",
        nickname: "닉",
        group: "기수",
        password: "비밀번호",
    },
    is_login: false,
    study_list: [],
    comment_list: [],
};


  



const SignUpDB = (email, password, nickname, group) => {
    return function (dispatch, getState, {history}) {
        axios.post('http://54.180.139.140/api/register',
            {email: email, nickname: nickname, group: group, password: password},
        ).then(function (response) {
            history.push("/");
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}

const LoginDB = (email, password) => {
    return function (dispatch, getState, {history}) {
        axios.post('http://54.180.139.140/api/login',
            {email: email, password: password},
        ).then(function (response) {
            console.log(response.data.result);
            if (response.data.result === "success") {
                
                dispatch(
                    setUser({
                        email: email,
                        password: password,
                        userId: response.data.userId,
                    })
                );
                console.log(response);
                const USER_TOKEN = response.data.token;
                console.log(USER_TOKEN);
               
                dispatch(
                    getToken({
                        user_token: USER_TOKEN,
                    })
                );
               
               localStorage.setItem('userId', response.data.userId);
               
               

                let date = new Date(Date.now() + 86400e3);
                date = date.toUTCString();
                // const email_Id = email.split('@')[0];
                document.cookie = "USER_TOKEN" + "=" + USER_TOKEN + "; " + "expires=" + date;
                console.log(document.cookie);
                // instance.defaults.headers.common["Authorization"] = USER_TOKEN;
                axios.defaults.headers.Authorization = "Bearer " + USER_TOKEN;
                console.log("header: ", axios.defaults.headers.Authorization);


                history.push('/');
            } else {
                window.alert("로그인에 실패하였습니다.");
                console.log(response);
            }
        }).catch((error) => {
            console.log(error);
        });
    };
};


const logOutDB = () => {
    return function (dispatch, getState, {history}) {
        dispatch(logOut());
        document.cookie = "USER_TOKEN" + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
        localStorage.removeItem("userId");
        history.push("/");
    }
}

const loginCheckDB = () => {
    return function (dispatch, getState, { history }) {
        const is_Token = document.cookie.match("USER_TOKEN") ? true : false;
        const is_UserId = localStorage.getItem("userId");
        console.log(is_Token);
        if(is_Token) {
            dispatch(
                setUser({
                    is_login: true,
                    userId: is_UserId,
                })
            );
        } else {
            dispatch(logOutDB());
        }
    }
}

const editInfoDB = (my_Pwd_Edit, my_Nick_Edit) => {
    return function (dispatch, getState, {history}) {

        
        const userId = getState().user.user.userId;

        instance.put(`/api/myinfo/${userId}`,
        {password: my_Pwd_Edit, nickname: my_Nick_Edit}
        ).then(function (response) {
            console.log(response);
            if (response.data.result === "success"){
                window.alert("정보 수정이 완료되었습니다.");
                history.goBack();
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    }
}

const getMyStudy = () => {
    return function (dispatch, getState, {history}) {
        const userId = localStorage.getItem("userId");

        instance.get(`/api/mystudy/${userId}`).then((response) => {
            console.log(response);
            const myStudyList = response.data.studyInfo;

            dispatch(
                loadMyStudy(myStudyList)
            )
        })
        .catch(function (error) {
            console.log(error);
        })
        }
}

const getMyComment = () => {
    return function (dispatch, getState, {history}) {
        const userId = localStorage.getItem("userId");

        instance.get(`/api/mystudy/${userId}`).then((response) => {
            console.log(response);
            
        })
        .catch(function (error) {
            console.log(error);
        })
        }
}


export default handleActions(
    {
        [LOG_OUT]: (state, action) =>
        produce(state, (draft) => {
            draft.user = null;
            draft.is_login = false;
        }),

        [SET_USER]: (state, action) =>
        produce(state, (draft) => {
            draft.user = action.payload.user;
            draft.is_login = true;
        }),

        [GET_TOKEN]: (state, action) =>
        produce(state, (draft) => {
            draft.user_token = action.payload.user_token;
        }),

        [GET_USER]: (state, action  ) => 
        produce(state, (draft) => {}),

        [LOAD_MYSTUDY]: (state, action) => 
        produce(state, (draft) => {
            draft.study_list = action.payload.my_study;
        }),

        [LOAD_MYCOMMENT]: (state, action) => 
        produce(state, (draft) => {
            draft.comment_list = action.payload.my_commnet;
        })
        
        
    },
    initialState
);

const actionCreators = {
   SignUpDB,
   LoginDB,
   setUser,
   getUser,
   logOut,
   logOutDB,
   loginCheckDB,
   getToken,
   editInfoDB,
   getMyStudy,
   loadMyStudy,
   loadMyComment,
   getMyComment,
  };
  
  export { actionCreators };


