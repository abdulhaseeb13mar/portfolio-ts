import { useEffect, useState, useCallback } from "react";
import { makeStyles } from "@mui/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Skeleton,
} from "@mui/material";
import dummyMedium from "Assets/Articles/medium.png";
import axios from "axios";
import "./Articles.scss";
import { Zoom } from "react-awesome-reveal";

interface Article {
  title: string;
  date: Date;
  img: string;
  url: string;
  categories: string[];
}

const ArticleCard: React.FC = () => {
  const classes = useStyles();
  const [articlesList, setArticlesList] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  const handleArticlesResponse = useCallback((articles: any[]) => {
    let prepareArticles: Article[] = [];
    articles.forEach((article) => {
      const img = findFirstImgURL(article.content);
      prepareArticles.push({
        title: article.title,
        date: new Date(article.created),
        img: img ?? dummyMedium,
        url: article.link,
        categories: article.category,
      });
    });
    setArticlesList(prepareArticles);
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://v1.nocodeapi.com/haseeb13mar/medium/qjiKFKVYmeOHMapI",
      params: {},
    })
      .then(function (response) {
        handleArticlesResponse(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  }, [handleArticlesResponse]);

  const handlePhotosLink = (url: string) => {
    window.open(url);
  };

  function findFirstImgURL(str: string): string | null {
    const imgPattern = /<img\s+[^>]*src\s*=\s*['"]([^'"]+)['"][^>]*>/i;
    const regex = new RegExp(imgPattern);
    const match = str.match(regex);
    return match ? match[1] : null;
  }

  // Render skeleton cards if loading.
  const renderSkeletons = () => {
    // Change the number of skeleton cards as needed
    const skeletonArray = Array.from(new Array(3));
    return skeletonArray.map((_, index) => (
      <Card key={index} className={classes.root}>
        <CardActionArea>
          <Skeleton
            variant="rectangular"
            className={classes.media2}
            sx={{ height: 200 }}
          />
          <CardContent>
            <Skeleton variant="text" height={30} />
            <Skeleton variant="text" height={20} width="300px" />
          </CardContent>
        </CardActionArea>
      </Card>
    ));
  };

  return (
    <div className="article-card-container">
      {loading
        ? renderSkeletons()
        : articlesList.map((article, key) => (
            <Zoom direction="right" triggerOnce key={key}>
              <Card
                sx={{
                  bgcolor: "#424242",
                  color: "white",
                  maxWidth: 500,
                  marginBottom: 2,
                }}
                // className={classes.root}
                onClick={() => handlePhotosLink(article.url)}
              >
                <CardActionArea>
                  <CardMedia
                    className={classes.media2}
                    image={article.img}
                    title={article.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {article.title}
                    </Typography>
                    <div
                      className="r-c-fs article-categories-container"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      {article.categories.map((category, key) => (
                        <div className="article-single-category" key={key}>
                          #{category}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Zoom>
          ))}
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    backgroundColor: "#424242",
    color: "white",
    marginBottom: 20,
  },
  media: {
    height: 50,
  },
  media2: {
    height: 200,
  },
});

export default ArticleCard;
