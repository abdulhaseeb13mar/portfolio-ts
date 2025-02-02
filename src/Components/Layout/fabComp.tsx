import React, { useState, MouseEvent } from "react";
import { Fab, Menu, MenuItem, ListItemText } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PeopleIcon from "@mui/icons-material/People";
import InstagramIcon from "@mui/icons-material/X";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  menuText: {
    color: "white",
  },
});

const FabComp: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const classes = useStyles();

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (link: string) => {
    switch (link) {
      case "git":
        window.open("https://github.com/abdulhaseeb13mar", "_blank");
        break;
      case "link":
        window.open("https://www.linkedin.com/in/AbdulHaseebSE050", "_blank");
        break;
      case "x":
        window.open("https://x.com/haseeb_xrd", "_blank");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Fab
        color="secondary"
        aria-label="add"
        onClick={handleClick}
        sx={{ position: "fixed", bottom: 30, right: 30 }}
      >
        <PeopleIcon />
      </Fab>
      <Menu
        // classes={{ paper: classes.menuPaper }}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{}}
        slotProps={{ paper: { sx: { bgcolor: "#424242" } } }}
      >
        <MenuItem onClick={() => handleNavigate("git")}>
          <GitHubIcon
            fontSize="small"
            style={{ color: "black", marginRight: 10 }}
          />
          <ListItemText primary="Github" className={classes.menuText} />
        </MenuItem>
        <MenuItem onClick={() => handleNavigate("link")}>
          <LinkedInIcon
            fontSize="small"
            style={{ color: "#0077b7", marginRight: 10 }}
          />
          <ListItemText primary="LinkedIn" className={classes.menuText} />
        </MenuItem>
        <MenuItem onClick={() => handleNavigate("x")}>
          <InstagramIcon fontSize="small" style={{ marginRight: 10 }} />
          <ListItemText primary="X" className={classes.menuText} />
        </MenuItem>
      </Menu>
    </>
  );
};

export default FabComp;
