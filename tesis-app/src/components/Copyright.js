import React from "react";
import Typography from "@material-ui/core/Typography";
export function Copyright() {
  return (<Typography variant="body2" color="textSecondary" align="center">
    {"Copyright © "}
    <span>URBE</span> {new Date().getFullYear()}
    {"."}
  </Typography>);
}
