import React from "react";
import styled from "styled-components";


const Button = (props) => {

    const {width,height, backgroundcolor, border, borderradius, _onclick, text, color, size} = props;

    const styles = {
        width: width,
        height: height,
        backgroundcolor: backgroundcolor,
        border: border,
        borderradius: borderradius,
        color: color,
        size: size,
    };

    return (
        <React.Fragment>
            <DfButton {...styles} onclick={_onclick}>{text}</DfButton>
        </React.Fragment>
    );
};

Button.defaultProps = {
    width: '100px',
    height: '40px',
    backgroundcolor: 'lightgray',
    border: 'none',
    borderradius: '5px',
    _onClick: '',
    text: '버튼',
    color: 'white',
    size: '', 
};


const DfButton = styled.button`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${(props) => props.backgroundcolor};
    border: ${(props) => props.border};
    border-radius: ${(props) => props.borderradius};
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
`;

export default Button;