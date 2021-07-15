import React from "react";
import { Text, Grid, Button } from "../elements";
import MyStudy from "../components/MyStudy";
import MyQna from "../components/MyQna";
import MyComment from "../components/MyComment";
import MyPageModal from "../components/MyPageModal";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userAction } from "../redux/modules/user";
import styled from "styled-components";

const MyPage = (props) => {


	const [myModal, setMyModal] = React.useState(false);
 
	const myModal_Open = () => {
        setMyModal(true);
    };
    
    const myodal_Close = () => {
        setMyModal(false);
    }

	

		return (
			<React.Fragment>
				<Grid>
					<MyPageModal Open={myModal} Close={myodal_Close}></MyPageModal>
					<Grid margin="70px 0 0 0" shadow radius="50px" bg="#fafafa" display="flex" space="space-between" height="150px" padding="0 60px" align="center" border="1px solid #ccc">
						<Text color="#014078" size="40px" weight="bold">My Page</Text>
						<Button weight="bold" size="17px" width="120px" height="50px" color="#fff" backgroundcolor="#082e70" text="내 정보" _onClick={myModal_Open} borderradius="30px"></Button>
					</Grid>
					<Grid margin="150px 0 0 0">
						<MyStudy></MyStudy>
						<hr></hr>
						<MyComment/>
					</Grid>
				</Grid>
			</React.Fragment>
		);
	
};



export default MyPage;