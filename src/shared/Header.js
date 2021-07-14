import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/configStore";

const Header = (props) => {

    const dispatch = useDispatch();

    const is_login = useSelector((state) => state.user.is_login);

    const logOutBtn = () => {
        dispatch(userActions.logOutDB());
    };

    if (is_login) {
        return (
            <React.Fragment>
            <HeaderBg>
            <Container maxWidth="lg">
                <HeaderGrid>
                <div onClick={()=> {history.push('/')}}>로고</div>
                <BtnBox>
                    <Button size="large" onClick={() => {history.replace("/mypage")}}>마이페이지</Button>
                    <Button size="large" onClick={logOutBtn}>로그아웃</Button>
                </BtnBox>
                </HeaderGrid>
                
            </Container>
            </HeaderBg>
        </React.Fragment>
        );
    }


    return (
        <React.Fragment>
            <HeaderBg>
            <Container maxWidth="lg">
                <HeaderGrid>
                <div onClick={()=> {history.push('/')}}>로고</div>
                <BtnBox>
                    <Button size="large" onClick={() => {history.push("/login")}}>로그인</Button>
                    <Button size="large" onClick={() => {history.push("/signup")}}>회원가입</Button>
                </BtnBox>
                </HeaderGrid>
                
            </Container>
            </HeaderBg>
        </React.Fragment>
    );

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