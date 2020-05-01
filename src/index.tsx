import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import App2 from './App2';
import theme from './theme';
import { HashRouter as Router } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { Copyright } from 'components/Copyright';
// import { BrowserRouter as Router } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(2, 2),
    marginTop: 'auto',
  },
}));

function Index(): JSX.Element {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Router>
          <Container component="main" className={classes.main} maxWidth="lg">
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <App2 />
          </Container>
          <footer className={classes.footer}>
            <Container maxWidth="sm">
              <Copyright />
            </Container>
          </footer>
        </Router>
      </div>
    </ThemeProvider>
  );
}

ReactDOM.render(<Index />, document.querySelector('#root'));
