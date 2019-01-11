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
        <SayFullName name="Julia" surname="Morokina" link="//vk.com" />
        <SayFullName name="Ivan" surname="Ivanov" link="//instagram.com" />
        <SayFullName name="Anton" surname="Antonov" link="//facebook.com" />
      </div>
    );
  }
}

function SayFullName(props) {
  return (
    <div>
      <h1>My name is {props.name}, my surname is {props.surname}</h1>
      <a href={props.link}>My homepage</a>
    </div>
  );
}

export default App;
