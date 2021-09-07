import React from "react";
import styled from "styled-components";

// components & elements
import { Text, Button, Grid } from "../elements";


const MyStudyCardNoData = (props) => {

    return (
        <React.Fragment>
            <Card>
                <OverText></OverText>
                <Grid is_flex padding="20px" width="90%" margin="auto">
                    
                </Grid>
                <Grid padding="10px 40px">
                    <Text color="#000e47" weight="800" size="26px">아직 모집한 스터디가 없습니다!</Text>
                    <Grid margin="15px 2px">
                    <Text size="17px"></Text>
                    </Grid>
                    <Grid margin="20px 0 15px" padding="0 0 30px 0">
                    <Text weight="bold" size="18px">함께 성장해갈 팀원들을 구해보세요.</Text>
                    </Grid>
                </Grid>         
            </Card>
        </React.Fragment>
    );
};


const Card = styled.div`
    display: inline-block;
    width: 40%;
    margin: 20px 20px;
    background-color: white;
    box-sizing: border-box;
    border-radius: 3px 3px 3px 30px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
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



export default MyStudyCardNoData;