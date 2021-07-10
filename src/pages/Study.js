import React from "react";
import PageHeader from "../components/PageHeader";
import StudyList from "../components/StudyList";
import StudyModal from "../components/StudyModal";



const Study = (props) => {

 	return (
		<React.Fragment>
            <PageHeader text="Study" btntext="모집하기"></PageHeader>
           <StudyList></StudyList>
           <StudyModal></StudyModal>
		</React.Fragment>
	)  
};


export default Study;