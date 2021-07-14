import React from "react";
import { Text, Grid, Button, ATag } from "../elements";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userAction } from "../redux/modules/user";
import { history } from "../redux/configStore";
import styled from "styled-components";

const MyComment = (props) => {

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(userAction.getMyComment());
        
    },[]);

    const commentList = useSelector(state => (state.user.comment_list));

 

    return (
        <React.Fragment>
            <Grid padding="40px 0 100px 0">
                <Grid is_flex margin="10px 0">
                    <Text size="24px" weight="bold">My Comment</Text>
                </Grid>
                
                <Container>
                    {commentList.map((c, idx) => {
                        return(
                            <Grid key={idx} is_flex padding=" 30px 60px">
                                <Grid margin="20px 0">
                                    <ATag text={c.content} _onClick={()=>{history.push(`/study/${c.studyId}`)}}></ATag>
                                </Grid>
                                <Grid>
                                    <Text>{c.date}</Text>
                                </Grid>
                            </Grid>
                        )
                        
                    })}
                </Container>
            </Grid>
        </React.Fragment>
    )
}

const Container = styled.div`
    width: 80%;
    height: 200px;
    overflow-y: scroll;
    white-space:nowrap;
    display: flex;
    flex-direction: column;
    margin: 60px auto;
    background: #e6e6e6;
`;

export default MyComment;