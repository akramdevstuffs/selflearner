import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router';
import Classes from '../components/Classes';
import CoursesComponent from '../components/Courses';

const Courses = () => {
    let {path, url} = useRouteMatch();
    return (
        <Switch>
            <Route exact path={path} component={CoursesComponent} />
            <Route path={`${path}/:courseId`} component={Classes} />
        </Switch>
    )
}

export default Courses
