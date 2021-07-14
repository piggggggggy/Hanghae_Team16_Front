import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Grid, Button, Text, Input } from "../../elements";
import Comment from "./Comment";
import { actionCreator as cmtActions } from "../../redux/modules/comment";
import { actionCreator as studyActions } from "../../redux/modules/study";


const CommentList = (props) => {


    const dispatch = useDispatch();
    const studyId = props.id;
    
    const commentList = useSelector((state) => state.comment.comments);
    const userId = useSelector((state) => state.user.user.userId);
    console.log(commentList);

    const [content, setContent] = React.useState('');
    const changeContent = (e) => {
        setContent(e.target.value);
    };



    const createCmt = () => {

        let comment = {
            studyId: studyId,
            content: content,
            userId: userId,
        };
        console.log(comment)
        dispatch(cmtActions.createCmtDB(comment));
    };


    return (
        <React.Fragment>
            <CommentContainer>
                <Grid><Text>{`Commnets ${commentList.length} 개`}</Text></Grid>

                <Grid>
                    {commentList.map((c, idx) => {
                        return (
                            <Comment key={c.studyCommnetId} {...c}/>
                        );
                    })};
                </Grid>
                                
                <Grid>
                    <Grid><Text>{"댓글 쓰기"}</Text></Grid>
                    <Grid display="flex" space="center" height="90%" width="70%">
                        <Input multiline rows={3} width="80%" placeholder="댓글쓰기 권한이 없습니다. 로그인하시겠습니까?" _onChange={changeContent}/>
                        <Button width="50px" text="등록" _onClick={()=>{createCmt()}}/>
                    </Grid>
                </Grid>
            </CommentContainer>
        </React.Fragment>
    )


};


const CommentContainer = styled.div`
    max-width: 80%;
    max-height: 1000px;
    box-sizing: border-box;
    background-color: lightgray;
    margin: 0px auto;
    padding: 30px 5%;
`;



export default CommentList;