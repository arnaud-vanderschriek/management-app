import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { InputLabel, FormHelperText, Container } from '@material-ui/core';
import Input from '@material-ui/core/Input';

export function AdminsAddUsers2() {
  return (
    <Container>
      <div id='admin-page-display'>
        <FormControl>
          <InputLabel htmlFor="my-input">Lastname</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text"></FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Firstname</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Password</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Country</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
      </div>
    </Container>
  )
}