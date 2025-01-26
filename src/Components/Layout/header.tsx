import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Tabs,
  Tab,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { dispatch, useSelector } from "Store";
import { setSubRoutes, setTab } from "Store/Slices/app";

const useStyles = makeStyles((theme: Theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  tabindicator: {
    height: "3px",
  },
}));

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const MediaQueryMatches = useMediaQuery("(max-width:640px)");
  const tab = useSelector((state) => state.app.tab);
  const subRoutes = useSelector((state) => state.app.subRoutes);
  const classes = useStyles();

  const handleTabsChange = (val: number, link: string, type?: string) => {
    dispatch(setTab(val));
    dispatch(setSubRoutes(val === 0 ? false : true));

    // props.history.push(link);
    type && handleToggleDrawer();
  };

  const handleToggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="home-headerbar">
      <AppBar
        position="static"
        color="transparent"
        style={{
          boxShadow: !subRoutes ? "none" : undefined,
          backgroundColor: subRoutes ? "#424242" : undefined,
          transition: "0.3s ease-in-out",
          color: subRoutes ? "white" : undefined,
        }}
      >
        {MediaQueryMatches ? (
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleToggleDrawer}
            >
              <MenuIcon style={{ color: "white" }} />
            </IconButton>
          </Toolbar>
        ) : (
          <Tabs
            value={tab}
            classes={{ indicator: classes.tabindicator }}
            TabIndicatorProps={{}}
          >
            <Tab label="Home" onClick={() => handleTabsChange(0, "/")} />
            <Tab
              label="About Me"
              onClick={() => handleTabsChange(1, "/about")}
            />
            <Tab
              label="Projects"
              onClick={() => handleTabsChange(2, "/projects")}
            />
            <Tab
              label="My Articles"
              onClick={() => handleTabsChange(3, "/articles")}
            />
            <Tab
              label="React Native Designs"
              onClick={() => handleTabsChange(4, "/ui-designs")}
            />
          </Tabs>
        )}
      </AppBar>
      <Drawer anchor="top" open={drawerOpen} onClose={handleToggleDrawer}>
        <List>
          <ListItem>
            <ListItemText onClick={() => handleTabsChange(0, "/", "d")}>
              Home
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText onClick={() => handleTabsChange(1, "/about", "d")}>
              About Me
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText onClick={() => handleTabsChange(2, "/projects", "d")}>
              Projects
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText onClick={() => handleTabsChange(3, "/articles", "d")}>
              My Articles
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText
              onClick={() => handleTabsChange(4, "/ui-designs", "d")}
            >
              React Native Designs
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default Header;
