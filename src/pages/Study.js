import React from "react";
import styled from "styled-components";
import StudyList from "../components/StudyList";
import StudyExplain from "../components/StudyExplain";
import StudyModal from "../components/StudyModal";
import { Grid, Button } from "../elements";
import { useDispatch } from "react-redux";

// modules
import { actionCreator as studyActions } from "../redux/modules/study"; 

const Study = (props) => {

	const dispatch = useDispatch();

	// 스터디 목록 불러오기
	React.useEffect(() => {
		dispatch(studyActions.loadStudyDB());
	},[]);



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