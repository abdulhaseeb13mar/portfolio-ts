import React, { useState, useEffect } from "react";
import ProjectCard from "./projectCard";
import ProjectsData from "./ProjectsData";
import DialogComp from "./dialog";
import Zoom from "react-reveal/Zoom";
import "./Projects.scss";
import { setShowHeader, setSubRoutes, setTab } from "Store/Slices/app";
import { dispatch } from "Store";

const Projects: React.FC = () => {
  useEffect(() => {
    makeTrue();
  }, []);

  const [dialogPhotos, setDialogPhotos] = useState<string[]>([]);
  const [dialog, setDialog] = useState<boolean>(false);

  const openDialog = (photos: string[]) => {
    setDialogPhotos(photos);
    setDialog(true);
  };

  const handleDialogClose = () => {
    setDialog(false);
    setDialogPhotos([]);
  };

  const makeTrue = () => {
    setTimeout(() => {
      dispatch(setShowHeader(true));
      dispatch(setTab(2));
      dispatch(setSubRoutes(true));
    }, 100);
  };

  return (
    <>
      <div className="Projects-main-wrapper">
        {ProjectsData.map((project) => (
          <Zoom right key={project.name}>
            <ProjectCard project={project} openDialog={openDialog} />
          </Zoom>
        ))}
      </div>
      <DialogComp
        open={dialog}
        dialogPhotos={dialogPhotos}
        close={handleDialogClose}
      />
    </>
  );
};

export default Projects;
