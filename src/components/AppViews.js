import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import AboutMe from './AboutMe'
import Contact from './Contact'
import LandingPage from './LandingPage'
import Projects from './Projects'
import Resume from './Resume'

export default class AppViews extends Component {

    state = {

    }



    render() {
        return (
            <React.Fragment>

                <Route exact path="/" component={LandingPage} />
                <Route exact path="/aboutme" component={AboutMe} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/resume" component={Resume} />

            </React.Fragment>
            )
    }
}
