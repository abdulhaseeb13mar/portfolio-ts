import { useEffect } from "react";
import Designs from "Assets/Designs";
import { Typography } from "@mui/material";
import "./UIDesigns.scss";
import { setShowHeader, setSubRoutes, setTab } from "Store/Slices/app";
import { dispatch } from "Store";
import { Zoom } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

const UIDesigns: React.FC = (props) => {
  let navigate = useNavigate();

  useEffect(() => {
    makeTrue();
  }, []);

  const makeTrue = () => {
    setTimeout(() => {
      dispatch(setShowHeader(true));
      dispatch(setTab(4));
      dispatch(setSubRoutes(true));
    }, 100);
  };

  return (
    <div className="All-Cards-Wrapper">
      {Designs.map((item, index: number) => (
        <Zoom direction="right" key={index}>
          <div
            className="Font-Card-div"
            onClick={() => {
              navigate("/single-design", { state: { item } });
            }}
          >
            <img className="Font-Card-Img" src={item.splash} alt="asd" />
            <Typography className="Font-Card-Txt" variant="h5">
              {item.name}
            </Typography>
          </div>
        </Zoom>
      ))}
    </div>
  );
};

export default UIDesigns;
