import * as React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import PrimarySearchAppBar from 'components/PrimarySearchAppBar';
import { RoutesContainer } from 'routes/RoutesContainer';
import { Copyright } from 'components/Copyright';

export const App: React.FunctionComponent<{}> = (): JSX.Element => {
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
};

export default App;
