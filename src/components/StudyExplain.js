import React, {useState} from "react";
import styled from "styled-components";
import { history } from "../redux/configStore";
import { useSelector } from "react-redux";

// components & elements
import { Text, Grid, Button } from "../elements";
import StudyModal from "./StudyModal";

const StudyExplain = (props) => {

    const is_login = useSelector((state) => state.user.is_login);
 
	const [Modal, setModal] = useState(false);
 
	const ModalOpen = () => {
        if(is_login){
            setModal(true);
        }else{
            window.alert("로그인 해주세요!!!")
        }
        
    };
    
    const ModalClose = () => {
        setModal(false);
    }

    const GoInfo = () => {
        if(is_login){
            history.push('/mypage');
        }else{
            window.alert("로그인 해주세요!!!")
        }
    }

    
    return (
        <React.Fragment>
            <ExplainBox>
                <StudyModal Open={Modal} Close={ModalClose}/>
                    <Grid margin="30px 0px" padding="0px 8%">
                        <Text size="48px" weight="700">Study</Text>
                    </Grid>
                    <Grid margin="100px 0px" padding="0px 8%">
                        <Text size="32px" weight="600">스터디를 모집할 수 있는 공간입니다.</Text>
                    </Grid>
                    <Grid margin="60px 0px" padding="0px 8%">
                        <Text size="17px">
                        등대99에 오신 걸 환영합니다.
                        </Text>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Text size="17px">
                            모집하기를 눌러서 마음껏 스터디를 모집해주세요!
                        </Text>
                        <br></br>

                        <Text size="17px">
                            원하는 스터디를 신청하고 스터디원들과 댓글로 소통을 시도해보세요!
                        </Text>
            
                        <br></br>
            
                        <Text size="17px">
                            진행 중인 스터디만 보고싶을 때는 진행 중인 스터디 탭을 눌러보세요! 
                        </Text>
                        <br></br>

                        <Text size="17px">
                            내가 신청한 스터디가 보고싶을 때는 내 스터디를 눌러보세요! 
                        </Text>
                            
                            
                        
                    </Grid>
                <Grid width="80%" margin="auto" is_flex>
                    <Button backgroundcolor="#c0dbef" color="black" width="45%" text="모집하기" _onClick={()=>{ModalOpen()}}/>
                    <Button backgroundcolor="#c0dbef" color="black" width="45%" text="내 스터디" _onClick={()=>{GoInfo()}}/>
                </Grid>
            </ExplainBox>
        </React.Fragment>
    )


};

const ExplainBox = styled.div`
    max-width: 600px;
    width: 600px;
`;

export default StudyExplain;