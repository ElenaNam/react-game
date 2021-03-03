import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import { useStyles } from "./BtnGroup.style";

export default function BtnGroup(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup
        color="secondary"
        aria-label="outlined secondary button group"
      >
        <Button>New Game</Button>
        <Button>Statistic</Button>
      </ButtonGroup>
    </div>
  );
}
