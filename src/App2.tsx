import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import AppsIcon from '@material-ui/icons/Apps';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { RoutesContainer } from 'routes/RoutesContainer';
import { useGlobalOpen } from 'hooks/useMenu';
import { CustomAppBar } from 'components/custom/AppBar';
import { ListItemLink } from 'components/ListLink';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import TodayIcon from '@material-ui/icons/Today';
import ListIcon from '@material-ui/icons/List';
// import HelpIcon from '@material-ui/icons/Help';
// import StorageIcon from '@material-ui/icons/Storage';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }),
);

export const App2: React.FunctionComponent<{}> = (): JSX.Element => {
  const theme = useTheme();
  const classes = useStyles();
  const [open, setOpen] = useGlobalOpen();

  // const handleDrawerOpen = (): void => setOpen(true);
  const handleDrawerClose = (): void => setOpen(false);

  return (
    <div className={classes.root}>
      <CustomAppBar />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {/* <ListItemLink to="/" primary="Home" icon={<HomeIcon />} /> */}
          <ListItemLink to="/home" primary="Home" icon={<HomeIcon />} />
          <ListItemLink to="/courses" primary="React Courses" icon={<AppsIcon />} />
        </List>
        <Divider />
        <List>
          <ListItemLink to="/about" primary="About" icon={<InfoIcon />} />
          <ListItemLink to="/calendar" primary="Calendar" icon={<TodayIcon />} />
          <ListItemLink to="/topics" primary="Topics" icon={<ListIcon />} />
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <RoutesContainer />
      </main>
    </div>
  );
};

export default App2;
