import React, { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import Videos from "../Vidoes";
import { VideosList } from "./VideosList";
import {
  CardTop,
  Container,
  ContentImg,
  ContentList,
  ContentTextSection,
  ContentTitle,
  Date,
  Subject,
  Subjects,
  TopButton,
  VideoCard,
  VideoDuration,
} from "./ClassesElements";

const Classes = ({ history, match, location }) => {
  let { path, url } = useRouteMatch();
  let [subject, setSubject] = useState("maths");
  let [contentType, setContentType] = useState("videos");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sub = params.get("subject");
    const type = params.get("type");
    console.log(params);
    setSubject(sub ? sub : "maths");
    setContentType(type ? type : "videos");
    //eslint-disable-next-line
  }, []);

  const updateParams = (sub, type) => {
    history.push(`${url}?subject=${sub}&type=${type}`);
  };

  return (
    <Switch>
      <Route path={`${path}/play/:videoId`} component={Videos} />
      <Container>
        <Subjects>
          <Subject
            active={subject === "maths" && "active"}
            onClick={(e) => {
              setSubject("maths");
              updateParams("maths", contentType);
            }}
          >
            Maths
          </Subject>
          <Subject
            active={subject === "chemistry" && "active"}
            onClick={(e) => {
              setSubject("chemistry");
              updateParams("chemistry", contentType);
            }}
          >
            Chemistry
          </Subject>
          <Subject
            active={subject === "physics" && "active"}
            onClick={(e) => {
              setSubject("physics");
              updateParams("physics", contentType);
            }}
          >
            Maths
          </Subject>
        </Subjects>
        <ContentList>
          <CardTop>
            <TopButton
              active={contentType === "videos" && "active"}
              children="Videos"
              onClick={(e) => {
                setContentType("videos");
                updateParams(subject, "videos");
              }}
            />
            <TopButton
              children="Notes"
              active={contentType === "notes" && "active"}
              onClick={(e) => {
                setContentType("notes");
                updateParams(subject, "notes");
              }}
            />
            <TopButton
              children="Exercise"
              active={contentType === "exercise" && "active"}
              onClick={(e) => {
                setContentType("exercise");
                updateParams(subject, "exercise");
              }}
            />
          </CardTop>
          <VideosList subject={subject} type={contentType} />
        </ContentList>
      </Container>
    </Switch>
  );
};

export default Classes;
