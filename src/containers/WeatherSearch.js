import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

class WeatherSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      country: '',
      temperature: 0,
      minTemp: 0,
      maxTemp: 0,
      humidity: 0,
      wind: 0,
      submitted: false,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();

    if (this.state.city && this.state.country) {
      this.getWeather();
      this.setState({
        city: '',
        country: '',
        temperature: 0,
        minTemp: 0,
        maxTemp: 0,
        humidity: 0,
        wind: 0,
        submitted: true,
      })
    } else {
      return alert('Oops! Please enter a city AND country to search.')
    }
  }

  getWeather = async () => {
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const city = this.state.city
    const country = this.state.country

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    const response = await api_call.json();
    console.log(response)
    this.setState({
      city: city,
      country: country,
      temperature: Math.round(response.main.temp),
      minTemp: Math.round(response.main.temp_min),
      maxTemp: Math.round(response.main.temp_max),
      wind: Math.round(response.wind.speed),
      humidity: response.main.humidity,
    })
  }

  renderWeather = () => {
    return (
      <div className="weather">
        <Card>
          <CardBody>
            <CardTitle>{this.state.city}</CardTitle>
            <CardText>Current Temperature: {this.state.temperature}&deg;</CardText>
            <CardText>Wind: {this.state.wind} mph</CardText>
            <CardText>Min Temp: {this.state.minTemp}&deg;</CardText>
            <CardText>Max Temp: {this.state.maxTemp}&deg;</CardText>
            <CardText>Humidity: {this.state.humidity}%</CardText>
          </CardBody>
        </Card>
      </div>
    )
  }

  render() {
    return (
      <div className='weather-search'>
        <SearchForm
          cityValue={this.state.city}
          countryValue={this.state.country}
          handleOnChange={this.handleOnChange}
          handleOnSubmit={this.handleOnSubmit}
        />
        { this.state.submitted && this.renderWeather() }
      </div>
    )
  }
}

export default WeatherSearch
