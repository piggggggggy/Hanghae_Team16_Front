import React from "react";
import styled from "styled-components";
import { Text, Grid, Button } from "../elements";
import { useState } from "react-redux";
import StudyModal from "./StudyModal";
import { history } from "../redux/configStore";

const StudyExplain = (props) => {


 
	const [Modal, setModal] = React.useState(false);
 
	const ModalOpen = () => {
        setModal(true);
    };
    
    const ModalClose = () => {
        setModal(false);
    }

    
    return (
        <React.Fragment>
            <ExplainBox>
                <StudyModal Open={Modal} Close={ModalClose}/>
                <Grid margin="30px 0px">
                    <Text size="48px" weight="700">Study</Text>
                </Grid>
                <Grid margin="100px 20px">
                    <Text size="32px" weight="600">스터디를 모집할 수 있는 공간입니다.</Text>
                </Grid>
                <Grid margin="100px 20px">
                    <Text>
                        스터디를 열심히 하자
                        스터디를 열심히 하자
                        스터디를 열심히 하자
                        스터디를 열심히 하자
                        스터디를 열심히 하자
                        스터디를 열심히 하자
                        스터디를 열심히 하자
                        스터디를 열심히 하자
                        스터디를 열심히 하자
                        스터디를 열심히 하자
                        스터디를 열심히 하자
                        스터디를 열심히 하자
                        스터디를 열심히 하자
                        스터디를 열심히 하자
                        스터디를 열심히 하자
                        스터디를 열심히 하자
                        
                    </Text>
                </Grid>
                <Grid width="80%" margin="auto" is_flex>
                    <Button backgroundcolor="gray" width="45%" text="모집하기" _onClick={()=>{ModalOpen()}}/>
                    <Button backgroundcolor="gray" width="45%" text="내 스터디" _onClick={()=>{history.push('/mypage')}}/>
                </Grid>
            </ExplainBox>
        </React.Fragment>
    )


};

const ExplainBox = styled.div`
    max-width: 600px
`;

export default StudyExplain;