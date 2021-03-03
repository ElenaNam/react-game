import React from "react";

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { useStyles } from "./Accord.style";

export default function Accord(): JSX.Element {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (
    // eslint-disable-next-line @typescript-eslint/ban-types
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Settings</Typography>
          <Typography className={classes.secondaryHeading}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Настройки</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
