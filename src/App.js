import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import { Link } from 'react-router-dom'
import './App.css';
import AppViews from './components/AppViews'

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">My Portfolio</Link>} scroll>
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Projects</Link>
                <Link to="resume">Resume</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">My Portfolio</Link>}>
            <Navigation>
                <Link to="aboutme">About Me</Link>
                <Link to="contact">Contact</Link>
                <Link to="projects">Projects</Link>
                <Link to="resume">Resume</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <AppViews />
        </Content>
    </Layout>
</div>
  );
}

export default App;
