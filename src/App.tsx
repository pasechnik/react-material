import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import { RoutesContainer } from './RoutesContainer';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <>
      <PrimarySearchAppBar />
      <RoutesContainer />
      <Container maxWidth="lg">
        <Box my={4}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
