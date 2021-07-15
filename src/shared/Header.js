import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Container from '@material-ui/core/Container';
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/configStore";
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import { Text, Image } from "../elements";


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
                

            </HeaderBg>
        </React.Fragment>
        );
    }


    return (
        <React.Fragment>
            <HeaderBg>

                <HeaderGrid>
                <div onClick={()=> {history.push('/')}}>로고</div>
                <BtnBox>
                    <Button size="large" onClick={() => {history.push("/login")}}><TText color="white" size="18px" weight="700">{"로그인"}</TText></Button>
                    <Button size="large" onClick={() => {history.push("/signup")}}><TText color="white" size="18px" weight="700">{"회원가입"}</TText></Button>
                </BtnBox>
                </HeaderGrid>
                

            </HeaderBg>
        </React.Fragment>
    );

};
const Logo = styled.div`
    background-image: url("https://media.vlpt.us/images/pyt4105/post/e92e7a9a-39ad-4644-a0ba-75d9897da221/%EB%A1%9C%EA%B3%A0%20%ED%9D%B0%EC%83%89.png");
    /* background-color: black; */
    background-size: cover;
    width: 150px;
    height: 150px;
    position: relative;
`;

const HeaderBg = styled.div`
    width: 100%;
    height: 100px;
    background: #c0dbef;
`;

const HeaderGrid = styled.div`
    width: 100%;
    position: relative;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0px 15%;
    /* padding-top: 50px; */
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