import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repair = styled.div`
    font-size: 18px;
`

const TextInfo = styled.div`

    span {
        display: block;
        font-size: 21px;
        font-weight: 700;
    }
`

const CallButton = styled.button`
    width: 173px;
    height: 45px;
    background-color: #3fc7db;
    color: #ffffff;
    font-size: 14px;
    font-weight: 400;
    border-radius: 30px;
    border: none;
`

class Address extends React.Component {
    render() {
        return (
            <span> {this.props.addr} </span>
        );
    }
}

class TelNumber extends React.Component {
    render() {
        return (
            <span> {this.props.tel} </span>
        );
    }
}

class Menu extends React.Component {
    render() {
        return (
            <Row>
                <Col lg={3}>
                    <Repair>
                        Ремонт айфонов в сервисном центре и на выезде
                    </Repair>
                </Col>
                <Col lg={3} lgOffset={1}>
                    <TextInfo>
                        Пн-пт с 10 до 20, сб,вс с 11 до 18
                        <Address addr="Ленинская, 301" />
                    </TextInfo>
                </Col>
                <Col lg={3}>
                    <TextInfo>
                        Звонки принимаются 24 часа
                        <TelNumber tel="8 (846) 922 55 44" /> 
                    </TextInfo>
                </Col>
                <Col lg={2}>
                    <CallButton>Заказать звонок!</CallButton>
                </Col>
            </Row>
        );
    }
}

export default Menu;