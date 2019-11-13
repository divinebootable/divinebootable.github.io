import React, { Component } from 'react';
import { Button } from 'react-mdl';
import Typical from 'react-typical';
import { Link } from 'react-router-dom';


const steps = [
  'Hi 👋', 1000,
  'Software Engineer', 1000,
  'Front End Developer', 1000,
  'Back End Developer', 1000,
  'I build things for the web 👌', 1000,
  'Turn ideas into reality'
];


class Intro extends Component{
  render(){
    return(
      <div style={{
        position: 'absolute', left: '50%', top: '40%',
        transform: 'translate(-50%, -50%)'
    }} >
      <h1 style={{textDecoration: 'none', color: 'white'}}>
           <span style={{fontSize:40}}>Hello, I&apos;m Monyuy Divine</span>
           <br/>
        <Typical   wrapper="span" steps={steps} loop={Infinity} className={'caca'} />
      </h1>

     <Link to="/projects"style={{fontSize:20}}><Button raised colored>View my Work</Button></Link>
      </div>
    );
  }
}

export default Intro;
