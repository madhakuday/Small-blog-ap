import React, { Component } from 'react';
import { createTheme, ThemeProvider } from '@mui/system';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import Main from './Pages/Main';

import './App.css';

//Comonents

import FullCard from './Components/FullCard';
import { Switch } from 'react-router-dom';

export class App extends Component {
  theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  render() {
    return (
      <>
        <BrowserRouter>
          <ThemeProvider theme={this.theme}>
            {/* <CssBaseline /> */}
            {/* <Switch>
              <Route exact path="/" element={<Main />} />
              <Route exact path="/fullcard/:id" element={<FullCard />} />
            </Switch> */}
            <Switch>
              <Route exact path="/">
                <Main />
              </Route>
              <Route exact path="/fullcard/:id">
                <FullCard />
              </Route>
            </Switch>
          </ThemeProvider>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
