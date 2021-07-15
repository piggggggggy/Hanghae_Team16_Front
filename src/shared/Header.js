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
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import { Text } from "../elements";


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
                    <IconButton onClick={() => {history.replace("/")}}><HomeSharpIcon style={{ color: "white" }} fontSize="large"/></IconButton>
                    <IconButton onClick={() => {history.replace("/mypage")}}><PersonIcon style={{ color: "white" }} fontSize="large"/></IconButton>
                    <IconButton onClick={logOutBtn}><ExitToAppSharpIcon style={{ color: "white" }} fontSize="large"/></IconButton>
                    {/* <Button size="large" onClick={() => {history.replace("/mypage")}}>마이페이지</Button>
                    <Button size="large" onClick={logOutBtn}>로그아웃</Button> */}
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
                    <Button size="large" onClick={() => {history.push("/login")}}><TText color="white" size="18px" weight="700">{"로그인"}</TText></Button>
                    <Button size="large" onClick={() => {history.push("/signup")}}><TText color="white" size="18px" weight="700">{"회원가입"}</TText></Button>
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
    background: #c0dbef;
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

const IconButton = styled.button`
    background-color: #c0dbef;
    border: none;
    cursor: pointer;


	&:hover {
		svg {
            fill: #6f6f6f
		}
	}
`;

const TText = styled.text`
    color: white;
    font-size: 18px;
    font-weight: 700;

    &:hover {
        color: #6f6f6f;
    }
`;

export default Header;