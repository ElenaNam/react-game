import React from "react";
import Button from "@material-ui/core/Button";

//import { useStyles } from "./Btn.style";

export default function BtnGroup(props: {
  handleClick: () => void;
  name: string;
}): JSX.Element {
  //const classes = useStyles();
  const { handleClick, name } = props;
  return (
    <Button onClick={handleClick} color="secondary" variant="outlined">
      {name}
    </Button>
  );
}
