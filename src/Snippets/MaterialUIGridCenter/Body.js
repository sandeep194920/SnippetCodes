import { Grid } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Content from './Content'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'black',
    height: '100vh',
  },
  paper: {
    padding: theme.spacing(2),
    color: 'white',
    background: 'orangered',
    border: '1px solid white',
  },
}))

function Body() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1} sm={2} />
        <Grid item xs={10} sm={8}>
          <Content />
        </Grid>
        <Grid item xs={1} sm={2} />
      </Grid>
    </div>
  )
}

export default Body
