import React from "react";
import StudyDetailBody from "../components/StudyDetailBody";
import { Grid, Text } from "../elements";
import { useSelector } from "react-redux";

const StudyDetail = (props) => {

	// const study_list = useSelector((state) => state.study.list);
	let idx = parseInt(props.match.params.id);
	// console.log(idx);
	// const detail_study = study_list[idx];


 	return (
		<React.Fragment>
	        <Grid>
				<Grid padding="0 50px" margin="20px 0">
                	<Text size="48px" weight="800">Study</Text>
            	</Grid>
                <StudyDetailBody id={idx}/>
			</Grid>
		</React.Fragment>
	)  
};

// {...detail_study}
export default StudyDetail;