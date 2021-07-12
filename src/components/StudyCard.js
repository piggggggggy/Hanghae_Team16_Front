import React from "react";
import styled from "styled-components";
import { Text, Button, Grid } from "../elements";
import { useSelector, useDispatch } from "react-redux";
import SType from "../shared/StudyType";

const StudyCard = (props) => {
    const {history} = props;

    return (
        <React.Fragment>
            <Card>
                <Grid is_flex padding="10px">
                    <Text>LEVEL : {props.level}</Text>
                    <Text>{props.endJoinDate} 마감</Text>
                </Grid>
                <Grid padding="0px 40px">
                    <Text weight="800" size="24px">{props.name}</Text>
                    <Text>{props.startDate} 시작</Text>
                    <Text>{props.explain}</Text>
                    <Text>인원 : {props.joinNum + 1} / {props.size}</Text>
                    <Text>스터디 방식 : {SType(props.studyType)}</Text>
                </Grid>
                <Button _onClick={()=>{history.push('/study/:id')}} is_float backgroundcolor="gray" text="자세히 보기"/>
            </Card>
        </React.Fragment>
    );
};
//// 가득 찼을 때  마감표시하기


StudyCard.defaultProps = {
    _id: "abc",
    studyId: 1,
    name: "스터디 구해용",
    schedule: "2021-07-30 ~ 2021-10-23",
    startDate: "2021-07-21",
    endJoinDate: "2021-07-30",
    writeDate: "2021-07-20 오후 18:31:22",
    size: 5,
    explain: "초보도 가능합니다.",
    joinLater: false,
    userId: 5,
    level: 2,
    studyType: 1,
    joinNum: 0,
    __v: 0,
};

const Card = styled.div`
    max-width: 90%;
    margin: 20px auto;
    background-color: lightgray;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 5px 5px 5px gray;
`;

export default StudyCard;