import React from "react";
import { Carousel } from "react-responsive-carousel";
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Slide,
  Theme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Close } from "@mui/icons-material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Projects.scss";

interface DialogCompProps {
  open: boolean;
  close: () => void;
  dialogPhotos?: string[];
}

const DialogComp: React.FC<DialogCompProps> = (props) => {
  const classes = useStyles();

  const handleClose = () => {
    props.close();
  };

  return (
    <>
      <Dialog
        fullScreen
        open={props.open}
        onClose={handleClose}
        slotProps={{ paper: { style: { backgroundColor: "#212121" } } }}
        slots={{ transition: Transition }}
      >
        <AppBar color="secondary" className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <Close />
            </IconButton>
            {/* <Typography>Family Wins Web App</Typography> */}
          </Toolbar>
        </AppBar>
        {props.dialogPhotos && (
          <Carousel showThumbs={false} showArrows={true}>
            {props.dialogPhotos.map((photo, index) => (
              <div key={index}>
                <img src={photo} alt="img" className="dialog-image-carousal" />
              </div>
            ))}
          </Carousel>
        )}
      </Dialog>
    </>
  );
};

const Transition = React.forwardRef(function Transition(props: any, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

export default DialogComp;
