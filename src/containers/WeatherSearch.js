import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';

class WeatherSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      country: ''
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
    const searchParams = {
      city: this.state.city,
      country: this.state.country
    }

    if (this.validate()) {
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
