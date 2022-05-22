import { Card, Container, Divider, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import NavBar from './NavBar';

export class FuulCard extends Component {
  constructor(props) {
    super();

    this.state = {
      id: '',
      data: [],
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    const result = await axios.get(`/getcard/${id}`);
    this.setState({ data: result.data });
  }

  render() {
    const { name, title, description } = this.state.data;
    return (
      <>
        <Container>
          <NavBar />
          <div
            style={{
              marginTop: '15px',
            }}
          >
            <Card
              style={{
                height: '100%',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <div style={{ padding: '10px' }}>
                <Typography variant="h4" color="primary" fontFamily="Helvetica">
                  {title}
                </Typography>
              </div>
              <div>
                <Divider />
                <Typography
                  variant="h6"
                  style={{ fontFamily: 'Righteous,cursive', padding: '10px' }}
                >
                  {description}
                </Typography>
              </div>
              <div>
                <Typography
                  style={
                    {
                      // position: 'absolute',
                      // bottom: '0',
                      // right: '10px',
                    }
                  }
                  variant="h5"
                >
                  Author : {name}
                </Typography>
              </div>
            </Card>
          </div>
        </Container>
      </>
    );
  }
}

export default withRouter(FuulCard);
