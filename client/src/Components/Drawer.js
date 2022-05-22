import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Link,
  Button,
  Drawer,
} from '@material-ui/core';

import { Box } from '@mui/system';
import React from 'react';

export default class closeDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: false,
    };
  }

  toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    this.setState({ ...this.state.left, [anchor]: open });
  };

  list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={this.toggleDrawer(anchor, false)}
      onKeyDown={this.toggleDrawer(anchor, false)}
    >
      <Typography variant="h5" color="inherit" style={{ margin: '10px 5px' }}>
        Menu bar
      </Typography>
      <List>
        <ListItem>
          <ListItemText>
            <Link
              variant="body2"
              underline="hover"
              color="inherit"
              style={{ marginLeft: '5px' }}
              href="/home"
            >
              Home
            </Link>
          </ListItemText>
        </ListItem>

        <ListItem>
          <ListItemText>
            <Link
              variant="body2"
              underline="hover"
              color="inherit"
              style={{ marginLeft: '5px' }}
              href="/about"
            >
              About us
            </Link>
          </ListItemText>
        </ListItem>

        <ListItem>
          <ListItemText>
            <Link
              variant="body2"
              underline="hover"
              color="inherit"
              style={{ marginLeft: '5px' }}
              href="/follow"
            >
              Follow us
            </Link>
          </ListItemText>
        </ListItem>

        <ListItem>
          <ListItemText>
            <Link
              variant="body2"
              underline="hover"
              color="inherit"
              style={{ marginLeft: '5px' }}
              href="/contact"
            >
              contact
            </Link>
          </ListItemText>
        </ListItem>

        <ListItem>
          <ListItemText>
            <Link
              variant="body2"
              underline="hover"
              color="inherit"
              style={{ marginLeft: '5px' }}
              href="/form"
            >
              Form
            </Link>
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  );

  render() {
    return (
      <div>
        <React.Fragment key={'left'}>
          <Button onClick={this.toggleDrawer('left', true)}>
            {this.props.children}
          </Button>
          <Drawer
            anchor={'left'}
            open={this.state.left}
            onClose={this.toggleDrawer('left', false)}
          >
            {this.list('left')}
          </Drawer>
        </React.Fragment>
      </div>
    );
  }
}
