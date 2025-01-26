import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { GitHub, Tv, PhotoLibrary } from "@mui/icons-material";
import { Project } from "./ProjectsData";

interface ProjectCardProps {
  project: Project;
  openDialog: (photos: string[]) => void;
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: "#424242",
    color: "white",
  },
  media: {
    height: 140,
  },
});

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const classes = useStyles();
  const { project } = props;

  const handleGithubLink = () => {
    if (typeof project.github === "string") {
      window.open(project.github);
    }
  };

  const handleDemoLink = () => {
    if (typeof project.demo === "string") {
      window.open(project.demo);
    }
  };

  const handlePhotosLink = () => {
    props.openDialog(project.photos);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <Card className={classes.root} onClick={handlePhotosLink}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={project.cardPhoto}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {project.name}
            </Typography>
            <Typography variant="body2" gutterBottom component="p">
              {project.description}
            </Typography>
            <div>
              {Object.keys(project.technologies).map((tech) => (
                <img
                  key={tech}
                  aria-label={tech}
                  src={project.technologies[tech]}
                  alt="logo"
                  style={{ width: 20, marginLeft: 5, marginRight: 5 }}
                />
              ))}
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {project.github && (
            <Button size="small" color="secondary" onClick={handleGithubLink}>
              <GitHub style={{ color: "black" }} />
            </Button>
          )}
          {project.demo && (
            <Button size="small" onClick={handleDemoLink}>
              <Tv style={{ color: "white" }} />
            </Button>
          )}
          {project.photos && (
            <Button size="small" onClick={handlePhotosLink}>
              <PhotoLibrary color="secondary" />
            </Button>
          )}
        </CardActions>
      </Card>
    </div>
  );
};

export default ProjectCard;
