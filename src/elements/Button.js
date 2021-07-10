import React from "react";
import styled from "styled-components";


const Button = (props) => {

    const {width, height, backgroundcolor, border, borderradius, _onclick, text, color, size, is_float, margin, _onClick} = props;

    const styles = {
        width: width,
        height: height,
        backgroundcolor: backgroundcolor,
        border: border,
        borderradius: borderradius,
        color: color,
        size: size,
        margin, margin,
    };
    if(is_float){
        return(
            <React.Fragment>
                <FloatBtn {...styles} onClick={_onClick}>{text}</FloatBtn>
            </React.Fragment>
        )
    }else{
        return (
            <React.Fragment>
                <DfButton {...styles} onClick={_onClick}>{text}</DfButton>
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
    _onClick: () => {},
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
    margin: ${(props) => props.margin};
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
`;

export default Button;