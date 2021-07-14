import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Grid, Button, Text, Input } from "../../elements";
import moment from "moment";
import { styles } from "ansi-colors";
import { actionCreator as cmtActions } from "../../redux/modules/comment";
import { history } from "../../redux/configStore";


const Comment = (props) => {
    const dispatch = useDispatch();
    const studyCommentId = props.studyCommentId;

    // const time = props.checkTime.format("YYYY.MM.DD  hh:mm");
    // const now = moment();
    // console.log(time);
    // console.log(now);

    const deleteCmt = () => {
        dispatch(cmtActions.deleteCmtDB(studyCommentId));
    };


    return (
        <React.Fragment>
            <Grid>
                <CommentContainer>
                    <Grid is_flex>
                        <Grid display="flex" align="center">
                            <Text weight="600" margin="0px 25px 0px 0px">{props.userId}</Text>
                            <Text color="#6d6d6d">{props.date}</Text>
                        </Grid>
                        <Button _onClick={()=>{deleteCmt()}} text="X"/>
                    </Grid>
                    <Grid>
                        <Text>{props.content}</Text>
                    </Grid>
                </CommentContainer>
                
                <hr/>
            </Grid>
        </React.Fragment>
    );
};

const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 70px;
    padding: 0px 3%;
`;


export default Comment;
