import React from "react";
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
				<Grid padding="0 50px" margin="20px 0">
                	<Text size="48px" weight="800">Study</Text>
            	</Grid>
                <StudyDetailBody id={idx}/>

				<CommentList id={idx}/>
			</Grid>
		</React.Fragment>
	)  
};

// {...detail_study}
export default StudyDetail;