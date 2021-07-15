import React from "react";
import styled from "styled-components";

const Text = (props) => {
    
    const {size, weight, color, children, margin, align, overflow, cursor} = props;

    const styles = {
        size: size,
        weight: weight,
        color: color,
        margin: margin,
        align: align,
        overflow: overflow,
        cursor: cursor,
    }


    return (
        <React.Fragment>
            <ElText {...styles}>{children}</ElText>
        </React.Fragment>
    )
}

Text.defaultProps = {
    size: "16px",
    weight: "normal",
    color: "#000",
    margin: "0",
    overflow: 0,
};

const ElText = styled.p`
    font-size: ${(props) => props.size};
    font-weight: ${(props) => props.weight};
    color: ${(props) => props.color};
    margin: ${(props) => props.margin};
    text-align: ${(props) => props.align};
    ${(props) => (props.overflow? 'text-overflow: ellipsis;': '')};
    cursor: ${(props) => props.cursor};
`;

export default Text;