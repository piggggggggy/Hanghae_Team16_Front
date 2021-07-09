import React from "react";
import styled from "styled-components";
import { Text, Button, Grid } from "../elements";



const PageHeader = (props) => {

    const { text, btntext } = props

    return (
        <React.Fragment>
            <Grid is_flex margin="16px 30px">
                <Text bold size="48px" weight="800">{text}</Text>
                <Button backgroundcolor="gray" text={btntext}/>
            </Grid>
        </React.Fragment>
    );
};

PageHeader.defaultProps = {
    text: "타이틀",
    btntxt: "버튼명",
};

export default PageHeader;