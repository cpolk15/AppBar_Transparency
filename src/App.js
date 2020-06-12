import React from "react";
import "./styles.css";
import {
  Container,
  makeStyles,
  AppBar,
  Typography,
  Box
} from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    color: "white",
    background: "black",
    height: "100vh",
    width: "100vw",
    top: 0,
    left: 0,
    position: "absolute"
  },
  appBar: {
    backgroundColor: "rgba(255, 255, 255, .5)",
    height: 100,
    top: 0
  },
  title: {
    color: "black"
  },
  content: {
    position: "relative",
    top: 100
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.appBar} elevation={0}>
        <Typography className={classes.title} variant="h3" align="center">
          Hello from the AppBar!
        </Typography>
      </AppBar>
      <Container className={classes.container}>
        <Box className={classes.content}>
          <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
          </div>
        </Box>
      </Container>
    </>
  );
}
