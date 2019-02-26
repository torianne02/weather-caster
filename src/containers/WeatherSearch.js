import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';
import Weather from '../components/Weather';

class WeatherSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      country: '',
      temperature: 0,
      humidity: 0,
      wind: 0,
      description: '',
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
        humidity: 0,
        wind: 0,
        description: '',
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
      wind: Math.round(response.wind.speed),
      humidity: response.main.humidity,
      description: response.weather[0].description,
    })
  }

  renderWeather = () => {
    return (
      <Weather
        temperature={this.state.temperature}
        city={this.state.city}
        wind={this.state.wind}
        humidity={this.state.humidity}
        description={this.state.description}
      />
    )
  }

  render() {
    return (
      <div className="weather-search">
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
