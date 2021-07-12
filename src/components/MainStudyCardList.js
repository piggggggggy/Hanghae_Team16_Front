import React from "react";
import styled from "styled-components";
import { Grid, Button, Text } from "../elements/index";
import MainStudyCard from "./MainStudyCard";
import { history } from "../redux/configStore";


const MainStudyCardList = (props) => {

    // const {history} = props;

    const mainList = [
        {
        studyId: 1,
        name: "리액트스터디 구해용",
        studyType: 3,
        endJoinDate: "2021-07-30"
        },
        {
        studyId: 1,
        name: "리액트스터디 구해용",
        studyType: 1,
        endJoinDate: "2021-07-30"
        },
        {
        studyId: 1,
        name: "리액트스터디 구해용",
        studyType: 2,
        endJoinDate: "2021-07-30"
        },
        {
        studyId: 1,
        name: "리액트스터디 구해용",
        studyType: 4,
        endJoinDate: "2021-07-30"
        },
        {
        studyId: 1,
        name: "리액트스터디 구해용sssssssssssssssssssssssssssss",
        studyType: 2,
        endJoinDate: "2021-07-30"
        }         
    ];

    return (
        <React.Fragment>
            <CardContainer>
                <Grid is_flex>
                    <Text size="24px">{props.name}</Text>
                    <Button _onClick={() => {history.push('/study')}} text="더보기"/>
                </Grid>           

                {mainList.map((s, idx) => {
                    return (
                        <MainStudyCard key={idx} {...s}/>
                    )
                })} 

            </CardContainer>
        </React.Fragment>
    );
};


const CardContainer = styled.div`
    width: 500px;
    height: 370px;
    border: 1px solid black;
    padding: 20px;
    box-sizing: border-box;
`;



export default MainStudyCardList;
