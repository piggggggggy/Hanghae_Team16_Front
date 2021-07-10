import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../elements";


const StudyModal = (props) => {

    
    const {display} = props;

    const styles = {
        display: display,
    }

    return (

        <React.Fragment>
            <Grid>
            <ModalBox {...styles}>
                <Text>제목입니다</Text>
            </ModalBox>
            </Grid>
        </React.Fragment>
    );
}

StudyModal.defaultProps = {
    display: "none",
};

const ModalBox = styled.div`
    width: 60%;
    height: 70%;
    background: red;
    top: 15%;
    left: 50%;
    margin-left: -30%;
    position: fixed;
    display: none;
`;

export default StudyModal;