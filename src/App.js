import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <SayHi text="World"/>
        <SayFullName name="Julia" surname="Morokina" link="//vk.com" />
      </div>
    );
  }
}

function SayHi(props) {
  return (
    <h1>Hello {props.text}!</h1>
  );
}

function SayFullName(props) {
  return (
    <div>
      <h3>My name is {props.name}, my surname is {props.surname}</h3>
      <a href={props.link}>My homepage</a>
    </div>
  );
}

export default App;
