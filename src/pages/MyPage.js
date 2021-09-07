import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

// components & elements
import { Text, Grid, Button } from "../elements";
import MyStudy from "../components/MyStudy";
import MyQna from "../components/MyQna";
import MyComment from "../components/MyComment";
import MyPageModal from "../components/MyPageModal";

// modules
import { actionCreators as userAction } from "../redux/modules/user";


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
					<Grid width="80%" margin="70px auto 0 auto" shadow radius="30px" bg="#fafafa" display="flex" space="space-between" height="120px" padding="0 60px" align="center" border="1px solid #ccc">
						<Text color="#000333" size="32px" weight="bold">My Page</Text>
						<Button weight="bold" size="17px" width="120px" height="50px" color="black" backgroundcolor="#c0dbef" text="내 정보" _onClick={myModal_Open} borderradius="30px"></Button>
					</Grid>
					<Grid width="80%" margin="100px auto 0 auto">
						<MyStudy></MyStudy>
						<hr></hr>
						<MyComment/>
					</Grid>
				</Grid>
			</React.Fragment>
		);
	
};



export default MyPage;