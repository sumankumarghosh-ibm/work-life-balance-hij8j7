import React from "react";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

function Legend({ classes, data }) {
  return (
    <ol className={classes.legend}>
      {data.map(({ name, color }, i) => {
        return (
          <li key={i}>
            <div className={classes.marker} style={{ backgroundColor: color }} />
            <div style={{ color: "#919EAB" }}>{name}</div>
          </li>
        );
      })}
    </ol>
  );
}

const styles = theme => ({
  legend: {
    padding: 0,
    width: "fit-content",
    margin: "0 2px",
    "& li": {
      display: "inline-flex",
      listStyle: "none",
      alignItems: "center",
      marginRight: theme.spacing.unit * 2,
      lineHeight: 1,
      fontSize: 12,
      fontWeight: 500
    }
  },
  marker: {
    flexShrink: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: theme.spacing.unit
  }
});

export default withStyles(styles)(Legend);
