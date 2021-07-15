import React from "react";
import styled from "styled-components";
import { Text, Grid, Button } from "../elements";
import SType from "../shared/StudyType";
import EditModal from "./EditModal";

import configStore, {history} from "../redux/configStore";
import { useSelector, useDispatch, useStore } from "react-redux";
import { actionCreator as studyActions } from "../redux/modules/study";
import { red } from "@material-ui/core/colors";


const StudyDetailBody = (props) => {
    const dispatch = useDispatch();
    const _studyId = props.id;
    const study = useSelector((state) => state.study.study);
    const join = useSelector((state) => state.study.join);
    const userId = localStorage.getItem("userId");
    const [is_join, setJoin] = React.useState(false);
    // const [already_join, setAJoin] = React.useState(false);
    
 

    // detail load
    React.useEffect(() => {
        
        dispatch(studyActions.detailStudyDB(_studyId));
    }, []);


        


    // 모달 작업----------------------------------
    const [_Modal, _setModal] = React.useState(false);

    const _ModalOpen = () => {
        if(userId == _study.userId){
            _setModal(true)
        }else{
            window.alert("작성자만 수정할 수 있어요!")
        }
    };  
    const _ModalClose = () => {
        _setModal(false)
    };
    //--------------------------------------------
    

    if (!study) { 
        return <div>로딩중..</div>; 
    }

    const _study = study.detail[0];
    const members = study.members;
    console.log(members[0].name)

    // 인원현황
    const is_full = _study.joinNum+1 === _study.size;


    // console.log("userId :"+userId);
    // console.log("study :"+_study.userId);
    // 삭제
    const deleteStudy = () => {
        if(userId == _study.userId){
            dispatch(studyActions.deleteStudyDB(_studyId));
            history.replace('/study');
        }else{
            window.alert("작성자만 지울 수 있어요!")
        }
        
    };



    let already_join = false
    for(let i = 0; i < members.length; ++i) {
        let check = members[i];
        if (check.id == userId){
            already_join = true;
            break;
        };
    };

    const joinStudy = () => {

        let leader = userId == _study.userId ? true : false;
        let userInfo = {
            userId: userId,
            leader: leader,
        };

        if (!leader && !is_join){
            dispatch(studyActions.joinDB(_studyId, userInfo));
            setJoin(true);
        }else{
            window.alert("본인이 모집하는 스터디 입니다! 정신 차리세요.")
        };  
    };

    const withdrawStudy = () => {

        let userInfo = {
            userId: userId,
        }
        dispatch(studyActions.withdrawDB(_studyId, userInfo));
        setJoin(false);
    };

    
    const joinButton = () => {
        if (userId == _study.userId){
            return(
                <></>
            );
        }else{
            return (
                already_join || is_join ?  
                <Button backgroundcolor="red" text="신청취소" margin="0px 25px" _onClick={()=>{withdrawStudy()}}/>
                : <Button backgroundcolor="green" text="신청하기" margin="0px 25px" _onClick={()=>{joinStudy()}}/>
            )
        }

    }
    
    console.log(members.length)
    console.log(join.length)


    return (
        <React.Fragment>
            <DetailContainer>
                <EditModal Open={_Modal} Close={_ModalClose} {..._study}/>
                <Grid width="100%" is_flex margin="0px 0px 20px 0px">
                    {/* <Grid width="15%" is_flex>
                        <Text>팀장 : {props.userId}</Text>
                        <Text>LEVEL : {props.level}</Text>
                    </Grid> */}
                    <Grid width="20%">
                        {!is_full?
                        <Grid display="flex" space="center" align="center" radius="10px" width="100%" height="40px" bg="#00e676"><Text bold color="#ffffff" size="20px">모집중!!</Text></Grid> :
                        <Grid display="flex" space="center" align="center" radius="10px" width="100%" height="40px" bg="red"><Text bold color="#ffffff" size="20px">마감되었어요..</Text></Grid>
                        }
                        
                    </Grid>
                    <Grid  is_flex>
                        <Button backgroundcolor="#c0dbef" color="black" text="수정" _onClick={_ModalOpen} margin="0px 25px 0px 0px"/>
                        <Button backgroundcolor="#c0dbef" color="black" text="삭제" _onClick={()=>{deleteStudy()}}/>
                    </Grid>
                </Grid>
                
                <Grid padding="10px 3%">
                    <Text weight="600" size="32px">{_study.name}</Text>
                </Grid>


                <Grid padding="0px 3%">
                    <Grid>
                        <Text size="18px">모집 기간 : {_study.startDate} ~ {_study.endJoinDate}</Text>
                    </Grid>
                    
                    <Grid margin="10px 0px">
                        <Text size="18px">스터디 기간 : {_study.schedule}</Text>
                    </Grid>

                    

                    <Grid is_flex>
                        <Grid>
                            <Text margin="0px 0px 10px 0px" size="18px">스터디 방식 : {SType(_study.studyType)}</Text>
                            <Text margin="10px 0px" size="18px">난이도 : {_study.level}</Text>
                            <Text margin="10px 0px" size="18px">중도참여여부 : {_study.joinLater? "가능" : "불가능"}</Text>
                        </Grid>
                        <Grid display="flex" direction="column" align="center">
                            <Text size="18px">현재인원 : {join.length === 0 ? members.length : join.currentMemberCnt+1} / {_study.size}</Text>
                            
                            <MemberBtn>
                                <Text color="black">{"인원 보기"}</Text>
                                <MemberBox>
                                    
                                    {members.map((m, idx) => {
                                        return(
                                            <Text 
                                            color={_study.userId == m.id? "green" : "black"}
                                            margin="5px 0px" 
                                            size="20px" 
                                            weight="600" 
                                            key={idx}>
                                                {_study.userId == m.id? `${m.name}(팀장)`: m.name}
                                            </Text>
                                        )
                                    })}
                                </MemberBox>
                            </MemberBtn>
                        </Grid>
                    </Grid>

                </Grid>
                
                
                <Grid width="100%" height="300px" margin="10px auto" padding="30px" bg="#ffffff">
                    <Text size="18px">{_study.explain}</Text>
                </Grid>
                <Grid display="flex" space="flex-end" align="center" margin="20px 0px">
                    {is_full? <></> : joinButton()}
                    <Button backgroundcolor="#c0dbef" color="black" text="목록으로" _onClick={()=>{history.replace('/study')}}/>
                </Grid>
            </DetailContainer>
        </React.Fragment>
    )
}

const DetailContainer = styled.div`
    max-width: 100%;
    max-height: 1000px;
    box-sizing: border-box;
    border-radius: 20px;
    background-color: #f4f4f4;
    margin: 0px auto;
    padding: 30px 5% 10px 5%;
    /* box-shadow: 5px 5px 5px gray; */
`;

const MemberBox = styled.div`
    width: 200px;
    min-height: 300px;
    display: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    background-color: #f1f1f1;
    position: fixed;
    /* z-index: 10; */
    top: 20%;
    left: 48%;
`;

const MemberBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 40px;
    background-color: #c0dbef;
    border: none;
    border-radius: 5px;
    color: white;
    margin: 20px 0px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   


    &:hover {
        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
`;
// const DeadBox = styled.div`
//     display: flex; 
//     justify-content: center; 
//     align-items: center; 
//     width: 100%; 
//     height: 40px; 
//     background-color: ;
// `;


const RowBox = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;


export default StudyDetailBody;