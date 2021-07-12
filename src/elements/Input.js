import React from "react";
import styled from "styled-components";
import { Grid } from ".";
const Input = (props) => {
    const {width, height, margin, padding, placeholder, type, multiLine, _onChange, name, _ref, maxlength, _value} = props;

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
              {...styles}
              rows={5}
              placeholder={placeholder}
              ref={_ref}
            ></ElTextarea>
          </Grid>
        );
      }
    
    return (
        <React.Fragment>
            <ElInput {...styles} type={type} placeholder={placeholder} ref={_ref} onChange={_onChange} name={name} maxLength={maxlength} value={_value}></ElInput>
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
    border: 1px solid black;
    box-sizing: border-box;
`;

const ElTextarea = styled.textarea`
  border: 1px solid #212121;
  width: 100%;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  resize: none
`;

export default Input;