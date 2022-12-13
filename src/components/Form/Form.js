import React, { useEffect, useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import useStyles from "./styles.js";
import { createPost, updatePost } from "../../actions/posts.js";

const Form = ({ currentId, setCurrentId }) => {

  const user = JSON.parse(localStorage.getItem('profile'));

  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const post = useSelector((state) => (currentId ? state.posts.find((p) => p._id === currentId) : null));

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(null);
    setPostData({
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId){
      dispatch(updatePost(currentId, {...postData, name: user?.result?.name}));
    }else{
      dispatch(createPost({...postData, name: user?.result?.name}));
    }
    clear();
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
          <Typography variant="h6" align="center">Please Sign in to create a post!</Typography>
      </Paper>
    )
  }
 
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a memory</Typography>
        <TextField
          name="title"
          label="Title"
          variant="outlined"
          fullWidth
          value={postData.title}
          onChange={(e) => {
            setPostData({ ...postData, title: e.target.value });
          }}
        />
        <TextField
          name="message"
          label="Message"
          variant="outlined"
          fullWidth
          value={postData.message}
          onChange={(e) => {
            setPostData({ ...postData, message: e.target.value });
          }}
        />
        <TextField
          name="tags"
          label="Tags"
          variant="outlined"
          fullWidth
          value={postData.tags}
          onChange={(e) => {
            setPostData({ ...postData, tags: e.target.value.split(",") });
          }}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>  
      </form>
      <Button
          variant="contained"
          color="secondary"
          size="small"
          type="submit"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
    </Paper>
  );
};

export default Form;
