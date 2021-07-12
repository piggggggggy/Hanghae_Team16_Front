import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Grid, Button } from "../elements";
import StudyCard from "./StudyCard";


const StudyList = (props) => {

    const study_list = useSelector((state) => state.study.list);

    return (
        <React.Fragment>
            <Container>
                <Grid width="80%" margin="20px auto" is_flex>
                    <Button backgroundcolor="gray" width="45%" height="30px" text="전체보기"/>
                    <Button backgroundcolor="gray" width="45%" height="30px" text="진행 중인 스터디"/>
                </Grid>
                <ListBox>
                    {study_list.map((c,idx) => {
                        return(
                            <StudyCard key={idx} {...c}/>
                        )
                    })}
                </ListBox>
            </Container>
        </React.Fragment>
    )
};

const Container = styled.div`
    max-width: 600px;
    width: 600px;
`;
const ListBox = styled.div`
    max-width: 600px;
`; 


export default StudyList;