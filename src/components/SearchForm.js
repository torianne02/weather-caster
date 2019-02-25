import React from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const SearchForm = props => {
  return (
    <Container className="form">
      <Form onSubmit={ props.handleOnSubmit }>
        <FormGroup>
          <Label for="city">City: </Label>
          <Input type="text"
            name="city"
            onChange={ props.handleOnChange }
            value={ props.cityValue } />
          <Label for="country"> Country: </Label>
          <Input type="text"
            name="country"
            onChange={ props.handleOnChange }
            value={ props.countryValue } />
          <Button>Get Weather</Button>
        </FormGroup>
      </Form>
    </Container>
  )
}

export default SearchForm
