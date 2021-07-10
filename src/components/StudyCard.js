import React from "react";
import styled from "styled-components";
import { Text, Button, Grid } from "../elements";

const StudyCard = (props) => {

    

    return (
        <React.Fragment>
            <Grid width="100%" margin="16px" bg="lightgray">
                <Grid is_flex padding="10px">
                    <Text>LEVEL : {props.level}</Text>
                    <Text>{props.studyDeadline} 마감</Text>
                </Grid>
                <Grid padding="0px 40px">
                    <Text weight="800" size="24px">{props.studyTitle}</Text>
                    <Text>{props.studyStart} 시작</Text>
                    <Text>{props.studyExplain}</Text>
                    <Text>인원 : {props.joinNum} / {props.studySize}</Text>
                    <Text>카테고리 : {props.category}</Text>
                </Grid>
                <Grid>
                    <Button is_float backgroundcolor="gray" text="자세히 보기"/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

StudyCard.defaultProps = {
    studyTitle: "스터디 제목",
    studyIndex: 11,
    studyStart: "2021-07-10",
    studyDeadline: "2021-07-20",
    studySize: 5,
    joinNum: 2,
    studyExplain: "리린이들 모집합니다.",
    category: "front-end",
    level: 3,
    is_full: false,
};



export default StudyCard;