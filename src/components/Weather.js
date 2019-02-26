import React from 'react';
import { Card } from 'reactstrap';

const Weather = ( props ) =>
  <div className="weather-info">
    <Card>
      <p className="weather-key">
        Location: <span className="weather-value">{ props.city }</span>
      </p>
      <p className="weather-key">
        Temperature: <span className="weather-value">{ props.temperature }&deg;</span>
      </p>
      <p className="weather-key">
        Wind: <span className="weather-value">{ props.wind } mph</span>
      </p>
      <p className="weather-key">
        Humidity: <span className="weather-value">{ props.humidity }%</span>
      </p>
      <p className="weather-key">
        Conditions: <span className="weather-value">{ props.description }</span>
      </p>
    </Card>
  </div>

export default Weather
