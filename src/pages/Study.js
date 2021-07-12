import React from "react";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import StudyList from "../components/StudyList";
import StudyExplain from "../components/StudyExplain";
import StudyModal from "../components/StudyModal";
import { Grid, Button } from "../elements";
import ModalBg from "../components/ModalBg";

const Study = (props) => {


	const [settingModal, setSettingModal] = React.useState(false);
 
	const toggleModalSetting = () => {
	if (settingModal === false) {
		setSettingModal(true);
	}
	if (settingModal === true) {
		setSettingModal(false);
	}
	};

 	return (
		<React.Fragment>
			<button onClick={toggleModalSetting}>ssdfsdf</button>
			{settingModal === true ? <StudyModal />: <div />}
			
           	<Grid display="flex" space="space-between">
				<StudyExplain/>
				<StudyList/>
			</Grid>

		</React.Fragment>
	)  
};



export default Study;