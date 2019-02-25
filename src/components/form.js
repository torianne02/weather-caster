import React from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Form = props => {
  return (
    <Container className="form">
      <Form onSubmit={ props.handleOnSubmit }>
        <FormGroup>
          <Label for="city" hidden>City</Label>
          <Input type="text"
            name="city"
            placeholder="City"
            onChange={ props.handleOnChange }
            value={ props.cityValue } />
        </FormGroup>
        <FormGroup>
          <Label for="country" hidden>Country</Label>
          <Input type="text"
            name="country"
            placeholder="Country"
            onChange={ props.handleOnChange }
            value={ props.countryValue } />
        </FormGroup>
        <Button>Get Weather</Button>
      </Form>
    </Container>
  )
}

export default Form
