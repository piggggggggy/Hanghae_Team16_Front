import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

// components & elements
import { Grid, Text } from "../../elements";

// modules
import { actionCreator as cmtActions } from "../../redux/modules/comment";


const Comment = (props) => {

    const dispatch = useDispatch();

    const userId = localStorage.getItem("userId");
    const nickname = localStorage.getItem("nickname");
    const studyCommentId = props.studyCommentId;


    // 댓글삭제
    const deleteCmt = () => {
        if (window.confirm("삭제하시겠어요?")) {
            if (userId == props.userId){
                dispatch(cmtActions.deleteCmtDB(studyCommentId))
            }else{
                window.alert("귀하의 댓글이 아닙니다.")
            }
        }
    };


    return (
        <React.Fragment>
            <Grid>
                <CommentContainer>
                    <Grid is_flex>
                        <Grid display="flex" align="center">
                            <Text weight="600" margin="0px 25px 0px 0px">{nickname}</Text>
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
