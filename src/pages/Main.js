import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Grid from "../elements/Grid";
import MainStudyCardList from "../components/MainStudyCardList";

const Main = (props) => {

 	return (
		<React.Fragment>
			<Banner></Banner>
			<Grid display="flex" space="space-around" margin="60px 0">

			<Grid width="500px">
			<MainStudyCardList name="스터디"/>
			</Grid>

			<Grid width="500px">
			<MainStudyCardList name="QnA"/>
			</Grid>

			</Grid>
		</React.Fragment>
	)  
};


export default Main;