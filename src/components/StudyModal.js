import React from "react";
import styled from "styled-components";
import { Grid, Text, Input, DropBox, Button } from "../elements";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as studyActions } from "../redux/modules/study";


const StudyModal = (props) => {
    const dispatch = useDispatch();
    
    const name = useRef();
    const startDate = useRef();
    const endJoinDate = useRef();
    const size = useRef();
    // const 팀장이름 
    const explain = useRef();
    
    const [joinLater, setJoin] = React.useState('');
    const [studyType, setType] = React.useState('');
    const [level, setLevel] = React.useState('');

    const changeJoin = (e) => {
        if(e.target.value === 'O'){
            setJoin(true);
        }else{
            setJoin(false);
        }
    };

    const changeType = (e) => {
        let tp = parseInt(e.target.value);
        setType(tp);
    };

    const changeLevel = (e) => {
        let lv = parseInt(e.target.value);
        setLevel(lv);
    };


    

    const createStudy = () => {

        const study = {
            name: name.current.value,
            startDate: startDate.current.value,
            endJoinDate: endJoinDate.current.value,
            schedule: startDate.current.value+" ~ "+endJoinDate.current.value,
            size: parseInt(size.current.value),
            level: level,
            explain: explain.current.value,
            studyType: studyType,
            joinLater: joinLater,
            joinNum: 0,
        }
        console.log(study);

        return;

        // dispatch(studyActions.createStudyDB(study));
        // props.history.replace('/study');

    }
    

    // name/level/studyType/joinLater/startDate/explain   + writeDate
// schedule/endJoinDate/
// 팀장이름은 어떻게 해야할까// userId로 보내야하나? // joinNum 자동으로 붙이기 // 유저정보 합쳐서 보내기

    return (

        <React.Fragment>
           
            <ModalBox>
                <Grid display="flex" direction="column" width="70%" margin="0 auto">
                    <Text margin="10px 0px" size="24px" weight="bold">스터디 모집하기</Text>

                    <Grid margin="10px 0px" is_flex>
                        <Input _ref={name} padding="0px 0px 0px 20px" placeholder="스터디 이름" width="70%" maxlength={32} />
                        <Input _ref={size} padding="0px 0px 0px 20px" placeholder="모집 인원" width="25%"/>
                    </Grid>

                    <Grid margin="10px 0px" is_flex>
                        <Input type="date" _ref={startDate} padding="0px 0px 0px 20px" placeholder="스터디 시작일"  width="70%"/>
                        <Input padding="0px 0px 0px 20px" placeholder="팀장 이름" width="25%"/>
                    </Grid>

                    <Grid margin="10px 0px">
                        <Input type="date" _ref={endJoinDate} padding="0px 0px 0px 20px" placeholder="스터디 마감일"  width="70%"/>
                    </Grid>

                    <Grid margin="10px 0px" display="flex">
                        <DropDown onChange={changeLevel}>
                            <option selected>스터디 난이도</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </DropDown>
                        <DropDown onChange={changeType}>
                            <option selected>스터디 방식</option>
                            <option value="0">감시형</option>
                            <option value="1">토이</option>
                            <option value="2">개인</option>
                            <option value="3">독서실</option>
                            <option value="4">알고리즘</option>
                        </DropDown>
                        <DropDown onChange={changeJoin}>
                            <option selected>중도 참여 가능</option>
                            <option>O</option>
                            <option>X</option>
                        </DropDown>
                        {/* <DropBox width="30%" text1="상" text2="중" text3="하" text4="무관" name="스터디 난이도"></DropBox>
                        <DropBox width="30%" text1="감시형" text2="토이" text3="개인" text4="독서실" text5="알고리즘" name="스터디 방식"></DropBox>
                        <DropBox width="20%" text1="O" text2="X"name="중도 참여 가능" two></DropBox> */}
                        {/* <DropBox width="25%" text1="모집 중" text2="모집 종료" name="모집 상태" two></DropBox> */}
                    </Grid>
                
                    <Input margin="10px 0px" _ref={explain} placeholder="내용을 입력해주세요." padding="20px" multiLine/>
                    <Grid margin="20px 0px" is_flex>
                        <Button margin="0 auto" width="200px" text="모집하기" _onClick={() => {createStudy()}}/>
                        <Button margin="0 auto" width="200px" text="닫기" closeModal/>
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
const DropDown = styled.select`
    width: 20%;
    height: 50px;
    border: 1px solid black;
    padding-left: 10px;
    margin-right: 30px;
`;

export default StudyModal;