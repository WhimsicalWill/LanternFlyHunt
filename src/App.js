import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { IconButton, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCameraRoundedIcon from "@material-ui/icons/PhotoCameraRounded";
import GeoLocation from "./components/GeoLocation.jsx"
import ImageSender from "./components/ImageSender.jsx"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    textAlign: 'center',
  },
  imgBox: {
    maxWidth: "80%",
    maxHeight: "80%",
    margin: "10px"
  },
  img: {
    height: "inherit",
    maxWidth: "inherit",
  },
  input: {
    display: "none"
  }
}));


function App() {
  const classes = useStyles();

  const [source, setSource] = useState("");

  const handleCapture = (target) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        console.log(newUrl)
        setSource(newUrl);
      }
    }
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <h5>Capture your image</h5>
          <input
            accept="image/*;capture=camera"
            className={classes.input}
            id="icon-button-file"
            type="file"
            capture="environment"
            onChange={(e) => handleCapture(e.target)}
          />
          <label htmlFor="icon-button-file">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCameraRoundedIcon fontSize="large" color="primary" />
            </IconButton>
          </label>
          <Button variant="contained" href="https://www.google.com/maps/d/u/0/viewer?mid=1LP1-DPYjMNkZsANlaYqVpJSLVz9hH8o&ll=40.00000000000003%2C-79.99999999999999&z=17">
            View Map
          </Button>
          <GeoLocation />
        </Grid>
      </Grid>
    </div>
  );
}


export default App;