import React from "react";
import styled from "styled-components";
import { Grid, Text, Input, DropBox, Button } from "../elements";


const StudyModal = (props) => {
    


    return (

        <React.Fragment>
           
            <ModalBox>
                <Grid display="flex" direction="column" width="70%" margin="0 auto">
                <Text size="24px" weight="bold">스터디 모집하기</Text>

                <Grid is_flex>
                <Input placeholder="스터디 이름" width="70%"></Input>
                <Input placeholder="모집 인원" width="25%"></Input>
                </Grid>

                <Grid is_flex>
                <Input placeholder="스터디 시작일"  width="70%"></Input>
                <Input placeholder="팀장 이름" width="25%"></Input>
                </Grid>

                <Grid is_flex>
                <DropBox width="25%" text1="상" text2="중" text3="하" text4="무관" name="스터디 난이도"></DropBox>
                <DropBox width="25%" text1="감시형" text2="토이" text3="개인" text4="독서실" text5="알고리즘" name="스터디 방식"></DropBox>
                <DropBox width="25%" text1="O" text2="X"name="중도 참여 가능" two></DropBox>
                <DropBox width="25%" text1="모집 중" text2="모집 종료" name="모집 상태" two></DropBox>
                </Grid>
                
                <Input multiLine></Input>
                <Grid is_flex>
                <Button margin="0 auto" width="200px" text="모집하기" ></Button>
                <Button margin="0 auto" width="200px" text="닫기" closeModal></Button>
                </Grid>
                </Grid>
            </ModalBox>
            
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
   padding: 50px 0;
   box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export default StudyModal;