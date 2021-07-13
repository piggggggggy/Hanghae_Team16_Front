import React from "react";
import { Grid, Text, Button, Input } from "../elements";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userAction } from "../redux/modules/user";
import instance from "../shared/instance";
import { emailCheck, passwordCheck } from "../shared/common";

const MyPageModal = (props) => {

    const {Open, Close} = props;

    const dispatch = useDispatch();


    const userId = useSelector(state => (state.user.user.userId));


    const [my_Email, setMy_Email] = React.useState("");
    const [my_Nick, setMy_Nick] = React.useState("");
    const [my_Group, setMy_Group] = React.useState("");

    const [my_Email_Edit, setMy_Email_Edit] = React.useState("");
    const [my_Nick_Edit, setMy_Nick_Edit] = React.useState("");
    const [my_Pwd_Edit, setMy_Pwd_Edit] = React.useState("");
    const [my_PwdCheck_Edit, setMy_PwdCheck_Edit] = React.useState("");

    const [my_Modi, setMy_Modi] = React.useState(false);

    const openModifyInfo = () => {
        setMy_Modi(true);
        console.log(my_Modi);
    }

    const closeModifyInfo = () => {
        setMy_Modi(false);
        console.log(my_Modi);
    }

    const getMyInfo = () => {
        instance.get(`/api/briefInfo/${userId}`).then((response) => {
            setMy_Email(response.data.email);
            setMy_Nick(response.data.nickname);
            setMy_Group(response.data.group);
        })
        .catch(error => {
            console.log(error);
        })
    }

   
    const editEmail = (e) => {
        setMy_Email_Edit(e.target.value);
    };

    const editNick = (e) => {
        setMy_Nick_Edit(e.target.value);
    };

    const editPwd = (e) => {
        setMy_Pwd_Edit(e.target.value);
    };

    const editPwdCheck = (e) => {
        setMy_PwdCheck_Edit(e.target.value);
    };

    const editMyInfo = () => {
        if(my_Email_Edit === "" || my_Pwd_Edit === "" || my_PwdCheck_Edit === "" || my_Nick_Edit === "") {
            window.alert("아이디, 비밀번호, 닉네임을 모두 입력해주세요.");
            return;
        }
    
        if(!emailCheck(my_Email_Edit)) {
            window.alert("이메일 형식이 맞지 않습니다.");
            return;
        }

        if(!passwordCheck(my_Pwd_Edit)) {
            window.alert("비밀번호 형식이 맞지 않습니다.");
            return;
        }
    
        if(my_Pwd_Edit !== my_PwdCheck_Edit) {
            window.alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
            return;
        }

        dispatch(userAction.editInfoDB(my_Email_Edit, my_Pwd_Edit, my_Nick_Edit));
    }
    

    React.useEffect(() => {
        getMyInfo();
    });

    if (my_Modi) {
        return (
            <React.Fragment>
                {Open? (
                    <ModalBox>
    
                        <Grid display="flex" direction="column" width="60%" margin="6% auto">

                        <Grid is_flex  padding="4% 0">
                        <Text size="20px">아이디 : </Text>
                        <Input padding="10px" placeholder="아이디를 입력해주세요." width="60%"_onChange={editEmail}></Input>
                        </Grid>

                        <Grid is_flex padding="4% 0">
                        <Text size="20px">닉네임 : </Text>
                        <Input padding="10px" placeholder={my_Nick} width="60%" _onChange={editNick}></Input>
                        </Grid>
            
                        <Grid is_flex  padding="4% 0">
                        <Text size="20px">비밀번호 : </Text>

                        <Grid display="flex" direction="column" width="60%">
                        <Input  type="password" padding="10px" placeholder="비밀번호를 입력해주세요." width="100%" _onChange={editPwd}></Input>
                        <Text size="11px" margin="3px 0 0 5px">특수문자, 문자, 숫자를 각 하나 이상 포함한 형태의 8~15자리 비밀번호를 설정해 주세요.</Text>
                        </Grid>
                        
                        </Grid>
            
                        <Grid is_flex  padding="4% 0">
                        <Text size="20px">비밀번호 확인 : </Text>
                        <Input  type="password" padding="10px" placeholder="비밀번호를 다시 입력해주세요." width="60%" _onChange={editPwdCheck}></Input>
                        </Grid>
                        
                        <Grid is_flex space="space-around" padding="50px 0 0 0">
                            <Button text="수정" width="30%" _onClick={editMyInfo}></Button>
                            <Button _onClick={closeModifyInfo} text="닫기" width="30%"></Button>
                        </Grid>
                        
                            </Grid>
                    </ModalBox>
                ) : null
                
            } 
                
             </React.Fragment>
        );
    };

    return (
        <React.Fragment>
            {Open? (
                <ModalBox>
                    <Grid height="60%">
                        <ModalBG></ModalBG>
                    </Grid>

                    <Grid display="flex" direction="column" width="50%" margin="0 auto" height="40%" padding="20px 0 0 0">
                    <Grid is_flex padding="3% 0">
                    <Text size="20px">아이디 : </Text>
                    <Text size="20px">{my_Email}</Text>
                    </Grid>
        
                    <Grid is_flex  padding="3% 0">
                    <Text size="20px">닉네임 : </Text>
                    <Text size="20px">{my_Nick}</Text>
                    </Grid>
        
                    <Grid is_flex  padding="3% 0">
                    <Text size="20px">항해 기수 : </Text>
                    <Text size="20px">{my_Group}</Text>
                    </Grid>
                    
                    <Grid is_flex space="space-around" padding="6% 0 0 0">
                        <Button text="수정" _onClick={openModifyInfo} width="30%"></Button>
                        <Button _onClick={Close} text="닫기" width="30%"></Button>
                    </Grid>
                    
                        </Grid>
                </ModalBox>
            ) : null
            
        } 
            
         </React.Fragment>
    );
}


const ModalBox = styled.div`
    width: 60%;
    height: 70%;
    background: #fff;
    top: 10%;
    left: 50%;
    margin-left: -30%;
    position: fixed;
    z-index: 10;
    padding: 0 0 50px 0;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const ModalBG = styled.div`
    width: 100%;
    height: 100%;
    background: url("https://images.unsplash.com/photo-1545096634-8e069bfe1d3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export default MyPageModal;