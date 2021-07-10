import { text } from "dom-helpers";
import React from "react";
import styled from "styled-components";
import { Text, Grid, Button } from "../elements";
import PageHeader from "./PageHeader";


const StudyDetailBody = (props) => {

    const test = {
        studyTitle: "리액트 스터디 모집합니다.",
        studyIndex: 11,
        studyStart: "2021-07-10",
        studyDeadline: "2021-07-20",
        studySize: 5,
        joinNum: 2,
        studyExplain: "리린이들 모집합니다.",
        category: "front-end",
        level: 3,
        is_full: false,
        leader: "박용태",
    }

    const is_full = test.studySize === test.joinNum


    return (
        <React.Fragment>
            <DetailContainer>
                <DetailHeader>
                    <RowBox>
                        <Text>팀장 : {test.leader}</Text>
                        <Text>LEVEL : {test.level}</Text>
                    </RowBox>
                    <div>
                        <Button backgroundcolor="gray" text="수정"/>
                        <Button backgroundcolor="gray" text="삭제"/>
                    </div>
                </DetailHeader>
                <Grid margin="10px 0px">
                    <Text weight="600" size="32px">{test.studyTitle}</Text>
                </Grid>
                <DetailHeader>
                    <Grid>
                        <RowBox>
                            <Text>현재인원 : {test.joinNum} / {test.studySize}</Text>
                            <Button text="인원보기"/>
                        </RowBox>
                        <Grid>
                            <Text>카테고리 : {test.category}</Text>
                        </Grid>
                    </Grid>
                    <div>
                        {!is_full? 
                        <Button backgroundcolor="#00e676" text="신청하기!"/>:
                        <Button backgroundcolor="#37474f" text="마감되었습니다.."/>}
                    </div>
                </DetailHeader>
                <ContentBox>
                    <Text>{test.studyExplain}</Text>
                </ContentBox>
            </DetailContainer>
        </React.Fragment>
    )
}

const DetailContainer = styled.div`
    max-width: 100%;
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