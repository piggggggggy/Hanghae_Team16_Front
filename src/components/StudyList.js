import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreator as studyActions } from "../redux/modules/study";

import styled from "styled-components";
import { Grid, Button } from "../elements";
import StudyCard from "./StudyCard";



const StudyList = (props) => {
    const dispatch = useDispatch();
    const study_list = useSelector((state) => state.study.list);



    React.useEffect(() => {

        // dispatch(studyActions.loadStudyDB());
        if(study_list.length === 0){
            dispatch(studyActions.loadStudyDB());
        }
    },[]);



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
    max-height: 1000px;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
`; 


export default StudyList;