import React from 'react'
import { useRouteMatch, withRouter } from 'react-router';
import { ContentImg, ContentTextSection, ContentTitle, VideoCard, VideoDuration, Date } from './ClassesElements';

export const VideosList = withRouter(({history, match, subject, type}) => {
    const {path, url} = useRouteMatch();
  const videosList = [
    {
      id: 1,
      img: "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/d4471220-5fee-416d-a69b-70465fec1adb.png",
      title: "Basic Maths 10 : Characteristics and Mantissa of Logarithm",
      duration: "01:54:29",
      date: "Aug 31, 2021",
    },
    {
      id: 2,
      img: "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/d4471220-5fee-416d-a69b-70465fec1adb.png",
      title: "Basic Maths 10 : Characteristics and Mantissa of Logarithm",
      duration: "01:54:29",
      date: "Aug 31, 2021",
    },
    {
      id: 3,
      img: "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/d4471220-5fee-416d-a69b-70465fec1adb.png",
      title: "Basic Maths 10 : Characteristics and Mantissa of Logarithm",
      duration: "01:54:29",
      date: "Aug 31, 2021",
    },
    {
      id: 4,
      img: "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/d4471220-5fee-416d-a69b-70465fec1adb.png",
      title: "Basic Maths 10 : Characteristics and Mantissa of Logarithm",
      duration: "01:54:29",
      date: "Aug 31, 2021",
    },
    {
      id: 5,
      img: "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/d4471220-5fee-416d-a69b-70465fec1adb.png",
      title: "Basic Maths 10 : Characteristics and Mantissa of Logarithm",
      duration: "01:54:29",
      date: "Aug 31, 2021",
    },
  ];
    return (
        <>
        {videosList.map((video) => (
        <VideoCard
            key={video.id}
            onClick={(e) => history.push(`/courses/${match.params.courseId}/play/${video.id}`)} >
            <ContentImg src={video.img} />
            <ContentTextSection>
            <ContentTitle>{video.title}</ContentTitle>
            <VideoDuration>{video.duration}</VideoDuration>
            <Date>{video.date}</Date>
            </ContentTextSection>
        </VideoCard>
        ))}
    </>
    )
});
