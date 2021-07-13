import React from "react";
import { Grid, Text, Button } from "../elements";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userAction } from "../redux/modules/user";
import instance from "../shared/instance";

const MyPageModal = (props) => {

    const dispatch = useDispatch();


    const MyModal_Close = () => {
        dispatch(userAction.closeModal());
    }

    const userId = useSelector(state => (state.user.user.userId));


    const [my_Email, setMy_Email] = React.useState("");
    const [my_Nick, setMy_Nick] = React.useState("");
    const [my_Group, setMy_Group] = React.useState("");

    const getMyInfo = () => {
        instance.get(`/api/briefInfo/${userId}`).then((response) => {
            console.log(response);
            setMy_Email(response.data.email);
            setMy_Nick(response.data.nickname);
            setMy_Group(response.data.group);
        })
        .catch(error => {
            console.log(error);
        })
    }

    

    React.useEffect(() => {
        getMyInfo();
    });

    return (
        <React.Fragment>
            <ModalBox>
                <Grid display="flex" direction="column" width="70%" margin="0 auto">
                   <Grid>
                   <Text>아이디 : </Text>
                   <Text>{my_Email}</Text>
                   </Grid>

                   <Grid>
                   <Text>닉네임 : </Text>
                   <Text>{my_Nick}</Text>
                   </Grid>

                   <Grid>
                   <Text>항해 기수 : </Text>
                   <Text>{my_Group}</Text>
                   </Grid>
                   
                   <Grid>
                    <Button text="수정"></Button>
                    <Button _onClick={MyModal_Close} text="닫기"></Button>
                   </Grid>
                   
                </Grid>
            </ModalBox>
         </React.Fragment>
    );
}


const ModalBox = styled.div`
    width: 60%;
    height: 70%;
    background: #fff;
    top: 10%;
    left: 50%;
    margin-left: -30%;
    position: fixed;
    z-index: 10;
    padding: 50px 0;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export default MyPageModal;