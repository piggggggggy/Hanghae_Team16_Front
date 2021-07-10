import React from "react";
import styled from "styled-components";

const ModalBg = (props) => {



    return (
        
        <React.Fragment>
            <Elbg>

            </Elbg>
        </React.Fragment>
    );
}

const Elbg = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background: green;
    top: 0;
    left: 0;
    z-index: 5;
`;



export default ModalBg;