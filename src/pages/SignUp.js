import React from "react";
import { Text, Input, Button, Grid } from "../elements";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { emailCheck } from "../shared/common";


const SignUp = (props) => {
    
    const dispatch = useDispatch();

    const [id, setId] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [pwd_check, setPwdCheck] = React.useState("");
    const [user_name, setUserName] = React.useState("");

    const onId = (e) => {
        setId(e.target.value);
    };

    const onPwd = (e) => {
        setPassword(e.target.value);
    };

    const onNick = (e) => {
        setUserName(e.target.value);
    }

    const onPwdCheck = (e) => {
        setPwdCheck(e.target.value);
    }

    const signup = () => {

        if(id === "" || password === "" || pwd_check === "" || user_name === "") {
            window.alert("아이디, 비밀번호, 닉네임을 모두 입력해주세요.");
            return;
        }
    
        if(!emailCheck(id)) {
            window.alert("이메일 형식이 맞지 않습니다.");
            return;
        }
    
        if(password !== pwd_check) {
            window.alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
            return;
        }

        dispatch(userActions.SignUpDB(id, password, user_name, pwd_check));
    };

    

 	return (
		<React.Fragment>
			<Text align="center" size="40px" weight="bold" margin="50px 0 70px 0">Sign Up</Text>

            <Grid display="flex"align="center" width="70%" margin="50px auto">
                <Grid width="30%">
                <Text>아이디</Text>
                </Grid>

                <Grid display="float" width="70%" space="space-between">
                <Grid width="80%">
                <Input placeholder="아이디를 입력해주세요." padding="10px 20px" width="100%" height="40px" _onChange={onId}></Input>
                </Grid>
                <Grid width="20%">
                    <Button text="중복 확인" width="90%" margin="0 0 0 12px"></Button>
                </Grid>
                </Grid>
            </Grid>

            <Grid display="flex"align="center" width="70%" margin="50px auto">
                <Grid width="30%">
                <Text>닉네임</Text>
                </Grid>

                <Grid display="float" width="70%" space="space-between">
                <Grid width="80%">
                <Input placeholder="닉네임을 입력해주세요." padding="10px 20px" width="100%" height="40px"  _onChange={onNick}></Input>
                </Grid>
                <Grid width="20%">
                    <Button text="중복 확인" width="90%" margin="0 0 0 12px"></Button>
                </Grid>
                </Grid>
            </Grid>


            <Grid display="flex"align="center" width="70%" margin="50px auto">
                <Grid width="30%">
                <Text>비밀번호</Text>
                </Grid>
                <Grid width="70%">
                <Input type="password" placeholder="비밀번호를 입력해주세요." padding="10px 20px" width="100%" height="40px"  _onChange={onPwd}></Input>
                </Grid>
            </Grid>

            <Grid display="flex"align="center" width="70%" margin="50px auto">
                <Grid width="30%">
                <Text>비밀번호 확인</Text>
                </Grid>
                <Grid width="70%">
                <Input type="password" placeholder="비밀번호를 한 번 더 입력해주세요." padding="10px 20px" width="100%" height="40px"  _onChange={onPwdCheck}></Input>
                </Grid>
            </Grid>


            <Grid display="flex" margin="100px auto" width="70%">
                <Button text="회원가입" width="30%" margin="0 auto" _onClick={signup}></Button>
                <Button text="취소" width="30%" margin="0 auto"></Button>
            </Grid>
            
            
		</React.Fragment>
	)  
};


export default SignUp;