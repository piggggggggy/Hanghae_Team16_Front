import axios from "axios";
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";


const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

const setUser = createAction(SET_USER, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

const initialState = {
    user: null,
};
  

const SignUpDB = (id, password, user_name, pwd_check) => {
    return function (dispatch, getState, {history}) {
        axios.post('http://localhost:4000/users',
            {id: id, password: password, nick: user_name},
        ).then(function (response) {
            console.log(response);
            dispatch(
                setUser({
                    id: id,
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

const LoginDB = (id, password) => {
    return function (dispatch, getState, {history}) {
        axios.post('http://localhost:4000/users',
            {id: id, password: password},
        ).then(function (response) {
            console.log(response);
            if (response === true) {
                
                dispatch(
                    setUser({
                        id: response.data.id,
                        password: response.data.password,
                    })
                );

                // const accessToken = response.data.token;
                // setCookie("is_login", `${accessToken}`);
                history.push('/');
            } else {
                window.alert("로그인에 실패하였습니다.");
            }
        }).catch((error) => {
            console.log(error);
        });
    };
};




export default handleActions(
    {
        [SET_USER]: (state, action) =>
        produce(state, (draft) => {
            draft.user = action.payload.user;
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
  };
  
  export { actionCreators };


