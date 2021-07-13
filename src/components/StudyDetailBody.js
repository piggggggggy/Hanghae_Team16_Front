import React from "react";
import styled from "styled-components";
import { Text, Grid, Button } from "../elements";
import SType from "../shared/StudyType";
import StudyModal from "./StudyModal";
import EditModal from "./EditModal";

import {history} from "../redux/configStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreator as studyActions } from "../redux/modules/study";


const StudyDetailBody = (props) => {
    const dispatch = useDispatch();
    const studyId = props.id;
    

    // detail load
    React.useEffect(() => {
        dispatch(studyActions.detailStudyDB(studyId));
    }, []);

    const study_list = useSelector((state) => state.study.list);
    const index = study_list.findIndex((s) => s.studyId === studyId);
    const study = study_list[index];
    console.log(study)



    // 인원현황
    const is_full = study.joinNum+1 === study.size;

    
    
    // 모달 작업
    const [Modal, setModal] = React.useState(false);
 	const ModalOpen = () => {
        setModal(true);
    };  
    const ModalClose = () => {
        setModal(false);
    }




    // 삭제
    const deleteStudy = () => {
        dispatch(studyActions.deleteStudyDB(studyId));
        history.replace('/study');
    };



    return (
        <React.Fragment>
            <DetailContainer>
                <EditModal Open={Modal} Close={ModalClose} {...study}/>
                <Grid width="100%" is_flex>
                    {/* <Grid width="15%" is_flex>
                        <Text>팀장 : {props.userId}</Text>
                        <Text>LEVEL : {props.level}</Text>
                    </Grid> */}
                    <Grid width="20%">
                        {!is_full?
                        <Grid display="flex" space="center" align="center" width="100%" height="40px" bg="#00e676"><Text bold color="#ffffff" size="20px">모집중!!</Text></Grid> :
                        <Grid display="flex" space="center" align="center" width="100%" height="40px" bg="red"><Text bold color="#ffffff" size="20px">마감되었어요..</Text></Grid>
                        }
                        
                    </Grid>
                    <Grid  is_flex>
                        <Button backgroundcolor="gray" text="수정" _onClick={ModalOpen} margin="0px 25px 0px 0px"/>
                        <Button backgroundcolor="gray" text="삭제" _onClick={deleteStudy}/>
                    </Grid>
                </Grid>
                
                <Grid margin="10px 0px">
                    <Text weight="600" size="32px">{study.name}</Text>
                </Grid>

                <Grid margin="10px 0px">
                    <Text size="20px">스터디 기간 : {study.schedule}</Text>
                </Grid>

                
                <Grid is_flex  margin="10px 0px">
                    <Grid>
                        <RowBox>
                            <Text size="20px">현재인원 : {study.joinNum+1} / {study.size}</Text>
                            <Button backgroundcolor="gray" text="인원보기"/>
                        </RowBox>
                        <Grid>
                            <Text size="20px">스터디 방식 : {SType(study.studyType)}</Text>
                        </Grid>
                    </Grid>
                </Grid>
                
                <Grid width="100%" height="300px" margin="auto" padding="30px" bg="#ffffff">
                    <Text size="18px">{study.explain}</Text>
                </Grid>
                <Grid display="flex" space="flex-end" align="center" margin="20px 0px">
                    <Button backgroundcolor="gray" text="신청하기" margin="0px 25px"/>
                    <Button backgroundcolor="gray" text="목록으로" _onClick={()=>{history.replace('/study')}}/>
                </Grid>
            </DetailContainer>
        </React.Fragment>
    )
}

// StudyDetailBody.defaultProps = {
//     _id: "60e9217b12df1a1e04c79084",
//     studyId: 1,
//     name: "[일정변경]스터디 구합니다",
//     schedule: "5주",
//     startDate: "2021-07-21",
//     endJoinDate: "2021-07-30",
//     writeDate: "2021-07-10",
//     size: 5,
//     explain: "안녕하세요. 저희 스터디는 프론트엔드를 희망하는 사람들끼리 모여 자바스크립트를 공부하고 있습니다. 한 분이 사정이 생겨 추가모집합니다. 현재 모던자바스크립트 튜토리얼 공부와 클론코딩을 병행하고 있습니다. 또한, 8월부터는 리액트 공부를 시작할 예정입니다. 기본적인 html, css를 다룰줄 아시면 좋겠습니다.",
//     joinLater: false,
//     userId: 5,
//     level: 2,
//     studyType: 1,
//     joinNum: 3,
// }





const DetailContainer = styled.div`
    max-width: 80%;
    max-height: 1000px;
    box-sizing: border-box;
    background-color: lightgray;
    margin: 0px auto;
    padding: 30px 5%;


`;


const RowBox = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;


export default StudyDetailBody;