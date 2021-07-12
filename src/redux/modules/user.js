import axios from "axios";
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";


const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";


const logOut = createAction(LOG_OUT, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));


const initialState = {
    user: {
        email: "이메일",
        nickname: "닉",
        group: "기수",
        password: "비밀번호",
    },
    is_login: false,
};
  



const SignUpDB = (email, password, nickname, group) => {
    return function (dispatch, getState, {history}) {
        axios.post('http://54.180.139.140/api/register',
            {email: email, nickname: nickname, group: group, password: password},
        ).then(function (response) {
            console.log(response);
            console.log(response.result);
            console.log(response.data.result);
            dispatch(
                setUser({
                    email: email,
                    nickname: nickname,
                    group: group,
                    password: password,
                })
            );
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
                        email: response.data.email,
                        password: response.data.password,
                    })
                );
                console.log(response);
                const accessToken = response.data.token;
                console.log(accessToken);
                
               
                console.log(document.cookie);
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
        history.push("/");
    }
}

const loginCheckDB = () => {
    return function (dispatch, getState, { history }) {
        const user_info = getState().user.user
        if(user_info) {
            dispatch(
                setUser({
                    email: user_info.email,
                    nickname: user_info.nickname,
                    group: user_info.group,
                    password: user_info.password,
                })
            );
        } else {
            dispatch(logOutDB());
        }
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

        [GET_USER]: (state, action) => 
        produce(state, (draft) => {}),
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
  };
  
  export { actionCreators };


