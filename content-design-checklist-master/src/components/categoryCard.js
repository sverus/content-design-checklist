import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 20,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({title, summary, link}) {

  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        <Link to={link}>
        <CardMedia
          className={classes.media}
          image=""
          title=""
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {summary} 
          </Typography>
        </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
      <Link to ={link}>
        <Button size="small" color="primary">
          Learn More
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}