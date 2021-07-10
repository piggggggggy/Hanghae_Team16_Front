import React from "react";
import styled from "styled-components";
import Header from "../shared/Header";
import PageHeader from "../components/PageHeader";
import StudyList from "../components/StudyList";
import { Grid } from "@material-ui/core";
import StudyExplain from "../components/StudyExplain";

const Study = (props) => {

 	return (
		<React.Fragment>
            <StudyContainer>
                <StudyExplain/>
                <StudyList/>
            </StudyContainer>
		</React.Fragment>
	)  
};

const StudyContainer = styled.div`
    display: flex;
    justify-content: space-around;
    max-width: 100%;
`;


export default Study;