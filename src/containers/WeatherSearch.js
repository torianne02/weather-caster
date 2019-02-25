import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';

class WeatherSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      country: '',
      temperature: 0,
      humidity: 0,
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

    if (this.validate()) {
      this.getWeather();
      this.setState({
        city: '',
        country: ''
      })
    }
  }

  validate = () => {
    if (!this.state.city) {
      return alert('Oops! Please enter a city to search.')
    } else {
      return true
    }
  }

  getWeather = async () => {
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&appid=${API_KEY}&units=imperial`);
    const response = await api_call.json();
    this.setState({
      temperature: response.main.temp,
      humidity: response.main.humidity,
    })
    console.log(this.state)
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
      </div>
    )
  }
}

export default WeatherSearch
