import React from "react";
import styled from "styled-components";
import { Text, Button, Grid } from "../elements";
import { useSelector, useDispatch } from "react-redux";
import SType from "../shared/StudyType";
import { history } from "../redux/configStore";

const StudyCard = (props) => {
    // const {history} = props;
    const study_id = props.studyId

    const is_full = props.joinNum + 1 === props.size
    
    return (
        <React.Fragment>
            <Card style={{backgroundColor: is_full ?  "gray" : "lightgray" }}>
                <OverText></OverText>
                <Grid is_flex padding="10px" width="90%" margin="auto">
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
                <Button _onClick={()=>{history.push(`/study/${study_id}`)}} is_float backgroundcolor="gray" text="자세히 보기"/>
            </Card>
        </React.Fragment>
    );
};
//// 가득 찼을 때  마감표시하기


StudyCard.defaultProps = {
    // _id: "abc",
    // studyId: 1,
    // name: "스터디 구해용",
    // schedule: "2021-07-30 ~ 2021-10-23",
    // startDate: "2021-07-21",
    // endJoinDate: "2021-07-30",
    // writeDate: "2021-07-20 오후 18:31:22",
    // size: 5,
    // explain: "초보도 가능합니다.",
    // joinLater: false,
    // userId: 5,
    // level: 2,
    // studyType: 1,
    // joinNum: 3,
    // __v: 0,
};

const Card = styled.div`
    max-width: 90%;
    margin: 20px auto;
    background-color: lightgray;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 5px 5px 5px gray;
`;

const OverText = styled.div`
    position: relaative;
    top: 50%;
    left: 50%;
    background-color: red;
    width: 30px;
    height: 30px;


`;

export default StudyCard;