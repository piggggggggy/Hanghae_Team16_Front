import React from "react";
import styled from "styled-components";
import StudyDetailBody from "../components/StudyDetailBody";
import { Grid, Text } from "../elements";
import { useSelector, useDispatch } from "react-redux";
import CommentList from "../components/comment/CommentList";
import { actionCreator as studyActions } from "../redux/modules/study";
import { actionCreator as commentActions } from "../redux/modules/comment"; 




const StudyDetail = (props) => {
	const dispatch = useDispatch()

	// const study_list = useSelector((state) => state.study.list);
	let idx = parseInt(props.match.params.id);
	// console.log(idx);
	// const detail_study = study_list[idx];
	// const study = useSelector((state) => state.study.sutdy);
	// const comments = useSelector((state) => state.comment.comments);
	
	// React.useEffect(() => {
        
    //     dispatch(studyActions.detailStudyDB(idx));
	// 	dispatch(commentActions.loadCmtDB(idx));
	// }, [idx]);

    // console.log(study);
    // console.log(comments);



 	return (
		<React.Fragment>
	        <Grid>
				<Grid padding="0 10%" margin="20px 0">
                	<Text size="48px" weight="700">Study</Text>
            	</Grid>
				<DetailBox>
					<StudyDetailBody id={idx}/>
					<CommentList id={idx}/>
				</DetailBox>
			</Grid>
		</React.Fragment>
	)  
};

const DetailBox = styled.div`
	width: 70%;
	background-color: #f4f4f4;
	margin: auto;
	border-radius: 20px;
	box-shadow: 5px 5px 5px gray;
`;

// {...detail_study}
export default StudyDetail;