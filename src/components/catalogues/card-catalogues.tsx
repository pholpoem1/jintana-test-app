import {
  Box,
  Card,
  CardActions,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useCallback, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { articlesListState, selectedMenu, textState } from "src/recoil/atom";
import { IArticleState } from "src/recoil/interfaces";
import { filterListState, searchArticle } from "src/recoil/state";

const CardCatalogues = () => {
  const article = useRecoilValue(filterListState);
  const selected = useRecoilValue(selectedMenu);
  const searchResult = useRecoilValue(searchArticle);
  const text = useRecoilValue(textState);
  const setArticle = useSetRecoilState(articlesListState);

  let display = article;
  if (text) {
    display = searchResult;
  }

  const getData = useCallback(() => {
    axios
      .get("/json/data.json")
      .then(function (response) {
        // handle success
        const data = response.data;
        setArticle(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [setArticle]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Box width={"100%"}>
      <Typography
        variant="h4"
        textAlign={"start"}
        marginBottom={4}
        style={{ textTransform: "uppercase" }}
      >
        {text ? text : selected} ({display.length})
      </Typography>
      <Grid container>
        {display.length > 0 &&
          display.map((item: IArticleState, index: number) => {
            return (
              <Grid item xs={12} sm={4} md={3} lg={3} xl={3} key={index}>
                <Card
                  sx={{
                    maxWidth: 345,
                    height: 350,
                    // maxHeight: 400,
                    margin: 2,
                    padding: 2,
                  }}
                >
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {item.title}
                  </Typography>
                  <CardMedia
                    component="img"
                    alt={item.title}
                    height="140"
                    image={item.image}
                  />
                  {/* <CardContent style={{ textAli gn: "start" ,dis}}> */}
                  <Box>
                    <Typography textAlign={"start"} variant="body2">
                      {item.description}
                    </Typography>
                  </Box>
                  {/* </CardContent> */}
                  <CardActions>
                    <Typography textAlign={"start"} variant="caption">
                      {item.updated}
                    </Typography>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};

export default CardCatalogues;
