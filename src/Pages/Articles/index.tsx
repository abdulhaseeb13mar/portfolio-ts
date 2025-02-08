import { useEffect } from "react";
import ArticleCard from "./articleCard";
import { dispatch } from "Store";
import { setShowHeader, setSubRoutes, setTab } from "Store/Slices/app";
import "./Articles.scss";
import { Zoom } from "react-awesome-reveal";

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
    <div className="Projects-main-wrapper">
      <ArticleCard />
    </div>
  );
};

export default Articles;
