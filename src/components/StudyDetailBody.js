import React from "react";
import styled from "styled-components";
import { Text, Grid, Button } from "../elements";
import SType from "../shared/StudyType";


const StudyDetailBody = (props) => {

    const {history} = props;

    const is_full = props.size === props.joinNum


    return (
        <React.Fragment>
            <DetailContainer>
                <Grid width="100%" is_flex>
                    <Grid width="15%" is_flex>
                        <Text>팀장 : {props.userId}</Text>
                        <Text>LEVEL : {props.level}</Text>
                    </Grid>
                    <Grid width="25%" is_flex>
                        <Button backgroundcolor="gray" text="수정"/>
                        <Button backgroundcolor="gray" text="삭제"/>
                    </Grid>
                </Grid>
                
                <Grid margin="10px 0px">
                    <Text weight="600" size="32px">{props.name}</Text>
                </Grid>

                <Grid margin="10px 0px">
                    <Text size="20px">일정 : {props.schedule}</Text>
                </Grid>

                
                <Grid is_flex  margin="10px 0px">
                    <Grid>
                        <RowBox>
                            <Text size="20px">현재인원 : {props.joinNum} / {props.size}</Text>
                            <Button backgroundcolor="gray" text="인원보기"/>
                        </RowBox>
                        <Grid>
                            <Text size="20px">스터디 방식 : {SType(props.studyType)}</Text>
                        </Grid>
                    </Grid>
                    <div>
                        {!is_full? 
                        <Button backgroundcolor="#00e676" width="100%" size="20px" text="신청하기!"/>:
                        <Button backgroundcolor="#37474f" width="100%" size="20px" text="마감되었습니다.."/>}
                    </div>
                </Grid>
                
                <Grid width="100%" height="300px" margin="auto" padding="30px" bg="#ffffff">
                    <Text size="18px">{props.explain}</Text>
                </Grid>
            </DetailContainer>
        </React.Fragment>
    )
}

StudyDetailBody.defaultProps = {
    _id: "60e9217b12df1a1e04c79084",
    studyId: 1,
    name: "[일정변경]스터디 구합니다",
    schedule: "2021-09-01-2021-09-07",
    startDate: "2021-07-21",
    endJoinDate: "2021-07-30",
    writeDate: "2021-07-10",
    size: 5,
    explain: "안녕하세요. 저희 스터디는 프론트엔드를 희망하는 사람들끼리 모여 자바스크립트를 공부하고 있습니다. 한 분이 사정이 생겨 추가모집합니다. 현재 모던자바스크립트 튜토리얼 공부와 클론코딩을 병행하고 있습니다. 또한, 8월부터는 리액트 공부를 시작할 예정입니다. 기본적인 html, css를 다룰줄 아시면 좋겠습니다.",
    joinLater: false,
    userId: 5,
    level: 2,
    studyType: 1,
    joinNum: 0,
}





const DetailContainer = styled.div`
    max-width: 1100px;
    max-height: 1000px;
    box-sizing: border-box;
    background-color: lightgray;
    margin: 0px auto;
    padding: 30px 60px;


`;

const DetailHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

const RowBox = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;
const RowBoxRight = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const ContentBox = styled.div`
    min-height: 300px;
    background-color: #ffffff;
    margin: 30px 0px;
`;

export default StudyDetailBody;