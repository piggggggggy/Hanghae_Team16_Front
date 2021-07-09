import React from "react";
import styled from "styled-components";

const Input = (props) => {
    const {width, height, margin, padding, placeholder, type} = props;

    const styles = {
        width: width,
        height: height,
        margin: margin,
        padding: padding,
        placeholder: placeholder,
        type: type,
    }
    return (
        <React.Fragment>
            <ElInput {...styles} type={type} placeholder={placeholder}></ElInput>
        </React.Fragment>
    )
}


Input.defaultProps = {
    width: "200px",
    height: "50px",
    margin: "0",
    padding: "12px 4px",
    placeholder: "텍스트를 입력해주세요.",
    type: "text",
}

const ElInput = styled.input`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    placeholder: ${(props) => props.placeholder};
    border: 1px solid black;
    box-sizing: border-box;
`;

export default Input;