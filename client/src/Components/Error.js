import React from 'react';
import { Typography, makeStyles, Divider } from '@material-ui/core';

const useStyles = makeStyles({
  titel: {
    color: ' red',
    fontSize: '3rem',
  },
  description: {
    color: 'white',
    fontSize: '5rem',
    fontFamily: 'Helvetica-',
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    flexDirection: 'column',
  },
  page: {
    color: 'whiteSmoke',
    fontSize: '3rem',
    marginTop: '2rem',
  },
});
function Error() {
  const classe = useStyles();
  return (
    <>
      <div className={classe.center}>
        <Typography className={classe.titel}>Error</Typography>
        <Divider />

        <Typography className={classe.description}>404</Typography>
        <Divider />

        <Typography className={classe.page}>Page not found</Typography>
      </div>
    </>
  );
}

export default Error;
