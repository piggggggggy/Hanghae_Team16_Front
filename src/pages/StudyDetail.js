import React from "react";
import StudyDetailBody from "../components/StudyDetailBody";
import PageHeader from "../components/PageHeader";
import { Grid } from "@material-ui/core";

const StudyDetail = (props) => {

 	return (
		<React.Fragment>
	        <Grid>
			    <PageHeader text="Study"/>
                <StudyDetailBody/>
			</Grid>
		</React.Fragment>
	)  
};


export default StudyDetail;