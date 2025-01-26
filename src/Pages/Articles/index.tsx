import { useEffect } from "react";
import { Grid2 } from "@mui/material";
import Zoom from "react-reveal/Zoom";
import ArticleCard from "./articleCard";
import { dispatch } from "Store";
import { setShowHeader, setSubRoutes, setTab } from "Store/Slices/app";
import "./Articles.scss";

const Articles: React.FC = () => {
  useEffect(() => {
    makeTrue();
  }, []);

  const makeTrue = () => {
    setTimeout(() => {
      dispatch(setShowHeader(true));
      dispatch(setTab(3));
      dispatch(setSubRoutes(true));
    }, 100);
  };

  return (
    <Grid2 container className="Articles-main-wrapper">
      <Grid2 size={{ xs: 12 }} className="Articles-Grid">
        <Zoom right>
          <ArticleCard />
        </Zoom>
      </Grid2>
    </Grid2>
  );
};

export default Articles;
