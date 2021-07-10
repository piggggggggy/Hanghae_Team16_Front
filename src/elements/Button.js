import React from "react";
import styled from "styled-components";


const Button = (props) => {

    const {width, height, backgroundcolor, border, borderradius, _onclick, text, color, size, is_float} = props;

    const styles = {
        width: width,
        height: height,
        backgroundcolor: backgroundcolor,
        border: border,
        borderradius: borderradius,
        color: color,
        size: size,
    };
    if(is_float){
        return(
            <React.Fragment>
                <FloatBtn {...styles} onclick={_onclick}>{text}</FloatBtn>
            </React.Fragment>
        )
    }else{
        return (
            <React.Fragment>
                <DfButton {...styles} onclick={_onclick}>{text}</DfButton>
            </React.Fragment>
        );
    }
    
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
    is_float: false,
};


const DfButton = styled.button`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${(props) => props.backgroundcolor};
    border: ${(props) => props.border};
    border-radius: ${(props) => props.borderradius};
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
    cursor: pointer;
`;

const FloatBtn = styled.button`
    position: relative;
    left: 70%;
    margin-bottom: 10px;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${(props) => props.backgroundcolor};
    border: ${(props) => props.border};
    border-radius: ${(props) => props.borderradius};
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
    cursor: pointer;
`;

export default Button;