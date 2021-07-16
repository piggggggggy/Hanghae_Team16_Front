import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Grid, Button, Text, Input } from "../../elements";
import Comment from "./Comment";
import { actionCreator as cmtActions } from "../../redux/modules/comment";
import { actionCreator as studyActions } from "../../redux/modules/study";
import moment from "moment";
import { useReducer } from "react";


const CommentList = (props) => {


    const dispatch = useDispatch();
    const studyId = props.id;

    const commentList = useSelector((state) => state.comment.comments);
    const userId = localStorage.getItem("userId");
    
    console.log(commentList);

    React.useEffect(() => {

        dispatch(cmtActions.loadCmtDB(studyId));
        // if(commentList.length === 0){
        //     dispatch(cmtActions.loadCmtDB());
        // }
        console.log(commentList);
    },[]);


    const [content, setContent] = React.useState('');
    const changeContent = (e) => {
        setContent(e.target.value);
    };


    if (commentList === null){
        return (<div> 기다려... </div>)
    }

    const createCmt = () => {
        let comment = {
            studyId: studyId,
            content: content,
            userId: userId,
            date: moment().format("YYYY.MM.DD hh:mm:ss"),
            // checkTime: moment(),
        };
        console.log(comment)
        dispatch(cmtActions.createCmtDB(comment));
        // dispatch(cmtActions.loadCmtDB(studyId));
        // forceUpdate()
        // component.forceUpdate()
    };

    return (
        <React.Fragment>
            <CommentContainer>
                <CommentHeader><Text>{`Commnets ${commentList.length} 개`}</Text></CommentHeader>

                <Grid>
                    {commentList === null ? '' : commentList.map((c, idx) => {
                        return (
                            <Comment key={idx} {...c}/>
                            // <div>{c.studyCommentId}</div>
                        );
                    })}
                </Grid>
                                
                <CommentBody>
                    <Grid width="100%" padding="0px 0px 0px 1%"><Text size="14px">{"댓글 쓰기"}</Text></Grid>
                    <Grid display="flex" space="center" align="center" width="100%">
                        <Input multiline rows={3} padding="2%" width="90%" height="70px" placeholder="댓글을 작성해주세요!" _onChange={changeContent}/>
                        <Button margin="0px 0px 0px 10px" backgroundcolor="#c0dbef" color="black" height="70px" width="70px" text="등록" _onClick={()=>{createCmt()}}/>
                    </Grid>
                </CommentBody>

            </CommentContainer>
        </React.Fragment>
    )


};


const CommentContainer = styled.div`
    max-width: 100%;
    max-height: 1000px;
    box-sizing: border-box;
    background-color: #f4f4f4;
    margin: 0px auto;
    padding: 10px 5% 30px 5%;
`;
const CommentHeader = styled.div`
    width: 100%;
    height: 40px;
    background-color: #fafafa;
    border: 1px solid #a1a1a1;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding-left: 3%;
    box-sizing: border-box;
    box-shadow: 1px 1px 1px gray;
`;

const CommentBody = styled.div`
    width: 100%;
    height: 120px;
    background-color: #fafafa;
    border: 1px solid #a1a1a1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 0px 2%;
    box-shadow: 1px 1px 1px gray;
    margin-top: 10px;
`;


export default CommentList;