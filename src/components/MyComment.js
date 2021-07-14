import React from "react";
import { Text, Grid, Button } from "../elements";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userAction } from "../redux/modules/user";
const MyComment = (props) => {

    const study_list = [
        {
            studyTitle: "스터디 제목",
            studyIndex: 11,
            studyStart: "2021-07-10",
            studyDeadline: "2021-07-20",
            studySize: 5,
            joinNum: 2,
            studyExplain: "리린이들 모집합니다.",
            category: "front-end",
            level: 3,
            is_full: false,
        },
        {
            studyTitle: "스터디 제목",
            studyIndex: 11,
            studyStart: "2021-07-10",
            studyDeadline: "2021-07-20",
            studySize: 5,
            joinNum: 2,
            studyExplain: "리린이들 모집합니다.",
            category: "front-end",
            level: 3,
            is_full: false,
        },
        {
            studyTitle: "스터디 제목",
            studyIndex: 11,
            studyStart: "2021-07-10",
            studyDeadline: "2021-07-20",
            studySize: 5,
            joinNum: 2,
            studyExplain: "리린이들 모집합니다.",
            category: "front-end",
            level: 3,
            is_full: false,
        },
        {
            studyTitle: "스터디 제목",
            studyIndex: 11,
            studyStart: "2021-07-10",
            studyDeadline: "2021-07-20",
            studySize: 5,
            joinNum: 2,
            studyExplain: "리린이들 모집합니다.",
            category: "front-end",
            level: 3,
            is_full: false,
        },
    ];

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(userAction.getMyComment());
        
    },[]);

    const commentList = useSelector(state => (state.user.comment_list));

	console.log(commentList);



    return (
        <React.Fragment>
            <Grid>
                <Grid is_flex>
                    <Text size="24px" weight="bold">My Comment</Text>
                    <Button text="더보기"/>
                </Grid>
                
                <Grid>
                    {study_list.map((c, idx) => {
                        return(
                            <Grid is_flex padding="10px 200px">
                                <Text>{c.studyTitle}</Text>
                                <Text>{c.studyStart} 시작!</Text>
                            </Grid>
                        )
                        
                    })}
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default MyComment;