import React from "react";
import PageHeader from "../components/PageHeader";
import StudyList from "../components/StudyList";
import StudyModal from "../components/StudyModal";
import { Button } from "../elements";
import styled from "styled-components";
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
            <PageHeader text="Study" btntext="모집하기"></PageHeader>
			<Button text="모집하기"></Button>
			<button onClick={toggleModalSetting}>ssdfsdf</button>
			{settingModal === true ? <StudyModal />: <div />}
			
           <StudyList></StudyList>

		</React.Fragment>
	)  
};



export default Study;