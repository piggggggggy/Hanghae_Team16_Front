import React from "react";
import styled from "styled-components";
import { Text, Button, Grid } from "../elements";
import { useSelector, useDispatch } from "react-redux";
import SType from "../shared/StudyType";
import { history } from "../redux/configStore";

const MyStudyCard = (props) => {
  
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


const Card = styled.div`
    display: inline-block;
    width: 40%;
    margin: 20px 20px;
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

export default MyStudyCard;