import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Grid, Button, Text, Input } from "../../elements";
import moment from "moment";
import { styles } from "ansi-colors";



const Comment = (props) => {


    const time = props.checkTime.format("YYYY.MM.DD  hh:mm");
    const now = moment();
    console.log(time);
    console.log(now);

    return (
        <React.Fragment>
            <Grid>
                <CommentContainer>
                    <Grid display="flex" align="center">
                        <Text weight="600" margin="0px 25px 0px 0px">{props.userId}</Text>
                        <Text color="#6d6d6d">{time}</Text>
                    </Grid>
                    <Grid>
                        <Text>{props.content}</Text>
                    </Grid>
                </CommentContainer>
                
                <hr/>
            </Grid>
        </React.Fragment>
    );
};

const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 70px;
    padding: 0px 3%;
`;


export default Comment;
