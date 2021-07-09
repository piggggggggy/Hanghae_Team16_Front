import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import CardMt from "../elements/CardMt";
import CardMt2 from "../elements/CardMt2";
import Grid from "../elements/Grid";

const Main = (props) => {

 	return (
		<React.Fragment>
			<Banner></Banner>
			<Grid is_flex align="start" margin="60px 0">

			<Grid width="500px">
			<CardMt></CardMt>
			</Grid>

			<Grid width="500px">
			<CardMt2></CardMt2>
			</Grid>

			</Grid>
		</React.Fragment>
	)  
};


export default Main;