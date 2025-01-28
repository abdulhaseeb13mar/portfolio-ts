import React, { useState, MouseEvent } from "react";
import { Fab, Menu, MenuItem, ListItemText } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
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
      case "insta":
        window.open("https://www.instagram.com/abdul.haxeeb50/", "_blank");
        break;
      case "fb":
        window.open(
          "https://www.facebook.com/profile.php?id=100042543474213",
          "_blank"
        );
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
        <PermContactCalendarIcon />
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
        <MenuItem onClick={() => handleNavigate("fb")}>
          <FacebookIcon
            fontSize="small"
            style={{ color: "#2d88ff", marginRight: 10 }}
          />
          <ListItemText primary="Facebook" className={classes.menuText} />
        </MenuItem>
        <MenuItem onClick={() => handleNavigate("insta")}>
          <InstagramIcon
            fontSize="small"
            style={{ color: "#cf2872", marginRight: 10 }}
          />
          <ListItemText primary="Instagram" className={classes.menuText} />
        </MenuItem>
      </Menu>
    </>
  );
};

export default FabComp;
