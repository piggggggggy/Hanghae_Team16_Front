import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { history } from "../redux/configStore";

// components & elements
import { Text, Input, Button, Grid, Image } from "../elements";

// modules
import { actionCreators as userActions } from "../redux/modules/user";
import { actionCreators } from "../redux/modules/study";
import { useSelector } from "react-redux";
import { emailCheck, passwordCheck } from "../shared/common";


const Login = (props) => {
   
    const dispatch = useDispatch();

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");


    const onId = (e) => {
        setEmail(e.target.value);
    };

    const onPwd = (e) => {
        setPassword(e.target.value);
    };

    const logIn = () => {
        dispatch(userActions.LoginDB(email, password));
    };





    return (
		<React.Fragment>

            <Grid>
                <Text color="#161872" align="center" size="40px" weight="bold" margin="50px 0 0 0">Log In</Text>
            </Grid>
            
            <Grid display="flex">
                <LogImageBox>
                </LogImageBox>
            </Grid>
			
            <LoginBox>
                <Grid display="flex"align="center" width="70%" margin="50px auto">
                    <Grid width="30%">
                    <Text size="17px">아이디</Text>
                    </Grid>
                    <Grid width="70%">
                    <Input name="id" type="text" placeholder="아이디를 입력해주세요." padding="10px 20px" width="100%" height="40px" _onChange={onId}></Input>
                    </Grid>
                </Grid>

                <Grid display="flex"align="center" width="70%" margin="50px auto">
                    <Grid width="30%">
                    <Text size="17px">비밀번호</Text>
                    </Grid>
                    <Grid width="70%">
                    <Input name="password" type="password" placeholder="비밀번호를 입력해주세요." padding="10px 20px" width="100%" height="40px" _onChange={onPwd}></Input>
                    </Grid>
                </Grid>

                <Grid display="flex" margin="80px auto 0" width="70%">
                    <Button backgroundcolor="#839cf5" text="로그인" width="35%" margin="0 auto" _onClick={logIn}></Button>
                    <Button backgroundcolor="#839cf5" text="회원가입" width="35%" margin="0 auto" _onClick={()=>{history.push("/signup")}}></Button>
                </Grid>

            </LoginBox>
            
            
		</React.Fragment>
	)  
};


const LoginBox = styled.div`
    width: 50%;
    height: 350px;
    margin: auto;
    border: 2px solid #eeeeee;
    border-radius: 10px;
`;


const LogImageBox = styled.div`
    width: 100%;
    height: 300px;
    background: url("https://firebasestorage.googleapis.com/v0/b/lighthouse-8c323.appspot.com/o/sadfasdfasdfasdf.png?alt=media&token=2dc13346-b389-4326-8dbc-1e5309486642") no-repeat center;
    padding: 20px;
`;


export default Login;