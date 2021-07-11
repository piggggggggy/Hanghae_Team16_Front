import React from "react";
import StudyDetailBody from "../components/StudyDetailBody";
import PageHeader from "../components/PageHeader";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

const StudyDetail = (props) => {

	const study_list = useSelector((state) => state.study.list);

	let idx = parseInt(props.match.params.id);
	console.log(idx);
	const detail_study = study_list[idx];


 	return (
		<React.Fragment>
	        <Grid>
			    <PageHeader text="Study"/>
                <StudyDetailBody {...detail_study}/>
			</Grid>
		</React.Fragment>
	)  
};


export default StudyDetail;