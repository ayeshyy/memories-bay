import React, { useEffect, useState } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import useStyles from "./styles.js";
import Posts from "../Posts/Posts.js";
import Form from "../Form/Form.js";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts.js";

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currId, setCurrId] = useState(0);

  useEffect(() => {
    dispatch(getPosts());
  }, [currId, dispatch]);
  
  return (
    <Grow in>
      <Container>
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing="3"
          className={classes.mainContainer}
        >
          <Grid item xl={12} sm={7}>
            <Posts setCurrentId={setCurrId} />
          </Grid>
          <Grid item xl={12} sm={4}>
            <Form currentId={currId} setCurrentId={setCurrId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
