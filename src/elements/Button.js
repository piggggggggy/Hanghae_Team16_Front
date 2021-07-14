import React from "react";
import styled from "styled-components";


const Button = (props) => {

    const {width, height, backgroundcolor, border, borderradius, _onClick, text, color, size, is_float, margin, weight} = props;

    const styles = {
        width: width,
        height: height,
        backgroundcolor: backgroundcolor,
        border: border,
        borderradius: borderradius,
        color: color,
        size: size,
        margin: margin,
        weight: weight,
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
    font-weight: ${(props) => props.weight};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: .2s ease-in-out 0s;
    &:hover{
        filter: hue-rotate(40deg);
    }
`;

const FloatBtn = styled.button`
    position: relative;
    left: 70%;
    bottom: 10px;
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