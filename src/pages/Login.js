import React from "react";
import { Text, Input, Button, Grid } from "../elements";
import { fetchLogin } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Login = (props) => {

//     const dispatch = useDispatch();

//     const [account, setAccount] = React.useState({
//         id: "",
//         password: "",
//     });

//     const onChangeAccount = (e) => {
        
//         setAccount({
//             ...account,
//             [e.target.name]: e.target.value,
//         })
        
//     };

//     const onSubmitAccount = async () => {
//         try {
//             const user = await fetchLogin(account);
//             setUser(user);
//         } catch (error) {
//             window.alert(error);
//         }
//     };


    return (
		<React.Fragment>
			<Text align="center" size="40px" weight="bold" margin="50px 0 170px 0">Log In</Text>

            <Grid display="flex"align="center" width="70%" margin="50px auto">
                <Grid width="30%">
                <Text>아이디</Text>
                </Grid>
                <Grid width="70%">
                <Input name="id" type="text" placeholder="아이디를 입력해주세요." padding="10px 20px" width="100%" height="40px"></Input>
                </Grid>
            </Grid>

            <Grid display="flex"align="center" width="70%" margin="50px auto">
                <Grid width="30%">
                <Text>비밀번호</Text>
                </Grid>
                <Grid width="70%">
                <Input name="password" type="password" placeholder="비밀번호를 입력해주세요." padding="10px 20px" width="100%" height="40px"></Input>
                </Grid>
            </Grid>

            <Grid display="flex" margin="100px auto" width="70%">
                <Button text="로그인" width="30%" margin="0 auto"></Button>
                <Button text="회원가입" width="30%" margin="0 auto"></Button>
            </Grid>

            
		</React.Fragment>
	)  
};


export default Login;