import React from "react";
import Game from "../Game/Game";
import { useStyles } from "./Field.style";

export default function Field(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Game name="123" />
    </div>
  );
}
