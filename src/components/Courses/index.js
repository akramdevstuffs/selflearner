import React from 'react'
import { List, Card, Img, TextContainer,Title, Date } from './CoursesElements'

const Courses = ({ history }) => {
    return (
        <List>
            <Card onClick={e => history.push('/courses/1')}>
                <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/58c3266d-d6a7-41d0-90a7-bcc1e78033f3.jpeg" />
                <TextContainer>
                <Title>Arjuna JEE 2.0</Title>
                <Date>Start from 02 Aug, 2021</Date>
                </TextContainer>
            </Card>
            <Card onClick={e => history.push('/courses/1')}>
                <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/58c3266d-d6a7-41d0-90a7-bcc1e78033f3.jpeg" />
                <TextContainer>
                <Title>Arjuna JEE 2.0</Title>
                <Date>Start from 02 Aug, 2021</Date>
                </TextContainer>
            </Card>
            <Card onClick={e => history.push('/courses/1')}>
                <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/58c3266d-d6a7-41d0-90a7-bcc1e78033f3.jpeg" />
                <TextContainer>
                <Title>Arjuna JEE 2.0</Title>
                <Date>Start from 02 Aug, 2021</Date>
                </TextContainer>
            </Card>
            <Card onClick={e => history.push('/courses/1')}>
                <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/58c3266d-d6a7-41d0-90a7-bcc1e78033f3.jpeg" />
                <TextContainer>
                <Title>Arjuna JEE 2.0</Title>
                <Date>Start from 02 Aug, 2021</Date>
                </TextContainer>
            </Card>
            <Card onClick={e => history.push('/courses/1')}>
                <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/58c3266d-d6a7-41d0-90a7-bcc1e78033f3.jpeg" />
                <TextContainer>
                <Title>Arjuna JEE 2.0</Title>
                <Date>Start from 02 Aug, 2021</Date>
                </TextContainer>
            </Card>
        </List>
    )
}

export default Courses
