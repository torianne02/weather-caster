import React from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

const Weather = ( props ) =>
  <div className="weather">
    <Card>
      <CardBody>
        <CardTitle>{props.city}</CardTitle>
        <CardText>Current Temperature: {props.temperature}&deg;</CardText>
        <CardText>Wind: {props.wind} mph</CardText>
        <CardText>Humidity: {props.humidity}%</CardText>
        <CardText>Conditions: {props.description}</CardText>
      </CardBody>
    </Card>
  </div>

export default Weather
