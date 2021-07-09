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
    width: 100%;
    height: 500px;
    background-image: url("https://images.unsplash.com/photo-1482178116735-0d7fc4305875?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
    margin: 50px 0;
    background-position: center;
    background-size: cover;
    border-radius: 50px;
`;



export default Banner;