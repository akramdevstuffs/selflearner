import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
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
import { PrivateRoute } from "../PrivateRoute";
import PlayLists from "./PlayLists";

// eslint-disable-next-line no-extend-native
String.prototype.capitalizeFirstLetter = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

const Classes = ({ history, match, location }) => {
  const { path, url } = useRouteMatch();
  const [contentTypes, setContentTypes] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [subject, setSubject] = useState(() => new URLSearchParams(location.search).get("subject"));
  const [contentType, setContentType] = useState("");
  const [playlist_id, setPlayListId] = useState();

  // useEffect(() => {
  //   const params = new URLSearchParams(location.search);
  //   const sub = params.get("subject");
  //   const type = params.get("type");
  //   setSubject(sub && Number(sub));
  //   setContentType(type && type);
  // },[location]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sub = params.get("subject");
    console.log("This is the sub value",sub);
    const type = params.get("type");
    setSubject(s => {
      console.log("This is s",s)
      return sub && Number(sub);
    });
    setContentType(type && type);
    axios
      .get(`/api/courses/${match.params.courseId}/getContentTypes`)
      .then((resp) => {
        (type === "" || !type) && setContentType(resp.data[0].name);
        setContentTypes(resp.data);
      });
    axios
      .get(`/api/courses/${match.params.courseId}/getAllSubjects`)
      .then((resp) => {
        if (!sub) setSubject(resp.data[0].id);
        setSubjects(resp.data);
      });

    //eslint-disable-next-line
  }, []);

  const updateParams = (sub, type) => {
    history.push(`${url}?subject=${sub}&type=${type}`);
  };

  return (
    <Container>
      <Subjects>
        {subjects.map((elem) => (
          <Subject
            active={(subject === elem.id || subject === elem.name) && "active"}
            key={elem.id}
            onClick={(e) => {
              setSubject(elem.id);
              setPlayListId();
              updateParams(elem.id, contentType);
            }}
          >
            {elem.name}
          </Subject>
        ))}
      </Subjects>
      {playlist_id ? (
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
          <VideosList subject={subject} playlist_id={playlist_id} type={contentType} />
        </ContentList>
      ):
      <PlayLists subject_id={subject} setPlayListId={e=> setPlayListId(e)} />
      }
    </Container>
  );
};

export default Classes;
