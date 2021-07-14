import React from "react";
import { Text, Grid, Button } from "../elements";
import { history } from "../redux/configStore";
import styled from "styled-components";
import { actionCreators as userAction } from "../redux/modules/user";
import instance from "../shared/instance";
import { useSelector } from "react-redux";

const MyStudy = (props) => {

    const study_list = [
        {
            studyTitle: "스터디 제목",
            studyIndex: 11,
            studyStart: "2021-07-10",
            studyDeadline: "2021-07-20",
            studySize: 5,
            joinNum: 2,
            studyExplain: "리린이들 모집합니다.",
            category: "front-end",
            level: 3,
            is_full: false,
        },
        {
            studyTitle: "스터디 제목",
            studyIndex: 11,
            studyStart: "2021-07-10",
            studyDeadline: "2021-07-20",
            studySize: 5,
            joinNum: 2,
            studyExplain: "리린이들 모집합니다.",
            category: "front-end",
            level: 3,
            is_full: false,
        },
        {
            studyTitle: "스터디 제목",
            studyIndex: 11,
            studyStart: "2021-07-10",
            studyDeadline: "2021-07-20",
            studySize: 5,
            joinNum: 2,
            studyExplain: "리린이들 모집합니다.",
            category: "front-end",
            level: 3,
            is_full: false,
        },
        {
            studyTitle: "스터디 제목",
            studyIndex: 11,
            studyStart: "2021-07-10",
            studyDeadline: "2021-07-20",
            studySize: 5,
            joinNum: 2,
            studyExplain: "리린이들 모집합니다.",
            category: "front-end",
            level: 3,
            is_full: false,
        },
    ];

    const [study_Lv, setStudy_Lv] = React.useState("");
    const [study_End, setStudy_End] = React.useState("");
    const [study_Name, setStudy_Name] = React.useState("");
    const [study_Size, setStudy_Size] = React.useState("");
    const [study_Start, setStudy_Start] = React.useState("");

    
    const userId = useSelector(state => (state.user.user.userId));


    const MyStudyIn = () => {
       

        instance.get(`/api/mystudy/${userId}`).then((response) => {
            console.log(response);
            setStudy_Lv(response.data.studyInfo.lever);
            setStudy_End(response.data.studyInfo.endJoinDate);
            setStudy_Name(response.data.studyInfo.name);
            setStudy_Size(response.data.studyInfo.size);
            setStudy_Start(response.data.studyInfo.startDate);
        })
        .catch(error => {
            console.log(error);
        })
    }

    React.useEffect(() => {
        MyStudyIn();
        
    });
    
    console.log(study_Lv,study_End,study_Name,study_Size,study_Start);

    return (
        <React.Fragment>
            <Grid>
                <Grid is_flex margin="20px 0">
                    <Text size="24px" weight="bold">My Study</Text>
                    <Button _onClick={()=>{history.push("/study")}} text="더보기"/>
                </Grid>
                <Grid is_flex>
                    <Button color="black" backgroundcolor="none" text="◁"/>
                    <Grid scrollWrap>
                        {study_list.map((c,idx) => {
                            return(
                                <Grid key={idx} width="30%" height="60px" margin="10px" bg="lightgray">
                                    <Grid is_flex padding="7px">
                                        <Text>LEVEL : {c.level}</Text>
                                        <Text>{c.studyDeadline} 마감</Text>
                                    </Grid>
                                    <Grid padding="0px 40px">
                                        <Text weight="800" size="20px">{c.studyTitle}</Text>
                                        <Text>인원 : {c.joinNum} / {c.studySize}</Text>
                                        <Text>카테고리 : {c.category}</Text>
                                    </Grid>
                                </Grid>
                            )
                        })}
                    </Grid>
                    <Button color="black" backgroundcolor="none" text="▶"/>
                </Grid>
                
            </Grid>
        </React.Fragment>
    )
}

export default MyStudy;