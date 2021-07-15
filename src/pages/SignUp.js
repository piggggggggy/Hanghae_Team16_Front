import React from "react";
import { Text, Input, Button, Grid } from "../elements";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck, passwordCheck } from "../shared/common";
import { history } from "../redux/configStore";

const SignUp = (props) => {
    
    const dispatch = useDispatch();

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [group, setGroup] = React.useState("");
    const [pwd_check, setPwdCheck] = React.useState("");
    const [nickname, setNickname] = React.useState("");

    const onId = (e) => {
        setEmail(e.target.value);
    };

    const onPwd = (e) => {
        setPassword(e.target.value);
    };

    const onGroup = (e) => {
        setGroup(e.target.value);
    };

    const onNick = (e) => {
        setNickname(e.target.value);
    }

    const onPwdCheck = (e) => {
        setPwdCheck(e.target.value);
    }

    const signup = () => {

        if(email === "" || password === "" || pwd_check === "" || nickname === "") {
            window.alert("아이디, 비밀번호, 닉네임을 모두 입력해주세요.");
            return;
        }
    
        if(!emailCheck(email)) {
            window.alert("이메일 형식이 맞지 않습니다.");
            return;
        }

        if(!passwordCheck(password)) {
            window.alert("비밀번호 형식이 맞지 않습니다.");
            return;
        }
    
        if(password !== pwd_check) {
            window.alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
            return;
        }

        if(group === "" || group === 0) {
            window.alert("항해 기수를 선택해주세요.");
            return;
        }
        dispatch(userActions.SignUpDB(email, password, nickname, group));
    };

    

 	return (
		<React.Fragment>
			<Text color="#161872" align="center" size="40px" weight="bold" margin="50px 0 70px 0">Sign Up</Text>

            <SignupBox>
                <Grid display="flex"align="center" width="70%" margin="50px auto">
                    <Grid width="30%">
                    <Text size="17px">아이디</Text>
                    </Grid>

                    <Grid width="70%">
                    <Input placeholder="아이디를 입력해주세요." padding="10px 20px" width="100%" height="40px" _onChange={onId}></Input>
                    </Grid>
                </Grid>

                <Grid display="flex"align="center" width="70%" margin="50px auto">
                    <Grid width="30%">
                    <Text size="17px">닉네임</Text>
                    </Grid>

                    <Grid width="70%">
                    <Input placeholder="닉네임을 입력해주세요." padding="10px 20px" width="100%" height="40px"  _onChange={onNick}></Input>
                    </Grid>
                </Grid>

                <Grid display="flex"align="center" width="70%" margin="50px auto">
                    <Grid width="30%">
                    <Text size="17px">항해 기수</Text>
                    </Grid>
                    <Grid width="70%">
                    
                    <DropBox onChange={onGroup}>
                        <option value="0" selected>항해 기수</option>
                        <option value="1">1기</option>
                        <option value="2">2기</option>
                        <option value="3">3기</option>
                        <option value="4">참여 예정</option>
                    </DropBox>
                    
                    </Grid>
                </Grid>

                <Grid display="flex"align="center" width="70%" margin="50px auto">
                    <Grid width="30%">
                    <Text size="17px">비밀번호</Text>
                    </Grid>
                    <Grid width="70%" display="flex" direction="column">
                    <Input type="password" placeholder="비밀번호를 입력해주세요." padding="10px 20px" width="100%" height="40px"  _onChange={onPwd}></Input>
                    <Text size="11px" margin="3px 0 0 5px">특수문자, 문자, 숫자를 각 하나 이상 포함한 형태의 8~15자리 비밀번호를 설정해 주세요.</Text>
                    </Grid>
                </Grid>

                <Grid display="flex"align="center" width="70%" margin="50px auto">
                    <Grid width="30%">
                    <Text size="17px">비밀번호 확인</Text>
                    </Grid>
                    <Grid width="70%">
                    <Input type="password" placeholder="비밀번호를 한 번 더 입력해주세요." padding="10px 20px" width="100%" height="40px"  _onChange={onPwdCheck}></Input>
                    </Grid>
                </Grid>


                <Grid display="flex" margin="50px auto" width="70%">
                    <Button backgroundcolor="#839cf5" text="회원가입" width="40%" margin="0 auto" _onClick={signup}></Button>
                    <Button backgroundcolor="#839cf5" text="취소" width="40%" margin="0 auto" _onClick={()=>{history.goBack()}}></Button>
                </Grid>
            </SignupBox>
            
            
            
		</React.Fragment>
	)  
};

const DropBox = styled.select`
    width: 40%;
    height: 40px;
    padding: 10px 20px;
`;


const SignupBox = styled.div`
    width: 50%;
    height: 600px;
    margin: auto;
    border: 2px solid #eeeeee;
    border-radius: 10px;
`;

export default SignUp;