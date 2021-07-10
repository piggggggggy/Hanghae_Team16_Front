import React from "react";
import styled from "styled-components";
import { Text, Grid, Button } from "../elements";

const StudyExplain = (props) => {


    
    return (
        <React.Fragment>
            <Grid width="40%" float="left">
                <Text size="48px" weight="700">Study</Text>
                <Grid>
                    <Text size="32px" weight="600">스터디를 모집할 수 있는 공간입니다.</Text>
                    <Text>
                        스터디를 열심히 하자
                        스터디를 열심히 하자
                        스터디를 열심히 하자
                        스터디를 열심히 하자
                    </Text>
                </Grid>
                <Grid is_flex>
                    <Button text="모집하기"/>
                    <Button text="내 스터디"/>
                </Grid>
            </Grid>
        </React.Fragment>
    )


};


export default StudyExplain;