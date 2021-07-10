import React from "react";
import styled from "styled-components";
import { Grid } from ".";
const Input = (props) => {
    const {width, height, margin, padding, placeholder, type, multiLine, _onChange, name} = props;

    const styles = {
        width: width,
        height: height,
        margin: margin,
        padding: padding,
        placeholder: placeholder,
        type: type,
        name: name,
    }

    if (multiLine) {
        return (
          <Grid>
            <ElTextarea
              rows={10}
              placeholder={placeholder}
            ></ElTextarea>
          </Grid>
        );
      }
    
    return (
        <React.Fragment>
            <ElInput {...styles} type={type} placeholder={placeholder} onChange={_onChange} name={name}></ElInput>
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
    _onChange: () => {},
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

const ElTextarea = styled.textarea`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

export default Input;