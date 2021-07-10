import React from "react";
import styled from "styled-components";

const DropBox = (props) => {
   const {name, text1, text2, text3, text4, text5, two, width} = props;

   const styles = {
    width: width,

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
            <DropDown>
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
    width:150px;
    height:50px;
    border: 1px solid black;
    width: ${(props) => props.width};
`;

export default DropBox;