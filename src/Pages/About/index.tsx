import { useEffect } from "react";
import { Grid2 } from "@mui/material";
import MeInFrame from "Assets/Aboutus/MeInFrame.png";
import Accordian from "./accordian";
import MyName from "Assets/Aboutus/name.png";
import "./About.scss";
import { dispatch } from "Store";
import { setShowHeader, setSubRoutes, setTab } from "Store/Slices/app";
import { Zoom } from "react-awesome-reveal";

const About: React.FC = () => {
  useEffect(() => {
    makeTrue();
  }, []);

  const makeTrue = () => {
    setTimeout(() => {
      dispatch(setShowHeader(true));
      dispatch(setTab(1));
      dispatch(setSubRoutes(true));
    }, 100);
  };

  return (
    <Grid2 container className="</Grid>AboutMe-Wrapper">
      <Grid2 size={{ xs: 12, sm: 6 }} className="About-left-Grid">
        <Zoom direction="right">
          <div className="About-Image-Div">
            <img src={MeInFrame} alt="me" />
          </div>
        </Zoom>
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 5 }} className="About-Right-Grid">
        <Zoom direction="right">
          <div>
            <img src={MyName} alt="name" className="About-Myname" />
          </div>
          <Accordian />
        </Zoom>
      </Grid2>
    </Grid2>
  );
};

export default About;
