import React from "react";
import { Typography, Avatar, Button } from "@mui/material";
import ME from "Assets/me.png";
import "./Home.scss";
import { dispatch } from "Store";
import { setSubRoutes, setTab } from "Store/Slices/app";
import { useNavigate } from "react-router-dom";

const HomeSummary: React.FC = () => {
  let navigate = useNavigate();

  const goToPage = (link: string, tab: number) => {
    dispatch(setTab(tab));
    dispatch(setSubRoutes(true));
    navigate(link);
  };

  return (
    <div className="home-MySummary-wrapper">
      <div className="home-MySummary-div">
        <div className="MySummary-avatar-div">
          <Avatar
            alt="Me"
            src={ME}
            sx={(theme) => ({
              width: theme.spacing(15),
              height: theme.spacing(15),
              boxShadow: "0px 0px 4px 4px rgb(0,0,0,0.5)",
            })}
          />
        </div>
        <div className="MySummary-summary-div">
          <div className="MySummary-summary-heading">
            <Typography variant="h4">I AM A SOFTWARE ENGINEER</Typography>
          </div>
          <div className="MySummary-summary-details">
            <Typography variant="subtitle1">
              Graduated from NED University of Engineering and Technology.{" "}
              <br />
              Now working as a Web3 Engineer at Xord. <br />
              Started my career with keen interest in the web development and
              front end. <br />
              My Expertise lies in React and Blockchain. <br />
            </Typography>
            <div className="home-MySummary-btns-div">
              <Button
                variant="contained"
                color="secondary"
                className="home-MySummary-btns-knowMe"
                onClick={() => goToPage("./about", 1)}
              >
                Know me more
              </Button>
              <Button
                variant="contained"
                className="home-MySummary-btns-projects"
                onClick={() => goToPage("./projects", 2)}
              >
                My Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSummary;
