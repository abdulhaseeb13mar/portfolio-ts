import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import Zoom from "react-reveal/Zoom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import dummyMedium from "../../assets/Articles/medium.png";
import axios from "axios";
import "./Articles.scss";

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

  useEffect(() => {
    axios({
      method: "get",
      url: "https://v1.nocodeapi.com/haseeb13mar/medium/qjiKFKVYmeOHMapI",
      params: {},
    })
      .then(function (response) {
        handleArticlesResponse(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleArticlesResponse = (articles: any[]) => {
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
  };

  const handlePhotosLink = (url: string) => {
    window.open(url);
  };

  function findFirstImgURL(str: string): string | null {
    const imgPattern = /<img\s+[^>]*src\s*=\s*['"]([^'"]+)['"][^>]*>/i;
    const regex = new RegExp(imgPattern);
    const match = str.match(regex);
    return match ? match[1] : null;
  }

  return (
    <div className="article-card-container">
      {articlesList.map((article, key) => {
        return (
          <Zoom right key={key}>
            <Card
              className={classes.root}
              onClick={() => handlePhotosLink(article.url)}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media2}
                  image={article.img}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {article.title}
                  </Typography>
                  <div className="r-c-fs article-categories-container">
                    {article.categories.map((category, key) => {
                      return (
                        <div className="article-single-category" key={key}>
                          #{category}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </Zoom>
        );
      })}
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
