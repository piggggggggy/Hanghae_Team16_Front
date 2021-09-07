import React from "react";
import styled from "styled-components";
import { history } from "../redux/configStore";

// components & elements
import { Text, Button, Grid } from "../elements";

// 스터디type 함수
import SType from "../shared/StudyType";

// moments
import moment from "moment";

const StudyCard = (props) => {
    const study_id = props.studyId
    

    const is_full = props.joinNum + 1 === props.size
    const is_dead = props.endJoinDate < moment().format("YYYY-MM-DD");
    
    return (
        <React.Fragment>
            
            <Card>
                <Grid is_flex padding="10px 5%" width="90%" margin="auto">
                    <Text>LEVEL : {props.level}</Text>
                    {is_full || is_dead ?  <Grid display="flex" space="center" align="center" radius="10px" width="40%" height="20px" bg="red"><Text bold color="#ffffff" size="20px">마감되었어요..</Text></Grid> : <></> }
                    <Text>{props.endJoinDate} 마감</Text>
                </Grid>
                <Grid padding="0px 10%">
                    <Text weight="800" size="24px" >{props.name}</Text>
                    <Text>{props.explain}</Text>
                    <Text margin="20px 0px 0px">인원 : {props.joinNum + 1} / {props.size}</Text>
                    <Text>스터디 방식 : {SType(props.studyType)}</Text>
                </Grid>
                <DetailBtn onClick={()=>{history.push(`/study/${study_id}`)}}><Text>자세히 보기</Text></DetailBtn>
            </Card>

            
        </React.Fragment>
    );
};
//// 가득 찼을 때  마감표시하기



const Card = styled.div`
    max-width: 90%;
    margin: 20px auto;
    background-color: #f4f4f4;
    border: 15px solid #c0dbef;
    box-sizing: border-box;
    
    
    border-radius: 15px;
    box-shadow: 5px 5px 5px gray;

    &:hover {
        box-shadow: 8px 8px 8px gray;
    }
`;

const OverText = styled.div`
   
    


`;

const DetailBtn = styled.button`
    cursor: pointer;
    width: 150px;
    height: 60px;
    background-color: #eeeeee;
    position: relative;
    left: 60%;
    bottom: 20px;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        box-shadow: 2px 2px 2px gray;
    }

`;

const Cover = styled.div`
    position:relative;
    top: 0px;
    left: 0px;
    display: block;
    background-color:rgba(0, 0, 0, 0.8);
    z-index: 100;
    margin: 20px auto;  
`;

export default StudyCard;