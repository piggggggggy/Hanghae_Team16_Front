import React from "react";
import styled from "styled-components";

const ATag = (props) => {
    
    const {size, weight, color, margin, align, overflow, text, _onClick} = props;

    const styles = {
        size: size,
        weight: weight,
        color: color,
        margin: margin,
        align: align,
        overflow: overflow,
    }


    return (
        <React.Fragment>
            <ElText {...styles} onClick={_onClick}>{text}</ElText>
        </React.Fragment>
    )
}

Text.defaultProps = {
    size: "16px",
    weight: "normal",
    color: "#000",
    margin: "0",
    overflow: 0,
    _onClick: () => {}
};

const ElText = styled.a`
    font-size: ${(props) => props.size};
    font-weight: ${(props) => props.weight};
    color: ${(props) => props.color};
    margin: ${(props) => props.margin};
    text-align: ${(props) => props.align};
    ${(props) => (props.overflow? 'text-overflow: ellipsis;': '')};
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
    
`;

export default ATag;