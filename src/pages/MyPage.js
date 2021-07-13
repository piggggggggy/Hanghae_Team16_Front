import React from "react";
import { Text, Grid, Button } from "../elements";
import MyStudy from "../components/MyStudy";
import MyQna from "../components/MyQna";
import MyComment from "../components/MyComment";
import MyPageModal from "../components/MyPageModal";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userAction } from "../redux/modules/user";

const MyPage = (props) => {

	const dispatch = useDispatch();

	const myModal = useSelector(state => state.user.myModal);

	const OpenMyModal = () => {
        dispatch(userAction.ModalCheck());
    };

	if (myModal) {
		return (
			<React.Fragment>
				<Grid>
					<MyPageModal></MyPageModal>
					<Grid display="flex" space="space-between" height="150px" padding="0 30px" align="center">
						<Text size="48px" weight="bold">My Page</Text>
						<Button text="내 정보" _onClick={OpenMyModal}></Button>
					</Grid>
					<Grid>
						<MyStudy/>
						<hr></hr>
						<MyQna/>
						<hr></hr>
						<MyComment/>
					</Grid>
				</Grid>
			</React.Fragment>
		);
	}

 	return (
		<React.Fragment>
			<Grid>
				<Grid display="flex" space="space-between" height="150px" padding="0 30px" align="center">
					<Text size="48px" weight="bold">My Page</Text>
					<Button text="내 정보" _onClick={OpenMyModal}></Button>
				</Grid>
				<Grid>
					<MyStudy/>
					<hr></hr>
					<MyQna/>
					<hr></hr>
					<MyComment/>
				</Grid>
			</Grid>
		</React.Fragment>
	)  
};


export default MyPage;