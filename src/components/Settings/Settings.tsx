import React from "react";
import Accord from "../Accord/Accord";
import { useStyles } from "./Settings.style";

export default function Settings(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Accord />
    </div>
  );
}
