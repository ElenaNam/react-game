import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Field from "./Field/Field";
import Game from "./Game/Game";

export const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    width: "100%",
    height: "95vh",
    margin: "0 auto",
    padding: "1% 10%",
    textAlign: "center",
  },
}));

export default function App(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <Field /> */}
      <Game name="123" />
    </div>
  );
}
