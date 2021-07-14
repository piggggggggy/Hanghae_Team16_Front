import React from "react";
import { Grid, Text, Button } from "../elements/index";
import SType from "../shared/StudyType";
import styled from "styled-components";

const MainStudyCard = (props) => {

    const studyType = props.studyType;

    const studyCont = props.name;

    const studyEnd = props.endJoinDate;


    return (
        <React.Fragment>
            <hr/>
            <Grid display="flex" align="center" space="space-between" height="40px">
                <Grid width="15%">
                    <Text>{SType(studyType)}</Text>
                </Grid>
                <Grid width="45%">
                    <OverBox>{studyCont}</OverBox>
                </Grid>
                <Grid width="28%">
                    <Text>{studyEnd} 마감!</Text>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

MainStudyCard.defaultProps = {
    studyId: 1,
    name: "리액트스터디 구해용",
    studyType: 3,
    endJoinDate: "2021-07-30"
};

const OverBox = styled.div`
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;


export default MainStudyCard;