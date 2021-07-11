import React from "react";
import styled from "styled-components";
import { Text, Grid, Button } from "../elements";
import SType from "../shared/StudyType";


const StudyDetailBody = (props) => {


    const is_full = props.size === props.joinNum


    return (
        <React.Fragment>
            <DetailContainer>
                <DetailHeader>
                    <RowBox>
                        <Text>팀장 : {props.leader}</Text>
                        <Text>LEVEL : {props.level}</Text>
                    </RowBox>
                    <div>
                        <Button backgroundcolor="gray" text="수정"/>
                        <Button backgroundcolor="gray" text="삭제"/>
                    </div>
                </DetailHeader>
                <Grid margin="10px 0px">
                    <Text weight="600" size="32px">{props.name}</Text>
                </Grid>
                <DetailHeader>
                    <Grid>
                        <RowBox>
                            <Text>현재인원 : {props.joinNum} / {props.size}</Text>
                            <Button text="인원보기"/>
                        </RowBox>
                        <Grid>
                            <Text>Type : {SType(props.studyType)}</Text>
                        </Grid>
                    </Grid>
                    <div>
                        {!is_full? 
                        <Button backgroundcolor="#00e676" text="신청하기!"/>:
                        <Button backgroundcolor="#37474f" text="마감되었습니다.."/>}
                    </div>
                </DetailHeader>
                <ContentBox>
                    <Text>{props.explain}</Text>
                </ContentBox>
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
    explain: "초보 고수 모두 환영~",
    joinLater: false,
    userId: 5,
    level: 2,
    studyType: 1,
    joinNum: 0,
}





const DetailContainer = styled.div`
    max-width: 1000px;
    max-height: 1000px;
    background-color: lightgray;
    padding: 10px 10% 30px 10%;

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