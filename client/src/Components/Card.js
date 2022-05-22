import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core';

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Cards extends Component {
  constructor(props) {
    super();

    this.state = {
      carddata: [],
    };
  }

  async componentDidMount() {
    const res = await axios.get('/getcarddata');
    console.log('res is', res.data);
    this.setState({ carddata: res.data });
  }

  render() {
    return (
      <>
        <Container style={{ marginTop: '15px' }}>
          <Grid container spacing={2} justifyContent="center">
            {this.state.carddata.map((data) => {
              return (
                <React.Fragment key={data._id}>
                  <Card
                    style={{
                      width: '40%',
                      height: '20%',
                      margin: '10px',
                      boxShadow:
                        'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
                    }}
                  >
                    <CardContent
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                      }}
                    >
                      <Typography variant="title">
                        {data.title.slice(0, 17)}....
                      </Typography>

                      <Typography
                        variant="description"
                        style={{ margin: '10px 0' }}
                      >
                        {data.description.slice(0, 30)}....
                      </Typography>

                      {/* <img
                    style={{
                      backgroundRepeat: 'no-repeat',
                    }}
                    alt="img"
                    src={e.image}
                    width="193"
                    height="130"
                  /> */}

                      <Link to={`/fullcard/${data._id}`}>
                        <button className="btn btn-outline-primary">
                          <Typography variant="subtitle2">Read more</Typography>
                        </button>
                      </Link>
                    </CardContent>
                  </Card>
                </React.Fragment>
              );
            })}
          </Grid>
        </Container>
      </>
    );
  }
}

export default Cards;
