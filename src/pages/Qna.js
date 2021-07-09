import React from "react";
import QnaCard from "../components/QnaCard";
import Grid from "../elements/Grid";

const Qna = (props) => {

 	return (
		<React.Fragment>
			<div>헤더</div>
			<Grid margin="40px 0">
				<QnaCard></QnaCard>
			</Grid>
			<Grid margin="40px 0">
				<QnaCard></QnaCard>
			</Grid>
			<Grid margin="40px 0">
				<QnaCard></QnaCard>
			</Grid>
		</React.Fragment>
	)  
};


export default Qna;