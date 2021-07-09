import React from "react";
import styled from "styled-components";

const Text = (props) => {
    
    const {size, weight, color, children, margin} = props;

    const styles = {
        size: size,
        weight: weight,
        color: color,
        margin: margin,
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
}

const ElText = styled.p`
    font-size: ${(props) => props.size};
    font-weight: ${(props) => props.weight};
    color: ${(props) => props.color};
    margin: ${(props) => props.margin};
`;

export default Text;