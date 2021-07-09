import React from "react";
import { Text, Grid, Button } from "../elements";

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

    return (
        <React.Fragment>
            <Grid>
                <Grid is_flex>
                    <Text size="24px" weight="bold">My Study</Text>
                    <Button text="더보기"/>
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