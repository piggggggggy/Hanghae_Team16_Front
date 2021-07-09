// import { styled } from "@material-ui/core";
import React from "react";
import styled from "styled-components";


const Image = (props) => {

    const {shape, src, size,} = props;

    const styles = {
      src: src,
      size: size,
    };

    return (
        <React.Fragment>
            <ImageDefault {...styles}/>
        </React.Fragment>
    );
};

Image.defaultProps = {
    shape: "circle",
    src: "https://media.vlpt.us/images/pyt4105/post/83f78553-ba38-44c9-aaf8-3f7a715d0701/%EA%B2%B8%EB%91%A5%EC%9D%B4%EB%B2%A4.jpg",
    size: 100,
};

const ImageDefault = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    background-image: url("${(props) => props.src}");
    background-size: cover;
`;

export default Image;