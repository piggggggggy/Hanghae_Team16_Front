import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import {Grid, Text, Button, ATag} from "../elements";
import { actionCreators as userAction } from "../redux/modules/user";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../redux/configStore";
import SType from "../shared/StudyType";

const Main = (props) => {
	
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(userAction.getMainStudy());
	},[]);

	const recentStudy = useSelector(state => (state.user.main_study_list));

 	return (
		<React.Fragment>
			<Banner></Banner>

			<Container>
				<Grid is_flex padding="10px">
                    <Text size="24px" weight="bold" color="#014078">최근 스터디</Text>
                    <Button weight="bold" borderradius="20px" backgroundcolor="#035AA6" _onClick={() => {history.push('/study')}} text="더보기"/>
                </Grid>
				<Grid>
				{recentStudy.map((_, idx) => {
					return (
							
							<Grid is_flex margin="30px 20px">
							<Grid width="33%">
								<Text color="#113859" size="17px">{SType(_.level)}</Text>
							</Grid>
							<Grid width="33%">
							<ATag size="18px" align="center" text={_.name}  _onClick={()=>{history.push(`/study/${_.studyId}`)}}></ATag>
							</Grid>
							<Grid width="33%">
							<Text size="17px" align="right">{_.endJoinDate} &nbsp;  마감!</Text>
							</Grid>
							</Grid>
							
					)
				})}
				</Grid>
			</Container>
		</React.Fragment>
	)  
};

const Container = styled.div`
	width: 80%;
	margin: 6% auto 200px;
	border: 1px solid #bbbbbb;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
	padding: 30px;
	border-radius: 20px;
`;


export default Main;