import React from "react";
import styled from "styled-components";
import { Text, Grid, Button } from "../elements";
import SType from "../shared/StudyType";
import EditModal from "./EditModal";

import {history} from "../redux/configStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreator as studyActions } from "../redux/modules/study";


const StudyDetailBody = (props) => {
    const dispatch = useDispatch();
    const _studyId = props.id;
    console.log(_studyId)
    const _study = useSelector((state) => state.study.study);
    

    // detail load
    React.useEffect(() => {
        
        dispatch(studyActions.detailStudyDB(_studyId));
    }, [_studyId]);

        


    // 모달 작업
    const [_Modal, _setModal] = React.useState(false);

    const _ModalOpen = () => {
        _setModal(true)
    };  
    const _ModalClose = () => {
        _setModal(false)
    };

    if (!_study) { 
        return <div>로딩중..</div>; 
    }

    // 인원현황
    const is_full = _study.joinNum+1 === _study.size;

    // 삭제
    const deleteStudy = () => {
        dispatch(studyActions.deleteStudyDB(_studyId));
        history.replace('/study');
    };




    


    return (
        <React.Fragment>
            <DetailContainer>
                <EditModal Open={_Modal} Close={_ModalClose} {..._study}/>
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
                        <Button backgroundcolor="gray" text="수정" _onClick={_ModalOpen} margin="0px 25px 0px 0px"/>
                        <Button backgroundcolor="gray" text="삭제" _onClick={deleteStudy}/>
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
                            <Text size="18px">현재인원 : {_study.joinNum+1} / {_study.size}</Text>
                            <Button margin="20px 0px" backgroundcolor="gray" text="인원보기"/>
                        </Grid>
                    </Grid>

                </Grid>
                
                
                <Grid width="100%" height="300px" margin="10px auto" padding="30px" bg="#ffffff">
                    <Text size="18px">{_study.explain}</Text>
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
    padding: 30px 5% 10px 5%;


`;


const RowBox = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;


export default StudyDetailBody;