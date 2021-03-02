import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "95vh",
    margin: "0 auto",
    padding: "1% 10%",
    textAlign: "center",
  },
}));

export default function App(): JSX.Element {
  const classes = useStyles();
  return <div className={classes.root}>123</div>;
}
