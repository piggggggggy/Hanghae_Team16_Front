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
            <Card style={{backgroundColor: is_full ?  "#888888" : "white" }}>
                <OverText style={{backgroundColor: is_full ?  "#555" : "#c0dbef" }}></OverText>
                <Grid is_flex padding="20px" width="90%" margin="auto">
                    <Text size="17px">LEVEL : {props.level}</Text>
                    <Text size="17px">{props.endJoinDate} &nbsp; 마감</Text>
                </Grid>
                <Grid padding="10px 40px">
                    <Text color="#000e47" weight="800" size="26px">{props.name}</Text>
                    <Grid margin="15px 2px">
                    <Text size="17px">{props.startDate} &nbsp; 시작 !</Text>
                    </Grid>
                    <Grid margin="20px 0 15px">
                    <Text weight="bold" size="18px">{props.explain}</Text>
                    </Grid>
                    <Grid margin="10px 0">
                    <Text size="17px">인원 : {props.joinNum + 1} / {props.size}</Text>
                    </Grid>
                    <Grid margin="10px 0">
                    <Text size="17px">스터디 방식 : {SType(props.studyType)}</Text>
                    </Grid>
                </Grid>

                <Grid padding="20px" float="right">
                    <DetailBtn onClick={()=>{history.push(`/study/${study_id}`)}}><Text color="black">{"자세히 보기"}</Text></DetailBtn>
                </Grid>
                
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
    border-radius: 3px 3px 3px 30px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    white-space: normal;
`;

const OverText = styled.div`
    position: relaative;
    top: 50%;
    left: 50%;
    background-color: #3e75e8;
    width: 100%;
    height: 35px;
    border-radius: 3px 3px 0px 0px;
`;

const DetailBtn = styled.button`
    cursor: pointer;
    width: 150px;
    height: 60px;
    background-color: #eeeeee;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        box-shadow: 2px 2px 2px gray;
    }

`;

export default MyStudyCard;