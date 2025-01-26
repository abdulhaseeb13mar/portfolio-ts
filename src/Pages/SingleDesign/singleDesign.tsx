import React, { useState, useEffect, useMemo } from "react";
import { Grid2 as Grid, Typography, useMediaQuery } from "@mui/material";
import Zoom from "react-reveal/Zoom";
import "./singleDesign.scss";
import { Carousel } from "react-responsive-carousel";
import DialogComp from "Pages/Projects/dialog";
import { setShowHeader, setSubRoutes, setTab } from "Store/Slices/app";
import { dispatch } from "Store";

interface SingleDesignProps {
  history: {
    location: {
      state: {
        images: string[];
        name: string;
        embed: string;
      };
    };
  };
}

const SingleDesign: React.FC<SingleDesignProps> = (props) => {
  useEffect(() => {
    makeTrue();
  }, []);

  const [dialogPhotos, setDialogPhotos] = useState<string[]>([]);
  const [dialog, setDialog] = useState(false);
  const images = useMemo(
    () => props.history.location.state.images,
    [props.history.location.state.images]
  );
  const MediaQueryMatches = useMediaQuery("(max-width:640px)");

  const handleDialogClose = () => {
    setDialog(false);
    setDialogPhotos([]);
  };

  const makeTrue = () => {
    setTimeout(() => {
      dispatch(setShowHeader(true));
      dispatch(setTab(3));
      dispatch(setSubRoutes(true));
    }, 100);
  };

  const openDialog = (photo: string) => {
    setDialogPhotos([photo]);
    setDialog(true);
  };

  return (
    <>
      <Grid
        container
        alignItems="stretch"
        justifyContent="space-evenly"
        className="singleDesign-Wrapper"
        style={{ marginTop: 20 }}
      >
        <Grid size={{ xs: 12, sm: 6 }} className="singleDesign-left-Grid">
          <Zoom top>
            <div className="singleDesign-Image-Div">
              <div className="circles">
                <div className="circle-1"></div>
                <div className="circle-2"></div>
              </div>
              <Carousel
                showThumbs={false}
                showArrows={true}
                interval={3000}
                infiniteLoop
                stopOnHover
                showStatus={false}
              >
                {images.map((photo, index) => (
                  <img
                    key={index}
                    id="singleDesign-Image-Id"
                    src={photo}
                    alt="me"
                    style={{ width: MediaQueryMatches ? "50%" : "36%" }}
                  />
                ))}
              </Carousel>
            </div>
          </Zoom>
        </Grid>
        <Grid size={{ xs: 12, sm: 5 }} className="singleDesign-Right-Grid">
          <Typography variant="h4" className="singleDesign-TitleText">
            {props.history.location.state.name}
          </Typography>
          <div className="singleDesign-MoreSS-Wrapper">
            {images.map((item, index) => (
              <div
                onClick={() => openDialog(item)}
                key={index}
                className="singleDesign-MoreSS-image"
                style={{
                  backgroundImage: `url(${item})`,
                  width: "21%",
                  height: 270,
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  filter: "drop-shadow(5px 4px 3px black)",
                  margin: "0px 10px",
                  minWidth: "118px",
                }}
              />
            ))}
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        justifyContent={"center"}
        justifyItems={"center"}
      >
        <div
          style={{
            width: "80%",
            height: "70vh",
            paddingBottom: 20,
            paddingTop: 40,
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src={props.history.location.state.embed}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Grid>
      <DialogComp
        open={dialog}
        dialogPhotos={dialogPhotos}
        close={handleDialogClose}
      />
    </>
  );
};

export default SingleDesign;
