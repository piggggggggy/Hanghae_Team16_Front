import React from "react";
import { Text, Grid, Button } from "../elements";
import MyStudy from "../components/MyStudy";
import MyQna from "../components/MyQna";
import MyComment from "../components/MyComment";
import PageHeader from "../components/PageHeader";

const MyPage = (props) => {

 	return (
		<React.Fragment>
			<Grid>
				<PageHeader text="MyPage" btntext="MyInfo"/>
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