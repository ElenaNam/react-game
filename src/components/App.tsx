import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Canvas from "./Canvas/Canvas";

export const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100vh",
    margin: "0 auto",
    border: "2px solid blue",
    padding: "5% 15%",
  },
}));

export default function App(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Canvas />
    </div>
  );
}
