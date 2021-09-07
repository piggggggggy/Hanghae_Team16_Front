import React from "react";
import { history } from "../redux/configStore";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

// components & elements
import { Text, Grid, Button } from "../elements";
import MyStudyCard from "./MyStudyCard";
import MyStudyCardNoData from "./MyStudyCardNoData";

// modules
import { actionCreators as userAction } from "../redux/modules/user";

const MyStudy = () => {

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(userAction.getMyStudy());
        
    },[]);

    const studyList = useSelector(state => (state.user.study_list));

	console.log(studyList);


    if (studyList.length === 0) {
        return (
            <React.Fragment>
                <Grid margin="6% 0">
                    <Grid is_flex margin="20px 0">
                        <Text color="#000333" size="24px" weight="bold">My Study</Text>
                        <Button backgroundcolor="#c0dbef" color="black" _onClick={()=>{history.push("/study")}} text="더보기"/>
                    </Grid>
                    <Grid is_flex>
     
                        <Container>
                            <MyStudyCardNoData></MyStudyCardNoData>
                        </Container>
    
                    </Grid>
                    
                </Grid>
            </React.Fragment>
        );
    }
        return (
            <React.Fragment>
                <Grid margin="6% 0">
                    <Grid is_flex margin="20px 0">
                        <Text color="#000333" size="24px" weight="bold">My Study</Text>
                        <Button backgroundcolor="#c0dbef" color="black" _onClick={()=>{history.push("/study")}} text="더보기"/>
                    </Grid>
                    <Grid is_flex>
     
                        <Container>
                            {studyList.map((c, idx) => {
                                return (
                                    
                                    <MyStudyCard key={idx} {...c}></MyStudyCard>
                                );
                            })}
                          
                        </Container>
    
                    </Grid>
                    
                </Grid>
            </React.Fragment>
        );
    

    
}


const Container = styled.div`
    width: 100vw;
    overflow-x: scroll;
    white-space:nowrap;
    padding: 30px 0;
`;
export default MyStudy;