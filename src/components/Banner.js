import React from "react";
import styled from "styled-components";

const Banner = (props) => {

    return (
        <React.Fragment>
            <BannerImg></BannerImg>
        </React.Fragment>
    )
}

const BannerImg = styled.div`
    width: 90%;
    height: 500px;
    background-image: url("https://images.unsplash.com/photo-1505896016-b2fca387579a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
    margin: 50px auto;
    background-position: center;
    background-size: cover;

`;



export default Banner;