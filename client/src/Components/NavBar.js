import React, { Component } from 'react';
import { Divider, IconButton, Toolbar, Typography } from '@material-ui/core';
import CloseDrawer from './Drawer';

//Ioncs

import { IoMenu } from 'react-icons/io5';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <>
        <Toolbar
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',

            background: '#FFEFBA',
            background: '-webkit-linear-gradient(to bottom, #FFFFFF, #FFEFBA)',
            background: 'linear-gradient(to bottom, #FFFFFF, #FFEFBA)',
          }}
        >
          <div
            style={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}
          >
            <CloseDrawer>
              <IconButton>
                <Typography variant="subtitle1">
                  <IoMenu />
                </Typography>
              </IconButton>
            </CloseDrawer>

            <Typography color="primary" variant="subtitle1">
              <Link to="/" style={{ textDecoration: 'none' }}>
                React
              </Link>
            </Typography>
          </div>
        </Toolbar>
        <Divider />
      </>
    );
  }
}

export default NavBar;
