import React from "react";
import { Text, Grid, Button } from "../elements";
import { history } from "../redux/configStore";
import styled from "styled-components";
import { actionCreators as userAction } from "../redux/modules/user";
import instance from "../shared/instance";
import { useSelector, useDispatch } from "react-redux";

const MyStudy = (props) => {

    const dispatch = useDispatch();

    const myStudyList = useSelector(state => (state.user.list));
    
    React.useEffect(() => {
        console.log("덛");
        dispatch(userAction.getMyStudy());
        
        
    }, []);
    
    
    console.log(myStudyList);

    return (
        <React.Fragment>
            <Grid>
                <Grid is_flex margin="20px 0">
                    <Text size="24px" weight="bold">My Study</Text>
                    <Button _onClick={()=>{history.push("/study")}} text="더보기"/>
                </Grid>
                <Grid is_flex>
                    <Button color="black" backgroundcolor="none" text="◁"/>
                    <Grid scrollWrap>
                        
                      
                    </Grid>
                    <Button color="black" backgroundcolor="none" text="▶"/>
                </Grid>
                
            </Grid>
        </React.Fragment>
    )
}

export default MyStudy;