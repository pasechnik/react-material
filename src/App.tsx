import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
// import ProTip from './ProTip';
// import NavBar from './components/NavBar'
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import CourseList from './components/CourseList';
// import Grid from '@material-ui/core/Grid';

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
      <CourseList />
      <Container maxWidth="lg">
        <Box my={4}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
