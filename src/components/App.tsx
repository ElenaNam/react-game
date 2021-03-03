import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Field from "./Field/Field";
import Game from "./Game/Game";
import BtnGroup from "./BtnGroup/BtnGroup";
import Settings from "./Settings/Settings";
import { Typography } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    height: "95vh",
    margin: "0 auto",
    // padding: "1% 10%",
    textAlign: "center",
    //border: "1px solid",
  },
  top: {
    margin: "0 auto",
    position: "relative",
    display: "flex",
    width: "60%",
    justifyContent: "center",
    /* border: "1px solid red", */
    //margin: "0 auto",
    //padding: "1% 10%",
    //textAlign: "center",
  },
}));

export default function App(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1">tic-tac-toe</Typography>
      {/* <Field /> */}
      <div className={classes.top}>
        <BtnGroup />
        {/* <Settings /> */}
      </div>

      <Game name="123" />
    </div>
  );
}
