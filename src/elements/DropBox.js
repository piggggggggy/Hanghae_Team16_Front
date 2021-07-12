import React from "react";
import styled from "styled-components";

const DropBox = (props) => {
   const {name, text1, text2, text3, text4, text5, two, width, margin, padding, height} = props;

   const styles = {
    width: width,
    height: height,
    margin: margin,
    padding: padding,

};

   if(two) {
       return (
        <React.Fragment>
            <DropDown {...styles}>
                <option selected>{name}</option>
                <option>{text1}</option>
                <option>{text2}</option>
            </DropDown>
        </React.Fragment>

       );
            
    }   

    return (
        
        <React.Fragment>
            <DropDown {...styles}>
                <option selected>{name}</option>
                <option>{text1}</option>
                <option>{text2}</option>
                <option>{text3}</option>
                <option>{text4}</option>
                <option>{text5}</option>
            </DropDown>
        </React.Fragment>
    );
}



const DropDown = styled.select`
    ${(props) => (props.width? `margin: ${props.width}`:'width: 150px')};
    ${(props) => (props.height? `margin: ${props.height}`:'height: 50px')};
    border: 1px solid black;
    ${(props) => (props.magin? `margin: ${props.margin}`:'')};
    ${(props) => (props.padding? `margin: ${props.padding}`:'')};
`;

export default DropBox;