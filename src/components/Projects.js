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
                            Daily Journal
                    </CardTitle>

                        <CardText>Journal for keeping track of daily tasks in class.</CardText>

                        <CardActions border>
                            <Button colored>Github</Button>
                            {/* <Button colored>Live Demo</Button> */}
                        </CardActions>

                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>

                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://3.bp.blogspot.com/-PTty3CfTGnA/TpZOEjTQ_WI/AAAAAAAAAeo/KeKt_D5X2xo/w1200-h630-p-k-nu/js.jpg) center / cover' }}>
                            Welcome to Nashville
                    </CardTitle>

                        <CardText>Nashville Itinerary App</CardText>

                        <CardActions border>
                            <Button colored>Github</Button>
                            {/* <Button colored>Live Demo</Button> */}
                        </CardActions>

                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>

                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://3.bp.blogspot.com/-PTty3CfTGnA/TpZOEjTQ_WI/AAAAAAAAAeo/KeKt_D5X2xo/w1200-h630-p-k-nu/js.jpg) center / cover' }}>
                            NUtshell
                    </CardTitle>

                        <CardText>Social media style app with many features.</CardText>

                        <CardActions border>
                            <Button colored>Github</Button>
                            {/* <Button colored>Live Demo</Button> */}
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
                            Kennel
                    </CardTitle>

                        <CardText>App to keep track of animals and employees for a kennel.</CardText>

                        <CardActions border>
                            <Button colored>Github</Button>
                            {/* <Button colored>Live Demo</Button> */}
                        </CardActions>

                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>

                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.viget.com%2Freact-logo-wide.png%3Fmtime%3D20160411121644&f=1) center / cover' }}>
                            Ternary Traveler
                    </CardTitle>

                        <CardText>One day code challenge.</CardText>

                        <CardActions border>
                            <Button colored>Github</Button>
                            {/* <Button colored>Live Demo</Button> */}
                        </CardActions>

                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>

                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.viget.com%2Freact-logo-wide.png%3Fmtime%3D20160411121644&f=1) center / cover' }}>
                            WoodWerx
                    </CardTitle>

                        <CardText>Front-End Capstone Project</CardText>

                        <CardActions border>
                            <Button colored>Github</Button>
                            {/* <Button colored>Live Demo</Button> */}
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
