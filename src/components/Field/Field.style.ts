import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    maxWidth: 500,
    maxHeight: 500,
    minHeight: 200,
    minWidth: 200,
    width: "100%",
    height: "100%",
    margin: "0 auto",
    backgroundColor: "coral",
  },
}));
