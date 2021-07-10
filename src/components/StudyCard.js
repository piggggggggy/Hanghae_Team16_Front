import React from "react";
import styled from "styled-components";
import { Text, Button, Grid } from "../elements";
// import SType from "../shared/StudyType";

const StudyCard = (props) => {

    
    const Type = () => {
        if (props.studyType === 0){
            return ("감시형")
        }else if(props.studyType === 1){
            return ("토이")
        }else if(props.studyType === 2){
            return ("개인")
        }else if(props.studyType === 3){
            return ("독서실")
        }else if(props.studyType === 4){
            return ("알고리즘")
        }

    }

    return (
        <React.Fragment>
            <Grid width="100%" margin="16px" bg="lightgray">
                <Grid is_flex padding="10px">
                    <Text>LEVEL : {props.level}</Text>
                    <Text>{props.endJoinDate} 마감</Text>
                </Grid>
                <Grid padding="0px 40px">
                    <Text weight="800" size="24px">{props.name}</Text>
                    <Text>{props.startDate} 시작</Text>
                    <Text>{props.explain}</Text>
                    <Text>인원 : {props.joinNum + 1} / {props.size}</Text>
                    <Text>Type : {Type()}</Text>
                </Grid>
                <Grid>
                    <Button is_float backgroundcolor="gray" text="자세히 보기"/>
                </Grid>
            </Grid>
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



export default StudyCard;