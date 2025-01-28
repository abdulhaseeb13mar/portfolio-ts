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
import MenuIcon from "@mui/icons-material/Menu";
import { dispatch, useSelector } from "Store";
import { setSubRoutes, setTab } from "Store/Slices/app";
import { useNavigate } from "react-router-dom";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const MediaQueryMatches = useMediaQuery("(max-width:640px)");
  const tab = useSelector((state) => state.app.tab);
  const subRoutes = useSelector((state) => state.app.subRoutes);
  let navigate = useNavigate();

  const handleTabsChange = (val: number, link: string, type?: string) => {
    dispatch(setTab(val));
    dispatch(setSubRoutes(val === 0 ? false : true));
    navigate(link);
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
        sx={{
          boxShadow: !subRoutes ? "none" : undefined,
          backgroundColor: subRoutes ? "#424242" : undefined,
          transition: "0.3s ease-in-out",
          color: "white",
          // color: subRoutes ? "white" : undefined,
        }}
      >
        {MediaQueryMatches ? (
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleToggleDrawer}
              sx={(theme) => ({ marginRight: theme.spacing(2) })}
            >
              <MenuIcon style={{ color: "white" }} />
            </IconButton>
          </Toolbar>
        ) : (
          <Tabs
            value={tab}
            indicatorColor="secondary"
            TabIndicatorProps={{
              sx: {
                height: "3px",
              },
            }}
          >
            <Tab
              label="Home"
              sx={(theme) => ({
                color: subRoutes ? "white" : undefined,
                fontWeight: 600,
                "&.Mui-selected": { color: theme.palette.secondary.main },
              })}
              onClick={() => handleTabsChange(0, "/")}
            />
            <Tab
              label="About Me"
              onClick={() => handleTabsChange(1, "/about")}
              sx={(theme) => ({
                color: subRoutes ? "white" : undefined,
                fontWeight: 600,
                "&.Mui-selected": { color: theme.palette.secondary.main },
              })}
            />
            <Tab
              label="Projects"
              onClick={() => handleTabsChange(2, "/projects")}
              sx={(theme) => ({
                color: subRoutes ? "white" : undefined,
                fontWeight: 600,
                "&.Mui-selected": { color: theme.palette.secondary.main },
              })}
            />
            <Tab
              label="My Articles"
              onClick={() => handleTabsChange(3, "/articles")}
              sx={(theme) => ({
                color: subRoutes ? "white" : undefined,
                fontWeight: 600,
                "&.Mui-selected": { color: theme.palette.secondary.main },
              })}
            />
            <Tab
              label="React Native Designs"
              onClick={() => handleTabsChange(4, "/ui-designs")}
              sx={(theme) => ({
                color: subRoutes ? "white" : undefined,
                fontWeight: 600,
                "&.Mui-selected": { color: theme.palette.secondary.main },
              })}
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
