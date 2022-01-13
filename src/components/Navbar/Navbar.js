import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { Link } from "react-router-dom";
import "../../App.css"
const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    zIndex: 100,
    backgroundColor:"black"
  },
});
export default function LabelBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation value={value} onChange={(event,newValue)=>
    {
        setValue(newValue)
    }}
    showLabels
      className={classes.root}
>
<BottomNavigationAction
        style={{ color: "red"}}
        label="Trending"
        icon={<WhatshotIcon />}
        component={Link}
        to="/"
      />
  <BottomNavigationAction
        style={{ color: "red" }}
        label="Movies"
        icon={<MovieIcon />}
        component={Link}
        to="/movies"
      />
      <BottomNavigationAction
        style={{ color: "red" }}
        label="Tv Series"
        icon={<TvIcon />}
        component={Link}
        to="/series"
      />
      <BottomNavigationAction
        style={{ color: "red"}}
        label="Search"
        icon={<SearchIcon />}
        component={Link}
        to="/search"
      />
    </BottomNavigation>
  );
}