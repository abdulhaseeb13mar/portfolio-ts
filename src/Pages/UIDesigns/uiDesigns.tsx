import { useEffect } from "react";
import Designs from "Assets/Designs";
import { Typography } from "@mui/material";
import "./UIDesigns.scss";
import Zoom from "react-reveal/Zoom";
import { setShowHeader, setSubRoutes, setTab } from "Store/Slices/app";
import { dispatch } from "Store";

const UIDesigns: React.FC = (props) => {
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
        <Zoom right key={index}>
          <div
            className="Font-Card-div"
            onClick={
              () => {}
              // props.history.push({
              //   pathname: "/single-design",
              //   state: item,
              // })
            }
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
