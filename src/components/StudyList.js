import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreator as studyActions } from "../redux/modules/study";
import moment from "moment";

import styled from "styled-components";
import { Grid, Button } from "../elements";
import StudyCard from "./StudyCard";



const StudyList = (props) => {
    const dispatch = useDispatch();
    const study_list = useSelector((state) => state.study.list);


    const [showToggle, setShow] = useState(false);

    const showAll = () => {
        // dispatch(studyActions.loadStudyDB());
        setShow(false);
    };

    const showNotDead = () => {
        setShow(true);
    };

    return (
        <React.Fragment>
            <Container>
                <Grid width="80%" margin="30px auto 10px auto" is_flex>
                    <Button backgroundcolor="#c0dbef" color="black" width="45%" height="30px" text="전체보기" _onClick={()=>{showAll()}}/>
                    <Button backgroundcolor="#c0dbef" color="black" width="45%" height="30px" text="진행 중인 스터디" _onClick={()=>{showNotDead()}}/>
                </Grid>
                <ListBox>
       
                    {showToggle ? 
                    study_list.map((c,idx) => {
                        let is_full = c.joinNum+1 === c.size;
                        let is_dead = c.endJoinDate < moment().format("YYYY-MM-DD");
                        if(is_full || is_dead){
                            return null;    
                        }else{
                            return(<StudyCard key={idx} {...c}/>);
                        }
                    })
                    : study_list.map((c,idx) => {
                        return(<StudyCard key={idx} {...c}/>)
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
    max-height: 700px;
    overflow-y: auto;
    
    
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
`; 


export default StudyList;