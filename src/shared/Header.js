import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const Header = (props) => {

    return (
        <React.Fragment>
            <HeaderBg>
            <Container maxWidth="lg">
                <HeaderGrid>
                <div>로고</div>
                <BtnBox>
                    <Button size="large">로그인</Button>
                    <Button size="large">회원가입</Button>
                </BtnBox>
                </HeaderGrid>
                
            </Container>
            </HeaderBg>
        </React.Fragment>
    )

};

const HeaderBg = styled.div`
    width: 100%;
    height: 100px;
    background: #b3b9e6;
`;

const HeaderGrid = styled.div`
    width: 100%;
    position: relative;
    height: 50px;

    display: flex;
    justify-content: space-between;
    padding-top: 50px;
`;

const BtnBox = styled.div`

`;

export default Header;