import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Grid, Button, Text, Input } from "../../elements";



const Comment = (props) => {

    const dispatch = useDispatch();

    console.log(props.key);




    return (
        <React.Fragment>
            <Grid>
                <Grid display="flex" align="center">
                    <Text>{props.userId}</Text>
                    <Text>{props.date}</Text>
                </Grid>
                <Grid>
                    <Text>{props.content}</Text>
                </Grid>
                <hr/>
            </Grid>
        </React.Fragment>
    );
};



export default Comment;
