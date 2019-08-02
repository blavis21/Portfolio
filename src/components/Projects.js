import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'

export default class Projects extends Component {

    state = {
        activeTab: 0
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">

                    {/* Project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>

                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://3.bp.blogspot.com/-PTty3CfTGnA/TpZOEjTQ_WI/AAAAAAAAAeo/KeKt_D5X2xo/w1200-h630-p-k-nu/js.jpg) center / cover' }}>
                            JavaScript Project #1
                    </CardTitle>

                        <CardText>Stuff</CardText>

                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>

                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>

                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://3.bp.blogspot.com/-PTty3CfTGnA/TpZOEjTQ_WI/AAAAAAAAAeo/KeKt_D5X2xo/w1200-h630-p-k-nu/js.jpg) center / cover' }}>
                            JavaScript Project #1
                    </CardTitle>

                        <CardText>Stuff</CardText>

                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>

                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>

                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://3.bp.blogspot.com/-PTty3CfTGnA/TpZOEjTQ_WI/AAAAAAAAAeo/KeKt_D5X2xo/w1200-h630-p-k-nu/js.jpg) center / cover' }}>
                            JavaScript Project #1
                    </CardTitle>

                        <CardText>Stuff</CardText>

                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>

                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else {
            return (
                <div className="projects-grid">

                    {/* Project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>

                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.viget.com%2Freact-logo-wide.png%3Fmtime%3D20160411121644&f=1) center / cover' }}>
                            React Project #1
                    </CardTitle>

                        <CardText>Stuff</CardText>

                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>

                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>

                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.viget.com%2Freact-logo-wide.png%3Fmtime%3D20160411121644&f=1) center / cover' }}>
                            React Project #2
                    </CardTitle>

                        <CardText>Stuff</CardText>

                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>

                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>

                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.viget.com%2Freact-logo-wide.png%3Fmtime%3D20160411121644&f=1) center / cover' }}>
                            React Project #3
                    </CardTitle>

                        <CardText>Stuff</CardText>

                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>

                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>JavaScript</Tab>
                    <Tab>React</Tab>
                </Tabs>

                    <Grid className="project-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}
