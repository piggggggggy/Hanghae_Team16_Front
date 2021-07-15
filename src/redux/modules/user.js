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
const LOAD_MAINSTUDY = "LOAD_MAINSTUDY";

const logOut = createAction(LOG_OUT, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const getToken = createAction(GET_TOKEN, (user_token) => ({ user_token }));
const loadMyStudy = createAction(LOAD_MYSTUDY, (my_study) => ({ my_study }));
const loadMyComment = createAction(LOAD_MYCOMMENT, (my_comment) => ({ my_comment }));
const loadMainStudy = createAction(LOAD_MAINSTUDY, (main_study) => ({ main_study }));

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
    main_study_list: [],
};


  



const SignUpDB = (email, password, nickname, group) => {
    return function (dispatch, getState, {history}) {
        axios.post('http://54.180.139.140/api/register',
            {email: email, nickname: nickname, group: group, password: password},
        ).then(function (response) {

            console.log(response.data.result);
            if(response.data.result === "nicknameExist" ) {
               
                window.alert("이미 존재하는 닉네임입니다.")
                return;
            }

            if(response.data.result === "emailExist" ) {
               
                window.alert("이미 존재하는 이메일입니다.")
                return;
            }

            if(response.data.result === "existError" ) {
               
                window.alert("이메일 주소 @ 앞 부분은 비밀번호에 포함시킬 수 없습니다.")
                return;
            }

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
            
            if (response.data.result === "success") {
                
                dispatch(
                    setUser({
                        email: email,
                        password: password,
                        userId: response.data.userId,
                        nickname: response.data.nickname,
                    })
                );

                const USER_TOKEN = response.data.token;
               
                dispatch(
                    getToken({
                        user_token: USER_TOKEN,
                    })
                );
               
               localStorage.setItem('userId', response.data.userId);
               localStorage.setItem('nickname', response.data.nickname);
               
               

                let date = new Date(Date.now() + 86400e3);
                date = date.toUTCString();

                document.cookie = "USER_TOKEN" + "=" + USER_TOKEN + "; " + "expires=" + date;


                axios.defaults.headers.Authorization = "Bearer " + USER_TOKEN;

                history.push('/');
                
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
        localStorage.removeItem("nickname");
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

        instance.get(`/api/mycomment/${userId}`).then((response) => {
            console.log(response);
            const myCommentList = response.data.myComment;
            dispatch(
                loadMyComment(myCommentList)
            )
            
            
        })
        .catch(function (error) {
            console.log(error);
        })
        }
}

const getMainStudy = () => {
    return function (dispatch, getState, {history}) {
        instance.get("api/recent-study").then((response) => {
            const mainStudyList = response.data.studys;
            dispatch(
                loadMainStudy(mainStudyList)
            )
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
            draft.comment_list = action.payload.my_comment;
        }),

        [LOAD_MAINSTUDY]: (state, action) => 
        produce(state, (draft) => {
            draft.main_study_list = action.payload.main_study;
        }),
        
        
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
   loadMainStudy,
   getMainStudy,
  };
  
  export { actionCreators };


