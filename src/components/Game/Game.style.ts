import CSS from "csstype";

export const root: CSS.Properties = {
  margin: "0 auto",
  display: "flex",
  maxWidth: "600px",
  maxHeight: "600px",
  minHeight: "300px",
  minWidth: "300px",
  width: "100%",
  height: "100%",
  flexWrap: "wrap",
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
};

export const cell: CSS.Properties = {
  margin: "0 auto",
  display: "flex",
  width: "100%",
  height: "100%",
  maxWidth: "200px",
  maxHeight: "200px",
  border: "1px solid",

  textAlign: "center",
  verticalAlign: "middle",
};

export const text: CSS.Properties = {
  fontSize: "125px",
  color: "wheat",
  display: "flex",
  margin: "0 auto",
  justifyContent: "center",
  alignItems: "center",
};
