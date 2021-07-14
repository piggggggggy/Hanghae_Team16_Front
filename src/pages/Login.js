import React from "react";
import { Text, Input, Button, Grid } from "../elements";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/configStore";
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
			<Text align="center" size="40px" weight="bold" margin="50px 0 170px 0">Log In</Text>

            <Grid display="flex"align="center" width="70%" margin="50px auto">
                <Grid width="30%">
                <Text>아이디</Text>
                </Grid>
                <Grid width="70%">
                <Input name="id" type="text" placeholder="아이디를 입력해주세요." padding="10px 20px" width="100%" height="40px" _onChange={onId}></Input>
                </Grid>
            </Grid>

            <Grid display="flex"align="center" width="70%" margin="50px auto">
                <Grid width="30%">
                <Text>비밀번호</Text>
                </Grid>
                <Grid width="70%">
                <Input name="password" type="password" placeholder="비밀번호를 입력해주세요." padding="10px 20px" width="100%" height="40px" _onChange={onPwd}></Input>
                </Grid>
            </Grid>

            <Grid display="flex" margin="100px auto" width="70%">
                <Button text="로그인" width="30%" margin="0 auto" _onClick={logIn}></Button>
                <Button text="회원가입" width="30%" margin="0 auto" _onClick={()=>{history.push("/signup")}}></Button>
            </Grid>

            
		</React.Fragment>
	)  
};


export default Login;