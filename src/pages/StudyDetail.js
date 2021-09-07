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
	const {history} = props;

	let studyId = parseInt(props.match.params.id);

	React.useEffect(() => {
		dispatch(studyActions.detailStudyDB(studyId));
		dispatch(commentActions.loadCmtDB(studyId));
	}, []);


 	return (
		<React.Fragment>
	        <Grid>
				<Grid _onClick={()=>{history.push("/study")}} padding="0 15%" margin="20px 0">
                	<Text size="48px" weight="700">Study</Text>
            	</Grid>
				<DetailBox>
					<StudyDetailBody id={studyId}/>
					<CommentList id={studyId}/>
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