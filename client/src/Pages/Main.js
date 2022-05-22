import { Container } from '@mui/system';
import React, { Component } from 'react';

//Compo
import NavBar from '../Components/NavBar';
import Cards from '../Components/Card';

export class Main extends Component {
  render() {
    return (
      <>
        <Container>
          <NavBar />
          <Cards />
        </Container>
      </>
    );
  }
}

export default Main;
