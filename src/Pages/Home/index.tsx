import React, { useState, useEffect } from "react";
import { Grid2 as Grid, Avatar, Typography } from "@mui/material";
import HomeSummary from "./homeSummary";
import ME from "Assets/me.png";
import "./Home.scss";
import { dispatch, useSelector } from "Store";
import { setShowHeader } from "Store/Slices/app";
import { Fade } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";

const Home: React.FC = () => {
  // useEffect(() => {
  //   makeTrue();
  // }, []);

  // const [showStarter, setShowStarter] = useState(false);
  const showHeader = useSelector((state) => state.app.showHeader);

  // const makeTrue = () => {
  //   setTimeout(() => {
  //     setShowStarter(true);
  //   }, 200);
  // };

  const handleToggleShow = () => {
    // setShowStarter(false);
    dispatch(setShowHeader(true));
    setTimeout(() => {
      (
        document.getElementsByClassName("home-centered-div")[0] as HTMLElement
      ).style.display = "none";
      (
        document.getElementsByClassName("home-MySummary-div")[0] as HTMLElement
      ).style.display = "flex";
    }, 300);
  };

  return (
    <>
      <Grid
        className="main-home-wrapper"
        container
        style={{ opacity: showHeader ? 0.7 : 1 }}
      ></Grid>
      <Fade
        direction="left"
        //  when={showHeader}
        // collapse
      >
        <HomeSummary />
      </Fade>
      <Zoom
        direction="right"
        cascade
        delay={200}
        // when={showStarter}
        //  collapse
      >
        <div className="home-centered-div" onClick={handleToggleShow}>
          <Avatar
            alt="Me"
            src={ME}
            sx={(theme) => ({
              width: theme.spacing(30),
              height: theme.spacing(30),
              boxShadow: "0px 0px 18px 8px black",
              transition: "0.2s ease-in-out",
              cursor: "pointer",
              "&:hover": {
                width: theme.spacing(35),
                height: theme.spacing(35),
              },
            })}
          />

          <Typography variant="h3" className="home-text1">
            Hey! I am <br /> Abdul Haseeb
          </Typography>
        </div>
      </Zoom>
    </>
  );
};

export default Home;
