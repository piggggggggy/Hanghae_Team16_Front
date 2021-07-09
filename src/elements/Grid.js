import React from "react";
import styled from "styled-components";


const Grid = (props) => {

    const {is_flex, width, margin, padding, bg, children, height, space, align, wrap, scrollWrap} = props;
    const styles = {
		is_flex: is_flex,
		width: width,
		margin: margin,
		padding: padding,
		bg: bg,
        height: height,
        space: space,
        align: align,
        wrap: wrap,
        scrollWrap: scrollWrap,
	};

    return (
        <React.Fragment>
            <GridBox {...styles}>
				{children}
			</GridBox>
        </React.Fragment>
    );
};

Grid.defaultProps = {
    children: null,
    is_flex: false,
    width: "100%",
    height: false,
    padding: false,
    margin: false,
    bg: false,
    space: false,
    align: false,
    wrap: false,
    scrollWrap: false,
};

const GridBox = styled.div`
    width: ${(props) => props.width};
    height: 100%;
    ${(props) => (props.height? `padding: ${props.height}`: '' )};
    box-sizing: border-box;
    ${(props) => (props.padding? `padding: ${props.padding}`: '' )};
    ${(props) => (props.margin? `margin: ${props.margin}`: '' )};
    ${(props) => (props.bg? `background-color: ${props.bg}`: '' )};
    ${(props) => (props.is_flex? 'display: flex; justify-content: space-between; align-items: center;' : '')};
    ${(props) => (props.space? `justify-content; ${props.space}`: '' )};
    ${(props) => (props.align? `align-items; ${props.align}`: '' )};
    ${(props) => (props.wrap? 'display: flex; flex-wrap: wrap;' : '')};
    ${(props) => (props.scrollWrap? 'display: flex; white-space: nowrap; overflow-x: scroll;': '')};
`;



export default Grid;