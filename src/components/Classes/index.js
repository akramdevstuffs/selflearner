import React, { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import Videos from "../Vidoes";
import { VideosList } from "./VideosList";
import {
  CardTop,
  Container,
  ContentList,
  Subject,
  Subjects,
  TopButton,
} from "./ClassesElements";

// eslint-disable-next-line no-extend-native
String.prototype.capitalizeFirstLetter = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

const Classes = ({ history, match, location }) => {
  const { path, url } = useRouteMatch();
  const [contentTypes, setContentTypes] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [subject, setSubject] = useState("");
  const [contentType, setContentType] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sub = params.get("subject");
    const type = params.get("type");
    setSubject(sub && Number(sub));
    setContentType(type && type);
    fetch(`/api/courses/${match.params.courseId}/getContentTypes`)
      .then((resp) => resp.json())
      .then((resp) => {
        (type==="" || !type) && setContentType(resp[0].name);
        setContentTypes(resp);
      });
    fetch(`/api/courses/${match.params.courseId}/getAllSubjects`)
      .then((resp) => resp.json())
      .then((resp) => {
        if (!sub) setSubject(resp[0].id);
        setSubjects(resp);
      });

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
          {subjects.map((elem) => (
            <Subject
              active={
                (subject === elem.id || subject === elem.name) && "active"
              }
              onClick={(e) => {
                setSubject(elem.id);
                updateParams(elem.id, contentType);
              }}
            >
              {elem.name}
            </Subject>
          ))}
        </Subjects>
        <ContentList>
          <CardTop>
            {contentTypes.map((elem) => (
              <TopButton
                active={
                  (contentType === elem.name || contentType === elem.id) &&
                  "active"
                }
                children={elem.name.capitalizeFirstLetter()}
                onClick={(e) => {
                  setContentType(elem.name);
                  updateParams(subject, elem.name);
                }}
              />
            ))}
          </CardTop>
          <VideosList subject={subject} type={contentType} />
        </ContentList>
      </Container>
    </Switch>
  );
};

export default Classes;
