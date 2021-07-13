import React from "react";
import styled from "styled-components";
import { Grid, Text, Input, DropBox, Button } from "../elements";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreator as studyActions } from "../redux/modules/study";


const EditModal = (props) => {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.user.user.userId);
    const {Open, Close} = props;

    const [name, setName] = React.useState(props.name);
    const [startDate, setStart] = React.useState(props.startDate);
    const [endJoinDate, setEnd] = React.useState(props.endJoinDate);
    const [schedule, setSchedule] = React.useState(props.schedule);
    const [size, setSize] = React.useState(props.size);
    const [explain, setExplain] = React.useState(props.explain);
    const [joinLater, setJoin] = React.useState(props.joinLater);
    const [studyType, setType] = React.useState(props.studyType);
    const [level, setLevel] = React.useState(props.level);



    // joinLater 값 boolean으로 바꿔주기
    const changeJoin = (e) => {
        if(e.target.value === 'O'){
            setJoin(true);
        }else{
            setJoin(false);
        }
    };

    // studyType int형으로 바꿔주기
    const changeType = (e) => {
        let tp = parseInt(e.target.value);
        setType(tp);
    };

    // level int형으로 바꿔주기
    const changeLevel = (e) => {
        let lv = parseInt(e.target.value);
        setLevel(lv);
    };

    const editName = (e) => {
        setName(e.target.value);
    };

    const editStart = (e) => {
        setStart(e.target.value);
    };

    const editEnd = (e) => {
        setEnd(e.target.value);
    };

    const editSize = (e) => {
        setSize(e.target.value);
    };

    const editSchedule = (e) => {
        setSchedule(e.target.value);
    };

    const editExplain = (e) => {
        setExplain(e.target.value);
    };

    
    
    // 부모 컴포넌트로부터 받은 props 갑 중 studyIdx 값으로 
    const study_lst = useSelector((state) => state.study.list);
    // const study_idx = study_lst.findIndex((s) => s.studyId === _study_id)
    // const _study = study_lst[study_idx];
    // console.log(_study_id);
    // console.log(study_idx);
    // console.log(study_lst);
    // console.log(_study);
    // console.log(_study.explain);



    



    const editStudy = () => {
        const study_data = {
            name: name,
            startDate: startDate,
            endJoinDate: endJoinDate,
            schedule: schedule,
            size: parseInt(size),
            level: level,
            explain: explain,
            studyType: studyType,
            joinLater: joinLater,
            joinNum: 0,
            userId: userId
        }

        const new_study = {...props, ...study_data};
        console.log(new_study);

        dispatch(studyActions.editStudyDB(props.studyId, {new_study: new_study}));
        Close();
    };



    return (

        <React.Fragment>
            {Open?
                (
                <ModalBox>
                    <Grid display="flex" direction="column" width="70%" margin="0 auto">
                        <Text margin="10px 0px" size="24px" weight="bold">수정하기</Text>

                        <Grid margin="10px 0px" is_flex>
                            <Input _onChange={editName} padding="0px 0px 0px 20px" placeholder="스터디 이름" width="70%" maxlength={32} _value={name}/>
                            <Input _onChange={editSize} padding="0px 0px 0px 20px" placeholder="모집 인원" width="25%" _value={size}/>
                        </Grid>

                        <Grid margin="10px 0px" is_flex>
                            <Input _onChange={editStart} type="date" padding="0px 0px 0px 20px" placeholder="스터디 시작일"  width="70%" _value={startDate}/>
                            <DropDown onChange={changeLevel} value={level}>
                                <option selected>스터디 난이도</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </DropDown>
                        </Grid>

                        <Grid margin="10px 0px" is_flex>
                            <Input _onChange={editEnd} type="date" padding="0px 0px 0px 20px" placeholder="스터디 마감일"  width="70%" _value={endJoinDate}/>
                            <DropDown onChange={changeType} value={studyType}>
                                <option selected>스터디 방식</option>
                                <option value="0">감시형</option>
                                <option value="1">토이</option>
                                <option value="2">개인</option>
                                <option value="3">독서실</option>
                                <option value="4">알고리즘</option>
                            </DropDown>
                        </Grid>

                        <Grid margin="10px 0px" is_flex>
                            <Input _onChange={editSchedule} type="text" padding="0px 0px 0px 20px" placeholder="스터디 기간"  width="70%" _value={schedule}/>                    
                            <DropDown onChange={changeJoin} value={joinLater}>
                                <option selected>중도 참여 가능</option>
                                <option>O</option>
                                <option>X</option>
                            </DropDown>
                        </Grid>
                    
                        <Input _onChange={editExplain} margin="10px 0px" placeholder="내용을 입력해주세요." padding="20px" multiLine _value={explain}/>
                        <Grid margin="20px 0px" is_flex>
                            <Button margin="0 auto" width="200px" text="수정하기" _onClick={() => {editStudy()}}/>
                            <Button margin="0 auto" width="200px" text="닫기" _onClick={Close}/>
                        </Grid>
                    </Grid>
                </ModalBox>
                ) : null
            } <div/>
            
            
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
    width: 25%;
    height: 50px;
    border: 1px solid black;
    padding-left: 10px;
`;

export default EditModal;




    
