import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';
import Main from './components/Main';


const particlesOpt= {
    particles: {
      number: {
          value: 150,
          density:{
            enable: true,
            value_area : 800
          }
      }
    }
  }


class App extends Component {
  render() {
    return (
<div className="App">

      <div className="demo-big-content">
      <Particles className='particles'
      params={particlesOpt}/>
   <Layout>
       <Header transparent title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
           <Navigation>
               <Link to="/resume"  style={{fontSize:20}}>Resume</Link>
               <Link to="/aboutme" style={{fontSize:20}}>About Me</Link>
               <Link to="/projects"style={{fontSize:20}}>Projects</Link>
               <Link to="/contact" style={{fontSize:20}}>Contact</Link>
           </Navigation>
       </Header>
       <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
           <Navigation>
             <Link to="/resume">Resume</Link>
             <Link to="/aboutme">About Me</Link>
             <Link to="/projects">Projects</Link>
             <Link to="/contact">Contact</Link>
           </Navigation>
       </Drawer>
       <Content>
          <div className="page-content"/>
          <Main/>
      </Content>
 </Layout>
</div>
</div>

    );
  }
}

export default App;
