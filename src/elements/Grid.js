import React from "react";
import styled from "styled-components";


const Grid = (props) => {

    const {is_flex, _onClick, width, margin, padding, bg, children, height, space, align, wrap, scrollWrap, textalign, display, float, direction, hidden, border, radius, shadow } = props;
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
        textalign: textalign,
        display: display,
        float: float,
        direction: direction,
        hidden: hidden,
        border: border,
        radius: radius,
        shadow: shadow,
	};

    return (
        <React.Fragment>
            <GridBox onClick={_onClick} {...styles}>
				{children}
			</GridBox>
        </React.Fragment>
    );
};

Grid.defaultProps = {
    children: null,
    is_flex: false,
    width: '',
    height: '',
    padding: "0px",
    margin: "0px",
    bg: '',
    space: false,
    align: false,
    wrap: 0 ,
    scrollWrap: false,
    shadow: false,
};

const GridBox = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    ${(props) => (props.height? `padding: ${props.height}`: '' )};
    box-sizing: border-box;
    display: ${(props) => props.display};
    ${(props) => (props.padding? `padding: ${props.padding}`: '' )};
    ${(props) => (props.margin? `margin: ${props.margin}`: '' )};
    ${(props) => (props.bg? `background-color: ${props.bg}`: '' )};
    ${(props) => (props.is_flex? 'display: flex; justify-content: space-between; align-items: center;' : '')};
    ${(props) => (props.space? `justify-content: ${props.space}`: '' )};
    ${(props) => (props.align? `align-items: ${props.align}`: '' )};
    ${(props) => (props.wrap? 'display: flex; flex-wrap: wrap;' : '')};
    ${(props) => (props.scrollWrap? 'display: flex; white-space: nowrap; overflow-x: scroll;': '')};
    text-align: ${(props) => props.textalign};
    float: ${(props) => props.float};
    flex-direction: ${(props) => props.direction};
    ${(props) => (props.hidden? 'overflow: hidden;': '')};
    border: ${(props) => props.border};
    border-radius: ${(props) => props.radius};
    ${(props) => (props.shadow? 'box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px': '')};
`;



export default Grid;