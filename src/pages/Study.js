import React from "react";
import Header from "../shared/Header";
import PageHeader from "../components/PageHeader";
import StudyList from "../components/StudyList";
import { Grid } from "@material-ui/core";

const Study = (props) => {

 	return (
		<React.Fragment>
            <Grid>
                <PageHeader text="Study" btntext="모집하기"/>
                <StudyList/>
            </Grid>
		</React.Fragment>
	)  
};


export default Study;