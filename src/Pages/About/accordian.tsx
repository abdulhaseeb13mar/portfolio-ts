import { makeStyles } from "@mui/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { Theme } from "@mui/material/styles";

import HTMLIcon from "Assets/Technologies-Icons/Html-icon.png";
import ETHIcon from "Assets/Technologies-Icons/Ethereum-logo.png";
import CSSIcon from "Assets/Technologies-Icons/Css-icon.png";
import FirebaseIcon from "Assets/Technologies-Icons/Firebase-icon.png";
import JSIcon from "Assets/Technologies-Icons/Javascript-icon.png";
import ReactIcon from "Assets/Technologies-Icons/react-icon.jpg";
import VueIcon from "Assets/Technologies-Icons/Vue-icon.png";
import ArduinoIcon from "Assets/Technologies-Icons/arduinoicon.png";
import MaterialIcon from "Assets/Technologies-Icons/materialicon.png";
import NodeJSIcon from "Assets/Technologies-Icons/nodeJsIcon.png";
import ReduxIcon from "Assets/Technologies-Icons/reduxicon.png";
import ShopifyIcon from "Assets/Technologies-Icons/shopifyicon.png";
import CIcon from "Assets/Technologies-Icons/cicon.png";
import TSIcon from "Assets/Technologies-Icons/Typescript-icon.png";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
  },
  // heading: {
  //   fontSize: theme.typography.pxToRem(15),
  //   fontWeight: theme.typography.fontWeightBold,
  // },
}));

function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            // className={classes.heading}
            sx={(theme) => ({
              fontSize: theme.typography.pxToRem(15),
              fontWeight: theme.typography.fontWeightBold,
            })}
          >
            Who I am
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            27 years old Software Engineer who graduated from NED, Now Working
            at Gizmolab to disrupt through web3.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            sx={(theme) => ({
              fontSize: theme.typography.pxToRem(15),
              fontWeight: theme.typography.fontWeightBold,
            })}
          >
            My Expertise
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="About-technologies-div">
            <img src={ReactIcon} alt="technologyIcon" />
            <img src={TSIcon} alt="technologyIcon" />
            <img src={JSIcon} alt="technologyIcon" />
            <img src={NodeJSIcon} alt="technologyIcon" />
            <img src={HTMLIcon} alt="technologyIcon" />
            <img src={CSSIcon} alt="technologyIcon" />
            <img src={ETHIcon} alt="technologyIcon" />
            <img src={MaterialIcon} alt="technologyIcon" />
            <img src={ReduxIcon} alt="technologyIcon" />
            <img src={FirebaseIcon} alt="technologyIcon" />
            <img src={CIcon} alt="technologyIcon" />
            <img src={VueIcon} alt="technologyIcon" />
            <img src={ArduinoIcon} alt="technologyIcon" />
            <img src={ShopifyIcon} alt="technologyIcon" />
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={(theme) => ({
              fontSize: theme.typography.pxToRem(15),
              fontWeight: theme.typography.fontWeightBold,
            })}
          >
            My Academic Journey
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>
                First Interaction with Programming language GW BASIC in class 8
              </li>
              <li>Choose computer science in Matriculation</li>
              <li>
                Got <span style={{ fontWeight: "bold" }}>94.5%</span> in
                Matriculation
              </li>
              <li>
                Got <span style={{ fontWeight: "bold" }}>85.45%</span> in
                Intermediate
              </li>
              <li>Choose Software Enginnering in NED Unversity in 2016</li>
              <li>Graduated as a Software Engineer in 2020</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            sx={(theme) => ({
              fontSize: theme.typography.pxToRem(15),
              fontWeight: theme.typography.fontWeightBold,
            })}
          >
            University Achievements
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li style={{ fontWeight: "bold" }}>
                Winner of the Best Final Year Project 2020 in Software
                Engineering at NED
              </li>
              <li>
                Winner of the Best C project at tech exhibition 2017 at NED
              </li>
              <li>
                Runner up in Techera startup project for Home Automation System
              </li>
              <li>
                Certificate of Excellence for exceptional performance at NED
                Academy as Web Developer
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default SimpleAccordion;
