import React from "react";
import { Text, Input, Button, Grid } from "../elements";

const SignUp = (props) => {

 	return (
		<React.Fragment>
			<Text align="center" size="40px" weight="bold" margin="50px 0 70px 0">Sign Up</Text>

            <Grid display="flex"align="center" width="70%" margin="50px auto">
                <Grid width="30%">
                <Text>아이디</Text>
                </Grid>

                <Grid display="float" width="70%" space="space-between">
                <Grid width="80%">
                <Input placeholder="아이디를 입력해주세요." padding="10px 20px" width="100%" height="40px"></Input>
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
                <Input placeholder="닉네임을 입력해주세요." padding="10px 20px" width="100%" height="40px"></Input>
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
                <Input type="password" placeholder="비밀번호를 입력해주세요." padding="10px 20px" width="100%" height="40px"></Input>
                </Grid>
            </Grid>

            <Grid display="flex"align="center" width="70%" margin="50px auto">
                <Grid width="30%">
                <Text>비밀번호 확인</Text>
                </Grid>
                <Grid width="70%">
                <Input type="password" placeholder="비밀번호를 한 번 더 입력해주세요." padding="10px 20px" width="100%" height="40px"></Input>
                </Grid>
            </Grid>


            <Grid display="flex" margin="100px auto" width="70%">
                <Button text="회원가입" width="30%" margin="0 auto"></Button>
                <Button text="취소" width="30%" margin="0 auto"></Button>
            </Grid>
            
            
		</React.Fragment>
	)  
};


export default SignUp;