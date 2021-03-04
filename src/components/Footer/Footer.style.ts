import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      top: "auto",
      bottom: 0,
      backgroundColor: theme.palette.background.default,
      margin: "0 auto",
      justifyContent: "center",
    },
    nav: {
      width: "100%",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
    },
  })
);
