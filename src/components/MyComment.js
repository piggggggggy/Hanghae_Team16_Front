import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configStore";
import styled from "styled-components";

// components & elemnets
import { Text, Grid, Button, ATag } from "../elements";

// modules
import { actionCreators as userAction } from "../redux/modules/user";

const MyComment = (props) => {

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(userAction.getMyComment());
        
    },[]);

    const commentList = useSelector(state => (state.user.comment_list));


    if (commentList.length === 0) {
        return (
        <React.Fragment>
            <Grid padding="40px 0 100px 0">
                <Grid is_flex margin="10px 0">
                    <Text color="#000333" size="24px" weight="bold">My Comment</Text>
                </Grid>
                
                <Container>

                    <Grid is_flex padding=" 30px 60px">
                        <Grid margin="20px 0">
                            <ATag size="18px" text={"아직 작성한 댓글이 없습니다!"}></ATag>
                        </Grid>
                    </Grid>

                </Container>
            </Grid>
        </React.Fragment>
    );
    }

    return (
        <React.Fragment>
            <Grid padding="40px 0 100px 0">
                <Grid is_flex margin="10px 0">
                    <Text color="#000333" size="24px" weight="bold">My Comment</Text>
                </Grid>
                
                <Container>
                    {commentList.map((c, idx) => {
                        return(
                            <Grid key={idx} is_flex padding=" 30px 60px">
                                <Grid margin="20px 0">
                                    <ATag size="18px" text={c.content} _onClick={()=>{history.push(`/study/${c.studyId}`)}}></ATag>
                                </Grid>
                                <Grid>
                                    <Text size="17px">{c.date}</Text>
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
    background: #fafafa;
`;

export default MyComment;