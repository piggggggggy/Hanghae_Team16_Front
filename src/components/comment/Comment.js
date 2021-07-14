import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Grid, Button, Text, Input } from "../../elements";
import moment from "moment";
import { styles } from "ansi-colors";
import { actionCreator as cmtActions } from "../../redux/modules/comment";
import { history } from "../../redux/configStore";


const Comment = (props) => {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.user.user.userId);
    const studyCommentId = props.studyCommentId;
    console.log(props.userId)

    // const time = props.checkTime.format("YYYY.MM.DD  hh:mm");
    // const now = moment();
    // console.log(time);
    // console.log(now);

    
    // console.log("userId :"+userId);
    // console.log("study :"+props.userId);

    const deleteCmt = () => {
        if (userId == props.userId){
            dispatch(cmtActions.deleteCmtDB(studyCommentId))
        }else{
            window.alert("귀하의 댓글이 아닙니다.")
        }
        
    };
    console.log(props)


    return (
        <React.Fragment>
            <Grid>
                <CommentContainer>
                    <Grid is_flex>
                        <Grid display="flex" align="center">
                            <Text weight="600" margin="0px 25px 0px 0px">{props.nickname}</Text>
                            <Text color="#6d6d6d">{props.date}</Text>
                        </Grid>
                        <NotButtonButton onClick={()=>{deleteCmt()}}>
                            <Text size="16px">{"X"}</Text>
                        </NotButtonButton>
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
const NotButtonButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    padding-top: 20px;
`;


export default Comment;
