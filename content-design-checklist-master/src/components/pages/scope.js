import React from "react";
import Typography from "@material-ui/core/Typography";
import MediaCard from "../categoryCard";
import Grid from "@material-ui/core/Grid";
import {scopeData} from '../data/categoryData'

export default function Scope() {
    return(
        <Grid
          container
          spacing={4}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Typography variant="h5">Scope</Typography>
          <MediaCard {...scopeData}/>
        </Grid>
    )
}