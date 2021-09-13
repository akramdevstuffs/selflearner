import React, { useEffect, useState } from 'react'
import { List, Card, Img, TextContainer,Title, Date as CourseDate } from './CoursesElements'

const Courses = ({ history }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("/api/courses/getAll").then((resp) => resp.json()).then(resp => setData(resp));
    }, [])
    return (
        <List>
            { data.map((elem) => (
            <Card onClick={e => history.push(`/courses/${elem.id}`)} key={elem.id}>
                <Img src={elem.image} />
                <TextContainer>
                <Title>{elem.name}</Title>
                <CourseDate>Start from { new Date(elem.created_at).toDateString() }</CourseDate>
                </TextContainer>
            </Card>
            )) }
        </List>
    )
}

export default Courses
