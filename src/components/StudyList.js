import React from "react";
import { Grid } from "../elements";
import StudyCard from "./StudyCard";


const StudyList = (props) => {

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
            <Grid wrap>
                {study_list.map((c,idx) => {
                    return(
                        <StudyCard key={idx} {...c}/>
                    )
                })}
            </Grid>
        </React.Fragment>
    );
};

export default StudyList;