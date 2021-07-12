import React from "react";
import styled from "styled-components";
import StudyList from "../components/StudyList";
import StudyExplain from "../components/StudyExplain";
import StudyModal from "../components/StudyModal";
import { Grid, Button } from "../elements";
import ModalBg from "../components/ModalBg";

const Study = (props) => {


	// const [Modal, setModal] = React.useState(false);
 
	// const toggleModalSetting = () => {
	// if (Modal === false) {
	// 	setModal(true);
	// 	return (
	// 		<StudyModal/>
	// 	)
	// }
	// if (Modal === true) {
	// 	setModal(false);
	// }
	// };

 	return (
		<React.Fragment>
           	<Grid display="flex" space="space-between">
				<StudyExplain/>
				<StudyList/>
			</Grid>

		</React.Fragment>
	)  
};



export default Study;